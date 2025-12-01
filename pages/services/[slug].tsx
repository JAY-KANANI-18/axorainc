import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import { services, ServicePage } from "../../data/services";
import EnquiryForm from "../../components/EnquiryForm";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";

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
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center text-2xl font-bold">
              <Image
                src="/axora-full-main.png"
                alt="Axora Infotech Logo"
                width={150}
                height={80}
                priority
              />
            </Link>
            <div className="flex gap-6">
              {/* <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</Link> */}
              <Link
                href="/#contact"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
              >
                Contact
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-grow">
          <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-10">
            <div className="m-4">
              <button
                onClick={() => router.back()}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
              >
                <FaArrowLeftLong />
              </button>
            </div>

            <div className="container mx-auto px-4 max-w-5xl">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    {service.title}
                  </h1>
                  <p className="text-blue-100 text-lg mb-8">
                    {service.excerpt}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="#enquiry"
                      className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all"
                    >
                      Book Strategy Call
                    </a>
                    <a
                      href="/blog"
                      className="px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
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
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="prose max-w-none">
                {service.content.map((sec) => (
                  <section key={sec.heading} className="mb-10">
                    <h2>{sec.heading}</h2>
                    {sec.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </section>
                ))}
              </div>

              <div className="mt-10 grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">
                    Key Benefits
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-blue-900/90">
                    {service.benefits.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-purple-900">
                    Use Cases
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-purple-900/90">
                    {service.useCases.map((u) => (
                      <li key={u}>{u}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {service.caseStudy && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-2">Results</h3>
                  <p className="text-slate-700">{service.caseStudy.summary}</p>
                  <ul className="mt-4 grid md:grid-cols-2 gap-3">
                    {service.caseStudy.results.map((r) => (
                      <li key={r} className="flex items-start gap-3">
                        <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-green-500" />
                        <span className="text-slate-800">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.faqs?.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {service.faqs.map((f) => (
                      <details
                        key={f.question}
                        className="group border border-slate-200 rounded-xl p-4"
                      >
                        <summary className="cursor-pointer font-semibold">
                          {f.question}
                        </summary>
                        <p className="mt-2 text-slate-700">{f.answer}</p>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* Related services */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-6">Related Services</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {otherServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block rounded-2xl p-6 border hover:border-blue-300 hover:shadow-lg transition-all"
                    >
                      <h4 className="text-lg font-semibold mb-2">{s.title}</h4>
                      <p className="text-slate-600 line-clamp-3">{s.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Enquiry Form */}
              <div className="mt-16" id="enquiry">
                <h3 className="text-2xl font-bold mb-4">Start Your Project</h3>
                <EnquiryForm
                  context={{
                    category: service.category,
                    pageSlug: service.slug,
                    pageTitle: service.title,
                  }}
                />
              </div>

              <div className="mt-16 text-center">
                <a
                  href="#enquiry"
                  className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all"
                >
                  Start Your Project
                </a>
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
