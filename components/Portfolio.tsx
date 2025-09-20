import React, { useState } from "react";

interface CaseStudy {
  title: string;
  description: string;
  image: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  year: string;
}

const PortfolioItem = ({ caseStudy }: { caseStudy: CaseStudy }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
          <h3 className="text-xl font-semibold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {caseStudy.title}
          </h3>
          <p className="text-white text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
            {caseStudy.description}
          </p>
          <button className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">
            View Case Study
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold text-secondary-900">
                  {caseStudy.title}
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-secondary-500 hover:text-secondary-700"
                >
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
                </button>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div>
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-secondary-500">
                      CLIENT
                    </h3>
                    <p className="text-secondary-900">{caseStudy.client}</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-secondary-500">
                      INDUSTRY
                    </h3>
                    <p className="text-secondary-900">{caseStudy.industry}</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-secondary-500">
                      YEAR
                    </h3>
                    <p className="text-secondary-900">{caseStudy.year}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-secondary-500">
                      TECHNOLOGIES
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {caseStudy.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  The Challenge
                </h3>
                <p className="text-secondary-700">{caseStudy.challenge}</p>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  Our Solution
                </h3>
                <p className="text-secondary-700">{caseStudy.solution}</p>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  Results
                </h3>
                <ul className="list-disc pl-5 text-secondary-700">
                  {caseStudy.results.map((result, index) => (
                    <li key={index} className="mb-2">
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Portfolio: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      title: "AI-Powered Image Search",
      description:
        "Upload an image and instantly find visually similar images using AI embeddings.",
      image:
        "https://media.istockphoto.com/id/1271072224/photo/hand-using-laptop-and-press-screen-to-search-browsing-on-the-internet-online.webp?a=1&b=1&s=612x612&w=0&k=20&c=69cBQpj7FhAtB7d4MjhnuneCdAKtWpH0KZs9Beww6oc=",
      client: "Axora Vision",
      industry: "AI / Image Search",
      year: "2025",
      challenge:
        "Designers and e-commerce teams waste hours finding similar images manually.",
      solution:
        "Built an MVP that extracts image features with AI models and performs vector-based similarity search quickly.",
      results: [
        "Instant image similarity search",
        "Full end-to-end pipeline with S3, Python AI backend, and React frontend",
        "Learned feature extraction, FAISS indexing, and cloud integration",
      ],
      technologies: [
        "React",
        "Next.js",
        "Python",
        "PyTorch",
        "FAISS",
        "AWS S3",
      ],
    },
    {
      title: "AI Job Matching Platform",
      description:
        "Matches job seekers with relevant opportunities using AI analysis of resumes and job descriptions.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGpvYnxlbnwwfHwwfHx8MA%3D%3D",
      client: "Axora Careers",
      industry: "HR Tech",
      year: "2025",
      challenge:
        "Recruiters spend hours sorting through resumes, slowing down hiring processes.",
      solution:
        "Developed an AI-powered platform that ranks candidates, recommends matches, and provides recruiter dashboards.",
      results: [
        "Automated candidate-job matching",
        "Integrated NLP to parse resumes and job descriptions",
        "Implemented recruiter analytics and filtering dashboards",
      ],
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "OpenAI API",
        "Tailwind CSS",
      ],
    },
    {
      title: "Local Event Discovery PWA",
      description:
        "Find and attend nearby events, workshops, and meetups with offline support and notifications.",
      image:
        "https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&h=400&w=600",
      client: "Axora Events",
      industry: "Event Tech",
      year: "2025",
      challenge:
        "Users often miss local events because information is scattered across multiple platforms.",
      solution:
        "Built a mobile-first PWA with offline caching, geolocation search, and push notifications to keep users updated.",
      results: [
        "Easy discovery of nearby events",
        "Offline accessibility and notifications for engagement",
        "Gained hands-on experience with PWAs and geolocation APIs",
      ],
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Service Workers",
        "IndexedDB",
      ],
    },
    {
      title: "Voice-Activated Task Manager",
      description:
        "Manage your tasks using voice commands for hands-free productivity.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&h=400&w=600",
      client: "Axora Productivity",
      industry: "Productivity / AI",
      year: "2025",
      challenge:
        "Manual task management is slow, and users often forget to log tasks immediately.",
      solution:
        "Developed a voice-command task manager using Web Speech API, allowing users to add, edit, and mark tasks hands-free.",
      results: [
        "Hands-free task creation and management",
        "Enhanced productivity using AI-driven voice recognition",
        "Practiced integrating Web Speech API with React",
      ],
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Web Speech API",
        "Node.js",
      ],
    },
    {
      title: "Blockchain Portfolio Verifier",
      description:
        "Securely showcase your projects and achievements with blockchain verification.",
      image:
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D",
      client: "Axora Blockchain",
      industry: "Blockchain / Professional",
      year: "2025",
      challenge:
        "Many online portfolios are unverifiable and prone to fake credentials.",
      solution:
        "Created a web app that issues verifiable digital credentials on Ethereum blockchain, ensuring authenticity.",
      results: [
        "Verified project portfolios and certificates",
        "Learned blockchain integration with Web3.js",
        "Built trustable digital portfolios for professionals",
      ],
      technologies: [
        "React",
        "Next.js",
        "Ethereum",
        "Solidity",
        "Web3.js",
        "Tailwind CSS",
      ],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Our Work
          </h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Explore some of our recent projects and see how we've helped
            businesses transform their operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <PortfolioItem key={index} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
