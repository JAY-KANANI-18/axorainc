import React from "react";

const About: React.FC = () => {
  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "25+", label: "Enterprise Clients" },
    { number: "5+", label: "Years of Innovation" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Mission-Driven Engineering",
      description: "We build software that solves real problems, focusing on measurable business outcomes and user delight."
    },
    {
      icon: "🚀",
      title: "AI-First Innovation",
      description: "Every solution we craft integrates intelligent automation, from computer vision to conversational interfaces."
    },
    {
      icon: "🤝",
      title: "Partnership Mindset",
      description: "We embed with your teams as strategic partners, not just vendors, ensuring long-term success and growth."
    },
    {
      icon: "⚡",
      title: "Rapid Iteration",
      description: "Agile delivery cycles, continuous feedback loops, and modern DevOps practices accelerate time-to-market."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-600 text-sm font-medium mb-6">
            🏢 Founded in 2020, Trusted by Global Enterprises
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            We Build Intelligent Software That Scales With Your Vision
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Axora Infotech bridges the gap between ambitious product strategy and flawless execution. 
            Our multidisciplinary teams combine deep technical expertise with design thinking to deliver 
            SaaS platforms, CRM solutions, and AI-powered applications that drive measurable growth.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                {value.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Leadership & Story Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            From Startup to Scale: Our Journey
          </h3>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
            Founded by engineers who experienced the pain of fragmented tooling and disconnected 
            systems, Axora Infotech was born from a simple belief: technology should amplify human 
            potential, not complicate it. Today, we partner with forward-thinking organizations 
            across healthcare, fintech, e-commerce, and logistics to build products that users love 
            and businesses depend on.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-300 text-lg">✓</span>
              <span>ISO 27001 Security Standards</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-300 text-lg">✓</span>
              <span>GDPR & SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-300 text-lg">✓</span>
              <span>24/7 Global Support</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-300 text-lg">✓</span>
              <span>99.9% Uptime SLA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
