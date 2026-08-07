import Head from "next/head";
import Link from "next/link";
import HeroSvgBg from "@/components/HeroSvgBg";

export default function About() {
  const values = [
    { title: "Pragmatic Engineering", desc: "We focus on solving real business problems with clean, scalable code rather than chasing short-lived tech trends." },
    { title: "Transparent Communication", desc: "You work directly with the developers building your application with regular sprint demos and open feedback." },
    { title: "Built for the Long Term", desc: "We write maintainable software with proper testing, documentation, and continuous cloud monitoring." },
  ];

  const team = [
    { name: "Alex Mercer", role: "Co-Founder & Technical Lead", bio: "10+ years experience building web systems and cloud infrastructure." },
    { name: "Sarah Chen", role: "Lead Product Designer", bio: "Passionate about creating clean, accessible user experiences for web and mobile." },
    { name: "Marcus Vance", role: "Senior Full-Stack Engineer", bio: "Specializes in React, Next.js, Node.js, and high-performance API engineering." },
    { name: "Elena Rostova", role: "DevOps & Cloud Engineer", bio: "Focuses on AWS, Kubernetes, Docker, and zero-downtime CI/CD pipelines." },
  ];

  return (
    <>
      <Head>
        <title>About Us | Nexoris Software Engineering</title>
      </Head>

      {/* HERO */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden bg-slate-50/60">
        <HeroSvgBg variant="about" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 px-3.5 py-1.5 bg-blue-50 border border-blue-200/80 rounded-full shadow-xs">
            About Nexoris
          </span>
          <h1 className="text-4xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-tight max-w-3xl">
            We build software that helps <span className="font-serif-italic text-brand-gradient px-1">modern companies scale</span>.
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed font-sans">
            Founded in 2020, Nexoris is a software engineering agency based in San Francisco. We partner with startups and businesses to build web applications, mobile products, and cloud infrastructure.
          </p>
        </div>
      </section>

      {/* STORY & VALUES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 mb-16">
            <h2 className="text-xs uppercase tracking-widest font-bold text-blue-600">Our Approach</h2>
            <h3 className="text-3xl font-normal text-slate-900">How we work with our <span className="font-serif-italic text-brand-gradient px-1">clients</span></h3>
            <p className="text-slate-600 text-base leading-relaxed font-sans">
              We believe software development works best when engineers understand the business goals. We work as an extension of your team, providing senior-level execution without corporate bureaucracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all">
                <h4 className="text-xl font-bold text-slate-900 font-heading">{v.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 bg-slate-50/60 border-t border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-2 mb-12">
            <h2 className="text-xs uppercase tracking-widest font-bold text-blue-600">Our Team</h2>
            <h3 className="text-3xl font-normal text-slate-900">Meet the engineers and <span className="font-serif-italic text-brand-gradient px-1">designers</span></h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all space-y-4 text-center">
                <div className="w-14 h-14 rounded-2xl bg-brand-gradient text-white font-extrabold flex items-center justify-center text-lg mx-auto shadow-md shadow-blue-500/20 font-heading">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg font-heading">{member.name}</h4>
                  <p className="text-xs text-blue-600 font-semibold">{member.role}</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-5">
          <h2 className="text-3xl font-normal text-slate-900">Ready to work <span className="font-serif-italic text-brand-gradient px-1">together</span>?</h2>
          <p className="text-slate-600 text-base font-sans">Send us a message and we'll get back to you within 24 hours.</p>
          <Link
            href="/contact"
            className="inline-block px-7 py-3.5 rounded-xl bg-brand-gradient text-white font-bold text-sm shadow-md shadow-blue-500/20 hover:scale-105 transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
