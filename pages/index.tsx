import { useState } from "react";
import Head from "next/head";
import { NextPage } from "next";
import Image from "next/image";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import HireTalentSection from "../components/HireTalentSection";
import Products from "../components/Products";
import Features from "../components/Features";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Portfolio from "../components/Portfolio";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [hireMenuOpen, setHireMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileHireOpen, setMobileHireOpen] = useState(false);

  const servicesMenu = [
    { label: "AI Product Engineering", href: "/services/ai-product-engineering" },
    { label: "Custom SaaS platforms", href: "/services/custom-saas-development" },
    { label: "CRM Modernization", href: "/services/crm-modernization" },
    { label: "Enterprise Web Applications", href: "/services/enterprise-web-applications" },
    { label: "Mobile App Development", href: "/services/mobile-app-development" },
    { label: "Cloud & DevOps Automation", href: "/services/cloud-devops-automation" },
    { label: "Data Engineering & Analytics", href: "/services/data-engineering-analytics" },
    { label: "Intelligent Process Automation", href: "/services/intelligent-process-automation" },
    { label: "Digital Commerce & Marketplaces", href: "/services/digital-commerce-marketplaces" },
    { label: "SEO & Growth Marketing", href: "/services/seo-growth-marketing" },
    { label: "View all services", href: "/services" },
  ];

  const hireMenu = [
    { label: "Hire React Developers", href: "/hire/react-developers" },
    { label: "Hire Node.js Developers", href: "/hire/nodejs-developers" },
    { label: "Hire Next.js Engineers", href: "/hire/nextjs-engineers" },
    { label: "Hire Full-Stack Teams", href: "/hire/fullstack-teams" },
    { label: "Hire Mobile App Developers", href: "/hire/mobile-developers" },
    { label: "Hire DevOps & SRE Experts", href: "/hire/devops-experts" },
    { label: "Hire Data Engineers", href: "/hire/data-engineers" },
    { label: "Hire UI/UX Designers", href: "/hire/uiux-designers" },
    { label: "Hire QA Automation Engineers", href: "/hire/qa-automation" },
    { label: "Hire AI & ML Specialists", href: "/hire/ai-ml-specialists" },
  ];

  return (
    <>
      <Head>
        <title>Axora Infotech - Custom SaaS & AI Development Company</title>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Custom SaaS development, CRM solutions & AI applications. Expert React, Node.js teams deliver enterprise web apps & mobile development."
        />

        <meta
          name="keywords"
          content="custom SaaS development, CRM development company, AI software development, enterprise web applications, mobile app development, React developers, Node.js development, cloud DevOps automation, data engineering services, intelligent process automation"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://axorainfotech.com" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/axora-icon.png" />

        {/* Social Sharing Meta */}
        <meta name="twitter:site" content="@AxoraInfotech" />
        <meta name="twitter:creator" content="@AxoraInfotech" />
        <meta property="fb:app_id" content="61583890823393" />
        <meta property="instagram:site" content="@axorainfotech" />
        <meta property="instagram:creator" content="@axorainfotech" />

        {/* LinkedIn Meta Tags */}
        <meta property="linkedin:owner" content="axora-infotech" />
        <meta
          property="linkedin:site"
          content="https://www.linkedin.com/company/axora-infotech"
        />
        <meta
          property="article:author"
          content="https://www.linkedin.com/company/axora-infotech"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Axora Infotech - Custom SaaS & AI Development Company"
        />
        <meta
          property="og:description"
          content="Custom SaaS development, CRM solutions & AI applications. Expert React, Node.js teams deliver enterprise web apps & mobile development."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://axorainfotech.com" />
        <meta
          property="og:image"
          content="https://axorainfotech.com/og-image.jpg"
        />
        <meta property="og:site_name" content="Axora Infotech" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Axora Infotech - Custom SaaS & AI Development"
        />
        <meta name="twitter:site" content="@AxoraInfotech"></meta>
        <meta
          name="twitter:description"
          content="Custom SaaS development, CRM solutions & AI applications. Expert React, Node.js teams deliver enterprise web apps & mobile development."
        />
        <meta
          name="twitter:image"
          content="https://axorainfotech.com/twitter-image.jpg"
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Axora Infotech",
              alternateName: "Axora",
              url: "https://axorainfotech.com",
              logo: "https://axorainfotech.com/2.png",
              description:
                "Leading AI software development company specializing in computer vision, visual search engines, and enterprise AI solutions.",
              foundingDate: "2020",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                email: "info@axorainfotech.com",
                availableLanguage: ["English"],
              },
              sameAs: [
                "https://www.linkedin.com/company/axora-infotech",
                "https://x.com/AxoraInfotech",
                "https://www.facebook.com/profile.php?id=61583890823393",
                "https://www.instagram.com/axorainfotech",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              areaServed: "Worldwide",
              knowsAbout: [
                "Artificial Intelligence",
                "Computer Vision",
                "Machine Learning",
                "Image Recognition",
                "Visual Search",
                "Natural Language Processing",
                "AI Product Engineering",
                "Custom SaaS Platforms",
                "CRM Modernization",
                "Enterprise Web Applications",
                "Mobile App Development",
                "Cloud & DevOps Automation",
                "Data Engineering & Analytics",
                "Intelligent Process Automation",
                "Digital Commerce & Marketplaces",
                "SEO & Growth Marketing",
              ],
            }),
          }}
        />

        {/* Product Schema - axoVision */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "AI Image Search (AxoVision)",
              description:
                "Revolutionary visual search technology that understands and indexes images with unprecedented accuracy. Perfect for e-commerce, content management, and digital asset organization.",
              brand: { "@type": "Brand", name: "Axora" },
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: "Contact for pricing",
                itemCondition: "https://schema.org/NewCondition",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />

        {/* Product Schema - axoConnect */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Multichannel Platform (axoConnect)",
              description:
                "Seamlessly connect all your communication channels into one unified platform. Manage customer interactions across web, mobile, social media, and traditional channels.",
              brand: { "@type": "Brand", name: "Axora" },
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: "Contact for pricing",
                itemCondition: "https://schema.org/NewCondition",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />

        {/* Product Schema - AxoAnalytics */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Natural Language Database Queries (AxoAnalytics)",
              description:
                "Transform complex database queries into simple conversations. Ask questions in plain English and get instant insights from your data without writing a single line of SQL.",
              brand: { "@type": "Brand", name: "Axora" },
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: "Contact for pricing",
                itemCondition: "https://schema.org/NewCondition",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex items-center text-2xl font-bold">
              <Image
                src="/2.png"
                alt="Axora  Logo"
                width={150}
                height={80}
                priority
              />
              {/* Axora<span className="text-primary-400">Inc</span> */}
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <div
                className="relative"
                onMouseEnter={() => setServicesMenuOpen(true)}
                onMouseLeave={() => setServicesMenuOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setServicesMenuOpen((prev) => !prev)}
                  className="inline-flex items-center gap-2 text-secondary-600 hover:text-primary-600 transition-colors"
                >
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      servicesMenuOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`absolute left-0 top-full mt-4 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl transition-all duration-200 ${
                    servicesMenuOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="p-4 space-y-2">
                    {servicesMenu.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block rounded-xl px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                    <a
                      href="/services"
                      className="block rounded-xl px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50"
                    >
                      Explore All Services →
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="/axovision"
                className="text-secondary-600 hover:text-primary-600"
              >
                AxoVision
              </a>
              <a
                href="#features"
                className="text-secondary-600 hover:text-primary-600"
              >
                Features
              </a>
              <a
                href="/blog"
                className="text-secondary-600 hover:text-primary-600"
              >
                Blog
              </a>
              <div
                className="relative"
                onMouseEnter={() => setHireMenuOpen(true)}
                onMouseLeave={() => setHireMenuOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setHireMenuOpen((prev) => !prev)}
                  className="inline-flex items-center gap-2 text-secondary-600 hover:text-primary-600 transition-colors"
                >
                  Hire
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      hireMenuOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`absolute left-0 top-full mt-4 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl transition-all duration-200 ${
                    hireMenuOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="p-4 space-y-2">
                    {hireMenu.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block rounded-xl px-4 py-2 text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                    <a
                      href="/hire"
                      className="block rounded-xl px-4 py-2 text-sm font-semibold text-purple-600 hover:bg-purple-50"
                    >
                      Meet Our Expert Teams →
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="#contact"
                className="text-secondary-600 hover:text-primary-600"
              >
                Get Quote
              </a>
              <a
                href="/careers"
                className="text-secondary-600 hover:text-primary-600"
              >
                Careers
              </a>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-secondary-800 hover:text-primary-600"
              >
                {menuOpen ? (
                  // X icon when open
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  // Hamburger icon when closed
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Items */}
          {menuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="flex flex-col space-y-4 px-6 py-4">
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between text-secondary-600 hover:text-primary-600"
                  >
                    <span>Services</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        mobileServicesOpen ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 border-l border-slate-200 space-y-2">
                      {servicesMenu.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className="block text-sm text-secondary-500 hover:text-primary-600"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <a
                  href="/axovision"
                  onClick={() => setMenuOpen(false)}
                  className="text-secondary-600 hover:text-primary-600"
                >
                  AxoVision
                </a>
                <a
                  href="#features"
                  onClick={() => setMenuOpen(false)}
                  className="text-secondary-600 hover:text-primary-600"
                >
                  Features
                </a>
                <a
                  href="/blog"
                  onClick={() => setMenuOpen(false)}
                  className="text-secondary-600 hover:text-primary-600"
                >
                  Blog
                </a>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setMobileHireOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between text-secondary-600 hover:text-primary-600"
                  >
                    <span>Hire</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        mobileHireOpen ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {mobileHireOpen && (
                    <div className="pl-4 border-l border-slate-200 space-y-2">
                      {hireMenu.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileHireOpen(false);
                          }}
                          className="block text-sm text-secondary-500 hover:text-primary-600"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <a
                  href="/careers"
                  onClick={() => setMenuOpen(false)}
                  className="text-secondary-600 hover:text-primary-600"
                >
                  Careers
                </a>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-secondary-600 hover:text-primary-600"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </header>

        {/* MAIN */}
        <main className="flex-grow">
          <Hero />
          <ServicesSection />
          <HireTalentSection />
          <Products />
          <Features />
          <About />
          <TechStack />
          {/* <Portfolio /> */}
          {/* <Testimonials /> */}
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
