import { useState } from "react";
import Head from "next/head";
import { NextPage } from "next";
import Image from "next/image";
import Hero from "../components/Hero";
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

  return (
    <>
      <Head>
        <title>Axora Inc - Intelligent Digital Solutions for Modern Enterprises</title>
        <link rel="icon" href="/favicon.png" />

        <meta
          name="description"
          content="Axora Inc provides AI-powered digital solutions including axoVision (Image Search Engine), axoConnect (Omnichannel Platform), and AxoAnalytics (Natural Language Database Queries) for modern enterprises."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex items-center text-2xl font-bold">
              {/* <Image
                src="/logo.png"
                alt="Axora Inc Logo"
                width={180}
                height={40}
                priority
              /> */}
              Axora<span className="text-primary-400">Inc</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#products"
                className="text-secondary-600 hover:text-primary-600"
              >
                Products
              </a>
              <a
                href="#features"
                className="text-secondary-600 hover:text-primary-600"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-secondary-600 hover:text-primary-600"
              >
                About
              </a>
              <a
                href="#tech-stack"
                className="text-secondary-600 hover:text-primary-600"
              >
                Tech Stack
              </a>
              <a
                href="#portfolio"
                className="text-secondary-600 hover:text-primary-600"
              >
                Portfolio
              </a>
              <a
                href="#testimonials"
                className="text-secondary-600 hover:text-primary-600"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-secondary-600 hover:text-primary-600"
              >
                Contact
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
                <a
                  href="#products"
                  onClick={() => setMenuOpen(false)}
                  className="text-secondary-600 hover:text-primary-600"
                >
                  Products
                </a>
                <a
                  href="#features"
                  onClick={() => setMenuOpen(false)}
                  className="text-secondary-600 hover:text-primary-600"
                >
                  Features
                </a>
                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="text-secondary-600 hover:text-primary-600"
                >
                  About
                </a>
                <a
                  href="#tech-stack"
                  onClick={() => setMenuOpen(false)}
                  className="text-secondary-600 hover:text-primary-600"
                >
                  Tech Stack
                </a>
                <a
                  href="#portfolio"
                  onClick={() => setMenuOpen(false)}
                  className="text-secondary-600 hover:text-primary-600"
                >
                  Portfolio
                </a>
                <a
                  href="#testimonials"
                  onClick={() => setMenuOpen(false)}
                  className="text-secondary-600 hover:text-primary-600"
                >
                  Testimonials
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
          <Products />
          <Features />
          <About />
          <TechStack />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
