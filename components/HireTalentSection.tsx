import Link from "next/link";
import React from "react";

const roles = [
  {
    title: "Hire React Developers",
    anchor: "hire-react-developers",
    description:
      "Build lightning-fast interfaces, PWAs, and design systems with senior React engineers experienced in enterprise-scale applications.",
    skills: ["React 18", "Next.js", "TypeScript"],
    icon: "⚛️",
  },
  {
    title: "Hire Node.js Developers",
    anchor: "hire-nodejs-developers",
    description:
      "Deliver resilient APIs, microservices, and event-driven architectures powered by modern Node.js stacks.",
    skills: ["NestJS", "Express", "Serverless"],
    icon: "🟢",
  },
  {
    title: "Hire Next.js Engineers",
    anchor: "hire-nextjs-engineers",
    description:
      "Ship production-ready Next.js platforms optimized for SEO, edge delivery, and omnichannel experiences.",
    skills: ["App Router", "ISR", "Vercel"],
    icon: "🧭",
  },
  {
    title: "Hire Full-Stack Teams",
    anchor: "hire-fullstack-teams",
    description:
      "Assemble cross-functional squads covering UX, front-end, back-end, QA, and product leadership to accelerate roadmaps.",
    skills: ["Agile Pods", "Product Strategy", "QA Automation"],
    icon: "🧑‍🤝‍🧑",
  },
  {
    title: "Hire Mobile App Developers",
    anchor: "hire-mobile-developers",
    description:
      "Launch iOS, Android, and cross-platform apps with engaging UX, offline-first capability, and analytics instrumentation.",
    skills: ["Swift", "Kotlin", "Flutter"],
    icon: "📱",
  },
  {
    title: "Hire DevOps & SRE Experts",
    anchor: "hire-devops-experts",
    description:
      "Implement CI/CD, observability, and cloud governance to deliver reliable, scalable software delivery pipelines.",
    skills: ["Kubernetes", "Terraform", "AWS/GCP"],
    icon: "⚙️",
  },
  {
    title: "Hire Data Engineers",
    anchor: "hire-data-engineers",
    description:
      "Design modern data platforms, streaming pipelines, and governed warehouses driving analytics-led decision making.",
    skills: ["dbt", "Snowflake", "Kafka"],
    icon: "📊",
  },
  {
    title: "Hire UI/UX Designers",
    anchor: "hire-uiux-designers",
    description:
      "Elevate customer journeys with research-backed UX, component libraries, and accessible design systems.",
    skills: ["Design Systems", "Figma", "Interaction Design"],
    icon: "🎨",
  },
  {
    title: "Hire QA Automation Engineers",
    anchor: "hire-qa-automation",
    description:
      "Safeguard quality with automated test suites, performance benchmarking, and release readiness metrics.",
    skills: ["Cypress", "Playwright", "Performance Testing"],
    icon: "✅",
  },
  {
    title: "Hire AI & ML Specialists",
    anchor: "hire-ai-ml-specialists",
    description:
      "Prototype and productionize AI solutions covering LLMs, computer vision, NLP, and predictive analytics.",
    skills: ["LLMs", "Computer Vision", "MLOps"],
    icon: "🤖",
  },
];

const HireTalentSection: React.FC = () => {
  return (
    <section id="hire" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium mb-6">
            Dedicated pods tailored to your roadmap
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hire Elite Product Teams & Specialists On Demand
          </h2>
          <p className="text-lg text-blue-100">
            Scale engineering velocity with vetted experts embedded within your workflows. Flexible engagement models span staff augmentation, agile pods, and turnkey delivery squads.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {roles.map((role) => (
            <div
              id={role.anchor}
              key={role.anchor}
              className="group relative h-full bg-white/5 border border-white/15 rounded-3xl p-8 backdrop-blur-sm hover:border-blue-300/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 space-y-5">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-500/20 text-2xl">
                  {role.icon}
                </div>
                <div className="text-2xl font-semibold text-white">
                  {role.title}
                </div>
                <p className="text-blue-100 leading-relaxed">
                  {role.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/10 text-blue-100 rounded-full text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-blue-200 font-semibold hover:text-white transition-colors"
                >
                  Get started
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireTalentSection;
