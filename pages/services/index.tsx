import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import { services, ServicePage } from "../../data/services";
import EnquiryForm from "../../components/EnquiryForm";
import { fetchServices } from "../../lib/cms";

interface Props { items: ServicePage[] }

const ServicesIndex: NextPage<Props> = ({ items }) => {
  const title = "Services | Axora Infotech";
  const description =
    "Explore Axora Infotech's services: AI Product Engineering, Custom SaaS Development, CRM Modernization, Enterprise Web Apps, Mobile Apps, Cloud & DevOps Automation, Data Engineering & Analytics, Intelligent Process Automation, Digital Commerce, and SEO & Growth.";
  const canonical = "https://axorainfotech.com/services";
  const list = items && items.length ? items : services;
  const highlights = list
    .filter((s) => s.caseStudy && s.caseStudy.results?.length)
    .flatMap((s) => s.caseStudy!.results.map((r) => ({ service: s.title, metric: r })))
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
        <meta property="og:image" content="https://axorainfotech.com/og-image.jpg" />
        <meta property="og:site_name" content="Axora Infotech" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://axorainfotech.com/og-image.jpg" />
        <meta name="twitter:site" content="@AxoraInfotech" />

        {/* JSON-LD ItemList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: list.map((s, index) => ({
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
                { "@type": "ListItem", position: 1, name: "Home", item: "https://axorainfotech.com" },
                { "@type": "ListItem", position: 2, name: "Services", item: canonical },
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
              logo: "https://axorainfotech.com/2.png",
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

      <div className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center text-2xl font-bold">
              <Image src="/2.png" alt="Axora Infotech Logo" width={150} height={80} priority />
            </Link>
            <div className="flex gap-6">
              <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</Link>
              <Link href="/#contact" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">Contact</Link>
            </div>
          </nav>
        </header>

        <main className="flex-grow">
          <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
            <div className="container mx-auto px-4 text-center max-w-3xl">
              <h1 className="text-5xl font-bold mb-4">Our Services</h1>
              <p className="text-xl text-blue-100">
                Full-stack product delivery across AI, SaaS, web, mobile, cloud, and data—designed to move metrics.
              </p>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {list.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="block bg-white rounded-2xl p-6 shadow hover:shadow-xl hover:-translate-y-1 transition-all border">
                    <div className="h-40 mb-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl flex items-center justify-center text-5xl">🧩</div>
                    <h2 className="text-xl font-bold mb-2">{s.title}</h2>
                    <p className="text-slate-600 line-clamp-3">{s.excerpt}</p>
                  </Link>
                ))}
              </div>

              {highlights.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-4">Impact we’ve delivered</h3>
                  <ul className="grid md:grid-cols-3 gap-3">
                    {highlights.map((h, i) => (
                      <li key={`${h.service}-${i}`} className="flex items-start gap-3 bg-white rounded-xl p-4 border">
                        <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-green-500" />
                        <div>
                          <div className="text-slate-800">{h.metric}</div>
                          <div className="text-slate-500 text-sm">{h.service}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-16 text-center">
                <a href="#enquiry" className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all">Book Strategy Call</a>
              </div>
            </div>
          </section>

          {/* Enquiry form section */}
          <section className="py-16 bg-white" id="enquiry">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-bold mb-6">Start Your Project</h2>
              <EnquiryForm context={{ category: "Services", pageSlug: "services", pageTitle: "Services" }} />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServicesIndex;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const items = await fetchServices();
  return {
    props: { items: items ?? [] },
    revalidate: 60,
  };
};
