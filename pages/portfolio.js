import Head from "next/head";
import Link from "next/link";
import HeroSvgBg from "@/components/HeroSvgBg";

export default function Portfolio() {
  const projects = [
    {
      title: "PayFlow Dashboard",
      client: "FinTech Startup",
      desc: "A digital payment management platform that processes recurring subscriptions and invoices for B2B merchants.",
      impact: "Handled over $10M in transaction volume within the first 6 months with 99.9% uptime.",
      tags: ["Next.js", "Node.js", "Stripe API", "PostgreSQL"],
    },
    {
      title: "HealthConnect Portal",
      client: "Healthcare Provider",
      desc: "A secure telehealth web app allowing patients to schedule appointments, consult with doctors, and access lab results.",
      impact: "Streamlined consultation workflows for over 15,000 active monthly patients.",
      tags: ["React", "Python", "WebRTC", "AWS S3"],
    },
    {
      title: "LogiTrack Mobile & Dispatch",
      client: "Logistics Company",
      desc: "A cross-platform mobile application and web control panel for tracking delivery fleets in real time.",
      impact: "Reduced delivery dispatch delays by 25% across a fleet of 5,000 trucks.",
      tags: ["React Native", "Go", "Google Maps API", "Redis"],
    },
    {
      title: "OmniCart Commerce Engine",
      client: "E-Commerce Brand",
      desc: "A headless online store built with server-side rendering for fast product loading and global CDN caching.",
      impact: "Improved page load times to under 500ms and increased checkout conversion by 18%.",
      tags: ["Next.js", "Tailwind CSS", "Shopify API", "Vercel"],
    },
    {
      title: "Aegis Security Portal",
      client: "Enterprise SaaS",
      desc: "An internal security audit tool for monitoring system permissions and vulnerability compliance.",
      impact: "Automated daily security compliance checks across 50+ internal microservices.",
      tags: ["React", "TypeScript", "Docker", "AWS Security Hub"],
    },
    {
      title: "SupportAI Assistant",
      client: "Customer Service Ops",
      desc: "A customer support automation dashboard integrating smart search over company documentation.",
      impact: "Deflected 60% of routine support tickets automatically while maintaining high satisfaction ratings.",
      tags: ["Python", "FastAPI", "React", "OpenAI API"],
    },
  ];

  return (
    <>
      <Head>
        <title>Work & Case Studies | Nexoris Software Engineering</title>
      </Head>

      {/* HERO */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden bg-slate-50/60">
        <HeroSvgBg variant="portfolio" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 px-3.5 py-1.5 bg-blue-50 border border-blue-200/80 rounded-full shadow-xs">
            Selected Work
          </span>
          <h1 className="text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-tight max-w-3xl">
            Projects built for <span className="font-serif-italic text-brand-gradient px-1">real-world impact</span>.
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed font-sans">
            Here are a few of the web applications, mobile products, and cloud platforms we've engineered for our clients.
          </p>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-50/70 rounded-2xl p-7 border border-slate-200 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-sans">
                      {project.client}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">{project.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">{project.desc}</p>
                  
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                    <span className="text-[11px] font-bold text-slate-800 block font-heading">Outcome</span>
                    <span className="text-xs text-slate-600 leading-relaxed font-sans">{project.impact}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex flex-wrap gap-1.5">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-200/70 text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <h2 className="text-3xl font-normal">Have a project you'd like to <span className="font-serif-italic text-brand-gradient px-1">build</span>?</h2>
          <p className="text-slate-400 text-base font-sans">We'd love to learn about your goals and discuss how we can help.</p>
          <Link
            href="/contact"
            className="inline-block px-7 py-3.5 rounded-xl bg-brand-gradient text-white font-bold text-sm shadow-md shadow-blue-500/20 hover:scale-105 transition-all"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
