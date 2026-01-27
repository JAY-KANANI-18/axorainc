import React from "react";
import Link from "next/link";
import theme from "@/styles/theme";

const Products: React.FC = () => {
  const products = [
    {
      name: "AI Image Search (AxoVision)",
      tagline: "AI-Powered Image Search Engine",
      description:
        "Revolutionary visual search technology that understands and indexes images with unprecedented accuracy. Perfect for e-commerce, content management, and digital asset organization.",
      features: [
        "Advanced Computer Vision AI",
        "Real-time Image Recognition",
        "Semantic Search Capabilities",
        "Multi-format Support",
        "API Integration Ready",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      href: "/axovision",
      cta: "Explore AxoVision →",
    },
    {
      name: "Multichannel Platform (AxoConnect)",
      tagline: "Multichannel Communication Platform",
      description:
        "Seamlessly connect all your communication channels into one unified platform. Manage customer interactions across web, mobile, social media, and traditional channels.",
      features: [
        "Unified Inbox Management",
        "Multi-channel Integration",
        "Real-time Synchronization",
        "Advanced Analytics",
        "Automated Workflows",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      href: "/axoconnect",
      cta: "Preview AxoConnect →",
    },
    {
      name: "Natural Language Database Queries (AxoAnalytics)",
      tagline: "Natural Language Database Queries",
      description:
        "Transform complex database queries into simple conversations. Ask questions in plain English and get instant insights from your data without writing a single line of SQL.",
      features: [
        "Natural Language Processing",
        "Intelligent Query Generation",
        "Real-time Data Visualization",
        "Multi-database Support",
        "Conversational Interface",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
      href: "/axoanalytics",
      cta: "Preview AxoAnalytics →",
    },
  ];

  return (
    <section
      id="products"
      className="py-20 "
      style={{ backgroundColor: theme.colors.background.light }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full mb-6">
            <span className="text-blue-600 text-sm font-medium">
              🚀 Our Digital Solutions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            AI-Powered Digital Solutions for Enterprises
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our suite of AI-powered solutions designed to transform how
            you search, connect, and analyze data.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="group relative">
              {/* Background gradient effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${product.bgGradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${product.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {product.icon}
                </div>

                {/* Content */}
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  {product.name}
                </h2>
                <p className="text-blue-600 font-semibold mb-4">
                  {product.tagline}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${product.gradient} rounded-full`}
                      ></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={product.href}
                  className={`block w-full py-3 px-6 bg-gradient-to-r ${product.gradient} text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center`}
                >
                  {product.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Start Your Digital Transformation Journey
            </h3>
            <p className="text-gray-600 mb-6">
              Get started with our intelligent digital solutions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Schedule Demo
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-white/80 text-slate-700 font-semibold rounded-xl border border-slate-200 hover:bg-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Products;
