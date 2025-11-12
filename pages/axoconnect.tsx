import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";

const AxoConnect: NextPage = () => {
  const pageTitle = "AxoConnect - Multichannel Customer Experience Platform | Coming Soon";
  const description =
    "AxoConnect unifies customer conversations across web, mobile, and social channels. Join the waitlist to be the first to experience the multichannel platform from Axora Infotech.";
  const canonicalUrl = "https://axorainfotech.com/axoconnect";
  const ogImage = "https://axorainfotech.com/og-axoconnect-coming-soon.jpg";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="AxoConnect, multichannel platform, unified inbox, customer experience, Axora Infotech"
        />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Axora Infotech" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "AxoConnect",
              applicationCategory: "Customer Engagement Platform",
              description,
              operatingSystem: "Web",
              creator: {
                "@type": "Organization",
                name: "Axora Infotech",
                url: "https://axorainfotech.com",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/PreOrder",
              },
              releaseNotes: "AxoConnect is currently in development. Join the waitlist for early access.",
            }),
          }}
        />
      </Head>

      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <header className="py-6">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Axora Infotech
              </span>
            </Link>
            <Link
              href="/#contact"
              className="px-5 py-2 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </header>

        <main className="flex-grow flex items-center">
          <div className="container mx-auto px-4 max-w-3xl text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-blue-100">
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-300"></span>
              </span>
              Coming Soon
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              AxoConnect is preparing to transform your multichannel engagement
            </h1>
            <p className="text-lg text-blue-100">
              We are crafting a unified customer experience platform that brings together email, chat, social, and voice in one intelligent inbox. Be the first to explore automated workflows, real-time analytics, and deeply personalized interactions.
            </p>

            <div className="bg-white/10 border border-white/10 rounded-3xl p-8 text-left space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-white">
                  What to expect at launch
                </h2>
                <ul className="space-y-2 text-blue-100 list-disc list-inside">
                  <li>Unified customer conversation timeline with smart routing</li>
                  <li>Integrations for WhatsApp, Instagram, web chat, and email</li>
                  <li>AI-enabled response suggestions and sentiment guidance</li>
                  <li>Team collaboration tools with SLA tracking</li>
                </ul>
              </div>
              <div className="bg-blue-500/10 border border-blue-400/30 rounded-2xl p-6 text-center">
                <p className="text-blue-100 mb-4">
                  Want early access updates and pilot opportunities?
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold text-white hover:shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  Join the AxoConnect waitlist
                </Link>
              </div>
            </div>

            <div className="text-blue-200">
              Looking for intelligent visual search? Explore
              <Link href="/axovision" className="ml-2 text-white underline">
                AxoVision
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AxoConnect;
