import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import { hires } from "../../data/hire";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";

const HireIndex: NextPage = () => {
  const router = useRouter();

  const title = "Hire Engineers & Product Teams | Axora Infotech";
  const description =
    "Hire React, Node.js, Next.js, Mobile, DevOps/SRE, Data Engineers, QA Automation, AI/ML Specialists, and Full-Stack Teams. Vetted talent with enterprise delivery experience.";
  const canonical = "https://axorainfotech.com/hire";

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
              itemListElement: hires.map((h, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `https://axorainfotech.com/hire/${h.slug}`,
                name: h.title,
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
                  name: "Hire",
                  item: canonical,
                },
              ],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen flex flex-col">
          <Nav />

        <main className="flex-grow">
          <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
            <div className="container mx-auto px-4 text-center max-w-3xl">
              <h1 className="text-5xl font-bold mb-4">
                Hire Top Engineers & Teams
              </h1>
              <p className="text-xl text-blue-100">
                Vetted experts in front-end, back-end, mobile, data, DevOps, QA,
                and AI/ML—ready to embed in your roadmap.
              </p>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="m-4">
              <button
                onClick={() => router.back()}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
              >
                <FaArrowLeftLong />
              </button>
            </div>
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {hires.map((h) => (
                  <Link
                    key={h.slug}
                    href={`/hire/${h.slug}`}
                    className="block bg-white rounded-2xl p-6 shadow hover:shadow-xl hover:-translate-y-1 transition-all border"
                  >
                   <div className="h-48 w-full bg-gradient-to-br from-blue-500 to-purple-500 relative">
                      <Image
                        src={h.image}
                        alt={h.slug}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h2 className="text-xl font-bold mb-2">{h.title}</h2>
                    <p className="text-slate-600 line-clamp-3">{h.excerpt}</p>
                  </Link>
                ))}
              </div>

              <div className="mt-16 text-center">
                <a
                  href="/#contact"
                  className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all"
                >
                  Request Talent
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

export default HireIndex;
