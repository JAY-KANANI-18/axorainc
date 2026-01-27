import theme from "@/styles/theme";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [hireMenuOpen, setHireMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileHireOpen, setMobileHireOpen] = useState(false);
  const [activeHireCategory, setActiveHireCategory] = useState<number>(0);
  const [mobileHireActiveCat, setMobileHireActiveCat] = useState<number | null>(
    null
  );
  const [activeServiceCategory, setActiveServiceCategory] = useState<number>(0);
  const [activeServiceGroup, setActiveServiceGroup] = useState<number>(0);
  const [mobileServicesActiveCat, setMobileServicesActiveCat] = useState<
    number | null
  >(null);
  const [mobileServicesActiveGroup, setMobileServicesActiveGroup] = useState<
    number | null
  >(null);

  // 🔹 Scroll hide / show (ONLY NEW LOGIC)
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) return; // don't hide when mobile menu is open

      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setShowNav(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowNav(false); // scroll down
      } else {
        setShowNav(true); // scroll up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

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

  // Desktop mega menu data for Services
  const servicesMegaMenu = [
    {
      category: "Software Solutions",
      items: [
        {
          label: "Custom Software Engineering",
          href: "/contact",
        },
        {
          label: "Enterprise Software Systems",
          href: "/contact",
        },
        {
          label: "Product Development & Scaling",
          href: "/contact",
        },
        {
          label: "Legacy System Modernization",
          href: "/contact",
        },
        {
          label: "Software Integration Services",
          href: "/contact",
        },
        {
          label: "Technology Consulting",
          href: "/contact",
        },
        {
          label: "Offshore Development Teams",
          href: "/contact",
        },
        {
          label: "Dedicated Engineering Teams",
          href: "/contact",
        },
      ],
    },

    {
      category: "App Development",
      items: [
        {
          label: "Mobile Application Development",
          href: "/contact",
        },
        {
          label: "Web & Full-Stack Applications",
          href: "/contact",
        },
        {
          label: "E-commerce Application Solutions",
          href: "/contact",
        },
        {
          label: "Application Re-engineering",
          href: "/contact",
        },
        {
          label: "Application Migration & Upgrade",
          href: "/contact",
        },
      ],
    },

    {
      category: "Web Experiences",
      items: [
        { label: "Website Design & UI", href: "/contact" },
        {
          label: "Corporate & Brand Websites",
          href: "/contact",
        },
        {
          label: "Custom Web Development",
          href: "/contact",
        },
        { label: "Web Portals & Dashboards", href: "/contact" },
        {
          label: "Website Revamp & Redesign",
          href: "/contact",
        },
      ],
    },

    {
      category: "CRM & ERP Solutions",
      items: [
        {
          label: "Custom CRM Development",
          href: "/contact",
        },
        {
          label: "CRM Implementation & Customization",
          href: "/contact",
        },
        {
          label: "ERP System Development",
          href: "/contact",
        },
        {
          label: "ERP Integration & Automation",
          href: "/contact",
        },
        { label: "CRM / ERP Migration", href: "/contact" },
        {
          label: "Business Process Automation (CRM/ERP)",
          href: "/contact",
        },
      ],
    },
    {
      category: "Ecommerce Solutions",
      items: [
        {
          label: "Custom Ecommerce Development",
          href: "/contact",
        },
        {
          label: "Ecommerce Website & Storefronts",
          href: "/contact",
        },
        {
          label: "Headless Commerce Solutions",
          href: "/contact",
        },
        {
          label: "Marketplace Development",
          href: "/contact",
        },
        {
          label: "Ecommerce Platform Migration",
          href: "/contact",
        },
        {
          label: "Ecommerce Performance Optimization",
          href: "/contact",
        },
        {
          label: "Payment & Checkout Integration",
          href: "/contact",
        },
      ],
    },

    {
      category: "Automation & AI",
      items: [
        {
          label: "Business Process Automation",
          href: "/contact",
        },
        {
          label: "AI-Driven Automation",
          href: "/contact",
        },
        {
          label: "Workflow Optimization",
          href: "/contact",
        },
      ],
    },

    // {
    //   category: "Quality & Testing",
    //   items: [
    //     {
    //       label: "Software Quality Engineering",
    //       href: "/services/quality-engineering",
    //     },
    //     {
    //       label: "Automated Testing Solutions",
    //       href: "/services/automated-testing",
    //     },
    //     {
    //       label: "Performance & Load Testing",
    //       href: "/services/performance-load-testing",
    //     },
    //     {
    //       label: "Security & Compliance Testing",
    //       href: "/services/security-compliance-testing",
    //     },
    //   ],
    // },

    {
      category: "SaaS Enablement",
      items: [
        {
          label: "SaaS Product Development",
          href: "/contact",
        },
        {
          label: "SaaS Architecture & Scaling",
          href: "/contact",
        },
        { label: "SaaS UX & Web Design", href: "/contact" },
      ],
    },

    // {
    //   category: "Data & Intelligence",
    //   items: [
    //     {
    //       label: "Data Engineering Pipelines",
    //       href: "/services/data-engineering",
    //     },
    //     { label: "Advanced Data Analytics", href: "/services/data-analytics" },
    //     {
    //       label: "Business Intelligence & Reporting",
    //       href: "/services/business-intelligence",
    //     },
    //     {
    //       label: "Data Visualization Solutions",
    //       href: "/services/data-visualization",
    //     },
    //     {
    //       label: "Data Governance & Security",
    //       href: "/services/data-governance-security",
    //     },
    //     { label: "Big Data Processing", href: "/services/big-data-processing" },
    //   ],
    // },

    // {
    //   category: "Cloud & Infrastructure",
    //   items: [
    //     {
    //       label: "Cloud Strategy & Enablement",
    //       href: "/services/cloud-strategy",
    //     },
    //     {
    //       label: "Cloud Migration & Optimization",
    //       href: "/services/cloud-migration-optimization",
    //     },
    //     {
    //       label: "Managed Cloud Services",
    //       href: "/services/managed-cloud-services",
    //     },
    //     {
    //       label: "Cloud-Native Application Builds",
    //       href: "/services/cloud-native-applications",
    //     },
    //     { label: "AWS Solutions", href: "/services/aws-solutions" },
    //     { label: "Azure Solutions", href: "/services/azure-solutions" },
    //     {
    //       label: "Google Cloud Solutions",
    //       href: "/services/google-cloud-solutions",
    //     },
    //   ],
    // },

    // {
    //   category: "DevOps & Reliability",
    //   items: [
    //     { label: "DevOps Enablement", href: "/services/devops-enablement" },
    //     { label: "CI/CD Automation", href: "/services/cicd-automation" },
    //     {
    //       label: "Infrastructure as Code",
    //       href: "/services/infrastructure-as-code",
    //     },
    //     {
    //       label: "Platform Engineering",
    //       href: "/services/platform-engineering",
    //     },
    //     {
    //       label: "Kubernetes & Containers",
    //       href: "/services/kubernetes-containers",
    //     },
    //   ],
    // },

    // {
    //   category: "IT & Consulting",
    //   items: [
    //     { label: "IT Advisory Services", href: "/services/it-advisory" },
    //     {
    //       label: "Technology Staff Augmentation",
    //       href: "/services/staff-augmentation",
    //     },
    //     { label: "Managed IT Support", href: "/services/managed-it-support" },
    //     {
    //       label: "IT Operations Outsourcing",
    //       href: "/services/it-operations-outsourcing",
    //     },
    //   ],
    // },

    // {
    //   category: "Technology Stack",
    //   items: [
    //     { label: "Frontend Engineering", href: "/technologies/frontend" },
    //     { label: "Backend Engineering", href: "/technologies/backend" },
    //     { label: "Mobile Technologies", href: "/technologies/mobile" },
    //     { label: "Cloud Platforms", href: "/technologies/cloud" },
    //   ],
    // },
  ] as const;

  // Derived helpers for services mega menu
  const activeService = servicesMegaMenu[activeServiceCategory] as any;
  const hasServiceGroups =
    Array.isArray(activeService?.groups) && activeService.groups.length > 0;

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

  // Desktop mega menu data (left categories -> middle roles)
  const hireMegaMenu = [
    {
      category: "Frontend",
      cta: {
        title: "Your Very Own UI/UX Architects",
        href: "/hire/frontend-developers",
        label: "Hire Frontend Developer",
      },
      roles: [
        { label: "Angular Developer", href: "/hire/angular-developer" },
        { label: "React Developer", href: "/hire/react-developers" },
        { label: "Vue Developer", href: "/hire/vue-developer" },
        { label: "Javascript Developer", href: "/hire/javascript-developer" },
        { label: "UI/UX Developer", href: "/hire/uiux-designers" },
        { label: "HTML/CSS Developer", href: "/hire/html-css-developer" },
        { label: "Tailwind CSS Developer", href: "/hire/tailwind-developer" },
      ],
    },
    {
      category: "Backend",
      cta: {
        title: "Battle-tested APIs & Systems",
        href: "/hire/backend-developers",
        label: "Hire Backend Developer",
      },
      roles: [
        { label: "Node.js Developer", href: "/hire/nodejs-developers" },
        { label: "Python Developer", href: "/hire/python-developer" },
        { label: "Java Developer", href: "/hire/java-developer" },
        { label: "Go Developer", href: "/hire/go-developer" },
        { label: ".NET Developer", href: "/hire/dotnet-developer" },
      ],
    },
    {
      category: "Mobile App",
      cta: {
        title: "Delightful Mobile Experiences",
        href: "/hire/mobile-developers",
        label: "Hire Mobile Developer",
      },
      roles: [
        {
          label: "React Native Developer",
          href: "/hire/react-native-developer",
        },
        { label: "Flutter Developer", href: "/hire/flutter-developer" },
        { label: "Android Developer", href: "/hire/android-developer" },
        { label: "iOS Developer", href: "/hire/ios-developer" },
      ],
    },
    // {
    //   category: "DevOps",
    //   cta: {
    //     title: "Automate. Ship. Scale.",
    //     href: "/hire/devops-experts",
    //     label: "Hire DevOps Engineer",
    //   },
    //   roles: [
    //     { label: "SRE / Platform Engineer", href: "/hire/sre-engineer" },
    //     { label: "AWS / GCP / Azure", href: "/hire/cloud-devops" },
    //     { label: "CI/CD Engineer", href: "/hire/cicd-engineer" },
    //     { label: "Infrastructure as Code", href: "/hire/iac-engineer" },
    //   ],
    // },
    // {
    //   category: "Data & AI",
    //   cta: {
    //     title: "Make Data Your Advantage",
    //     href: "/hire/ai-ml-specialists",
    //     label: "Hire Data/AI Expert",
    //   },
    //   roles: [
    //     { label: "Data Engineer", href: "/hire/data-engineers" },
    //     { label: "ML Engineer", href: "/hire/ml-engineer" },
    //     { label: "Computer Vision", href: "/hire/computer-vision-engineer" },
    //     { label: "LLM / NLP Engineer", href: "/hire/llm-nlp-engineer" },
    //   ],
    // },
    // {
    //   category: "QA & Automation",
    //   cta: {
    //     title: "Ship With Confidence",
    //     href: "/hire/qa-automation",
    //     label: "Hire QA Engineer",
    //   },
    //   roles: [
    //     { label: "QA Automation Engineer", href: "/hire/qa-automation" },
    //     { label: "Manual QA", href: "/hire/manual-qa" },
    //     { label: "Performance Testing", href: "/hire/performance-testing" },
    //   ],
    // },
  ] as const;

  return (
    <>
      <header
        className={`sticky top-0 z-50    backdrop-blur-sm shadow-sm text-black font-bold
        transition-transform duration-300 ease-in-out
        ${showNav ? "translate-y-0" : "-translate-y-full"}`}
        style={{ backgroundColor: theme.colors.background.light }}
      >
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center relative">
          {/* Logo */}
          <a href="/#" className="flex items-center text-2xl font-bold">
            <Image
              src="/axora-full-main.png"
              alt="Axora Logo Desktop"
              width={150}
              height={80}
              priority
              className="hidden md:block"
            />
            <Image
              src="/axora-main.png" // ← your mobile version
              alt="Axora Logo Mobile"
              width={80}
              height={50}
              priority
              className="block md:hidden"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10 text-lg">
            {/* Services */}
            <div
              className=""
              onMouseEnter={() => setServicesMenuOpen(true)}
              onMouseLeave={() => setServicesMenuOpen(false)}
              onClick={() => setServicesMenuOpen((prev) => !prev)}
            >
              <a>
                <button className="inline-flex items-center gap-2 hover:text-blue-900">
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      servicesMenuOpen ? "rotate-180" : ""
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
              {/* Services Mega menu */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[1100px] max-w-[95vw] bg-white border rounded-2xl shadow-2xl ring-1 ring-black/5 transition-all ${
                  servicesMenuOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="flex divide-x p-2">
                  {/* Left categories */}
                  <div className="w-1/3 p-4 max-h-[70vh] overflow-y-auto">
                    <div className="space-y-1">
                      {servicesMegaMenu.map((cat, idx) => (
                        <button
                          key={cat.category}
                          onMouseEnter={() => {
                            setActiveServiceCategory(idx);
                            setActiveServiceGroup(0);
                          }}
                          className={`w-full flex items-center justify-between text-left px-3 py-2 rounded-lg transition-colors ${
                            activeServiceCategory === idx
                              ? "bg-blue-50 text-blue-900 font-semibold"
                              : "text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <span>{cat.category}</span>
                          <span
                            className={`ml-2 text-slate-400 ${
                              activeServiceCategory === idx
                                ? "text-blue-900"
                                : ""
                            }`}
                          >
                            ›
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Right content */}
                  <div className="flex-1 p-6 max-h-[70vh] overflow-y-auto">
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-slate-900 flex items-center gap-3">
                        <span>
                          {servicesMegaMenu[activeServiceCategory]?.category}
                        </span>
                      </h4>
                      <div className="h-0.5 w-14 bg-blue-900 mt-1 rounded"></div>
                    </div>

                    {/* Groups rendering if present */}
                    {hasServiceGroups ? (
                      <div className="space-y-4">
                        {activeService.groups.map((grp: any, i: number) => {
                          const open = activeServiceGroup === i;
                          const h = 12 + grp.items.length * 36;
                          return (
                            <div key={grp.title}>
                              <button
                                onMouseEnter={() => setActiveServiceGroup(i)}
                                className="w-full flex items-center justify-between text-left py-1"
                              >
                                <span className="font-semibold text-slate-800">
                                  {grp.title}
                                </span>
                                <svg
                                  className={`w-4 h-4 text-orange-500 transition-transform ${
                                    open ? "rotate-180" : "rotate-0"
                                  }`}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </button>
                              <div
                                className="ml-2 pl-4 border-l border-slate-200 overflow-hidden"
                                style={{
                                  maxHeight: open ? h : 0,
                                  transition: "max-height 300ms ease",
                                }}
                              >
                                {grp.items.map((it: any, j: number) => (
                                  <a
                                    key={it.href}
                                    href={it.href}
                                    className="block py-2 text-slate-700 hover:text-blue-900"
                                    style={{
                                      transition:
                                        "opacity 200ms ease, transform 200ms ease",
                                      transitionDelay: `${j * 25}ms`,
                                      opacity: open ? 1 : 0,
                                      transform: open
                                        ? "translateY(0)"
                                        : "translateY(4px)",
                                    }}
                                  >
                                    {it.label}
                                  </a>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-2">
                        {activeService?.items?.map((it: any, j: number) => (
                          <a
                            key={it.href}
                            href={it.href}
                            className="block px-2 py-2 rounded-md text-slate-700 hover:bg-blue-50 hover:text-blue-900"
                            style={{
                              transition:
                                "opacity 200ms ease, transform 200ms ease",
                              transitionDelay: `${j * 20}ms`,
                              opacity: 1,
                              transform: "translateY(0)",
                            }}
                          >
                            {it.label}
                          </a>
                        ))}
                      </div>
                    )}

                    {/* Footer CTA */}
                    <div className="mt-6 pt-4 border-t flex items-center justify-between">
                      <div className="text-sm text-slate-500">
                        Browse Services
                      </div>
                      <a
                        href="/services"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-900 text-white hover:bg-blue-800"
                      >
                        Explore All Services
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Us */}
            <a href="/why-axora" className="hover:text-blue-900">
              Why Axora
            </a>

            {/* <a
              href="/industries"
              onClick={() => setMenuOpen(false)}
              className=" hover:text-blue-900"
            >
              Industries
            </a> */}

            <a href="/blog" className="hover:text-blue-900">
              Blog
            </a>

            {/* Hire */}
            <div
              className=""
              onClick={() => setHireMenuOpen((prev) => !prev)}
              onMouseEnter={() => setHireMenuOpen(true)}
              onMouseLeave={() => setHireMenuOpen(false)}
            >
              <button className="inline-flex items-center gap-2 hover:text-blue-800">
                Hire
                <svg
                  className={`w-4 h-4 transition-transform ${
                    hireMenuOpen ? "rotate-180" : ""
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

              {/* Mega menu panel */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[1000px] max-w-[95vw] bg-white border rounded-2xl shadow-xl transition-all ${
                  hireMenuOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="flex divide-x">
                  {/* Left categories */}
                  <div className="w-1/4 p-6">
                    <div className="space-y-2">
                      {hireMegaMenu.map((cat, idx) => (
                        <button
                          key={cat.category}
                          onMouseEnter={() => setActiveHireCategory(idx)}
                          className={`w-full flex items-center justify-between text-left px-3 py-2 rounded-lg transition-colors ${
                            activeHireCategory === idx
                              ? "bg-blue-50 text-blue-900 font-semibold"
                              : "text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <span>{cat.category}</span>
                          <span
                            className={`ml-2 transition-transform ${
                              activeHireCategory === idx
                                ? "translate-x-0.5"
                                : ""
                            }`}
                          >
                            ›
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Middle roles list */}
                  <div className="w-1/3 p-6">
                    <div className="mb-3">
                      <div className="text-sm uppercase tracking-wide text-slate-500">
                        {hireMegaMenu[activeHireCategory]?.category}
                      </div>
                      <div className="h-0.5 w-12 bg-blue-900 mt-1 rounded"></div>
                    </div>
                    <div className="space-y-2">
                      {hireMegaMenu[activeHireCategory]?.roles.map((r) => (
                        <a
                          key={r.href}
                          href={r.href}
                          className="block px-2 py-2 rounded-md text-slate-700 hover:bg-blue-50 hover:text-blue-900"
                        >
                          {r.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Right CTA card */}
                  <div className="flex-1 p-6">
                    <div className="rounded-xl border p-6 bg-amber-50 border-amber-200 h-full flex flex-col justify-between">
                      <div>
                        <h4 className="text-xl font-semibold text-slate-900 mb-2">
                          {hireMegaMenu[activeHireCategory]?.cta.title}
                        </h4>
                        <p className="text-slate-700 text-sm">
                          Experience smooth navigation and user-friendly designs
                          with our expert team.
                        </p>
                      </div>
                      <div className="mt-6">
                        <a
                          href={hireMegaMenu[activeHireCategory]?.cta.href}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white hover:bg-slate-800"
                        >
                          {hireMegaMenu[activeHireCategory]?.cta.label}
                          <span>→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="/careers" className="hover:text-blue-900">
              Careers
            </a>
          </div>

          {/* CTA */}
          <a
            href="/contact"
            className="group px-6 py-3 bg-blue-900 hover:bg-transparent hover:text-blue-900 hover:border-blue-900 border text-white font-semibold rounded-xl"
          >
            Contact Us
          </a>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-secondary-800 hover:text-blue-900"
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
                  onClick={() =>
                    setMobileServicesOpen((prev) => {
                      const next = !prev;
                      if (!next) {
                        setMobileServicesActiveCat(null);
                        setMobileServicesActiveGroup(null);
                      }
                      return next;
                    })
                  }
                  className="flex w-full items-center justify-between  hover:text-blue-900"
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
                  <div className="pl-4 border-l border-slate-200 space-y-1">
                    {servicesMegaMenu.map((cat, idx) => {
                      const open = mobileServicesActiveCat === idx;
                      const approxHeight = open
                        ? Array.isArray((cat as any).groups)
                          ? 600
                          : 12 + (cat as any).items.length * 44
                        : 0;
                      return (
                        <div key={cat.category}>
                          <button
                            onClick={() => {
                              const willOpen = !open;
                              setMobileServicesActiveCat(willOpen ? idx : null);
                              setMobileServicesActiveGroup(null);
                            }}
                            className="w-full flex items-center justify-between text-left py-2 text-sm text-secondary-700 hover:text-blue-900"
                          >
                            <span>{cat.category}</span>
                            <svg
                              className={`w-4 h-4 transition-transform ${
                                open ? "rotate-180" : "rotate-0"
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
                            className="ml-2 pl-4 border-l border-slate-200 overflow-hidden"
                            style={{
                              maxHeight: approxHeight,
                              transition: "max-height 300ms ease",
                            }}
                          >
                            {Array.isArray((cat as any).groups) ? (
                              <div className="space-y-1 py-1">
                                {(cat as any).groups.map(
                                  (grp: any, gIdx: number) => {
                                    const gOpen =
                                      mobileServicesActiveGroup === gIdx &&
                                      mobileServicesActiveCat === idx;
                                    const gH = 12 + grp.items.length * 40;
                                    return (
                                      <div key={grp.title}>
                                        <button
                                          onClick={() =>
                                            setMobileServicesActiveGroup(
                                              gOpen ? null : gIdx
                                            )
                                          }
                                          className="w-full flex items-center justify-between text-left py-2 text-sm text-secondary-700 hover:text-blue-900"
                                        >
                                          <span className="font-medium text-slate-800">
                                            {grp.title}
                                          </span>
                                          <svg
                                            className={`w-4 h-4 text-orange-500 transition-transform ${
                                              gOpen ? "rotate-180" : "rotate-0"
                                            }`}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M19 9l-7 7-7-7"
                                            />
                                          </svg>
                                        </button>
                                        <div
                                          className="ml-2 pl-4 border-l border-slate-200 overflow-hidden"
                                          style={{
                                            maxHeight: gOpen ? gH : 0,
                                            transition: "max-height 300ms ease",
                                          }}
                                        >
                                          {grp.items.map(
                                            (it: any, j: number) => (
                                              <a
                                                key={it.href}
                                                href={it.href}
                                                onClick={() => {
                                                  setMenuOpen(false);
                                                  setMobileServicesOpen(false);
                                                  setMobileServicesActiveCat(
                                                    null
                                                  );
                                                  setMobileServicesActiveGroup(
                                                    null
                                                  );
                                                }}
                                                className="block text-sm text-secondary-700 hover:text-blue-900 py-2"
                                                style={{
                                                  transition:
                                                    "opacity 200ms ease, transform 200ms ease",
                                                  transitionDelay: `${
                                                    j * 25
                                                  }ms`,
                                                  opacity: gOpen ? 1 : 0,
                                                  transform: gOpen
                                                    ? "translateY(0)"
                                                    : "translateY(4px)",
                                                }}
                                              >
                                                {it.label}
                                              </a>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            ) : (
                              <div className="space-y-1 py-1">
                                {(cat as any).items.map(
                                  (it: any, j: number) => (
                                    <a
                                      key={it.href}
                                      href={it.href}
                                      onClick={() => {
                                        setMenuOpen(false);
                                        setMobileServicesOpen(false);
                                        setMobileServicesActiveCat(null);
                                      }}
                                      className="block text-sm text-secondary-700 hover:text-blue-900 py-2"
                                      style={{
                                        transition:
                                          "opacity 200ms ease, transform 200ms ease",
                                        transitionDelay: `${j * 25}ms`,
                                        opacity: open ? 1 : 0,
                                        transform: open
                                          ? "translateY(0)"
                                          : "translateY(4px)",
                                      }}
                                    >
                                      {it.label}
                                    </a>
                                  )
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              <a
                href="/why-axora"
                onClick={() => setMenuOpen(false)}
                className=" hover:text-blue-900"
              >
                Why Axora
              </a>

              {/* <a
                href="/industries"
                onClick={() => setMenuOpen(false)}
                className=" hover:text-blue-900"
              >
                Industries
              </a> */}
              <a
                href="/blog"
                onClick={() => setMenuOpen(false)}
                className=" hover:text-blue-900"
              >
                Blog
              </a>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() =>
                    setMobileHireOpen((prev) => {
                      const next = !prev;
                      if (!next) setMobileHireActiveCat(null);
                      return next;
                    })
                  }
                  className="flex w-full items-center justify-between  hover:text-blue-900"
                >
                  <span>Hire Talent</span>
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
                  <div className="pl-4 border-l border-slate-200 space-y-1">
                    {hireMegaMenu.map((cat, idx) => {
                      const open = mobileHireActiveCat === idx;
                      const rolesHeight = 12 + cat.roles.length * 44; // px
                      return (
                        <div key={cat.category} className="">
                          <button
                            onClick={() =>
                              setMobileHireActiveCat(open ? null : idx)
                            }
                            className="w-full flex items-center justify-between text-left py-2 text-sm text-secondary-700 hover:text-blue-900"
                          >
                            <span>{cat.category}</span>
                            <svg
                              className={`w-4 h-4 transition-transform ${
                                open ? "rotate-180" : "rotate-0"
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
                            className="ml-2 pl-4 border-l border-slate-200 overflow-hidden"
                            style={{
                              maxHeight: open ? rolesHeight : 0,
                              transition: "max-height 300ms ease",
                            }}
                          >
                            {cat.roles.map((r, i) => (
                              <a
                                key={r.href}
                                href={r.href}
                                onClick={() => {
                                  setMenuOpen(false);
                                  setMobileHireOpen(false);
                                  setMobileHireActiveCat(null);
                                }}
                                className="block text-sm text-secondary-700 hover:text-blue-900 py-2"
                                style={{
                                  transition:
                                    "opacity 200ms ease, transform 200ms ease",
                                  transitionDelay: `${i * 25}ms`,
                                  opacity: open ? 1 : 0,
                                  transform: open
                                    ? "translateY(0)"
                                    : "translateY(4px)",
                                }}
                              >
                                {r.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              <a
                href="/careers"
                onClick={() => setMenuOpen(false)}
                className=" hover:text-blue-900"
              >
                Careers
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className=" hover:text-blue-900"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Nav;
