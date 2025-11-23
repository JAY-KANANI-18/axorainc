import type { NextApiRequest, NextApiResponse } from "next";

const PROD_SITEMAP = "https://axorainfotech.com/sitemap.xml";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET" && req.method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const sitemapUrl = PROD_SITEMAP;

  try {
    const ac = new AbortController();
    const timeout = setTimeout(() => ac.abort(), 7000);

    const googleUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(
      sitemapUrl
    )}`;
    const bingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(
      sitemapUrl
    )}`;

    const [googleResp, bingResp] = await Promise.all([
      fetch(googleUrl, { signal: ac.signal }),
      fetch(bingUrl, { signal: ac.signal }),
    ]);

    clearTimeout(timeout);

    return res.status(200).json({
      ok: true,
      sitemap: sitemapUrl,
      google: { ok: googleResp.ok, status: googleResp.status },
      bing: { ok: bingResp.ok, status: bingResp.status },
    });
  } catch (err: any) {
    return res.status(500).json({ ok: false, error: err?.message || String(err) });
  }
}
