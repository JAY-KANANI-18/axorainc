import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import { services } from "../../data/services";
import EnquiryForm from "../../components/EnquiryForm";
import { FaArrowLeftLong } from "react-icons/fa6";
import Nav from "@/components/Nav";
const ServicesIndex: NextPage = () => {
  const title = "Services | Axora Infotech";
  const description =
    "Explore Axora Infotech's services: AI Product Engineering, Custom SaaS Development, CRM Modernization, Enterprise Web Apps, Mobile Apps, Cloud & DevOps Automation, Data Engineering & Analytics, Intelligent Process Automation, Digital Commerce, and SEO & Growth.";
  const canonical = "https://axorainfotech.com/services";
  const highlights = services
    .filter((s) => s.caseStudy && s.caseStudy.results?.length)
    .flatMap((s) =>
      s.caseStudy!.results.map((r) => ({ service: s.title, metric: r }))
    )
    .slice(0, 6);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta
          property="og:image"
          content="https://axorainfotech.com/og-image.jpg"
        />
        <meta property="og:site_name" content="Axora Infotech" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://axorainfotech.com/og-image.jpg"
        />
        <meta name="twitter:site" content="@AxoraInfotech" />

        {/* JSON-LD ItemList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: services.map((s, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `https://axorainfotech.com/services/${s.slug}`,
                name: s.title,
              })),
            }),
          }}
        />

        {/* Breadcrumbs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://axorainfotech.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Services",
                  item: canonical,
                },
              ],
            }),
          }}
        />

        {/* JSON-LD: ContactPoint (all services index) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Axora Infotech",
              url: "https://axorainfotech.com",
              logo: "https://axorainfotech.com/axora-full-main.png",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "Sales",
                  areaServed: "Worldwide",
                  availableLanguage: ["English"],
                  url: "https://axorainfotech.com/#contact",
                },
              ],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen flex flex-col bg-white">
        <Nav />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900"></div>
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]"></div>
            
            <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
              <div className="inline-block mb-6">
                <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-200 text-sm font-semibold">
                  WHAT WE DO
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Full-stack product delivery across AI, SaaS, web, mobile, cloud,
                and data—designed to move metrics.
              </p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group block bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="h-48 w-full relative overflow-hidden bg-slate-100">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                        {s.title}
                      </h2>
                      <p className="text-slate-600 line-clamp-3 mb-4">{s.excerpt}</p>
                      <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm">
                        Learn more
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Impact Section */}
              {highlights.length > 0 && (
                <div className="mt-20">
                  <div className="text-center mb-12">
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                      Impact We've Delivered
                    </h3>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                      Real results from real projects
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {highlights.map((h, i) => (
                      <div
                        key={`${h.service}-${i}`}
                        className="bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 mb-1">{h.metric}</div>
                            <div className="text-slate-600 text-sm">{h.service}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-16 text-center">
                <a
                  href="#enquiry"
                  className="inline-block px-10 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all"
                >
                  Book Strategy Call
                </a>
              </div>
            </div>
          </section>

          {/* Enquiry Form */}
          <section className="py-20 bg-white" id="enquiry">
            <div className="container mx-auto px-6 max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Start Your Project
                </h2>
                <p className="text-lg text-slate-600">
                  Let's discuss how we can help you achieve your goals
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <EnquiryForm
                  context={{
                    category: "Services",
                    pageSlug: "services",
                    pageTitle: "Services",
                  }}
                />
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServicesIndex;
