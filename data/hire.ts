export interface HireSection {
  heading: string;
  paragraphs: string[];
}

export interface HireFAQ {
  question: string;
  answer: string;
}

export interface HireCaseStudy {
  title: string;
  summary: string;
  results: string[];
  date?: string;
  image?: string;
}

export interface HirePage {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  ogImage?: string;
  keywords: string[];
  skills: string[];
  content: HireSection[];
  faqs: HireFAQ[];
  caseStudy?: HireCaseStudy;
}

export const hires: HirePage[] = [
  {
    slug: "react-developers",
    title: "Hire React Developers",
    excerpt:
      "Senior React engineers for enterprise-grade frontends, design systems, PWAs, and performance-optimized apps that scale.",
    date: "2025-11-17",
    category: "Front-end",
    readTime: "12 min read",
    image: "/2.png",
    ogImage: "https://axorainfotech.com/hire/react-developers-og.jpg",
    keywords: [
      "hire react developers",
      "react engineers",
      "next.js",
      "typescript",
      "design systems",
      "pwa",
      "core web vitals",
    ],
    skills: ["React 18", "Next.js", "TypeScript", "Redux/RTK", "Tailwind/Chakra", "Jest/RTL"],
    content: [
      {
        heading: "Why Hire React Developers from Axora",
        paragraphs: [
          "Our React teams ship accessible, performant, and maintainable interfaces backed by design systems and robust testing.",
          "From greenfield products to legacy modernization, we bring patterns that reduce complexity and increase delivery speed.",
        ],
      },
      {
        heading: "What We Deliver",
        paragraphs: [
          "Product UIs optimized for Core Web Vitals and SEO using Next.js and edge rendering where appropriate.",
          "Component libraries, Storybook docs, and DX tooling to make teams faster and defects rarer.",
        ],
      },
    ],
    faqs: [
      { question: "Do you support app router?", answer: "Yes—app router, ISR, server actions, and edge deployment on Vercel or custom infra." },
      { question: "How do you ensure quality?", answer: "Linting, type-safety, unit/integration tests, visual regression, and CI gates." },
    ],
    caseStudy: {
      title: "React migration cut TTI by 42% and boosted conversion by 18%",
      summary:
        "We migrated a legacy SPA to React 18 + Next.js with a design system and performance budgets. The team reduced time-to-interactive, improved Core Web Vitals, and increased conversion with better UX and faster pages.",
      results: [
        "Time to Interactive (TTI): -42%",
        "Conversion Rate: +18%",
        "Bug Rate: -35%",
        "Release Frequency: 2.2x",
      ],
      date: "2025-06-01",
    },
  },
  {
    slug: "nodejs-developers",
    title: "Hire Node.js Developers",
    excerpt:
      "Build reliable APIs, event-driven services, and high-throughput backends using Node.js with strong observability and security.",
    date: "2025-11-17",
    category: "Back-end",
    readTime: "11 min read",
    image: "/2.png",
    ogImage: "https://axorainfotech.com/hire/nodejs-developers-og.jpg",
    keywords: [
      "hire nodejs developers",
      "node backend",
      "nestjs",
      "serverless",
      "event-driven",
      "microservices",
    ],
    skills: ["NestJS", "Express", "PostgreSQL", "MongoDB", "Kafka", "Serverless"],
    content: [
      {
        heading: "API Platforms that Scale",
        paragraphs: [
          "We engineer clean domain boundaries, circuit breakers, caching, and observability to keep your platform fast and reliable.",
        ],
      },
      {
        heading: "Security & Compliance",
        paragraphs: [
          "OWASP, RBAC, secret management, and audit trails are built-in—aligned with SOC2 best practices.",
        ],
      },
    ],
    faqs: [
      { question: "Do you build real-time services?", answer: "Yes—WebSockets, event streams, and pub/sub with Kafka or cloud-native options." },
    ],
    caseStudy: {
      title: "Node platform improved throughput by 2.4x and cut error rate by 38%",
      summary:
        "We re-architected services with backpressure, caching, and observability. Release cadence increased while latency and errors dropped across peak load.",
      results: [
        "P99 Latency: -27%",
        "Error Rate: -38%",
        "Throughput: +2.4x",
        "Deployment Frequency: +2.1x",
      ],
      date: "2025-05-12",
    },
  },
  {
    slug: "fullstack-teams",
    title: "Hire Full-Stack Teams",
    excerpt:
      "Cross-functional squads—PM, UX, front-end, back-end, QA, and DevOps—aligned to deliver business outcomes fast.",
    date: "2025-11-17",
    category: "Teams",
    readTime: "10 min read",
    image: "/2.png",
    ogImage: "https://axorainfotech.com/hire/fullstack-teams-og.jpg",
    keywords: [
      "hire fullstack team",
      "agile pods",
      "product squads",
      "delivery acceleration",
    ],
    skills: ["React", "Node.js", "Next.js", "Mobile", "DevOps", "QA"],
    content: [
      {
        heading: "Why Teams Win",
        paragraphs: [
          "Aligned squads reduce handoffs and accelerate throughput with clear ownership and shared quality bars.",
        ],
      },
      {
        heading: "Engagement Models",
        paragraphs: [
          "Staff augmentation, managed pods, or turnkey delivery—flexible to your budget and roadmap.",
        ],
      },
    ],
    faqs: [
      { question: "Timezone coverage?", answer: "Global teams with overlapping windows for US/EU/India." },
      { question: "Tooling?", answer: "We adopt your workflow: Jira, Linear, GitHub, Notion, Slack, and your CI/CD stack." },
    ],
    caseStudy: {
      title: "Full-stack squad shipped MVP in 8 weeks and unlocked $1.2M pipeline",
      summary:
        "We formed a cross-functional pod and delivered an enterprise MVP with design system, APIs, and analytics on an aggressive timeline.",
      results: [
        "Time-to-Market: -40%",
        "Stakeholder NPS: +22",
        "$ Pipeline Influenced: $1.2M",
      ],
      date: "2025-04-18",
    },
  },
  {
    slug: "nextjs-engineers",
    title: "Hire Next.js Engineers",
    excerpt: "SEO-friendly, high-performance web apps with app router, ISR, and edge rendering.",
    date: "2025-11-17",
    category: "Front-end",
    readTime: "8 min read",
    image: "/2.png",
    keywords: ["next.js engineers", "seo", "app router", "edge rendering"],
    skills: ["Next.js", "Vercel", "TypeScript"],
    content: [
      { heading: "Shipping with Confidence", paragraphs: ["Metrics-driven performance and SEO."] },
    ],
    faqs: [],
    caseStudy: {
      title: "Next.js migration improved CWV and organic traffic by 31%",
      summary:
        "App Router + ISR + edge rendering reduced LCP and INP issues across key templates, lifting organic sessions and conversion.",
      results: [
        "LCP: -29%",
        "INP: -18%",
        "Organic Sessions: +31%",
      ],
      date: "2025-03-02",
    },
  },
  {
    slug: "mobile-developers",
    title: "Hire Mobile App Developers",
    excerpt: "iOS/Android and cross-platform teams for consumer and enterprise apps.",
    date: "2025-11-17",
    category: "Mobile",
    readTime: "8 min read",
    image: "/2.png",
    keywords: ["mobile developers", "react native", "flutter"],
    skills: ["Swift", "Kotlin", "React Native", "Flutter"],
    content: [
      { heading: "Quality on Devices", paragraphs: ["Crash-free sessions, analytics, and release confidence."] },
    ],
    faqs: [],
    caseStudy: {
      title: "Mobile rewrite achieved 99.6% crash-free sessions and +17% retention",
      summary:
        "We rebuilt key flows with offline-first patterns and observability; staged rollouts stabilized releases and improved retention.",
      results: [
        "Crash-free Sessions: 99.6%",
        "7-day Retention: +17%",
        "App Size: -12%",
      ],
      date: "2025-02-10",
    },
  },
  {
    slug: "devops-experts",
    title: "Hire DevOps & SRE Experts",
    excerpt: "Kubernetes, Terraform, GitOps, and SRE to improve reliability and speed.",
    date: "2025-11-17",
    category: "DevOps",
    readTime: "8 min read",
    image: "/2.png",
    keywords: ["devops", "sre", "kubernetes", "terraform"],
    skills: ["Kubernetes", "Terraform", "Prometheus/Grafana"],
    content: [
      { heading: "From CI to SLOs", paragraphs: ["Full lifecycle automation and reliability engineering."] },
    ],
    faqs: [],
    caseStudy: {
      title: "DevOps/SRE drove 63% faster MTTR and 35% lower cloud spend",
      summary:
        "We introduced SLOs, error budgets, and GitOps with IaC; FinOps right-sizing cut spend without sacrificing performance.",
      results: [
        "MTTR: -63%",
        "Change Failure Rate: -22%",
        "Cloud Spend: -35%",
      ],
      date: "2025-01-22",
    },
  },
  {
    slug: "data-engineers",
    title: "Hire Data Engineers",
    excerpt: "Modern data pipelines and lakehouses with real-time analytics.",
    date: "2025-11-17",
    category: "Data",
    readTime: "8 min read",
    image: "/2.png",
    keywords: ["data engineers", "dbt", "snowflake", "kafka"],
    skills: ["dbt", "Snowflake", "Kafka"],
    content: [
      { heading: "From ETL to Insights", paragraphs: ["Governed, reliable data flows to power decisions."] },
    ],
    faqs: [],
    caseStudy: {
      title: "Modern data stack enabled sub-5 min freshness and 28% more insights usage",
      summary:
        "We implemented CDC + dbt + semantic layer with governance and observability, improving trust and adoption.",
      results: [
        "Dashboard Freshness: <5 min",
        "Data Incidents: -46%",
        "BI Adoption: +28%",
      ],
      date: "2025-05-30",
    },
  },
  {
    slug: "uiux-designers",
    title: "Hire UI/UX Designers",
    excerpt: "Research, interaction design, and design systems for delightful products.",
    date: "2025-11-17",
    category: "Design",
    readTime: "7 min read",
    image: "/2.png",
    keywords: ["ui ux designers", "design systems", "figma"],
    skills: ["Figma", "Accessibility", "Prototyping"],
    content: [
      { heading: "From Research to Systems", paragraphs: ["Evidence-backed design with reusable components."] },
    ],
    faqs: [],
    caseStudy: {
      title: "Design system cut UI defects by 41% and sped delivery by 2x",
      summary:
        "We established tokens, components, and accessibility guidelines in Storybook, accelerating consistent UI delivery.",
      results: [
        "UI Defects: -41%",
        "Design-to-Dev Time: -38%",
        "Feature Velocity: +2x",
      ],
      date: "2025-03-27",
    },
  },
  {
    slug: "qa-automation",
    title: "Hire QA Automation Engineers",
    excerpt: "Automated testing for reliable, continuous delivery.",
    date: "2025-11-17",
    category: "QA",
    readTime: "7 min read",
    image: "/2.png",
    keywords: ["qa automation", "cypress", "playwright"],
    skills: ["Cypress", "Playwright", "k6"],
    content: [
      { heading: "Quality at Speed", paragraphs: ["Shift-left testing with coverage you can trust."] },
    ],
    faqs: [],
    caseStudy: {
      title: "QA automation improved release confidence and cut regressions by 52%",
      summary:
        "We built a layered test strategy (unit, integration, E2E) with CI gates and device farm coverage.",
      results: [
        "Regression Rate: -52%",
        "Release Lead Time: -35%",
        "Escaped Defects: -44%",
      ],
      date: "2025-06-10",
    },
  },
  {
    slug: "ai-ml-specialists",
    title: "Hire AI & ML Specialists",
    excerpt: "LLMs, computer vision, and predictive modeling experts on demand.",
    date: "2025-11-17",
    category: "AI/ML",
    readTime: "9 min read",
    image: "/2.png",
    keywords: ["ai specialists", "ml engineers", "llms", "computer vision"],
    skills: ["LLMs", "CV", "MLOps"],
    content: [
      { heading: "From Prototype to Prod", paragraphs: ["Responsible, observable AI shipped to production."] },
    ],
    faqs: [],
    caseStudy: {
      title: "AI copilots reduced handling time by 34% and improved CSAT by 0.6",
      summary:
        "We delivered domain-tuned LLM assistants with eval harnesses and guardrails, safely scaling across use cases.",
      results: [
        "Average Handle Time: -34%",
        "CSAT: +0.6",
        "Cost per Ticket: -19%",
      ],
      date: "2025-07-08",
    },
  },
];
