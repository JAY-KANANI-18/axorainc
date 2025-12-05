import React from "react";
import Link from "next/link";
import { FaRocket } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden">
      {/* Floating animated background bubbles */}

      {/* Content wrapper (now full-width, not constrained by container class) */}
      <div className="relative z-10 w-full px-4 md:px-20 py-20  flex flex-col md:flex-row">
        <div
          className="absolute top-[5%] left-[5%] w-72 h-72 bg-gradient-to-r 
    from-blue-400/30 to-purple-500/30 rounded-full mix-blend-multiply 
    filter blur-xl animate-blob"
        ></div>

        {/* Top-Right */}
        <div
          className="absolute top-[10%] right-[5%] w-72 h-72 bg-gradient-to-r 
    from-cyan-400/30 to-blue-500/30 rounded-full mix-blend-multiply 
    filter blur-xl animate-blob animation-delay-2000"
        ></div>

        {/* Center */}
        <div
          className="absolute top-[40%] left-[45%] w-72 h-72 bg-gradient-to-r 
    from-teal-400/30 to-indigo-500/30 rounded-full mix-blend-multiply 
    filter blur-xl animate-blob animation-delay-4000"
        ></div>

        {/* Bottom-Left */}
        <div
          className="absolute bottom-[10%] left-[8%] w-72 h-72 bg-gradient-to-r 
    from-purple-400/30 to-pink-500/30 rounded-full mix-blend-multiply 
    filter blur-xl animate-blob animation-delay-3000"
        ></div>

        {/* Bottom-Right */}
        <div
          className="absolute bottom-[5%] right-[10%] w-72 h-72 bg-gradient-to-r 
    from-rose-400/30 to-fuchsia-500/30 rounded-full mix-blend-multiply 
    filter blur-xl animate-blob animation-delay-1000"
        ></div>
        <div className="mb-10 md:mb-0 ">
          <div
            className="inline-flex items-center px-4 py-2 
          bg-gradient-to-r from-blue-500/10 to-purple-500/10 
          backdrop-blur-sm border border-blue-500/20 
          rounded-full mb-6"
          >
            <span className="text-blue-400 text-sm font-medium flex items-center gap-2">
              <FaRocket className="text-blue-300" />
              AI-Driven Software Innovation
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold 
          bg-gradient-to-r from-white via-blue-100 to-purple-100 
          bg-clip-text text-transparent leading-tight mb-6"
          >
            Building the Digital Products That Power Tomorrow
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
            We craft enterprise SaaS, CRM systems, and intelligent platforms
            using AI, automation, and cloud-native technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 
            hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl
            transition-all duration-300 text-center shadow-2xl hover:shadow-blue-500/25 
            transform hover:-translate-y-1 hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                Book Strategy Call
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
              href="#services"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold 
            rounded-xl border border-white/20 transition-all duration-300 
            backdrop-blur-sm hover:backdrop-blur-md transform hover:-translate-y-1"
            >
              Browse Services
            </a>
          </div>
        </div>

        <div className="md:w-1/2 relative">
          {/* Right-side blobs (still floating) */}
          <div
            className="absolute -top-4 -left-4 w-72 h-72 
          bg-gradient-to-r from-blue-400/30 to-purple-500/30 rounded-full 
          blur-xl mix-blend-multiply 
          animate-[float_6s_ease-in-out_infinite]"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
