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
</item>`;
        })
        .join("");

    const lastBuild = sortedPosts.length
        ? new Date(sortedPosts[0].date).toUTCString()
        : new Date().toUTCString();

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
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

    res.setHeader("Content-Type", "application/rss+xml");
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
