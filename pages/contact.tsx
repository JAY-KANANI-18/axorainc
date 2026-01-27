import { NextPage } from "next";
import Head from "next/head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Get in Touch | Axora Infotech</title>
        <meta
          name="description"
          content="Contact Axora Infotech for AI-powered solutions, custom SaaS development, cloud engineering, and digital transformation services. Let's build something amazing together."
        />
        <meta
          name="keywords"
          content="contact Axora Infotech, AI development company, SaaS development contact, cloud engineering services, get in touch, business inquiry"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Axora Infotech" />
        <link rel="canonical" href="https://axorainfotech.com/contact" />

        <meta property="og:title" content="Contact Us - Axora Infotech" />
        <meta
          property="og:description"
          content="Get in touch with Axora Infotech for AI-powered solutions and custom software development."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://axorainfotech.com/contact" />
        <meta
          property="og:image"
          content="https://axorainfotech.com/axora-full-main.png"
        />
        <meta property="og:site_name" content="Axora Infotech" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Axora Infotech" />
        <meta
          name="twitter:description"
          content="Get in touch with Axora Infotech for AI-powered solutions and custom software development."
        />
        <meta name="twitter:site" content="@AxoraInfotech" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contact Axora Infotech",
              description:
                "Get in touch with Axora Infotech for AI-powered solutions and custom software development.",
              url: "https://axorainfotech.com/contact",
              mainEntity: {
                "@type": "Organization",
                name: "Axora Infotech",
                url: "https://axorainfotech.com",
                logo: "https://axorainfotech.com/axora-full-main.png",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+91-6353969157",
                  contactType: "Customer Service",
                  areaServed: "IN",
                  availableLanguage: ["English", "Hindi"],
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Ahmedabad",
                  addressRegion: "Gujarat",
                  postalCode: "380015",
                  addressCountry: "IN",
                },
              },
            }),
          }}
        />

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
                  name: "Contact",
                  item: "https://axorainfotech.com/contact",
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
          <section className="relative bg-slate-900 text-white py-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900"></div>
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]"></div>
            
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-2xl mx-auto text-center">
                <div className="inline-block mb-3">
                  <span className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-semibold">
                    GET IN TOUCH
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold mb-3">
                  Let's Build Something Amazing
                </h1>
                <p className="text-sm text-slate-300 mb-4">
                  Have a project in mind? We're here to help you transform your ideas into reality.
                </p>
                <div className="flex flex-wrap justify-center gap-2 text-xs">
                  <span className="px-2 py-1 bg-blue-500/20 rounded-full border border-blue-400/30">
                    AI Engineering
                  </span>
                  <span className="px-2 py-1 bg-purple-500/20 rounded-full border border-purple-400/30">
                    SaaS Development
                  </span>
                  <span className="px-2 py-1 bg-green-500/20 rounded-full border border-green-400/30">
                    Cloud & DevOps
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <Contact />

          {/* Why Choose Section */}
          <section className="py-10 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-xl font-bold text-center mb-6 text-slate-900">
                  Why Choose Axora Infotech?
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center bg-white p-5 rounded-lg border border-slate-200">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-base font-semibold mb-1 text-slate-900">
                      Fast Delivery
                    </h3>
                    <p className="text-xs text-slate-600">
                      High-quality solutions delivered quickly without compromising excellence.
                    </p>
                  </div>

                  <div className="text-center bg-white p-5 rounded-lg border border-slate-200">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg
                        className="w-5 h-5 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-base font-semibold mb-1 text-slate-900">
                      Proven Expertise
                    </h3>
                    <p className="text-xs text-slate-600">
                      Years of experience in AI, SaaS, and cloud technologies.
                    </p>
                  </div>

                  <div className="text-center bg-white p-5 rounded-lg border border-slate-200">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-base font-semibold mb-1 text-slate-900">
                      Dedicated Support
                    </h3>
                    <p className="text-xs text-slate-600">
                      Ongoing support and maintenance to ensure your success.
                    </p>
                  </div>
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

export default ContactPage;