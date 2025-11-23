import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const { blogPosts } = await import("../data/blogPosts");

    const baseUrl = "https://axorainfotech.com";

    // ---- STATIC PAGES WITH REAL LASTMOD ----
    const staticPages: { path: string; lastmod: string }[] = [
        { path: "/", lastmod: "2025-11-17" },

        // Blog index
        { path: "/blog", lastmod: "2025-11-17" },

        // Services
        { path: "/services", lastmod: "2025-11-17" },
        { path: "/services/ai-product-engineering", lastmod: "2025-11-17" },
        { path: "/services/custom-saas-development", lastmod: "2025-11-17" },
        { path: "/services/crm-modernization", lastmod: "2025-11-17" },
        { path: "/services/enterprise-web-applications", lastmod: "2025-11-17" },
        { path: "/services/mobile-app-development", lastmod: "2025-11-17" },
        { path: "/services/cloud-devops-automation", lastmod: "2025-11-17" },
        { path: "/services/data-engineering-analytics", lastmod: "2025-11-17" },
        { path: "/services/intelligent-process-automation", lastmod: "2025-11-17" },
        { path: "/services/digital-commerce-marketplaces", lastmod: "2025-11-17" },
        { path: "/services/seo-growth-marketing", lastmod: "2025-11-17" },

        // Hire
        { path: "/hire", lastmod: "2025-11-17" },
        { path: "/hire/react-developers", lastmod: "2025-11-17" },
        { path: "/hire/nodejs-developers", lastmod: "2025-11-17" },
        { path: "/hire/fullstack-teams", lastmod: "2025-11-17" },
        { path: "/hire/nextjs-engineers", lastmod: "2025-11-17" },
        { path: "/hire/mobile-developers", lastmod: "2025-11-17" },
        { path: "/hire/devops-experts", lastmod: "2025-11-17" },
        { path: "/hire/data-engineers", lastmod: "2025-11-17" },
        { path: "/hire/uiux-designers", lastmod: "2025-11-17" },
        { path: "/hire/qa-automation", lastmod: "2025-11-17" },
        { path: "/hire/ai-ml-specialists", lastmod: "2025-11-17" },

        // Product pages
        { path: "/axovision", lastmod: "2025-11-17" },
        { path: "/axoconnect", lastmod: "2025-11-17" },
        { path: "/axoanalytics", lastmod: "2025-11-17" },
    ];

    // ---- STATIC XML ----
    const staticXml = staticPages
        .map(
            ({ path, lastmod }) => `
    <url>
      <loc>${baseUrl}${path}</loc>
      <lastmod>${lastmod}</lastmod>
    </url>`
        )
        .join("");

    // ---- BLOG XML (dynamic, sorted + priority) ----
    const sortedBlogs = [...blogPosts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const priorityFor = (dateStr?: string): string => {
        const d = dateStr ? new Date(dateStr) : new Date();
        const days = Math.floor((Date.now() - d.getTime()) / (1000 * 60 * 60 * 24));
        if (days <= 7) return "1.0";
        if (days <= 30) return "0.8";
        return "0.6";
    };

    const blogXml = sortedBlogs
        .map((post) => {
            const lastmod = post.date || new Date().toISOString().split("T")[0];
            const priority = priorityFor(lastmod);
            return `
    <url>
      <loc>${baseUrl}/blog/${post.slug}</loc>
      <lastmod>${lastmod}</lastmod>
      <priority>${priority}</priority>
    </url>`;
        })
        .join("");

    // ---- FINAL XML ----
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticXml}
${blogXml}
</urlset>`;

    res.setHeader("Content-Type", "application/xml");
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
    res.write(xml);
    res.end();

    return { props: {} };
};

const Sitemap = () => null;
export default Sitemap;
