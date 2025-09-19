import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight mb-4">
            Smart SaaS Solutions for Growing Businesses
          </h1>
          <p className="text-xl text-secondary-700 mb-8 max-w-lg">
            Empower your business with custom software solutions designed to
            scale with your growth. From SaaS applications to AI integrations,
            we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="px-8 py-3 bg-white hover:bg-gray-50 text-primary-600 font-medium rounded-lg border border-primary-200 transition-colors duration-300 text-center shadow-md hover:shadow-lg"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 right-4 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 -left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Team working on software development"
              className="relative rounded-2xl shadow-2xl z-10 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
