import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const { blogPosts } = await import("../data/blogPosts");

  const baseUrl = "https://axorainfotech.com";

  const toAbsoluteUrl = (path?: string): string | null => {
    if (!path) return null;
    if (/^https?:\/\//i.test(path)) return path;
    return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
  };

  const imageRegex = /https?:\/\/[^\s\"]+\.(?:png|jpe?g|webp|gif|svg)/gi;

  const urlEntries = blogPosts.map((post) => {
    const loc = `${baseUrl}/blog/${post.slug}`;
    const images = new Set<string>();

    const og = toAbsoluteUrl(post.ogImage) || toAbsoluteUrl(post.image);
    if (og) images.add(og);

    // Scan paragraphs for image URLs
    post.content.forEach((section) => {
      section.paragraphs.forEach((p) => {
        const matches = p.match(imageRegex) || [];
        matches.forEach((m) => images.add(m));
      });
    });

    const imageXml = Array.from(images)
      .map(
        (img) => `
    <image:image>
      <image:loc>${xmlEscape(img)}</image:loc>
      <image:title>${xmlEscape(post.title)}</image:title>
    </image:image>`
      )
      .join("");

    return `
  <url>
    <loc>${loc}</loc>
${imageXml}
  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries.join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "s-maxage=3600, stale-while-revalidate"
  );
  res.write(xml);
  res.end();

  return { props: {} };
};

const ImageSitemap = () => null;
export default ImageSitemap;

function xmlEscape(str: string = ""): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
