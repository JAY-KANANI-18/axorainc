import { useState } from "react";
import Head from "next/head";
import { NextPage } from "next";
import Image from "next/image";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import HireTalentSection from "../components/HireTalentSection";
import Products from "../components/Products";
// import Features from "../components/Features";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Portfolio from "../components/Portfolio";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Nav from "@/components/Nav";
import WhyChooseAxora from "../components/Features";

const Home: NextPage = () => {


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
              logo: "https://axorainfotech.com/axora-full-main.png",
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

      <div className="min-h-screen flex flex-col ">
        {/* HEADER */}
          <Nav />

        {/* MAIN */}
        <main className="flex-grow">
          <Hero />
          <ServicesSection />
          {/* <HireTalentSection /> */}
          {/* <Products /> */}
          <WhyChooseAxora />
          <About />
          <TechStack />
          {/* <Portfolio /> */}
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
