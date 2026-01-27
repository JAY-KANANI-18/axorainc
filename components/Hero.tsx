import React from "react";
import Link from "next/link";
import { FaRocket } from "react-icons/fa";
import theme from "@/styles/theme";

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full h-full py-20 overflow-hidden"
    >
      {/* Floating animated background bubbles */}

      <div className="relative z-10 w-full px-4 md:px-20 py-20 flex flex-col md:flex-row">
        {/* Top-Right */}
        <div
          className="absolute top-[10%] right-[5%] w-72 h-72 bg-gradient-to-r 
          from-cyan-400/30 to-blue-500/30 rounded-full mix-blend-multiply 
          animate-blob -z-10 animation-delay-2000"
        ></div>

        {/* Center */}
        {/* <div
          className="absolute top-[40%] left-[45%] w-72 h-72 bg-gradient-to-r 
          from-teal-400/30 to-indigo-500/30 rounded-full mix-blend-multiply 
          animate-blob -z-10 animation-delay-4000"
        ></div> */}

        {/* Bottom-Right */}
        <div
          className=" absolute bottom-[5%] right-[10%] w-72 h-72 bg-gradient-to-r 
          from-rose-400/30 to-fuchsia-500/30 rounded-full mix-blend-multiply 
          animate-blob -z-10 animation-delay-1000"
        ></div>

        <div className="mb-10 md:mb-0">
          {/* =================== POLISHED HEADLINE =================== */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Building the{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
                Digital Products
              </span>
              {/* subtle glow underline */}
              <span className="absolute left-0 -bottom-1 w-full h-2 bg-blue-400/30 blur-md"></span>
            </span>{" "}
            that power{" "}
            <span className="relative inline-block text-indigo-700">
              Tomorrow
              {/* small accent dot */}
              <span className="absolute -right-2 top-2 w-2 h-2 rounded-full bg-fuchsia-500"></span>
            </span>
          </h1>

          <p className="text-xl mb-8 leading-relaxed max-w-xl">
            We craft enterprise SaaS, CRM systems, and intelligent platforms
            using AI, automation, and cloud-native technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group px-8 py-4 bg-blue-900 
              text-white font-semibold rounded-xl
              transition-all duration-300 text-center shadow-2xl
              hover:shadow-blue-500/25 hover:-translate-y-1 hover:scale-105"
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
              className="px-8 py-4 bg-white hover:bg-gray-50 text-black font-semibold 
              rounded-xl border border-white/20 transition-all duration-300 
              backdrop-blur-sm hover:backdrop-blur-md hover:-translate-y-1"
            >
              Browse Services
            </a>
          </div>
        </div>

        <div className=" md:w-1/2 relative">
          <div
            className="absolute bottom-[30%] right-[40%] w-72 h-72 bg-gradient-to-r 
            from-blue-400/30 to-purple-500/30 rounded-full 
            mix-blend-multiply animate-blob -z-10 animation-delay-3000
            animate-[float_6s_ease-in-out_infinite]"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
