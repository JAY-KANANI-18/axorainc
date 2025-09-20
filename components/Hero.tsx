import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full mb-6">
            <span className="text-blue-400 text-sm font-medium">
              🚀 Next-Gen Digital Solutions
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight mb-6">
            Next-Gen AI-Powered Digital Solutions for Enterprises
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
            Transform your business with cutting-edge AI-powered solutions. From
            intelligent image search to omnichannel connectivity and natural
            language analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 text-center shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                Explore Solutions
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
              href="#products"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 text-center backdrop-blur-sm hover:backdrop-blur-md transform hover:-translate-y-1"
            >
              View Products
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute -bottom-8 right-4 w-72 h-72 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 -left-20 w-72 h-72 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-white"
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
                  </div>
                  <h3 className="text-white font-semibold mb-2">AxoVision</h3>
                  <p className="text-gray-300 text-sm">AI Image Search</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-white"
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
                  </div>
                  <h3 className="text-white font-semibold mb-2">AxoConnect</h3>
                  <p className="text-gray-300 text-sm">Omni Channel</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-6 rounded-2xl backdrop-blur-sm border border-white/10 col-span-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-white"
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
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    AxoAnalytics
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Natural Language Database Queries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
