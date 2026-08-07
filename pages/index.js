import Head from "next/head";
import Link from "next/link";
import HeroSvgBg from "@/components/HeroSvgBg";

export default function Home() {
  const services = [
    {
      title: "Web & Mobile App Development",
      desc: "Full-stack web applications and cross-platform mobile apps built with React, Next.js, and React Native.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Cloud Infrastructure & DevOps",
      desc: "AWS and GCP cloud setup, CI/CD pipeline automation, Docker containers, and reliable database architecture.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      title: "Custom Backend & API Design",
      desc: "High-performance Node.js and Python microservices designed for speed, security, and high availability.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "UI/UX & Product Design",
      desc: "Clean, intuitive user interfaces and prototype designs crafted with a user-first mindset.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: "Social Media Marketing (SSM) & Branding",
      desc: "Organic social strategy, content creation, community engagement, and brand building across all platforms.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
    },
    {
      title: "Google Ads & Performance Marketing",
      desc: "Targeted PPC campaigns, Search & Display Ads, and conversion tracking engineered for maximum ROI.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
    },
  ];

  const projects = [
    {
      title: "PayFlow Platform",
      category: "FinTech App",
      desc: "Built a secure payment dashboard handling millions in monthly transactions with 99.9% uptime.",
      tags: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      title: "HealthConnect Portal",
      category: "Healthcare",
      desc: "Engineered a HIPAA-compliant virtual consultation portal connecting doctors and patients seamlessly.",
      tags: ["React", "Python", "WebRTC", "Docker"],
    },
    {
      title: "LogiTrack Dashboard",
      category: "Logistics",
      desc: "Real-time tracking and dispatch system for a transport fleet of over 5,000 active vehicles.",
      tags: ["React Native", "Go", "AWS EKS", "Redis"],
    },
  ];

  return (
    <>
      <Head>
        <title>Nexoris | Custom Software, Cloud & Marketing Agency</title>
      </Head>

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-slate-50/60">
        <HeroSvgBg variant="home" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-700 px-3.5 py-1.5 bg-blue-50 border border-blue-200/80 rounded-full shadow-xs">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>SOFTWARE & CLOUD ENGINEERING</span>
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-slate-900 tracking-tight leading-[1.15]">
              We build custom software and <span className="font-serif-italic text-brand-gradient px-1">cloud platforms</span> for modern businesses.
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed font-sans max-w-2xl">
              Nexoris helps startups and growing companies design, engineer, and deploy high-performing web apps, mobile products, and cloud infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl bg-brand-gradient text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all text-center"
              >
                Discuss Your Project
              </Link>
              <Link
                href="/portfolio"
                className="px-7 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:bg-slate-50 hover:border-slate-300 transition-all text-center shadow-xs"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* Product Dashboard Visual */}
          <div className="mt-14 rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-soft-lg">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
              <div className="flex items-center space-x-2 min-w-0">
                <div className="flex items-center space-x-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <span className="text-[11px] sm:text-xs font-mono text-slate-400 truncate ml-1">app.nexoris.com/analytics</span>
              </div>
              <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 shrink-0">
                Live Overview
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="text-xs text-slate-500 font-medium">Active Monthly Users</div>
                <div className="text-2xl font-extrabold text-slate-900 font-heading">42,850</div>
                <div className="text-xs text-emerald-600 font-semibold">↑ +14% growth this month</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="text-xs text-slate-500 font-medium">Average Response Latency</div>
                <div className="text-2xl font-extrabold text-slate-900 font-heading">28ms</div>
                <div className="text-xs text-blue-600 font-semibold">Global CDN & Edge active</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="text-xs text-slate-500 font-medium">Infrastructure Reliability</div>
                <div className="text-2xl font-extrabold text-slate-900 font-heading">99.98%</div>
                <div className="text-xs text-emerald-600 font-semibold">All systems operational</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-2 mb-12">
            <h2 className="text-xs uppercase tracking-widest font-bold text-blue-600">What We Do</h2>
            <h3 className="text-3xl font-normal text-slate-900">Services tailored to your <span className="font-serif-italic text-brand-gradient px-1">technical goals</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-4 hover:border-blue-300 hover:shadow-soft transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {s.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 font-heading group-hover:text-blue-600 transition-colors">{s.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="py-20 bg-slate-50/60 border-t border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-xs uppercase tracking-widest font-bold text-blue-600">Selected Work</h2>
              <h3 className="text-3xl font-normal text-slate-900 mt-1">Recent projects we've <span className="font-serif-italic text-brand-gradient px-1">engineered</span></h3>
            </div>
            <Link href="/portfolio" className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center space-x-1 group">
              <span>View all projects</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-slate-200 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700">
                    {p.category}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 font-heading">{p.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">{p.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {p.tags.map((t, tidx) => (
                    <span key={tidx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-2 mb-12">
            <h2 className="text-xs uppercase tracking-widest font-bold text-blue-600">Our Process</h2>
            <h3 className="text-3xl font-normal text-slate-900">Simple, transparent <span className="font-serif-italic text-brand-gradient px-1">engineering</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="text-2xl font-extrabold text-blue-600 font-mono">01.</div>
              <h4 className="text-lg font-bold text-slate-900 font-heading">Discovery & Scope</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We align on project goals, select the right tech stack, and outline clear milestones.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="text-2xl font-extrabold text-blue-600 font-mono">02.</div>
              <h4 className="text-lg font-bold text-slate-900 font-heading">Development Sprints</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We write clean, testable code with weekly demos and clear status updates.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="text-2xl font-extrabold text-blue-600 font-mono">03.</div>
              <h4 className="text-lg font-bold text-slate-900 font-heading">Launch & Support</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We deploy your app securely to the cloud and provide ongoing maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-gradient p-8 sm:p-14 text-white text-center shadow-xl shadow-blue-500/20">
          <h2 className="text-3xl sm:text-4xl font-normal">Have a project in <span className="font-serif-italic text-white underline decoration-teal-400 px-1">mind</span>?</h2>
          <p className="text-blue-100 text-base mt-2 max-w-xl mx-auto font-sans">
            Tell us about what you're building. We'd love to help bring your vision to life.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 rounded-xl bg-white text-blue-600 font-bold text-sm hover:bg-blue-50 hover:scale-105 transition-all shadow-md"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
