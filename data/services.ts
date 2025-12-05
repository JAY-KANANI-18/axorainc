export interface ServiceSection {
  heading: string;
  paragraphs: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceCaseStudy {
  title: string;
  summary: string;
  results: string[];
  date?: string;
  image?: string;
}

export interface ServicePage {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  ogImage?: string;
  keywords: string[];
  benefits: string[];
  useCases: string[];
  content: ServiceSection[];
  faqs: ServiceFAQ[];
  caseStudy?: ServiceCaseStudy;
}

export const services: ServicePage[] = [
  {
    slug: "ai-product-engineering",
    title: "AI Product Engineering",
    excerpt:
      "Design and ship AI-first products using LLMs, computer vision, and predictive analytics—productionized with secure, observable, and scalable pipelines.",
    date: "2025-11-17",
    category: "AI Engineering",
    readTime: "10 min read",
    image: "/images/services/ai-product-engineering.png",
    ogImage: "https://axorainfotech.com/images/services/ai-product-engineering.png",
    keywords: [
      "AI product engineering",
      "LLM applications",
      "computer vision",
      "mlops",
      "generative AI",
      "predictive analytics",
      "enterprise AI",
    ],
    benefits: [
      "Accelerate AI feature delivery with robust MLOps",
      "Reduce risk with governance, monitoring, and A/B evaluation",
      "Ship responsible AI aligned to compliance and security",
    ],
    useCases: [
      "Conversational copilots for CRM and support",
      "Vision-based quality inspection and search",
      "Forecasting for pricing, inventory, and demand",
    ],
    content: [
      {
        heading: "Why AI-First Now",
        paragraphs: [
          "AI is now the core of modern software. LLMs, vector search, and CV unlock entirely new experiences—automated decisions, intelligent search, and copilots that learn across your stack.",
          "We turn prototypes into reliable, compliant, and scalable AI products built for production from day one.",
        ],
      },
      {
        heading: "Our Engineering Approach",
        paragraphs: [
          "We start with clear measurable outcomes, model-selection scorecards, and reference architectures for latency, cost, and privacy.",
          "Pipelines include data contracts, feature stores, experiment tracking, and CI/CD for models with human-in-the-loop review.",
        ],
      },
      {
        heading: "Security & Governance",
        paragraphs: [
          "Guardrails for prompt injection, Personally Identifiable Information (PII) redaction, rate-limiting, and audit trails are standard.",
          "We align with SOC2 controls and adopt RBAC, secrets management, and observability across model lifecycle.",
        ],
      },
      {
        heading: "AI Architecture Blueprint",
        paragraphs: [
          "We design reference architectures covering retrieval-augmented generation (RAG), embeddings stores, feature stores, and real‑time inference layers.",
          "Clear boundaries between orchestration, business logic, and model adapters enable safe iteration and model swaps without regressions.",
        ],
      },
      {
        heading: "Data Readiness & Labeling",
        paragraphs: [
          "High‑quality data wins. We help you instrument product flows, define data contracts, and stand up labeling pipelines with quality control.",
          "Synthetic data generation, augmentation, and deduplication reduce bias and improve generalization across edge cases.",
        ],
      },
      {
        heading: "Evaluation & Guardrails",
        paragraphs: [
          "We create golden datasets and automated evals that track accuracy, toxicity, cost, latency, and hallucinations across releases.",
          "Safety layers—content filters, PII scrubbing, prompt templates, and output validation—protect users and your brand.",
        ],
      },
      {
        heading: "MLOps & Observability",
        paragraphs: [
          "Versioning, experiment tracking, canary rollouts, and shadow traffic ensure reliable deployments with fast rollback paths.",
          "Tracing, metrics, and logs provide visibility from prompt to vector lookup to model response and post‑processing.",
        ],
      },
      {
        heading: "Cost & Latency Optimization",
        paragraphs: [
          "We right‑size models, cache at multiple layers, batch requests, and use distillation/quantization where appropriate.",
          "Autoscaling and adaptive routing select the cheapest model that meets your quality bar per request.",
        ],
      },
      {
        heading: "Compliance & Responsible AI",
        paragraphs: [
          "We document data provenance, provide model cards, and support DSAR/RTBF workflows for privacy regulations.",
          "Human‑in‑the‑loop review ensures sensitive decisions are supervised and auditable.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do you measure AI quality?",
        answer:
          "We define offline and online metrics—accuracy, latency, cost-per-call, hallucination rate—plus A/B tests and human review loops.",
      },
      {
        question: "Which stacks do you support?",
        answer:
          "OpenAI, Anthropic, Vertex, Bedrock, LangChain/LangGraph, Triton/TensorRT, ONNX, Ray, and Kubernetes-based MLOps.",
      },
    ],
    caseStudy: {
      title: "AI copilots reduced handling time by 29% and improved CSAT by 0.5",
      summary:
        "We shipped a domain-tuned copilot with evals, guardrails, and analytics. Productivity rose, and risk remained controlled via human-in-the-loop.",
      results: [
        "Average Handle Time: -29%",
        "CSAT: +0.5",
        "Containment Rate: +23%",
      ],
      date: "2025-05-08",
    },
  },
  {
    slug: "custom-saas-development",
    title: "Custom SaaS Development",
    excerpt:
      "Design multi-tenant SaaS with billing, roles, analytics, and AI-native features. Built to scale with cloud cost efficiency and speed.",
    date: "2025-11-17",
    category: "SaaS Engineering",
    readTime: "11 min read",
    image: "/images/services/saas-development.png",
    ogImage: "https://axorainfotech.com/images/services/saas-development.png",
    keywords: [
      "custom saas development",
      "multi-tenant architecture",
      "subscription billing",
      "saas analytics",
      "saas security",
      "saas with ai",
    ],
    benefits: [
      "Faster time-to-market with reference modules",
      "Lower cloud spend via FinOps and right-sizing",
      "Future-proof foundations for rapid feature delivery",
    ],
    useCases: [
      "B2B platforms with granular roles and metering",
      "Embedded analytics and customer dashboards",
      "Usage-based pricing with Stripe/Braintree",
    ],
    content: [
      {
        heading: "Modern SaaS Architecture",
        paragraphs: [
          "We build with a clear tenancy model, data isolation, and extensibility using event-driven patterns and modular domains.",
          "Tenants get secure isolation with shared efficiencies in compute, storage, and observability.",
        ],
      },
      {
        heading: "Monetization & Growth",
        paragraphs: [
          "Billing engines support subscriptions, seat-based and usage-based pricing, trials, and couponing.",
          "We instrument funnels, activation metrics, and churn analytics to drive PLG and enterprise sales motions.",
        ],
      },
      {
        heading: "Tenancy & Data Isolation",
        paragraphs: [
          "We choose pooled, siloed, or hybrid tenancy based on customer SLAs, compliance, and cost targets.",
          "Row‑level security, schema per tenant, or workspace isolation patterns maintain safety without losing efficiency.",
        ],
      },
      {
        heading: "Extension & Marketplace Strategy",
        paragraphs: [
          "Design extension points—webhooks, events, and SDKs—so partners can build on your platform without risking core stability.",
          "App marketplace infrastructure covers review flows, usage metering, revenue share, and vendor onboarding.",
        ],
      },
      {
        heading: "Analytics & Admin UX",
        paragraphs: [
          "We deliver tenant‑aware analytics and administrative consoles for usage insights, billing operations, and support workflows.",
          "Embedded BI and exports power executive views and customer health scoring for CS teams.",
        ],
      },
      {
        heading: "Security, Compliance & SSO",
        paragraphs: [
          "SSO/SAML, SCIM, audit logs, encryption at rest/in transit, and role matrices are built in from day one.",
          "We align to SOC2 controls and automate evidence collection for faster audits.",
        ],
      },
      {
        heading: "Performance & Cost Controls",
        paragraphs: [
          "Autoscaling, horizontal partitioning, and read/write segregation keep experiences fast at scale.",
          "FinOps dashboards track cost per tenant, feature, and environment to prevent margin erosion.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you migrate a single-tenant app to multi-tenant?",
        answer:
          "Yes. We create a phased plan for data model refactor, auth, usage metering, and tenant-aware analytics with minimal downtime.",
      },
      {
        question: "Do you support marketplace integrations?",
        answer:
          "Yes—App Store, Google Play, Salesforce, Slack, and bespoke partner ecosystems with revenue share tracking.",
      },
    ],
    caseStudy: {
      title: "SaaS rebuild improved activation by 21% and cut cloud costs by 28%",
      summary:
        "We replatformed to a multi-tenant architecture with clear tenancy, usage metering, and FinOps—boosting activation while lowering spend.",
      results: [
        "Activation Rate: +21%",
        "Cloud Spend: -28%",
        "Time-to-Release: -35%",
      ],
      date: "2025-04-03",
    },
  },
  {
    slug: "crm-modernization",
    title: "CRM Modernization",
    excerpt:
      "Transform your CRM from a system of record into a system of intelligence with automation, NLP search, and AI-driven insights.",
    date: "2025-11-17",
    category: "CRM",
    readTime: "9 min read",
    image: "/images/services/crm-modernization.png",
    ogImage: "https://axorainfotech.com/images/services/crm-modernization.png",
    keywords: [
      "crm modernization",
      "crm automation",
      "nlp search",
      "salesforce hubspot",
      "crm integration",
    ],
    benefits: [
      "Higher rep productivity via automation",
      "Better visibility with unified pipelines",
      "Personalized engagement using AI",
    ],
    useCases: [
      "AI assistants for opportunity updates",
      "NLP search across notes and emails",
      "360° customer view across ERP and billing",
    ],
    content: [
      {
        heading: "Automate the Admin",
        paragraphs: [
          "We remove manual updates with workflows, AI summaries, and guided next-best actions across sales and support.",
        ],
      },
      {
        heading: "Unified Data",
        paragraphs: [
          "Connect CRM, ERP, marketing, and billing to create real-time, trustworthy dashboards that drive action.",
        ],
      },
      {
        heading: "Discovery & Process Audit",
        paragraphs: [
          "We map your current sales, marketing, and support processes to identify manual steps, duplicate data entry, and blockers to velocity.",
          "This audit informs an automation backlog prioritized by ROI, effort, and risk to deliver quick wins early.",
        ],
      },
      {
        heading: "Automation Blueprint",
        paragraphs: [
          "We design event-driven workflows for lead routing, opportunity hygiene, renewals, and escalation management with approvals and SLAs.",
          "Bots summarize calls and emails, update fields, and trigger playbooks, reducing rep admin time by 30–50%.",
        ],
      },
      {
        heading: "NLP Search & Intelligence",
        paragraphs: [
          "We implement semantic search over notes, emails, and tickets so teams can ask questions in natural language and find answers instantly.",
          "Dashboards surface risk signals, pipeline health, and churn predictors to enable proactive action.",
        ],
      },
      {
        heading: "Integration Patterns",
        paragraphs: [
          "We connect CRM with ERP, billing, marketing automation, and data warehouses using robust integration patterns and retries.",
          "Event buses ensure consistency while keeping systems decoupled for resilience and scale.",
        ],
      },
      {
        heading: "Change Management",
        paragraphs: [
          "We deliver enablement playbooks, admin handover, and governance so adoption sticks beyond launch.",
          "Role-based training, in-app guidance, and usage analytics ensure teams use the new workflows effectively.",
        ],
      },
      {
        heading: "KPIs & ROI Tracking",
        paragraphs: [
          "We define KPIs—cycle time, win rate, time-to-first-response, CSAT/NPS—and track improvements post‑launch.",
          "Cohort analysis and A/B experiments quantify the impact of automation on revenue and retention.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which CRMs do you work with?",
        answer: "Salesforce, HubSpot, Zendesk, Freshworks, and custom CRMs.",
      },
      {
        question: "How fast to see value?",
        answer:
          "2–6 weeks for pilots focused on automation and analytics; scale in quarterly increments.",
      },
    ],
    caseStudy: {
      title: "CRM automation increased rep productivity by 32% and data completeness by 44%",
      summary:
        "We implemented workflows, summarization, and NLP search with clear governance—raising CRM accuracy and freeing reps from admin.",
      results: [
        "Rep Admin Time: -32%",
        "Data Completeness: +44%",
        "Lead Response Time: -25%",
      ],
      date: "2025-03-20",
    },
  },
  {
    slug: "enterprise-web-applications",
    title: "Enterprise Web Applications",
    excerpt:
      "Engineering modern, secure, and accessible web applications using Next.js, micro frontends, design systems, and API-first back-ends.",
    date: "2025-11-17",
    category: "Web Apps",
    readTime: "14 min read",
    image: "/images/services/enterprise-web-app.png",
    ogImage: "https://axorainfotech.com/services/images/enterprise-web-app.png",
    keywords: [
      "enterprise web applications",
      "next.js",
      "design systems",
      "micro frontends",
      "accessibility",
    ],
    benefits: [
      "Performance budgets and Core Web Vitals (CWV) SLOs",
      "Reusable design systems that accelerate delivery",
      "Security by design with least-privilege access",
      "Strong DX: monorepos, codegen, and CI automation",
      "Observability baked in: tracing, metrics, logs",
      "Internationalization and accessibility (WCAG) by default",
    ],
    useCases: [
      "Self-serve enterprise customer/partner portals",
      "Quote-to-cash and order management workflows",
      "Role-based analytics dashboards and admin consoles",
      "Field operations tools with offline-first capability",
      "Supplier, distributor, and marketplace control panels",
    ],
    content: [
      {
        heading: "Built for Scale",
        paragraphs: [
          "Our teams architect for scale, resilience, and observability across the stack with CI/CD and SRE practices.",
        ],
      },
      {
        heading: "Accessible by Default",
        paragraphs: [
          "WCAG compliance and inclusive design ensure your app works for all users and all devices.",
        ],
      },
      {
        heading: "Discovery & Architecture Vision",
        paragraphs: [
          "We start with outcome mapping, domain discovery, and architecture vision workshops to align stakeholders and de-risk early decisions.",
          "The output is a pragmatic target architecture with milestones, SLOs, and non-functional requirements covering performance, security, and compliance.",
        ],
      },
      {
        heading: "Tech Stack & Patterns",
        paragraphs: [
          "We leverage Next.js for SSR/SSG/ISR, TypeScript for type-safety, and modern styling systems with component libraries to maximize velocity.",
          "Where scale requires, we adopt micro frontends (Module Federation) and monorepos (Turborepo) to balance autonomy with governance.",
        ],
      },
      {
        heading: "API-First with DDD",
        paragraphs: [
          "We model domains using DDD and expose capabilities via clean, versioned APIs (REST/GraphQL) with explicit contracts and pagination semantics.",
          "Backends follow hexagonal architecture with clear boundaries, making features easier to test and evolve.",
        ],
      },
      {
        heading: "Performance & CWV",
        paragraphs: [
          "We budget for Core Web Vitals and measure them continuously. Techniques include code-splitting, prefetching, optimized images, and edge caching.",
          "We set thresholds for LCP, CLS, INP and optimize routing, hydration, and third-party script impact.",
        ],
      },
      {
        heading: "Security & Compliance",
        paragraphs: [
          "We implement defense-in-depth: CSP, secure headers, authZ/authN, secrets management, and rigorous input/output validation.",
          "SSO/SAML/OIDC, role matrices, audit logs, and compliance checklists (SOC2/GDPR) are part of our baseline.",
        ],
      },
      {
        heading: "Testing Strategy",
        paragraphs: [
          "We adopt a layered testing strategy: unit, integration, contract tests, and visual regression checks. Accessibility tests run in CI.",
          "Infrastructure and end-to-end tests validate deployments, canaries, and rollback paths.",
        ],
      },
      {
        heading: "Observability & SRE",
        paragraphs: [
          "We trace requests across services, collect metrics for golden signals, and instrument structured logs for production debugging.",
          "We define SLOs and error budgets to balance speed and reliability, with incident response runbooks and dashboards.",
        ],
      },
      {
        heading: "Legacy Modernization",
        paragraphs: [
          "We apply strangler patterns to iteratively replace legacy pages with modern micro frontends, reducing risk while delivering value continuously.",
          "API gateways and BFFs (backend-for-frontend) allow gradual cutover and consistent authentication/authorization.",
        ],
      },
      {
        heading: "i18n & Accessibility",
        paragraphs: [
          "We implement internationalization (i18n) with locale routing, RTL support, and localized content workflows.",
          "Accessible components, keyboard navigation, and semantic HTML maintain compliance and improve UX for all users.",
        ],
      },
      {
        heading: "Change Management & Documentation",
        paragraphs: [
          "We deliver living documentation: architecture decision records, API docs, and design system guidelines in Storybook.",
          "We coach teams on new workflows, governance, and contribution models to ensure long-term maintainability.",
        ],
      },
      {
        heading: "Engagement Models & Delivery",
        paragraphs: [
          "Choose staff augmentation, managed pods, or turnkey delivery. We run sprints with clear demos, retros, and stakeholder updates.",
          "We measure outcomes—activation, task completion, error rates, and performance baselines—to prove ROI.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you support legacy modernization?",
        answer:
          "Yes—strangler patterns, micro frontends, and API gateways let us migrate incrementally with minimal risk.",
      },
      {
        question: "How long does an enterprise web app project take?",
        answer:
          "Typical pilots run 6–10 weeks; full programs span 3–9 months depending on scope, integrations, and compliance needs.",
      },
      {
        question: "Which integrations do you support?",
        answer:
          "SAP, Oracle, Salesforce, HubSpot, Stripe, Braintree, Auth0, Okta, and custom line-of-business systems via API and event buses.",
      },
      {
        question: "Can you enforce multi-tenant isolation and BFF patterns?",
        answer:
          "Yes—BFFs per experience, RBAC, and tenancy-aware data access keep concerns isolated and predictable.",
      },
      {
        question: "How do you ensure performance and SEO?",
        answer:
          "We set CWV budgets, use SSR/ISR/edge rendering, and instrument synthetic + RUM monitoring to catch regressions early.",
      },
    ],
    caseStudy: {
      title: "Enterprise portal improved task completion by 26% and reduced support tickets by 33%",
      summary:
        "We delivered a Next.js portal with a design system, BFFs, and SSO—raising usability and cutting support burden.",
      results: [
        "Task Completion: +26%",
        "Support Tickets: -33%",
        "CWV Pass Rate: +41%",
      ],
      date: "2025-02-14",
    },
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    excerpt:
      "iOS and Android apps with offline-first, real-time sync, delightful UX, and analytics to grow activation and retention.",
    date: "2025-11-17",
    category: "Mobile",
    readTime: "13 min read",
    image: "/images/services/mobile-dev.png",
    ogImage: "https://axorainfotech.com/images/services/mobile-dev.png",
    keywords: [
      "mobile app development",
      "react native",
      "flutter",
      "ios android",
      "offline first",
    ],
    benefits: [
      "Faster releases with shared component libraries and design systems",
      "Crash-free sessions and superior performance with rigorous observability",
      "Growth loops and lifecycle messaging to improve retention and LTV",
      "Secure storage, encryption, and compliant data flows",
      "Offline-first experiences with conflict resolution and sync",
      "Continuous delivery with feature flags and staged rollouts",
    ],
    useCases: [
      "Consumer social and community apps",
      "Field workforce and inspections with offline sync",
      "Commerce and payments with subscriptions",
      "Customer self-serve portals and loyalty programs",
      "Logistics, delivery tracking, and driver apps",
    ],
    content: [
      {
        heading: "Native Performance",
        paragraphs: [
          "We choose the right stack—native (Swift/Kotlin) or cross‑platform (React Native/Flutter)—based on performance, cost, and time‑to‑market goals.",
          "Critical interactions such as animations, camera, and maps get native bridges or modules to ensure 60fps smoothness and responsiveness."
        ],
      },
      {
        heading: "Release Confidence",
        paragraphs: [
          "Feature flags, staged rollouts, and analytics ensure safe, data‑driven shipping across iOS and Android stores.",
          "We implement phased rollout strategies, cohort gating, and remote config to iterate quickly without costly hotfixes."
        ],
      },
      {
        heading: "Discovery & Product Strategy",
        paragraphs: [
          "We run outcome‑focused discovery to identify personas, jobs‑to‑be‑done, critical journeys, and success metrics.",
          "Backlogs are prioritized by impact, feasibility, and experimentation potential to achieve measurable results early."
        ],
      },
      {
        heading: "Architecture & Stack Choices",
        paragraphs: [
          "We define app architecture (modularization, navigation, state management) and select libraries for stability and long‑term maintainability.",
          "We align on state patterns (Redux/Zustand/Bloc), DI, and codegen to keep features predictable and testable."
        ],
      },
      {
        heading: "Offline‑First & Sync",
        paragraphs: [
          "We design for intermittent connectivity using local databases, durable queues, and background sync to prevent data loss.",
          "Conflict resolution strategies (last‑write‑wins, CRDTs, or merge policies) keep data consistent across devices."
        ],
      },
      {
        heading: "Real‑Time & Notifications",
        paragraphs: [
          "We implement real‑time updates via WebSockets/GraphQL subscriptions and push notifications for time‑sensitive flows.",
          "In‑app messaging, deep linking, and notification categorization improve engagement without spamming users."
        ],
      },
      {
        heading: "Security & Compliance",
        paragraphs: [
          "Sensitive data is encrypted at rest and in transit. We use secure keychains/keystores, certificate pinning, and robust auth flows.",
          "We adhere to privacy regulations (GDPR/CCPA), secure storage policies, and implement permission hygiene and data minimization."
        ],
      },
      {
        heading: "Analytics & Experimentation",
        paragraphs: [
          "Instrumentation tracks activation (AHA moments), retention cohorts, and feature adoption to steer the roadmap.",
          "We run A/B tests and remote experiments to optimize conversion, onboarding completion, and core action frequency."
        ],
      },
      {
        heading: "Growth & Lifecycle",
        paragraphs: [
          "We build lifecycle messaging (onboarding tips, nudges, win‑backs) through push and in‑app notifications tied to user events.",
          "Referral loops, rewards, and streaks are applied judiciously to reinforce value without dark patterns."
        ],
      },
      {
        heading: "Testing Strategy",
        paragraphs: [
          "We adopt unit, integration, snapshot/visual regression, and end‑to‑end tests on critical paths with device farms.",
          "Contract tests with back‑end APIs reduce integration defects; automated store pre‑checks catch policy issues early."
        ],
      },
      {
        heading: "Distribution & Store Ops",
        paragraphs: [
          "We streamline App Store/Play Store releases, provisioning, and signing; we use fastlane/CI to automate repetitive tasks.",
          "We plan phased rollout %, handle review feedback, and maintain clear release notes and compliance artifacts."
        ],
      },
      {
        heading: "Accessibility & Internationalization",
        paragraphs: [
          "Accessible components, larger touch targets, and text scaling ensure inclusive experiences.",
          "We implement i18n, locale routing, RTL, and content pipelines to support multi‑region launches."
        ],
      },
      {
        heading: "Performance & Observability",
        paragraphs: [
          "We budget for app size, TTI, layout stability, and jank; profiling guides optimizations where they matter.",
          "Crash reporting, distributed tracing, metrics, and logs help detect and fix issues before users are affected."
        ],
      },
      {
        heading: "Monetization & Compliance",
        paragraphs: [
          "We support one‑time purchases, subscriptions, and entitlements with clear fallback paths and restore flows.",
          "We align with store policies for in‑app purchases, privacy labels, and data usage disclosures."
        ],
      },
      {
        heading: "Team Enablement & Handover",
        paragraphs: [
          "We deliver living documentation, architecture decisions, and runbooks; we mentor teams in patterns and tooling.",
          "We ensure a smooth handover with CI pipelines, release playbooks, and error‑budget policies in place."
        ],
      },
    ],
    faqs: [
      {
        question: "Do you handle App Store/Play Store launches?",
        answer: "Yes—including provisioning, CI, TestFlight/internal tracks, phased rollouts, and review support.",
      },
      {
        question: "Which stacks do you recommend?",
        answer: "React Native or Flutter for shared codebases; Swift/Kotlin for performance‑critical paths; mixed approaches for the best of both worlds.",
      },
      {
        question: "How do you manage offline and sync?",
        answer: "Local DBs, background sync, retriable queues, and conflict resolution strategies tailored to your domain.",
      },
      {
        question: "How do you ensure performance and stability?",
        answer: "Profiling, performance budgets, device lab testing, and observability with proactive crash triage and SLAs.",
      },
    ],
    caseStudy: {
      title: "Mobile apps achieved 99.5% crash‑free sessions and +14% conversion",
      summary:
        "We rebuilt core flows with offline‑first patterns and introduced staged rollouts and observability for safer releases.",
      results: [
        "Crash‑Free Sessions: 99.5%",
        "Checkout Conversion: +14%",
        "App Size: -10%",
      ],
      date: "2025-01-30",
    },
  },
  {
    slug: "cloud-devops-automation",
    title: "Cloud & DevOps Automation",
    excerpt:
      "Automate delivery with Kubernetes, Terraform, and GitOps. Improve reliability, time-to-restore, and cloud spend with SRE and FinOps.",
    date: "2025-11-17",
    category: "Cloud & DevOps",
    readTime: "10 min read",
    image: "/images/services/cloud-eng.png",
    ogImage: "https://axorainfotech.com/images/services/cloud-eng.png",
    keywords: [
      "devops automation",
      "kubernetes",
      "terraform",
      "gitops",
      "sre",
      "finops",
    ],
    benefits: [
      "Shorter lead time for changes",
      "Higher deployment frequency",
      "Lower change failure rate",
    ],
    useCases: [
      "Platform engineering",
      "Observability and cost optimization",
      "Zero-downtime migrations",
    ],
    content: [
      {
        heading: "Platform as a Product",
        paragraphs: [
          "We build internal platforms that treat developers as customers—golden paths, templates, and self-serve infra."
        ],
      },
      {
        heading: "Observability & Reliability",
        paragraphs: [
          "SLOs, error budgets, tracing, and incident response drive predictable delivery and uptime."
        ],
      },
      {
        heading: "CI/CD & Release Automation",
        paragraphs: [
          "We standardize pipelines with trunk-based development, automated tests, security scans, and progressive delivery.",
          "Blue/green and canary strategies minimize risk while maintaining delivery speed.",
        ],
      },
      {
        heading: "GitOps & IaC",
        paragraphs: [
          "Declarative infrastructure (Terraform, Helm, Kustomize) with Git as the source of truth improves auditability and repeatability.",
          "Automated drift detection and policy-as-code prevent misconfigurations in production.",
        ],
      },
      {
        heading: "Platform Engineering",
        paragraphs: [
          "We create golden paths, reusable templates, and self-service portals to reduce cognitive load on teams.",
          "Developer portals centralize documentation, runbooks, and service catalogs for discoverability.",
        ],
      },
      {
        heading: "FinOps & Cost Controls",
        paragraphs: [
          "Unit economics dashboards track cost by service, environment, and tenant to guide rightsizing and commitments.",
          "Autoscaling policies, demand shaping, and efficient resource classes keep spend predictable.",
        ],
      },
      {
        heading: "Security & Compliance",
        paragraphs: [
          "Shift-left security integrates SAST/DAST, SBOMs, and vulnerability scanning into pipelines.",
          "Secrets management, network policies, and hardened images reduce attack surface across environments.",
        ],
      },
    ],
    faqs: [
      {
        question: "Multi-cloud or single-cloud?",
        answer: "We support AWS, Azure, GCP—single- or multi-cloud per your risk, cost, and compliance needs.",
      },
    ],
    caseStudy: {
      title: "DevOps platform reduced MTTR by 58% and change failure rate by 19%",
      summary:
        "We introduced GitOps, progressive delivery, and SLOs—raising reliability while keeping delivery fast.",
      results: [
        "MTTR: -58%",
        "Change Failure Rate: -19%",
        "Deployment Frequency: +1.8x",
      ],
      date: "2025-03-08",
    },
  },
  {
    slug: "data-engineering-analytics",
    title: "Data Engineering & Analytics",
    excerpt:
      "Modern data stacks with governed pipelines, real-time dashboards, and AI-assisted insights to drive decisions at speed.",
    date: "2025-11-17",
    category: "Data",
    readTime: "14 min read",
    image: "/images/services/data-eng.png",
    ogImage: "https://axorainfotech.com/images/services/data-eng.png",
    keywords: [
      "data engineering",
      "elt etl",
      "real-time analytics",
      "dbt",
      "snowflake",
      "lakehouse",
    ],
    benefits: [
      "Trusted single source of truth with clear data contracts",
      "Self‑serve analytics and governed semantic layers",
      "Near real‑time insights through streaming and CDC",
      "Lower cost via storage/compute decoupling and FinOps",
      "Higher data quality with tests and observability",
      "AI‑assisted insights and natural‑language querying",
    ],
    useCases: [
      "Executive dashboards and KPI scorecards",
      "Embedded analytics for customers and partners",
      "Streaming anomaly detection and alerting",
      "Revenue operations and product analytics",
      "Customer 360, churn/risk scoring, and CLTV modeling",
    ],
    content: [
      {
        heading: "Governed Data at Scale",
        paragraphs: [
          "We design schemas, data contracts, and testing for accuracy and compliance across batch and streaming. Contracts make upstream/downstream expectations explicit to prevent silent breaks.",
          "Domain ownership is enforced via data products with SLAs, versioning, lineage, and access policies—enabling dependable reuse across the org."
        ],
      },
      {
        heading: "Insights to Action",
        paragraphs: [
          "From BI dashboards to operational triggers, we connect insights to workflows that move metrics. We embed call‑to‑action buttons and alerting to shorten the time from insight to action.",
          "We implement semantic layers and headless BI so metrics definitions are consistent across teams and tools."
        ],
      },
      {
        heading: "Data Strategy & Roadmap",
        paragraphs: [
          "We align stakeholders on business questions, KPIs, and compliance requirements; we define a phased roadmap balancing quick wins with foundational work.",
          "We choose build vs. buy pragmatically and map tools to capabilities—ingestion, transformation, governance, catalog, and observability."
        ],
      },
      {
        heading: "Lakehouse & Warehouse Architecture",
        paragraphs: [
          "We implement lakehouse/warehouse patterns using decoupled storage and compute, supporting both BI and ML workloads.",
          "We organize bronze/silver/gold layers, enforce partitioning and clustering, and manage lifecycle policies to control cost."
        ],
      },
      {
        heading: "Ingestion & Change Data Capture",
        paragraphs: [
          "We use ELT/ETL pipelines and CDC from operational databases to keep analytics fresh without overloading sources.",
          "We build resilient connectors with retries, dead‑letter queues, and backpressure handling for durability."
        ],
      },
      {
        heading: "Transformation & Modeling (dbt)",
        paragraphs: [
          "We organize transformations using dbt, tests, and documentation. We standardize naming, folder structure, and macros for maintainability.",
          "Semantic models define business metrics, hierarchies, and slowly changing dimensions to support consistent reporting."
        ],
      },
      {
        heading: "Real‑Time & Streaming Analytics",
        paragraphs: [
          "For use cases that demand low latency (fraud detection, logistics tracking), we implement streaming with Kafka/Kinesis and materialized views.",
          "We balance freshness, correctness, and cost using windowing, upserts, and compaction strategies."
        ],
      },
      {
        heading: "Quality, Testing & Observability",
        paragraphs: [
          "Data tests (schema, freshness, uniqueness) and anomaly detection protect downstream consumers from bad data.",
          "We add lineage, ownership, and alerts to catch regressions quickly and support audits with confidence."
        ],
      },
      {
        heading: "Security & Compliance",
        paragraphs: [
          "We implement row/column‑level security, tokenization, and masking in accordance with privacy laws (GDPR/CCPA).",
          "Access is enforced via roles/attributes; PII handling and retention policies are automated with audit trails."
        ],
      },
      {
        heading: "Cost Optimization & FinOps",
        paragraphs: [
          "We monitor storage/compute cost drivers, adopt efficient file formats (Parquet/ORC), and tune clustering and compression.",
          "Workload governance (schedules, quotas, concurrency) and warehouse sizing policies keep spend predictable."
        ],
      },
      {
        heading: "ML Enablement",
        paragraphs: [
          "We shape features, maintain feature stores, and expose governed datasets for ML teams—bridging analytics to AI productization.",
          "We add model evaluation datasets and monitoring hooks to support continuous improvement and safe rollouts."
        ],
      },
    ],
    faqs: [
      {
        question: "Which tools do you use?",
        answer: "dbt, Snowflake/BigQuery, Kafka/Kinesis, Airflow, Fivetran/Stitch, Looker/Power BI/Superset, plus catalog/observability tools.",
      },
      {
        question: "How fresh can our data be?",
        answer: "Batch pipelines typically run 5–15 minutes; CDC/streaming can drive sub‑minute freshness depending on SLAs and cost tolerance.",
      },
      {
        question: "How do you handle privacy and compliance?",
        answer: "We implement RBAC/ABAC, masking, tokenization, consent tracking, retention policies, and audit trails to meet regulatory requirements.",
      },
      {
        question: "Can you migrate from legacy ETL to a modern stack?",
        answer: "Yes—phased migration with co‑existence; we map legacy jobs to dbt models and deprecate safely with lineage and tests.",
      },
    ],
    caseStudy: {
      title: "Modern data platform delivered <5 min freshness and +24% BI usage",
      summary:
        "We implemented CDC + dbt + a governed semantic layer with observability, raising trust and adoption.",
      results: [
        "Dashboard Freshness: <5 min",
        "Data Incidents: -43%",
        "BI Adoption: +24%",
      ],
      date: "2025-04-27",
    },
  },
  {
    slug: "intelligent-process-automation",
    title: "Intelligent Process Automation",
    excerpt:
      "Blend RPA, low-code, and AI assistants to orchestrate complex business workflows and remove manual work at scale.",
    date: "2025-11-17",
    category: "Automation",
    readTime: "12 min read",
    image: "/images/services/automation.png",
    ogImage:
      "https://axorainfotech.com/images/services/automation.png",
    keywords: [
      "intelligent automation",
      "rpa",
      "workflow automation",
      "low-code",
      "ai assistants",
    ],
    benefits: [
      "Lower operating costs with straight‑through processing",
      "Fewer errors and faster cycle times via standardized workflows",
      "Complete traceability and compliance with audit trails",
      "Human‑in‑the‑loop for exception handling and approvals",
      "Faster onboarding through low‑code and reusable components",
      "Better SLA adherence with real‑time monitoring and alerts",
    ],
    useCases: [
      "Invoice and AP automation with PO matching",
      "Policy underwriting and KYC enrichment",
      "Claims adjudication and appeals handling",
      "Order processing and fulfillment orchestration",
      "Customer support triage and knowledge search",
    ],
    content: [
      {
        heading: "Automate End-to-End",
        paragraphs: [
          "We identify high-ROI processes, redesign with automation, and deliver change management to scale adoption."
        ],
      },
      {
        heading: "Discovery & Process Mining",
        paragraphs: [
          "We start with shadowing sessions, event logs, and process mining to map as‑is flows and identify bottlenecks.",
          "We prioritize a backlog of automation candidates by ROI, complexity, and compliance risk, delivering quick wins first."
        ],
      },
      {
        heading: "Automation Stack (RPA, Low‑Code, APIs)",
        paragraphs: [
          "We blend RPA for UI‑level tasks, low‑code apps for human tasks/approvals, and API integrations for robust back‑end orchestration.",
          "This layered approach lets us automate legacy systems while building modern, maintainable services around them."
        ],
      },
      {
        heading: "Orchestration & BPMN",
        paragraphs: [
          "We design BPMN workflows with clear states, SLAs, and escalation paths; tasks are typed (human, bot, service) with idempotent handlers.",
          "Work queues, retries, and dead‑letter channels protect throughput and reliability at scale."
        ],
      },
      {
        heading: "Task/Process Mining & Optimization",
        paragraphs: [
          "We implement continuous telemetry to measure cycle time, touch time, and rework, feeding insights back into process improvement.",
          "Dashboards surface SLA breaches, queue backlogs, and exception hotspots to drive focused remediation."
        ],
      },
      {
        heading: "AI Assistants & NLP Search",
        paragraphs: [
          "AI copilots summarize documents, extract entities, and suggest next‑best actions; NLP search finds relevant policies and knowledge instantly.",
          "We embed guardrails and human verification steps where accuracy and compliance matter."
        ],
      },
      {
        heading: "Human‑in‑the‑Loop & Exceptions",
        paragraphs: [
          "We design exception handling with clear ownership, SLAs, and context‑rich task UIs to resolve breaks quickly.",
          "Feedback from exception flows is fed into rule updates and model retraining to reduce future breaks."
        ],
      },
      {
        heading: "Governance, Security & Compliance",
        paragraphs: [
          "We enforce RBAC/ABAC, audit trails, and data redaction; we separate duties across builder, reviewer, and approver roles.",
          "We align with regulatory requirements (e.g., SOC2, HIPAA, GDPR) and implement change control for automations."
        ],
      },
      {
        heading: "Change Management & Training",
        paragraphs: [
          "We deliver playbooks, training, and enablement for operations teams; we set up champions and feedback channels to ensure adoption.",
          "Runbooks and self‑service tools equip teams to operate and iterate automations safely without vendor bottlenecks."
        ],
      },
      {
        heading: "KPIs & ROI",
        paragraphs: [
          "We define KPIs—cycle time, first pass yield, error rate, throughput—and show before/after deltas to quantify ROI.",
          "We instrument dashboards and alerts so leadership can track automation health and business impact continuously."
        ],
      },
    ],
    faqs: [
      {
        question: "Which RPA/automation tools do you use?",
        answer: "UiPath, Automation Anywhere, Power Automate, and custom workers/services; Camunda/Temporal for orchestration where needed.",
      },
      {
        question: "How do you choose what to automate?",
        answer: "We use process mining and ROI scoring—volume, variability, error rate, and compliance risk—to prioritize candidates.",
      },
      {
        question: "What is a typical ROI timeline?",
        answer: "Initial wins in 4–8 weeks for targeted workflows; broader programs show 30–60% cycle time reduction over 1–2 quarters.",
      },
      {
        question: "Can automations integrate with ERP/CRM?",
        answer: "Yes—APIs, event buses, or RPA where no APIs exist; we favor API‑first patterns for long‑term resilience.",
      },
      {
        question: "How are exceptions handled?",
        answer: "Human‑in‑the‑loop UIs with contextual data, standard operating procedures, and escalation paths; learnings feed continuous improvement.",
      },
    ],
    caseStudy: {
      title: "Automation program achieved 45% cycle time reduction and 37% error reduction",
      summary:
        "We combined RPA, low‑code apps, and APIs with BPMN orchestration and continuous telemetry.",
      results: [
        "Cycle Time: -45%",
        "Error Rate: -37%",
        "Throughput: +1.6x",
      ],
      date: "2025-05-18",
    },
  },
  {
    slug: "digital-commerce-marketplaces",
    title: "Digital Commerce & Marketplaces",
    excerpt:
      "Headless commerce, personalization, and marketplace engines that drive conversion and lifetime value.",
    date: "2025-11-17",
    category: "Commerce",
    readTime: "13 min read",
    image: "/images/services/e-commerce.png",
    ogImage:
      "https://axorainfotech.com/images/services/e-commerce.png",
    keywords: [
      "headless commerce",
      "marketplaces",
      "personalization",
      "growth",
    ],
    benefits: [
      "Faster page speeds and higher conversion via headless, edge‑cached storefronts",
      "Personalized journeys with recommendations, bundles, and targeted promos",
      "Omnichannel operations across web, mobile, retail, and marketplaces",
      "Better merchandising control and experimentation velocity",
      "Lower total cost with composable services and vendor independence",
      "Marketplace governance: onboarding, KYC, SLAs, and dispute handling",
    ],
    useCases: [
      "B2C D2C storefronts with subscriptions and loyalty",
      "B2B portals with contract pricing, approvals, and punchout",
      "Two‑sided marketplaces with seller onboarding/KYC and payouts",
      "Headless storefronts on Next.js with commerce APIs",
      "International storefronts with localized pricing, tax, and content",
    ],
    content: [
      {
        heading: "Headless by Design",
        paragraphs: [
          "Composable architectures give you flexibility, speed, and experimentation without platform lock‑in. We separate the experience layer (Next.js) from commerce engines (Shopify/CommerceTools/Medusa/Custom) to iterate independently.",
          "This enables fast A/B tests, personalized content, and performance optimizations while preserving a clean domain model for catalog, cart, checkout, and orders."
        ],
      },
      {
        heading: "Storefront Performance & SEO",
        paragraphs: [
          "We optimize Core Web Vitals using edge rendering, route prefetch, image/CDN optimization, and script hygiene—directly impacting organic traffic and conversion.",
          "Structured data (Product, Offer, Breadcrumb, Review) powers rich results; sitemaps and hreflang improve discovery for international sites."
        ],
      },
      {
        heading: "Personalization & Merchandising",
        paragraphs: [
          "We implement recommendations (related, frequently bought together), dynamic bundles, and personalized collections based on behavior and segments.",
          "Campaign tooling lets merchandisers control collections, badges, banners, and promotions without developer intervention."
        ],
      },
      {
        heading: "Search & Discovery",
        paragraphs: [
          "We build fast, typo‑tolerant, facet‑aware search with synonyms, boosts, and business rules; we use vector search for semantic results where needed.",
          "Collection pages support facets, infinite scroll/pagination, and caching strategies tuned for freshness vs speed."
        ],
      },
      {
        heading: "Checkout, Payments & Tax",
        paragraphs: [
          "We design a frictionless checkout with address validation, wallets, and saved payments; we support subscriptions and BNPL where applicable.",
          "We integrate payment gateways (Stripe, Adyen), fraud checks, and tax engines (Avalara) with clear decline/timeout handling."
        ],
      },
      {
        heading: "Catalog, PIM & Content",
        paragraphs: [
          "We model product hierarchies, variants, and attributes in PIM and sync to storefronts; content (CMS) drives landing pages and campaigns.",
          "Bulk import/export, validation, and enrichment pipelines keep catalog data clean and discoverable."
        ],
      },
      {
        heading: "Marketplace Operations",
        paragraphs: [
          "We implement seller onboarding, KYC, listings management, pricing rules, SLAs, and dispute workflows.",
          "Payouts, commissions, and statements are automated; compliance and monitoring ensure a healthy marketplace."
        ],
      },
      {
        heading: "OMS, Inventory & Fulfillment",
        paragraphs: [
          "We integrate OMS/WMS for order splitting, partial fulfillment, returns, and exchanges; inventory is synchronized with safety stock and backorder policies.",
          "Carrier integrations support multi‑carrier rate shopping, labels, and tracking with proactive notifications."
        ],
      },
      {
        heading: "Internationalization & Compliance",
        paragraphs: [
          "Localized currency, tax/VAT, shipping methods, and content; GDPR/CCPA compliance and data residency where required.",
          "Hreflang, localized sitemaps, and canonical rules prevent duplicate content across locales."
        ],
      },
      {
        heading: "Analytics, CRO & Experimentation",
        paragraphs: [
          "We instrument funnels (browse→product→cart→checkout→purchase) and run A/B tests to improve add‑to‑cart and conversion rates.",
          "We analyze search zero‑results, facet usage, and PDP engagement to drive backlog priorities that move revenue."
        ],
      },
      {
        heading: "Security & Fraud",
        paragraphs: [
          "We enforce CSP, secure cookies, and auth best practices; we integrate fraud detection and velocity limits for sensitive endpoints.",
          "We log critical actions and maintain audit trails for compliance and dispute resolution."
        ],
      },
      {
        heading: "Operational Playbooks",
        paragraphs: [
          "Runbooks cover catalog refresh, campaign set‑up, incident response, and rollback procedures with clear SLAs and ownership.",
          "Dashboards track revenue, conversion, AOV, returns, and marketplace health to inform weekly trading decisions."
        ],
      },
    ],
    faqs: [
      {
        question: "Do you implement Shopify/CommerceTools?",
        answer: "Yes—plus Medusa/Custom engines; we integrate PIM, CMS, OMS, and payment/tax providers in a composable stack.",
      },
      {
        question: "How do you improve conversion rate (CVR)?",
        answer: "Faster CWV, clearer PDPs, better search/merchandising, and checkout simplification; we A/B test changes and ship proven winners.",
      },
      {
        question: "Can you support B2B features?",
        answer: "Yes—contract pricing, quotes, approvals, account hierarchies, and PO flows are standard in our B2B builds.",
      },
      {
        question: "How do you manage internationalization?",
        answer: "Localized catalogs, currencies, taxes, and content with hreflang and region‑aware routing; we handle compliance obligations per region.",
      },
    ],
    caseStudy: {
      title: "Headless commerce improved conversion by 16% and AOV by 11%",
      summary:
        "We shipped a Next.js headless storefront with optimized CWV, better search/merchandising, and streamlined checkout.",
      results: [
        "Conversion Rate: +16%",
        "Average Order Value: +11%",
        "Organic Sessions: +19%",
      ],
      date: "2025-02-06",
    },
  },
  {
    slug: "seo-growth-marketing",
    title: "SEO & Growth Marketing",
    excerpt:
      "Technical SEO, content systems, and analytics to drive compounding organic growth across your funnels.",
    date: "2025-11-17",
    category: "Growth",
    readTime: "14 min read",
    image: "/images/services/seo.png",
    ogImage: "https://axorainfotech.com/images/services/seo.png",
    keywords: [
      "technical seo",
      "content marketing",
      "cro",
      "growth analytics",
    ],
    benefits: [
      "Higher organic rankings and non‑branded traffic via technical excellence",
      "Compounding growth with content systems and programmatic SEO",
      "Better conversion through CRO, UX polish, and performance wins",
      "Accurate measurement: analytics, attribution, and experimentation",
      "International growth with hreflang, localization, and site architecture",
      "Sustainable link earning and digital PR to build authority",
    ],
    useCases: [
      "Topic clusters to build topical authority and capture demand",
      "Programmatic SEO for long‑tail, templated landing pages",
      "E‑commerce SEO: faceted navigation, PDP/PCLP optimization",
      "International SEO with language/region strategy and hreflang",
      "CRO programs: A/B/n tests on nav, PDP, checkout, and forms",
    ],
    content: [
      {
        heading: "SEO that Compounds",
        paragraphs: [
          "We treat SEO as a system, not a one‑off project. We fix crawl blockers, optimize site architecture, and implement structured data to earn rich results and clicks.",
          "With a scalable content program—topic clusters, briefs, and editorial operations—you’ll capture demand consistently while building brand authority."
        ],
      },
      {
        heading: "Technical SEO Foundations",
        paragraphs: [
          "We audit and remediate crawlability, indexation, canonicalization, and internal linking patterns to help bots discover what matters.",
          "We optimize Core Web Vitals (LCP, INP, CLS) using code‑splitting, prefetching, image/CDN strategies, and script hygiene—improving SEO and UX simultaneously."
        ],
      },
      {
        heading: "Information Architecture & Internal Linking",
        paragraphs: [
          "We design hub‑and‑spoke architectures and breadcrumb patterns so equity flows to the right pages, increasing topical relevance.",
          "Automated related‑content blocks and sitemaps keep your graph fresh and discoverable as the site scales."
        ],
      },
      {
        heading: "Content Systems & Editorial Ops",
        paragraphs: [
          "We build content engines: keyword research, briefs, outlines, and editorial QA. AI tooling accelerates drafts, but human editors ensure quality and E‑E‑A‑T.",
          "We define voice/tone, snippet optimization, and internal link targets for every piece to maximize discoverability and conversion."
        ],
      },
      {
        heading: "Programmatic SEO (Safely)",
        paragraphs: [
          "We identify repeatable intent patterns and generate templated landing pages with high‑quality inputs (curated datasets, real value).",
          "We safeguard against thin/duplicate content with deduplication, unique value components, and careful internal linking."
        ],
      },
      {
        heading: "E‑E‑A‑T & Topical Authority",
        paragraphs: [
          "We improve author/entity signals, policies, and references; we add expert bios, citations, and transparent sourcing.",
          "We map and fill topical gaps with cluster content until your domain is the clear authority across priority themes."
        ],
      },
      {
        heading: "Structured Data & Rich Results",
        paragraphs: [
          "We implement schema (Organization, Product, Article, FAQ, Breadcrumb, Sitelinks Searchbox, etc.) aligned with page types for richer SERP features.",
          "We validate with Search Console and structured data testing tools; we monitor impressions/CTR uplifts post launch."
        ],
      },
      {
        heading: "International SEO",
        paragraphs: [
          "We plan language/region site strategies, set hreflang and canonical rules, and localize content, currencies, and metadata.",
          "We prevent duplicate content across locales and align sitemaps for efficient discovery."
        ],
      },
      {
        heading: "Analytics, Attribution & Experimentation",
        paragraphs: [
          "We implement privacy‑compliant analytics, server‑side tagging if needed, and robust event taxonomies so growth is measurable.",
          "We run controlled experiments (A/B/n) on titles, snippets, layouts, and CTAs—shipping proven winners."
        ],
      },
      {
        heading: "CRO & Performance",
        paragraphs: [
          "We pair SEO with CRO: improving navigation clarity, PDP/PCLP content, forms, and microcopy to lift conversion and revenue.",
          "Performance budgets and monitoring keep CWV healthy as features evolve."
        ],
      },
      {
        heading: "Link Earning & Digital PR",
        paragraphs: [
          "We pursue ethical link earning via thought leadership, data studies, partnerships, and targeted outreach—no spammy tactics.",
          "We track referring domains, topical relevance, and anchor diversity to build durable authority."
        ],
      },
      {
        heading: "Migration & Risk Management",
        paragraphs: [
          "For redesigns and replatforms, we build 301 maps, preserve signals, and run pre/post launch checks to avoid traffic drops.",
          "We monitor coverage, errors, and rankings, triaging regressions quickly."
        ],
      },
    ],
    faqs: [
      {
        question: "How long until we see results?",
        answer: "Early technical/CWV fixes can move the needle in weeks; content authority and links compound over 3–6+ months depending on competition.",
      },
      {
        question: "Do you help with backlinks?",
        answer: "Yes—ethical link earning via content and partnerships; no PBNs or spammy tactics that risk penalties.",
      },
      {
        question: "Is programmatic SEO risky?",
        answer: "We only ship programmatic pages with real user value, deduping thin/duplicate content and ensuring unique elements and demand fit.",
      },
      {
        question: "Will site speed affect rankings and revenue?",
        answer: "Yes—CWV impacts SEO and UX. Our performance budgets and monitoring tie speed investments directly to conversion gains.",
      },
      {
        question: "Can you support international SEO?",
        answer: "Yes—localized content, hreflang/canonicals, and region‑aware sitemaps to scale safely across markets.",
      },
    ],
    caseStudy: {
      title: "SEO/CRO program increased non‑brand clicks by 38% and CR by 12%",
      summary:
        "We paired technical SEO + content systems with CRO experiments to lift discoverability and conversion.",
      results: [
        "Non‑Brand Clicks: +38%",
        "Page Speed CWV Pass Rate: +27%",
        "Checkout Conversion: +12%",
      ],
      date: "2025-06-21",
    },
  },
];
