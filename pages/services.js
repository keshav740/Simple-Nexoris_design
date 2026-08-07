import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import HeroSvgBg from "@/components/HeroSvgBg";

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null);

  const servicesList = [
    {
      title: "Web Application Development",
      desc: "Custom web applications built for speed, responsiveness, and security.",
      deliverables: ["Single-Page & Multi-Page Apps", "REST & GraphQL APIs", "Database Architecture", "Performance Optimization"],
    },
    {
      title: "Mobile App Development",
      desc: "Cross-platform mobile applications for iOS and Android with native performance.",
      deliverables: ["React Native & Flutter", "Offline-first Sync", "Push Notifications", "App Store Publishing"],
    },
    {
      title: "Cloud Infrastructure & DevOps",
      desc: "Scalable cloud environments on AWS or GCP with automated deployment pipelines.",
      deliverables: ["Cloud Migration", "Kubernetes & Docker", "CI/CD Pipeline Setup", "Security & Monitoring"],
    },
    {
      title: "UI/UX & Product Design",
      desc: "User-centered interface design, interactive prototypes, and scalable design systems.",
      deliverables: ["User Research & Wireframes", "Figma Design Systems", "Interactive Prototypes", "Design-to-Code Handoff"],
    },
    {
      title: "Social Media Marketing (SSM) & Branding",
      desc: "Data-driven social media strategy, content creation, brand positioning, and audience engagement.",
      deliverables: ["Social Content Strategy", "Brand Identity & Creatives", "Community Management", "Growth Analytics"],
    },
    {
      title: "Google Ads & Performance Marketing",
      desc: "Targeted PPC campaigns, Google Search & Display Ads, and conversion tracking designed for high ROI.",
      deliverables: ["Google Search & Display Ads", "Keyword & Bidding Strategy", "Landing Page Conversion", "ROI & Campaign Reports"],
    },
  ];

  const faqs = [
    {
      q: "How long does a typical project take?",
      a: "Most web and mobile MVP projects take between 6 to 12 weeks from initial scoping to production launch.",
    },
    {
      q: "Who owns the code and intellectual property?",
      a: "You retain 100% full ownership of all source code, design assets, and intellectual property.",
    },
    {
      q: "Do you offer post-launch support and maintenance?",
      a: "Yes, we offer ongoing maintenance plans for bug fixes, security updates, cloud monitoring, and feature enhancements.",
    },
  ];

  return (
    <>
      <Head>
        <title>Services | Nexoris Software Engineering</title>
      </Head>

      {/* HERO */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden bg-slate-50/60">
        <HeroSvgBg variant="services" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 px-3.5 py-1.5 bg-blue-50 border border-blue-200/80 rounded-full shadow-xs">
            Our Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-tight max-w-3xl">
            End-to-end software <span className="font-serif-italic text-brand-gradient px-1">development services</span>.
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed font-sans">
            From initial concept and prototype design to production deployment and cloud scaling, we handle the entire software lifecycle.
          </p>
        </div>
      </section>

      {/* DETAILED SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.map((service, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-4 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-2xl font-extrabold text-slate-900 font-heading">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">{service.desc}</p>
                <div className="pt-3 border-t border-slate-200/80">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3 font-heading">Key Deliverables</span>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-slate-700 font-sans">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50/60 border-t border-slate-200/70">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-xs uppercase tracking-widest font-bold text-blue-600">Questions</h2>
            <h3 className="text-3xl font-normal text-slate-900">Frequently asked <span className="font-serif-italic text-brand-gradient px-1">questions</span></h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-xs">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left font-bold text-slate-900 flex justify-between items-center text-base font-heading hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-blue-600 font-mono text-xl">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="p-6 pt-0 text-sm text-slate-600 leading-relaxed font-sans border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <h2 className="text-3xl font-extrabold text-slate-900 font-heading">Need a custom scope?</h2>
          <p className="text-slate-600 text-base font-sans">Tell us about your project requirements and we'll prepare a detailed proposal.</p>
          <Link
            href="/contact"
            className="inline-block px-7 py-3.5 rounded-xl bg-brand-gradient text-white font-bold text-sm shadow-md shadow-blue-500/20 hover:scale-105 transition-all"
          >
            Request Proposal
          </Link>
        </div>
      </section>
    </>
  );
}
