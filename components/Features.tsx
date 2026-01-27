import React from "react";
import theme from "@/styles/theme";

const WhyChooseAxora = () => {
  return (
    <section
      className="py-24"
      style={{ backgroundColor: theme.colors.background.light }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Why Clients Choose Axora Infotech
          </h2>

          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            We don’t just build software. We partner with businesses to design,
            develop, and scale technology that actually works in the real world.
          </p>

          <div className="flex gap-6 text-sm text-blue-900">
            <span>✔ Custom Development</span>
            <span>✔ Scalable Architecture</span>
            <span>✔ Reliable Support</span>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          {[
            {
              title: "Engineering-Led Development",
              text: "Strong backend systems, clean code, and scalable architecture built for long-term success.",
            },
            {
              title: "Business-Centric Solutions",
              text: "Every solution is aligned with your business goals — not generic templates.",
            },
            {
              title: "AI & Automation Expertise",
              text: "We apply AI practically to solve real problems, not as a marketing buzzword.",
            },
            {
              title: "Transparent Delivery Process",
              text: "Clear timelines, regular updates, and full visibility into progress.",
            },
            {
              title: "Performance & Security First",
              text: "Optimized performance, secure APIs, and production-ready deployments.",
            },
            {
              title: "Long-Term Partnership",
              text: "Ongoing support, improvements, and scaling as your business grows.",
            },
          ].map((item, i) => (
            <div key={i} className="border-l-4 border-blue-900 pl-6">
              <h4 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h4>
              <p className="text-slate-600 mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAxora;
