import Image from "next/image";
import { useState } from "react";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
    const [hireMenuOpen, setHireMenuOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileHireOpen, setMobileHireOpen] = useState(false);
  
    const servicesMenu = [
      {
        label: "AI Product Engineering",
        href: "/services/ai-product-engineering",
      },
      {
        label: "Custom SaaS platforms",
        href: "/services/custom-saas-development",
      },
      { label: "CRM Modernization", href: "/services/crm-modernization" },
      {
        label: "Enterprise Web Applications",
        href: "/services/enterprise-web-applications",
      },
      {
        label: "Mobile App Development",
        href: "/services/mobile-app-development",
      },
      {
        label: "Cloud & DevOps Automation",
        href: "/services/cloud-devops-automation",
      },
      {
        label: "Data Engineering & Analytics",
        href: "/services/data-engineering-analytics",
      },
      {
        label: "Intelligent Process Automation",
        href: "/services/intelligent-process-automation",
      },
      {
        label: "Digital Commerce & Marketplaces",
        href: "/services/digital-commerce-marketplaces",
      },
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

    return <>
  
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm text-black">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="/#" className="flex items-center text-2xl font-bold">
            {/* if desktop this logo*/}

            <Image
              src="/axora-full-main.png"
              alt="Axora Logo Desktop"
              width={150}
              height={80}
              priority
              className="hidden md:block"
            />

            {/* Mobile Logo */}
            <Image
              src="/axora-main.png" // ← your mobile version
              alt="Axora Logo Mobile"
              width={80}
              height={50}
              priority
              className="block md:hidden"
            />

            {/* Axora<span className="text-primary-400">Inc</span> */}
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10 text-lg">
            <div
              className="relative"
              onMouseEnter={() => setServicesMenuOpen(true)}
              onMouseLeave={() => setServicesMenuOpen(false)}
            >
                <a href="/services">
              <button
                type="button"
                onClick={() => setServicesMenuOpen((prev) => !prev)}
                className="inline-flex items-center gap-2  hover:text-purple-800 transition-colors"
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
              </a>
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
                      className="block rounded-xl px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-purple-800 transition-colors"
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
            <a href="/axovision" className=" hover:text-purple-800">
              AxoVision
            </a>
            <a href="/#features" className=" hover:text-purple-800">
              Features
            </a>
            <a href="/blog" className=" hover:text-purple-800">
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
                className="inline-flex items-center gap-2  hover:text-purple-800 transition-colors"
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

            <a href="/careers" className=" hover:text-purple-800">
              Careers
            </a>
          </div>
          <div>
            {" "}
            <a
              href="/#contact"
              className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 text-center shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 hover:scale-105"
            >
              Connect
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-secondary-800 hover:text-purple-800"
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
          <div className="lg:hidden bg-white border-t">
            <div className="flex flex-col space-y-4 px-6 py-4">
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between  hover:text-purple-800"
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
                        className="block text-sm text-secondary-500 hover:text-purple-800"
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
                className=" hover:text-purple-800"
              >
                AxoVision
              </a>
              <a
                href="#features"
                onClick={() => setMenuOpen(false)}
                className=" hover:text-purple-800"
              >
                Features
              </a>
              <a
                href="/blog"
                onClick={() => setMenuOpen(false)}
                className=" hover:text-purple-800"
              >
                Blog
              </a>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => setMobileHireOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between  hover:text-purple-800"
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
                        className="block text-sm text-secondary-500 hover:text-purple-800"
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
                className=" hover:text-purple-800"
              >
                Careers
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className=" hover:text-purple-800"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>
      </>
}
    
    export default Nav;
