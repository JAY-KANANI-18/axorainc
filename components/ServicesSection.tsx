import Link from "next/link";
import React from "react";

const services = [
  {
    title: "AI Product Engineering",
    anchor: "service-ai-product",
    description:
      "Design, build, and iterate AI-native applications that blend machine learning, computer vision, and generative AI to automate critical decision making.",
    focusAreas: ["ML Ops", "Generative AI", "Vision AI"],
    icon: "🤖",
  },
  {
    title: "Custom SaaS Platforms",
    anchor: "service-saas-platforms",
    description:
      "Launch subscription-based products faster with multitenant architectures, billing, analytics, and scalable cloud foundations.",
    focusAreas: ["Multitenancy", "Billing Engines", "Product Roadmaps"],
    icon: "🚀",
  },
  {
    title: "CRM Modernization",
    anchor: "service-crm-modernization",
    description:
      "Reimagine customer journeys with tailored CRM workflows, intelligent automation, and integrations across sales, support, and marketing stacks.",
    focusAreas: ["Salesforce", "HubSpot", "Custom CRM"],
    icon: "🧠",
  },
  {
    title: "Enterprise Web Applications",
    anchor: "service-enterprise-web",
    description:
      "Craft secure, high-performing web platforms with future-ready architectures, micro frontends, and design systems.",
    focusAreas: ["Next.js", "Micro Frontends", "Design Systems"],
    icon: "🏗️",
  },
  {
    title: "Mobile App Development",
    anchor: "service-mobile-apps",
    description:
      "Deliver native and cross-platform experiences tuned for performance, offline-first usage, and delightful UX across devices.",
    focusAreas: ["iOS & Android", "Flutter", "React Native"],
    icon: "📱",
  },
  {
    title: "Cloud & DevOps Automation",
    anchor: "service-cloud-devops",
    description:
      "Automate deployments, observability, and resilience across AWS, Azure, and GCP with infrastructure-as-code and FinOps best practices.",
    focusAreas: ["IaC", "Kubernetes", "FinOps"],
    icon: "☁️",
  },
  {
    title: "Data Engineering & Analytics",
    anchor: "service-data-engineering",
    description:
      "Unlock insights with modern data stacks, governed pipelines, real-time dashboards, and AI-assisted analytics experiences.",
    focusAreas: ["Modern Data Stack", "ETL/ELT", "BI Dashboards"],
    icon: "📊",
  },
  {
    title: "Intelligent Process Automation",
    anchor: "service-automation",
    description:
      "Streamline operations by blending RPA, low-code, and AI assistants to orchestrate complex business workflows end-to-end.",
    focusAreas: ["Hyperautomation", "RPA", "Workflow Design"],
    icon: "⚙️",
  },
  {
    title: "Digital Commerce & Marketplaces",
    anchor: "service-commerce",
    description:
      "Build conversion-first eCommerce and marketplace experiences with headless architectures, personalization, and analytics.",
    focusAreas: ["Headless Commerce", "Personalization", "Growth"],
    icon: "🛒",
  },
  {
    title: "SEO & Growth Marketing",
    anchor: "service-seo-growth",
    description:
      "Accelerate organic and paid acquisition with technical SEO, content marketing, conversion optimization, and analytics insights.",
    focusAreas: ["Technical SEO", "Content Ops", "CRO"],
    icon: "📈",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-600 text-sm font-medium mb-6">
            Full-Service Delivery Across the Product Lifecycle
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Enterprise-Grade Services Tailored to Your Vision
          </h2>
          <p className="text-lg text-slate-600">
            Partner with a multidisciplinary team covering strategy, design, engineering,
            go-to-market, and ongoing optimization. Every engagement is anchored in
            measurable outcomes and AI-led innovation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              id={service.anchor}
              key={service.anchor}
              className="group relative h-full bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-white to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 space-y-5">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-100 text-2xl">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Book a discovery call
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

export default ServicesSection;
