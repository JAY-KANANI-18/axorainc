import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Footer from "../components/Footer";

const AxoVision: NextPage = () => {
  const [activeTab, setActiveTab] = useState("tiles");

  const useCases = [
    {
      id: "tiles",
      name: "Tile & Ceramic Industry",
      icon: "🏺",
      description: "Find similar tile designs instantly from any image",
    },
    {
      id: "textiles",
      name: "Textile & Fabric",
      icon: "🧵",
      description: "Match fabric patterns and textile designs effortlessly",
    },
    {
      id: "interior",
      name: "Interior Design",
      icon: "🏠",
      description: "Discover matching design elements for your projects",
    },
  ];

  const features = [
    {
      title: "AI-Powered Visual Search",
      description:
        "Our advanced computer vision AI understands patterns, colors, and textures to find similar designs instantly.",
      icon: "🤖",
    },
    {
      title: "Real-Time Image Recognition",
      description:
        "Upload a photo and get instant results. Our system processes images in milliseconds to find the best matches.",
      icon: "⚡",
    },
    {
      title: "Pattern Matching Technology",
      description:
        "Advanced algorithms detect intricate patterns in tiles, textiles, and design elements with precision.",
      icon: "🎯",
    },
    {
      title: "Color & Texture Analysis",
      description:
        "Sophisticated color palette extraction and texture analysis for accurate similarity matching.",
      icon: "🎨",
    },
    {
      title: "Multi-Format Support",
      description:
        "Works with JPG, PNG, WEBP, and all major image formats. Search from phone photos or professional shots.",
      icon: "📸",
    },
    // {
    //   title: "API Integration Ready",
    //   description:
    //     "Seamlessly integrate visual search into your e-commerce platform or inventory management system.",
    //   icon: "🔌",
    // },
  ];

  const benefits = [
    {
      metric: "10x",
      label: "Faster Product Discovery",
      description: "Find matching products in seconds, not hours",
    },
    {
      metric: "95%",
      label: "Match Accuracy",
      description: "Industry-leading precision in visual similarity",
    },
    {
      metric: "24/7",
      label: "Always Available",
      description: "Cloud-based system with 99.9% uptime",
    },
  ];

  const faqs = [
    {
      q: "What types of images can I search with AxoVision?",
      a: "AxoVision works with tiles, ceramics, textiles, fabrics, wallpapers, flooring, and any design pattern. Simply upload a photo from your phone or camera, and our AI will find visually similar products.",
    },
    {
      q: "How accurate is the AI image search?",
      a: "Our computer vision technology achieves 95%+ accuracy in finding similar designs. The system analyzes patterns, colors, textures, and shapes to provide the most relevant matches.",
    },
    // {
    //   q: "Can I integrate AxoVision into my e-commerce website?",
    //   a: "Yes! AxoVision offers REST API integration that seamlessly works with any e-commerce platform, inventory system, or custom application. We provide comprehensive documentation and developer support.",
    // },
    {
      q: "What industries benefit most from AxoVision?",
      a: "Tile manufacturers, ceramic distributors, textile companies, fabric suppliers, interior designers, architects, and e-commerce businesses in the design industry see the most value.",
    },
    {
      q: "Is there a free available?",
      a: "Yes! We offer a free Beta version with full access to all features. No credit card required to get started.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          AxoVision - AI Tile Image Search Engine | Find Similar Tiles from
          Photo
        </title>
        <meta
          name="description"
          content="AxoVision is an AI-powered visual search engine for tiles, ceramics, and textiles. Upload a photo and instantly find similar tile designs, fabric patterns, and design elements. Perfect for manufacturers, designers, and e-commerce."
        />
        <meta
          name="keywords"
          content="tile image search, find similar tiles, AI tile search, ceramic design search, textile pattern matching, fabric image search, visual search for tiles, reverse image search tiles, tile design finder, pattern recognition AI, similar tile finder, tile matching software, design pattern search, texture search engine, interior design search, similar image search, reverse image search, image finder"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://axorainfotech.com/axovision" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="AxoVision - AI Tile & Textile Image Search Engine"
        />
        <meta
          property="og:description"
          content="Find similar tiles and textile designs instantly using AI-powered visual search. Upload a photo and discover matching patterns in seconds."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://axorainfotech.com/axovision" />
        <meta
          property="og:image"
          content="https://axorainfotech.com/axovision-og-image.jpg"
        />
        <meta property="og:site_name" content="Axora Infotech" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AxoVision - AI Tile Image Search Engine"
        />
        <meta
          name="twitter:description"
          content="Upload a tile photo and find similar designs instantly with AI-powered visual search technology."
        />
        <meta
          name="twitter:image"
          content="https://axorainfotech.com/axovision-twitter-image.jpg"
        />

        {/* Structured Data - SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "AxoVision",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web, iOS, Android",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "127",
              },
              description:
                "AI-powered visual search engine for tiles, ceramics, and textiles. Find similar designs instantly from any photo.",
              screenshot: "https://axorainfotech.com/axovision-screenshot.jpg",
              softwareVersion: "3.0",
              author: {
                "@type": "Organization",
                name: "Axora Infotech",
              },
            }),
          }}
        />

        {/* Structured Data - Product */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "AxoVision - AI Image Search Engine",
              description:
                "Revolutionary AI-powered visual search platform for finding similar tile designs, textile patterns, and design elements from photos.",
              brand: {
                "@type": "Brand",
                name: "Axora Infotech",
              },
              offers: {
                "@type": "Offer",
                url: "https://axorainfotech.com/axovision",
                priceCurrency: "USD",
                price: "Contact for pricing",
                availability: "https://schema.org/InStock",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "127",
              },
            }),
          }}
        />

        {/* Structured Data - FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            }),
          }}
        />

        {/* Breadcrumb Schema */}
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
                  name: "AxoVision",
                  item: "https://axorainfotech.com/axovision",
                },
              ],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="flex items-center gap-4">
              <Image
                src="/axora-icon.png"
                alt="Axora Infotech Logo"
                width={56}
                height={56}
                className="rounded-xl shadow-sm"
                priority
              />
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.28em] text-slate-400">
                  Axora Infotech
                </span>
                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-slate-900 bg-clip-text text-transparent">
                  AxoVision
                </span>
              </div>
            </a>
            <div className="flex gap-4">
              {/* <a
                href="#features"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Pricing
              </a> */}
              <a
                href="#contact"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
              >
                Get Started
              </a>
            </div>
          </nav>
        </header>

        <main className="flex-grow">
          {/* HERO SECTION */}
          <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full mb-6">
                  <span className="text-blue-300 text-sm font-medium">
                    🚀 AI-Powered Visual Search for Tiles & Textiles
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  Find Similar{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Tile Designs
                  </span>{" "}
                  from Any Photo
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  AxoVision uses advanced AI computer vision to instantly find
                  matching tiles, ceramics, textiles, and design patterns.
                  Upload a photo and discover similar products in seconds.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="https://vision.axorainfotech.com"
                    className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Try Now It's Free
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="#how-it-works"
                    className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 backdrop-blur-sm"
                  >
                    See How It Works
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>Free Version</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>No Credit Card Required</span>
                  </div>

                  {/* <div className="flex items-center gap-2">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>API Integration Available</span>
                  </div> */}
                </div>
              </div>
            </div>
          </section>

          {/* USE CASES TABS */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Perfect for Your Industry
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Trusted by leading companies in tiles, textiles, and design
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {useCases.map((useCase) => (
                  <button
                    key={useCase.id}
                    onClick={() => setActiveTab(useCase.id)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                      activeTab === useCase.id
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <span className="mr-2">{useCase.icon}</span>
                    {useCase.name}
                  </button>
                ))}
              </div>

              <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
                {useCases.map(
                  (useCase) =>
                    activeTab === useCase.id && (
                      <div key={useCase.id} className="text-center">
                        <div className="text-6xl mb-6">{useCase.icon}</div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          {useCase.name}
                        </h3>
                        <p className="text-xl text-gray-600 mb-8">
                          {useCase.description}
                        </p>
                        <a
                          href="#contact"
                          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                        >
                          Get Started for Your Business
                        </a>
                      </div>
                    )
                )}
              </div>
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section
            id="how-it-works"
            className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
          >
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  How AxoVision Works
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Three simple steps to find your perfect match
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Upload Image
                  </h3>
                  <p className="text-gray-600">
                    Take a photo of any tile, textile, or design pattern. Works
                    with phone photos or professional images.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    AI Analysis
                  </h3>
                  <p className="text-gray-600">
                    Our computer vision AI analyzes patterns, colors, textures,
                    and shapes in milliseconds.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-pink-600 to-pink-400 rounded-2xl flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Get Results
                  </h3>
                  <p className="text-gray-600">
                    Instantly receive visually similar products ranked by
                    accuracy. Export or integrate via API.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FEATURES GRID */}
          <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Powerful AI Features
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Advanced computer vision technology built for professionals
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* BENEFITS WITH METRICS */}
          <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Why Choose AxoVision?
                </h2>
                <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                  Industry-leading performance and accuracy
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
                  >
                    <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                      {benefit.metric}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{benefit.label}</h3>
                    <p className="text-blue-200">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ SECTION */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600">
                  Everything you need to know about AxoVision
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-200 rounded-2xl p-8"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {faq.q}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA SECTION */}
          <section
            id="contact"
            className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white"
          >
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Visual Search?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join leading companies using AxoVision to revolutionize product
                discovery
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://vision.axorainfotech.com"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/50"
                >
                  Register Now
                </a>
                {/* <a
                  href="/#contact"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  Schedule Demo
                </a> */}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AxoVision;
