import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import { services, ServicePage } from "../../data/services";
import EnquiryForm from "../../components/EnquiryForm";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";

interface Props {
  service: ServicePage;
}

const ServiceLandingPage: NextPage<Props> = ({ service }) => {
  const title = `${service.title} | Services | Axora Infotech`;
  const description = service.excerpt;
  const canonical = `https://axorainfotech.com/services/${service.slug}`;
  const ogImage = service.ogImage || "https://axorainfotech.com/og-image.jpg";
  const keywords = service.keywords.join(", ");
  const router = useRouter();

  const otherServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 6);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content={service.title} />
        <meta property="og:site_name" content="Axora Infotech" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content={service.title} />
        <meta name="twitter:site" content="@AxoraInfotech" />
        <meta name="twitter:creator" content="@AxoraInfotech" />

        {/* JSON-LD: Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: service.title,
              serviceType: service.title,
              description: service.excerpt,
              areaServed: "Worldwide",
              provider: {
                "@type": "Organization",
                name: "Axora Infotech",
                url: "https://axorainfotech.com",
                logo: "https://axorainfotech.com/axora-full-main.png",
              },
              url: canonical,
              offers: {
                "@type": "Offer",
                price: "Contact for pricing",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
              keywords: service.keywords,
            }),
          }}
        />

        {/* JSON-LD: FAQ */}
        {service.faqs?.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: service.faqs.map((f) => ({
                  "@type": "Question",
                  name: f.question,
                  acceptedAnswer: { "@type": "Answer", text: f.answer },
                })),
              }),
            }}
          />
        )}

        {/* JSON-LD: Breadcrumbs */}
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
                  item: "https://axorainfotech.com/services",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: service.title,
                  item: canonical,
                },
              ],
            }),
          }}
        />

        {/* JSON-LD: ContactPoint (all services) */}
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

        {/* JSON-LD: CaseStudy (if present) */}
        {service.caseStudy && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "CaseStudy",
                headline: service.caseStudy.title,
                description: service.caseStudy.summary,
                datePublished: service.caseStudy.date || service.date,
                url: canonical,
                mainEntityOfPage: canonical,
                author: { "@type": "Organization", name: "Axora Infotech" },
                publisher: {
                  "@type": "Organization",
                  name: "Axora Infotech",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://axorainfotech.com/axora-full-main.png",
                  },
                },
                image:
                  service.ogImage || "https://axorainfotech.com/og-image.jpg",
                keywords: service.keywords,
                articleSection: "Results",
                text: service.caseStudy.results?.join(" | "),
              }),
            }}
          />
        )}
      </Head>

      <div className="min-h-screen flex flex-col">
        <Nav  />

        <main className="flex-grow bg-white">
          {/* Hero Section */}
          <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900"></div>
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]"></div>
            
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
              <div className="mb-8">
                <button
                  onClick={() => router.back()}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg transition-all"
                >
                  <FaArrowLeftLong />
                  <span>Back</span>
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-sm font-semibold">
                      {service.category}
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    {service.title}
                  </h1>
                  <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                    {service.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#enquiry"
                      className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-all"
                    >
                      Book Strategy Call
                    </a>
                    <a
                      href="/blog"
                      className="px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
                    >
                      Read Case Studies
                    </a>
                  </div>
                </div>
                <div>
                  <Image
                    src={service.image || "/axora-full-main.png"}
                    alt={service.title}
                    width={1200}
                    height={800}
                    className="rounded-2xl shadow-2xl w-full h-auto border border-white/10"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-12 prose-p:text-slate-700 prose-p:leading-relaxed">
                {service.content.map((sec) => (
                  <section key={sec.heading} className="mb-12">
                    <h2 className="text-slate-900">{sec.heading}</h2>
                    {sec.paragraphs.map((p, i) => (
                      <p key={i} className="mb-4">{p}</p>
                    ))}
                  </section>
                ))}
              </div>

              {/* Benefits & Use Cases */}
              <div className="mt-16 grid md:grid-cols-2 gap-8">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-slate-900">
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-slate-900">
                    Use Cases
                  </h3>
                  <ul className="space-y-3">
                    {service.useCases.map((u) => (
                      <li key={u} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-slate-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-slate-700">{u}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Case Study Results */}
              {service.caseStudy && (
                <div className="mt-16 bg-slate-50 border border-slate-200 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">Results</h3>
                  <p className="text-slate-700 mb-6 text-lg">{service.caseStudy.summary}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.caseStudy.results.map((r) => (
                      <div key={r} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
                        <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-800">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              {service.faqs?.length > 0 && (
                <div className="mt-16">
                  <h3 className="text-3xl font-bold mb-8 text-slate-900">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {service.faqs.map((f) => (
                      <details
                        key={f.question}
                        className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-all"
                      >
                        <summary className="cursor-pointer font-semibold text-lg text-slate-900 flex items-center justify-between">
                          {f.question}
                          <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <p className="mt-4 text-slate-700 leading-relaxed">{f.answer}</p>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Services */}
              <div className="mt-20">
                <h3 className="text-3xl font-bold mb-8 text-slate-900">Related Services</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {otherServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="group block bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-lg transition-all"
                    >
                      <h4 className="text-lg font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">{s.title}</h4>
                      <p className="text-slate-600 line-clamp-3">{s.excerpt}</p>
                      <div className="mt-4 inline-flex items-center gap-2 text-blue-600 font-semibold text-sm">
                        Learn more
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = services.map((s) => ({ params: { slug: s.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = ctx.params?.slug as string;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { notFound: true };
  return { props: { service } };
};

export default ServiceLandingPage;
