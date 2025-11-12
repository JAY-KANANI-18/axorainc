import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";

const AxoAnalytics: NextPage = () => {
  const pageTitle = "AxoAnalytics - Conversational Data Intelligence | In Development";
  const description =
    "Ask data questions in plain English and get instant insights. AxoAnalytics is currently in development—join the waitlist to unlock conversational analytics from Axora Infotech.";
  const canonicalUrl = "https://axorainfotech.com/axoanalytics";
  const ogImage = "https://axorainfotech.com/og-axoanalytics-coming-soon.jpg";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="AxoAnalytics, conversational analytics, natural language queries, data intelligence, Axora Infotech"
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
              name: "AxoAnalytics",
              applicationCategory: "BusinessIntelligenceApplication",
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
              releaseNotes: "AxoAnalytics is currently in development. Join the waitlist for early beta access.",
            }),
          }}
        />
      </Head>

      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <header className="py-6">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
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
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-cyan-100">
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300"></span>
              </span>
              In Development
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              AxoAnalytics is redefining conversational data intelligence
            </h1>
            <p className="text-lg text-cyan-100">
              Soon, teams will be able to ask database questions in natural language and receive visualized insights instantly. From ad-hoc exploration to executive dashboards, AxoAnalytics will bridge the gap between data and decisions.
            </p>

            <div className="bg-white/10 border border-white/10 rounded-3xl p-8 text-left space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-white">
                  Preview of upcoming capabilities
                </h2>
                <ul className="space-y-2 text-cyan-100 list-disc list-inside">
                  <li>Natural language query engine trained on your schemas</li>
                  <li>Automated chart generation with shareable dashboards</li>
                  <li>Proactive anomaly detection and alerts</li>
                  <li>Enterprise-grade governance and access controls</li>
                </ul>
              </div>
              <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-2xl p-6 text-center">
                <p className="text-cyan-100 mb-4">
                  Request early beta access and stay informed on launch milestones.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-white hover:shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  Join the AxoAnalytics waitlist
                </Link>
              </div>
            </div>

            <div className="text-cyan-200">
              Need intelligent visual search today? Explore
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

export default AxoAnalytics;
