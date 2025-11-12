export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  ogImage?: string;
  keywords?: string[];
  content: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-ai-finds-similar-tiles",
    title: "How AI Finds Similar Tiles from a Photo: Complete Guide",
    excerpt:
      "Discover the technology behind AI-powered visual search and how computer vision is revolutionizing tile and design discovery.",
    date: "2025-11-11",
    author: "Axora Team",
    category: "Technology",
    readTime: "8 min read",
    image: "/blog/ai-tile-search.jpg",
    ogImage: "https://axorainfotech.com/blog/how-ai-finds-similar-tiles-og.jpg",
    keywords: [
      "tile image search",
      "AI tile matching",
      "visual search technology",
      "computer vision tiles",
    ],
    content: [
      {
        heading: "Introduction",
        paragraphs: [
          "Customers often arrive with inspiration photos and expect instant matches. Traditional search fails because design is visual, not textual.",
          "Artificial intelligence closes this gap by interpreting patterns, colors, and textures to deliver accurate tile recommendations within seconds.",
        ],
      },
      {
        heading: "Why Traditional Search Fails",
        paragraphs: [
          "Product metadata rarely captures the nuance of patterns or color variations, leading to poor search results and lost sales opportunities.",
          "Customers struggle with terminology, while sales teams waste time navigating catalogs instead of providing consultative support.",
        ],
      },
      {
        heading: "How AxoVision Solves the Problem",
        paragraphs: [
          "AxoVision analyses each image using deep learning models trained on thousands of tile designs to understand complex pattern geometry and color palettes.",
          "With a simple photo upload, the system returns relevant results ranked by similarity, enabling customers to make confident purchase decisions quickly.",
        ],
      },
      {
        heading: "Implementation Checklist",
        paragraphs: [
          "Digitize your catalog with high-quality imagery and consistent metadata.",
          "Connect AxoVision via API to your e-commerce platform or internal inventory tools.",
          "Train sales teams to incorporate visual search into their showroom workflows.",
        ],
      },
      {
        heading: "Key Takeaways",
        paragraphs: [
          "Visual search increases conversion rates by up to 40% for tile retailers embracing AI-driven discovery.",
          "Early adopters build defensible competitive advantages and gather rich data on customer design preferences.",
        ],
      },
    ],
  },
  {
    slug: "future-of-tile-design-discovery",
    title: "The Future of Tile Design Discovery Using Computer Vision",
    excerpt:
      "Explore how computer vision and AI are transforming the tile industry and what it means for manufacturers and designers.",
    date: "2025-11-04",
    author: "Axora Team",
    category: "Industry Trends",
    readTime: "6 min read",
    image: "/blog/future-tile-design.jpg",
    ogImage: "https://axorainfotech.com/blog/future-of-tile-design-og.jpg",
    keywords: [
      "tile industry trends",
      "computer vision",
      "product discovery AI",
      "tile innovation",
    ],
    content: [
      {
        heading: "Market Shifts",
        paragraphs: [
          "Design discovery has moved online, and buyers expect the same level of personalization across digital channels as they experience in showrooms.",
          "Computer vision allows brands to recommend complementary patterns, surfaces, and layouts tailored to each project.",
        ],
      },
      {
        heading: "Technology Drivers",
        paragraphs: [
          "Advancements in neural networks now enable real-time analysis of complex materials such as mosaics, natural stone, and textured ceramics.",
          "Cloud infrastructure reduces deployment costs, making enterprise-grade visual search accessible to mid-sized manufacturers.",
        ],
      },
      {
        heading: "What Comes Next",
        paragraphs: [
          "Expect to see AR-enhanced showrooms where customers scan a surface and instantly visualize matching collections in their own spaces.",
          "Data captured from visual interactions will inform design decisions, inventory planning, and targeted marketing campaigns.",
        ],
      },
      {
        heading: "Action Plan",
        paragraphs: [
          "Audit your current digital product experience and identify gaps where visual discovery could reduce friction.",
          "Pilot AI-powered search within a single product line, measure conversion lift, and scale across the catalog.",
        ],
      },
    ],
  },
];
