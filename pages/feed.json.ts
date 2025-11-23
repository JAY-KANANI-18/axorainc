import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const { blogPosts } = await import("../data/blogPosts");

  const baseUrl = "https://axorainfotech.com";

  // Sort newest -> oldest
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const items = sortedPosts.map((post) => {
    const link = `${baseUrl}/blog/${post.slug}`;
    const fullImage = post.ogImage || toAbsoluteUrl(baseUrl, post.image);

    const contentHtml = post.content
      .map(
        (section) => `
<h2>${escapeHtml(section.heading)}</h2>
<p>${section.paragraphs.map(escapeHtml).join("</p><p>")}</p>`
      )
      .join("<br/>");

    return {
      id: link,
      url: link,
      title: post.title,
      summary: post.excerpt,
      content_html: contentHtml,
      date_published: new Date(post.date).toISOString(),
      authors: [{ name: post.author || "Axora Infotech" }],
      image: fullImage,
      banner_image: fullImage,
      tags: [post.category, ...(post.keywords || [])],
    };
  });

  const feed = {
    version: "https://jsonfeed.org/version/1.1",
    title: "Axora Infotech Blog",
    home_page_url: `${baseUrl}/blog`,
    feed_url: `${baseUrl}/feed.json`,
    description:
      "AI, SaaS, Cloud and Product Engineering Insights from Axora Infotech.",
    icon: `${baseUrl}/favicon.ico`,
    favicon: `${baseUrl}/favicon.ico`,
    authors: [{ name: "Axora Infotech" }],
    items,
  } as const;

  res.setHeader("Content-Type", "application/feed+json");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=600, stale-while-revalidate=86400"
  );
  res.write(JSON.stringify(feed));
  res.end();

  return { props: {} };
};

const JsonFeed = () => null;
export default JsonFeed;

function toAbsoluteUrl(base: string, path?: string): string {
  if (!path) return base;
  if (/^https?:\/\//i.test(path)) return path;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

function escapeHtml(str: string = ""): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
