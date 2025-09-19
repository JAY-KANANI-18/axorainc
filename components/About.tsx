import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Team collaboration"
              className="rounded-xl shadow-xl w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              About Axora Inc
            </h2>
            <p className="text-lg text-secondary-700 mb-6">
              Founded in 2015, Axora Inc has grown from a small startup to a
              leading software development company with over 50 talented
              professionals. We build industry-ready, reliable, and scalable
              software solutions that empower businesses to thrive in the
              digital age.
            </p>
            <p className="text-lg text-secondary-700 mb-6">
              Our mission is to transform business challenges into technological
              opportunities, delivering innovative solutions that drive growth
              and efficiency for our clients across the globe.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="h-5 w-5 text-primary-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-secondary-800">
                    Industry Experience
                  </h3>
                  <p className="mt-1 text-secondary-600">
                    Our team brings decades of combined experience across
                    healthcare, finance, e-commerce, and logistics industries,
                    ensuring solutions that address real-world challenges.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="h-5 w-5 text-primary-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-secondary-800">
                    Cutting-Edge Technology
                  </h3>
                  <p className="mt-1 text-secondary-600">
                    We leverage the latest technologies including React,
                    Next.js, Node.js, and cloud platforms to build modern,
                    efficient, and future-proof applications with AI integration
                    capabilities.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="h-5 w-5 text-primary-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-secondary-800">
                    Scalable Solutions
                  </h3>
                  <p className="mt-1 text-secondary-600">
                    Our architecture ensures your applications can grow with
                    your business, handling increased loads and expanding
                    functionality without compromising performance.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="h-5 w-5 text-primary-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-secondary-800">
                    Client-Focused Approach
                  </h3>
                  <p className="mt-1 text-secondary-600">
                    We prioritize understanding your business goals and
                    challenges, ensuring our solutions deliver measurable value
                    and ROI for your organization.
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

export default About;
