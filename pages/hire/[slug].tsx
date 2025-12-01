import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import { hires, HirePage } from "../../data/hire";
import EnquiryForm from "../../components/EnquiryForm";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";

interface Props {
  page: HirePage;
}

const HireLandingPage: NextPage<Props> = ({ page }) => {
  const router = useRouter();

  const title = `${page.title} | Hire | Axora Infotech`;
  const description = page.excerpt;
  const canonical = `https://axorainfotech.com/hire/${page.slug}`;
  const ogImage = page.ogImage || "https://axorainfotech.com/og-image.jpg";
  const keywords = page.keywords.join(", ");

  const other = hires.filter((h) => h.slug !== page.slug).slice(0, 6);

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
        <meta property="og:image:alt" content={page.title} />
        <meta property="og:site_name" content="Axora Infotech" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content={page.title} />
        <meta name="twitter:site" content="@AxoraInfotech" />
        <meta name="twitter:creator" content="@AxoraInfotech" />

        {/* JSON-LD: Service for Hiring */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: page.title,
              serviceType: page.title,
              description: page.excerpt,
              areaServed: "Worldwide",
              provider: {
                "@type": "Organization",
                name: "Axora Infotech",
                url: "https://axorainfotech.com",
                logo: "https://axorainfotech.com/axora-main.png",
              },
              url: canonical,
              offers: {
                "@type": "Offer",
                price: "Contact for pricing",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
              keywords: page.keywords,
            }),
          }}
        />

        {/* JSON-LD: FAQ */}
        {page.faqs?.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: page.faqs.map((f) => ({
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
                  name: "Hire",
                  item: "https://axorainfotech.com/hire",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: page.title,
                  item: canonical,
                },
              ],
            }),
          }}
        />

        {/* JSON-LD: ContactPoint (all hire pages) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Axora Infotech",
              url: "https://axorainfotech.com",
              logo: "https://axorainfotech.com/axora-main.png",
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
        {page.caseStudy && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "CaseStudy",
                headline: page.caseStudy.title,
                description: page.caseStudy.summary,
                datePublished: page.caseStudy.date || page.date,
                url: canonical,
                mainEntityOfPage: canonical,
                author: { "@type": "Organization", name: "Axora Infotech" },
                publisher: {
                  "@type": "Organization",
                  name: "Axora Infotech",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://axorainfotech.com/axora-main.png",
                  },
                },
                image: page.ogImage || "https://axorainfotech.com/og-image.jpg",
                keywords: page.keywords,
                articleSection: "Results",
                text: page.caseStudy.results?.join(" | "),
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
                src="/axora-main.png"
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
          <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
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
                    {page.title}
                  </h1>
                  <p className="text-blue-100 text-lg mb-8">{page.excerpt}</p>
                  <div className="flex gap-4">
                    <a
                      href="#enquiry"
                      className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all"
                    >
                      Request Talent
                    </a>
                    <a
                      href="/blog"
                      className="px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
                    >
                      View Success Stories
                    </a>
                  </div>
                </div>
                <div>
                  <Image
                    src={page.image || "/axora-main.png"}
                    alt={page.title}
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
                {page.content.map((sec) => (
                  <section key={sec.heading} className="mb-10">
                    <h2>{sec.heading}</h2>
                    {sec.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </section>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-3">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {page.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {page.caseStudy && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-2">Results</h3>
                  <p className="text-slate-700">{page.caseStudy.summary}</p>
                  <ul className="mt-4 grid md:grid-cols-2 gap-3">
                    {page.caseStudy.results.map((r) => (
                      <li key={r} className="flex items-start gap-3">
                        <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-green-500" />
                        <span className="text-slate-800">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Enquiry Form (all hire pages) */}
              <div className="mt-16" id="enquiry">
                <h3 className="text-2xl font-bold mb-4">Request Talent</h3>
                <EnquiryForm
                  context={{
                    category: page.category,
                    pageSlug: page.slug,
                    pageTitle: page.title,
                  }}
                />
              </div>

              {page.faqs?.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {page.faqs.map((f) => (
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

              {/* Related hire pages */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-6">Related Talent</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {other.map((h) => (
                    <Link
                      key={h.slug}
                      href={`/hire/${h.slug}`}
                      className="block rounded-2xl p-6 border hover:border-blue-300 hover:shadow-lg transition-all"
                    >
                      <h4 className="text-lg font-semibold mb-2">{h.title}</h4>
                      <p className="text-slate-600 line-clamp-3">{h.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-16 text-center">
                <a
                  href="/#contact"
                  className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all"
                >
                  Get a Shortlist
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
  const paths = hires.map((h) => ({ params: { slug: h.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = ctx.params?.slug as string;
  const page = hires.find((h) => h.slug === slug);
  if (!page) return { notFound: true };
  return { props: { page } };
};

export default HireLandingPage;
