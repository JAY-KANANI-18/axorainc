import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Nav from "@/components/Nav";

const positions = [
  {
    title: "Senior React Engineer",
    location: "Remote / Ahmedabad, India",
    type: "Full-time",
    description:
      "Lead experiential web projects, design component libraries, and collaborate with product squads building enterprise-grade SaaS platforms.",
    pillars: ["Next.js 14", "Design Systems", "Performance"],
  },
  {
    title: "Product Designer (SaaS)",
    location: "Hybrid - Ahmedabad, India",
    type: "Full-time",
    description:
      "Craft intuitive workflows across web and mobile. Combine research, systems thinking, and polished UI craft for AI-assisted products.",
    pillars: ["UX Research", "Design Systems", "Prototyping"],
  },
  {
    title: "AI Solutions Architect",
    location: "Remote / Global",
    type: "Contract-to-Hire",
    description:
      "Architect practical AI systems spanning LLMs, computer vision, and MLOps while guiding clients from discovery to deployment.",
    pillars: ["LLMs", "Vision AI", "MLOps"],
  },
  {
    title: "Senior Node.js Engineer",
    location: "Remote - India",
    type: "Full-time",
    description:
      "Build resilient APIs, microservices, and event pipelines powering multi-tenant SaaS and CRM platforms.",
    pillars: ["Node.js", "Event-driven", "Cloud"],
  },
];

const cultureHighlights = [
  {
    title: "Product Mindset",
    description:
      "Every team member collaborates with strategy and design to solve meaningful problems and ship measurable outcomes.",
  },
  {
    title: "Learning Culture",
    description:
      "Weekly guilds, brown-bag sessions, and sponsored certifications keep skills sharp across AI, cloud, and engineering.",
  },
  {
    title: "Flexible Remote",
    description:
      "Hybrid work model with remote-first processes, collaboration rituals, and thoughtfully planned in-person meetups.",
  },
  {
    title: "Wellness Focus",
    description:
      "Comprehensive health coverage, mental wellness days, and generous leave that recharges creativity.",
  },
];

const Careers: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Careers at Axora Infotech | Build the Future of Intelligent Products
        </title>
        <meta
          name="description"
          content="Join Axora Infotech to build AI-powered SaaS, CRM, and digital platforms. Explore openings for engineers, designers, product strategists, and cloud experts."
        />
        <link rel="canonical" href="https://axorainfotech.com/careers" />
      </Head>

      <div className="min-h-screen flex flex-col bg-white">
        <Nav />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900"></div>
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]"></div>

            <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-blue-500/20 text-blue-200 rounded-full text-sm font-semibold">
                  WE'RE HIRING
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Join the Team Building AI-Driven SaaS & Digital Platforms
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
                At Axora Infotech, technologists, designers, and strategists
                collaborate to create products that blend AI, cloud, and
                human-centered design. We partner with global brands to deliver
                delightful customer experiences—and we're growing fast.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="#openings"
                  className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-all"
                >
                  View Open Positions
                </Link>
                <Link
                  href="mailto:careers@axorainfotech.com"
                  className="px-8 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
                >
                  Send Your Portfolio
                </Link>
              </div>
            </div>
          </section>

          {/* Culture Section */}
          <section id="culture" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 max-w-6xl">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Life at Axora Infotech
                </h2>
                <p className="text-lg text-slate-600">
                  We believe teams ship their best work when they feel
                  empowered, supported, and connected to the mission.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                {cultureHighlights.map((highlight) => (
                  <div
                    key={highlight.title}
                    className="bg-white border border-slate-200 rounded-xl p-8 hover:border-slate-300 hover:shadow-lg transition-all"
                  >
                    <h3 className="text-2xl font-bold mb-3 text-slate-900">
                      {highlight.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Open Positions */}
          <section id="openings" className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-block mb-6">
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    Now hiring across product, design, and engineering
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Open Roles
                </h2>
                <p className="text-lg text-slate-600">
                  Don't see the perfect role? We're always excited to meet
                  builders. Reach out at careers@axorainfotech.com.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {positions.map((role) => (
                  <div
                    key={role.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-8 hover:border-slate-300 hover:shadow-lg transition-all"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-sm font-medium">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                          {role.type}
                        </span>
                        <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full">
                          {role.location}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {role.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {role.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {role.pillars.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1 bg-white border border-slate-200 text-slate-700 rounded-full text-xs font-semibold"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      <Link
                        href="mailto:careers@axorainfotech.com"
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                      >
                        Apply now
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

          {/* CTA Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-6 max-w-4xl text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Not ready to apply yet?
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Join our talent network for insider updates on new roles,
                events, and product launches. Share your profile and we'll reach
                out when an opportunity aligns.
              </p>
              <Link
                href="https://forms.gle/axora-talent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-all"
              >
                Join the talent network
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Careers;
