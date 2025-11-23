import type { NextApiRequest, NextApiResponse } from "next";

const PROD_SITEMAP = "https://axorainfotech.com/sitemap.xml";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const secret = process.env.PUBLISH_WEBHOOK_SECRET;
  const provided = (req.headers["x-webhook-secret"] as string) || (req.query.secret as string);
  if (secret && provided !== secret) {
    return res.status(401).json({ ok: false, error: "Unauthorized" });
  }

  const results: Record<string, any> = {};

  // 1) Ping Google & Bing
  try {
    const ac = new AbortController();
    const timeout = setTimeout(() => ac.abort(), 7000);

    const googleUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(
      PROD_SITEMAP
    )}`;
    const bingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(
      PROD_SITEMAP
    )}`;

    const [googleResp, bingResp] = await Promise.all([
      fetch(googleUrl, { signal: ac.signal }),
      fetch(bingUrl, { signal: ac.signal }),
    ]);

    clearTimeout(timeout);
    results.ping = {
      sitemap: PROD_SITEMAP,
      google: { ok: googleResp.ok, status: googleResp.status },
      bing: { ok: bingResp.ok, status: bingResp.status },
    };
  } catch (err: any) {
    results.ping = { ok: false, error: err?.message || String(err) };
  }

  // 2) Optional: Trigger Vercel Deploy Hook
  const deployHook = process.env.VERCEL_DEPLOY_HOOK_URL;
  if (deployHook) {
    try {
      const resp = await fetch(deployHook, { method: "POST" });
      results.deploy = { ok: resp.ok, status: resp.status };
    } catch (e: any) {
      results.deploy = { ok: false, error: e?.message || String(e) };
    }
  }

  return res.status(200).json({ ok: true, ...results });
}
