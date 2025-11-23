import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const { blogPosts } = await import("../data/blogPosts");

    const baseUrl = "https://axorainfotech.com";

    // Sort by newest first
    const sortedPosts = [...blogPosts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const itemsXml = sortedPosts
        .map((post) => {
            const title = escapeCdata(post.title);
            const link = `${baseUrl}/blog/${post.slug}`;
            const guid = link;
            const pubDate = new Date(post.date).toUTCString();

            const description = escapeCdata(
                post.excerpt ||
                post?.content?.[0]?.paragraphs?.[0] ||
                "New blog post from Axora Infotech."
            );

            const author = escapeCdata(post.author || "Axora Infotech");
            const category = escapeCdata(post.category || "Blog");

            const fullImageUrl = post.ogImage || toAbsoluteUrl(baseUrl, post.image);
            const imageMime = getMimeTypeFromUrl(fullImageUrl);
            const commentsUrl = `${link}#comments`;

            // Rich feed support
            const fullContent = escapeCdata(
                post.content
                    .map(
                        (section) => `
              <h2>${section.heading}</h2>
              <p>${section.paragraphs.join("</p><p>")}</p>
            `
                    )
                    .join("<br/>")
            );

            return `
<item>
  <title><![CDATA[${title}]]></title>
  <link>${link}</link>
  <guid isPermaLink="true">${guid}</guid>
  <pubDate>${pubDate}</pubDate>

  <author><![CDATA[${author}]]></author>
  <category><![CDATA[${category}]]></category>

  <description><![CDATA[${description}]]></description>

  <content:encoded><![CDATA[${fullContent}]]></content:encoded>
  <enclosure url="${fullImageUrl}" type="${imageMime}" />
  <media:thumbnail url="${fullImageUrl}" />
  <media:content url="${fullImageUrl}" medium="image" />
  <dc:creator><![CDATA[${author}]]></dc:creator>
  <comments>${commentsUrl}</comments>
</item>`;
        })
        .join("");

    const lastBuild = sortedPosts.length
        ? new Date(sortedPosts[0].date).toUTCString()
        : new Date().toUTCString();

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:media="http://search.yahoo.com/mrss/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
>
  <channel>
    <title>Axora Infotech Blog</title>
    <link>${baseUrl}/blog</link>
    <description>AI, SaaS, Cloud and Product Engineering Insights from Axora Infotech.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>

    ${itemsXml}
  </channel>
</rss>`;

    res.setHeader("Content-Type", "application/rss+xml; charset=utf-8");
    res.setHeader("Cache-Control", "public, s-maxage=600, stale-while-revalidate=86400");
    res.write(xml);
    res.end();

    return { props: {} };
};

const RssFeed = () => null;
export default RssFeed;

/* ------------------ UTIL ------------------ */

function escapeCdata(str: string = ""): string {
    return str.replace(/\]\]>/g, "]]]]><![CDATA[>");
}

function toAbsoluteUrl(base: string, path?: string): string {
    if (!path) return base;
    if (/^https?:\/\//i.test(path)) return path;
    return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

function getMimeTypeFromUrl(url: string): string {
    const lower = url.split('?')[0].toLowerCase();
    if (lower.endsWith('.png')) return 'image/png';
    if (lower.endsWith('.webp')) return 'image/webp';
    if (lower.endsWith('.gif')) return 'image/gif';
    if (lower.endsWith('.svg')) return 'image/svg+xml';
    if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg';
    return 'image/jpeg';
}
