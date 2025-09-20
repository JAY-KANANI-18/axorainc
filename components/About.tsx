import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              About Axora Inc
            </h2>
            <p className="text-lg text-gray-700">
              Axora Inc is a next-gen software company founded to empower
              businesses with innovative, reliable, and scalable solutions.
            </p>
            <p className="text-lg text-gray-700">
              We transform business challenges into technological opportunities,
              enabling growth and efficiency across healthcare, finance,
              e-commerce, and logistics industries.
            </p>

            {/* Highlights */}
            {/* Highlights */}
            <div className="space-y-4">
              {[
                {
                  title: "Innovative Team",
                  desc: "Our passionate team brings fresh ideas and a creative approach to building cutting-edge software solutions.",
                },
                {
                  title: "Modern Technology",
                  desc: "We leverage React, Next.js, Node.js, and cloud platforms to deliver efficient, scalable, and AI-ready applications.",
                },
                {
                  title: "Scalable Solutions",
                  desc: "We design applications to grow seamlessly with your business, ensuring performance and flexibility from day one.",
                },
                {
                  title: "Client-Focused Approach",
                  desc: "We work closely with our clients to understand their vision, ensuring our solutions provide real value and measurable impact.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1">
                    <svg
                      className="h-6 w-6 text-primary-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Team collaboration"
              className="rounded-xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
