import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const { blogPosts } = await import("../data/blogPosts");

  const baseUrl = "https://axorainfotech.com";

  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const updated = sortedPosts[0]
    ? new Date(sortedPosts[0].date).toISOString()
    : new Date().toISOString();

  const entries = sortedPosts
    .map((post) => {
      const link = `${baseUrl}/blog/${post.slug}`;

      const contentHtml = post.content
        .map(
          (section) => `
<h2>${escapeHtml(section.heading)}</h2>
<p>${section.paragraphs.map(escapeHtml).join("</p><p>")}</p>`
        )
        .join("<br/>");

      return `
  <entry>
    <id>${link}</id>
    <title>${xmlEscape(post.title)}</title>
    <updated>${new Date(post.date).toISOString()}</updated>
    <summary type="html">${xmlEscape(post.excerpt || "")}</summary>
    <content type="html"><![CDATA[${contentHtml}]]></content>
    <author><name>${xmlEscape(post.author || "Axora Infotech")}</name></author>
    <link rel="alternate" href="${link}" />
  </entry>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Axora Infotech Blog</title>
  <id>${baseUrl}/</id>
  <updated>${updated}</updated>
  <link rel="self" href="${baseUrl}/atom.xml" />
  <link rel="alternate" href="${baseUrl}/blog" />
  ${entries}
</feed>`;

  res.setHeader("Content-Type", "application/atom+xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=600, stale-while-revalidate=86400"
  );
  res.write(xml);
  res.end();

  return { props: {} };
};

const AtomFeed = () => null;
export default AtomFeed;

function xmlEscape(str: string = ""): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function escapeHtml(str: string = ""): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
