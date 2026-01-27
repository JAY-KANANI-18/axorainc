import Head from "next/head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function AboutAxora() {
  return (
    <>
      <Head>
        <title>About Axora Infotech</title>
        <meta
          name="description"
          content="Axora Infotech designs and builds reliable digital systems that help businesses scale with confidence."
        />
      </Head>

      <Nav />

      <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
        {/* HERO */}
        <section className="relative py-32 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="text-center">
             
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
                From Architecture to Execution —
                <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  We Build Software That Lasts
                </span>
              </h1>

              <p className="mt-8 text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Axora Infotech is an engineering-led technology company helping
                businesses design, build, and scale reliable digital systems. We
                focus on clarity, execution, and long-term stability.
              </p>
            </div>
          </div>
        </section>

        {/* VISION & MISSION */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision Card */}
              <div className="group relative bg-slate-50 rounded-2xl p-10 border border-slate-200 hover:border-slate-300 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold tracking-widest text-slate-600 uppercase">
                    Vision
                  </h3>
                </div>
                <p className="text-2xl font-semibold text-slate-900 leading-snug">
                  To build dependable digital systems that businesses can trust
                  today — and grow with tomorrow.
                </p>
              </div>

              {/* Mission Card */}
              <div className="group relative bg-slate-50 rounded-2xl p-10 border border-slate-200 hover:border-slate-300 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold tracking-widest text-slate-600 uppercase">
                    Mission
                  </h3>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Our mission is to help organizations turn ideas into
                  production-ready software through strong engineering
                  fundamentals, disciplined delivery, and clear ownership at
                  every stage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                The principles that guide every decision we make and every line of code we write
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Clarity",
                  desc: "We define outcomes, scope, and constraints before writing code.",
                },
                {
                  title: "Reliability",
                  desc: "We build systems that perform consistently in real-world conditions.",
                },
                {
                  title: "Ownership",
                  desc: "We take responsibility for what we ship and how it behaves in production.",
                },
                {
                  title: "Pragmatism",
                  desc: "We choose solutions that fit reality, not trends or buzzwords.",
                },
                {
                  title: "Quality",
                  desc: "Testing, documentation, and reviews are part of delivery — not extras.",
                },
                {
                  title: "Partnership",
                  desc: "We work as an extension of your team, not a detached vendor.",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="bg-white rounded-xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENGINEERING APPROACH */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
          {/* Decorative Grid */}
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>
          
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Engineering, Done Properly
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                We don't just deliver features. We engineer systems with clear
                structure, measurable outcomes, and long-term maintainability.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Structured delivery",
                  desc: "Small releases, clear milestones, and continuous feedback — so progress is always visible.",
                  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                },
                {
                  title: "Production mindset",
                  desc: "CI/CD, monitoring, testing, and documentation are part of every build.",
                  icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                },
                {
                  title: "Business alignment",
                  desc: "Engineering decisions are tied to business impact — not just technical preference.",
                  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                }
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  
                  <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                  <p className="text-blue-100 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY AXORA */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Why Organizations Choose Axora
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl">
                We deliver results that matter, with transparency and excellence at every step
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Clear scope and predictable delivery",
                "Strong engineering ownership, not body-shopping",
                "Clean handover with documentation and knowledge transfer",
                "Focus on long-term system health, not short-term hacks"
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-slate-900">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="bg-slate-900 rounded-2xl p-12 md:p-16 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Let's build something dependable
                  </h3>
                  <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
                    Whether you're starting fresh or scaling an existing system,
                    we'll help you move forward with clarity.
                  </p>
                </div>

                <a
                  href="/#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-white text-slate-900 font-semibold text-lg hover:bg-slate-100 transition-all duration-300"
                >
                  Get in touch
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
