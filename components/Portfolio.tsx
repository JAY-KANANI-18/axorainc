import React, { useState } from 'react';

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
        <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
          <h3 className="text-xl font-semibold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{caseStudy.title}</h3>
          <p className="text-white text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">{caseStudy.description}</p>
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
                <h2 className="text-2xl font-bold text-secondary-900">{caseStudy.title}</h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-secondary-500 hover:text-secondary-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-auto rounded-lg" />
                </div>
                <div>
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-secondary-500">CLIENT</h3>
                    <p className="text-secondary-900">{caseStudy.client}</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-secondary-500">INDUSTRY</h3>
                    <p className="text-secondary-900">{caseStudy.industry}</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-secondary-500">YEAR</h3>
                    <p className="text-secondary-900">{caseStudy.year}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-secondary-500">TECHNOLOGIES</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {caseStudy.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">The Challenge</h3>
                <p className="text-secondary-700">{caseStudy.challenge}</p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Our Solution</h3>
                <p className="text-secondary-700">{caseStudy.solution}</p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Results</h3>
                <ul className="list-disc pl-5 text-secondary-700">
                  {caseStudy.results.map((result, index) => (
                    <li key={index} className="mb-2">{result}</li>
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
      title: "Enterprise CRM Solution",
      description: "A comprehensive customer relationship management system for a multinational corporation.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      client: "Global Manufacturing Inc.",
      industry: "Manufacturing",
      year: "2023",
      challenge: "The client was struggling with fragmented customer data across multiple systems, leading to inefficient sales processes, poor customer service, and missed opportunities. They needed a unified platform that could integrate with their existing ERP system while providing advanced analytics and automation capabilities.",
      solution: "We developed a custom CRM solution that centralized all customer data and integrated seamlessly with their existing systems. The solution included automated workflow processes, real-time analytics dashboards, and mobile access for field sales teams. We implemented a phased rollout approach to minimize disruption and provided comprehensive training to ensure high adoption rates.",
      results: [
        "47% increase in sales team productivity",
        "28% improvement in customer retention rates",
        "65% reduction in time spent on administrative tasks",
        "Unified view of customer data across 12 global offices"
      ],
      technologies: ["React", "Node.js", "MongoDB", "GraphQL", "AWS", "Docker"]
    },
    {
      title: "Healthcare Booking Platform",
      description: "An appointment scheduling system for a network of medical clinics.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      client: "MediCare Health Network",
      industry: "Healthcare",
      year: "2022",
      challenge: "The client operated a network of 15 clinics and was facing significant challenges with their appointment booking system. Patients experienced long wait times on phone calls, staff were overwhelmed with manual scheduling, and there was a high rate of no-shows and last-minute cancellations.",
      solution: "We developed a comprehensive online booking platform with an intuitive patient portal and administrative dashboard. The system included automated reminders, waitlist management, and integration with electronic health records. We also implemented a smart scheduling algorithm that optimized appointment slots based on provider availability and patient preferences.",
      results: [
        "89% reduction in phone booking wait times",
        "32% decrease in appointment no-shows",
        "Staff administrative time reduced by 25 hours per week per clinic",
        "Patient satisfaction scores improved by 42%"
      ],
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Twilio API", "Stripe", "Azure"]
    },
    {
      title: "E-commerce AI Assistant",
      description: "An intelligent chatbot for a major online retailer, handling customer inquiries and product recommendations.",
      image: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      client: "ShopSmart Retail",
      industry: "E-commerce",
      year: "2023",
      challenge: "The client was experiencing rapid growth but struggling to scale their customer support operations. Their support team was overwhelmed with repetitive queries, and customers were experiencing long response times. They needed an AI-powered solution that could handle common inquiries while providing personalized product recommendations.",
      solution: "We developed an advanced AI chatbot that leveraged natural language processing to understand customer queries and provide accurate responses. The system integrated with their product catalog and customer database to offer personalized recommendations based on purchase history and browsing behavior. We implemented a seamless handoff to human agents for complex issues.",
      results: [
        "75% of customer inquiries successfully handled by AI",
        "Average response time reduced from 4 hours to 2 minutes",
        "18% increase in conversion rate from chatbot interactions",
        "Customer support team refocused on complex, high-value interactions"
      ],
      technologies: ["Python", "TensorFlow", "NLP", "React", "Redis", "Google Cloud"]
    },
    {
      title: "Logistics Management System",
      description: "A comprehensive inventory and supply chain management solution for a distribution company.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      client: "Global Distribution Co.",
      industry: "Logistics & Supply Chain",
      year: "2022",
      challenge: "The client was managing a complex supply chain with over 5,000 SKUs across multiple warehouses. Their legacy inventory system was causing stockouts, overstocking, and inefficient warehouse operations. They needed a modern solution that could provide real-time visibility and optimize their entire supply chain.",
      solution: "We developed an integrated logistics management system with real-time inventory tracking, automated reordering, and predictive analytics for demand forecasting. The solution included mobile apps for warehouse staff, barcode/RFID scanning capabilities, and a comprehensive dashboard for management. We also implemented route optimization for their delivery fleet.",
      results: [
        "Inventory accuracy improved from 92% to 99.8%",
        "Warehouse picking efficiency increased by 35%",
        "Delivery times reduced by 28% through route optimization",
        "Annual inventory carrying costs reduced by $1.2M"
      ],
      technologies: ["Java", "Spring Boot", "React", "MySQL", "Elasticsearch", "Kubernetes", "IoT"]
    }
  ];
  
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Our Work</h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Explore some of our recent projects and see how we've helped businesses transform their operations.
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