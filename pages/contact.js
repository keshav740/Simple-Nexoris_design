import { useState } from "react";
import Head from "next/head";
import HeroSvgBg from "@/components/HeroSvgBg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Application",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact Us | Nexoris Software Engineering</title>
      </Head>

      {/* HERO */}
      <section className="relative pt-16 pb-16 lg:pt-20 lg:pb-24 overflow-hidden bg-slate-50/60">
        <HeroSvgBg variant="contact" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 px-3.5 py-1.5 bg-blue-50 border border-blue-200/80 rounded-full shadow-xs">
            Contact Us
          </span>
          <h1 className="text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-tight max-w-3xl">
            Let's build your next <span className="font-serif-italic text-brand-gradient px-1">project together</span>.
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed font-sans">
            Fill out the form below or email us directly. We respond to all inquiries within 24 hours.
          </p>
        </div>
      </section>

      {/* CONTACT FORM & INFO */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* Contact Details */}
            <div className="md:col-span-5 space-y-6">
              <h2 className="text-2xl font-normal text-slate-900">Direct <span className="font-serif-italic text-brand-gradient px-1">Contact</span></h2>

              <div className="space-y-4 text-sm text-slate-600 font-sans">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 font-heading">Email Us</div>
                  <div className="font-mono text-blue-600">hello@nexoris.com</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 font-heading">Call Us</div>
                  <div className="font-mono text-slate-700">+1 (555) 234-5678</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 font-heading">Office Location</div>
                  <div className="text-slate-700">100 Market Street, Suite 300<br />San Francisco, CA 94105</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-7">
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-soft">
                {submitted ? (
                  <div className="text-center py-8 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 text-xl font-bold mx-auto flex items-center justify-center">
                      ✓
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-heading">Thank you!</h3>
                    <p className="text-sm text-slate-600 font-sans">
                      We have received your message and will be in touch with you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs mt-2"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-normal text-slate-900 mb-2">Send us a <span className="font-serif-italic text-brand-gradient px-1">message</span></h3>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1 font-heading">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500 font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1 font-heading">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500 font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1 font-heading">Primary Interest</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500 font-sans"
                      >
                        <option>Web Application Development</option>
                        <option>Mobile App Development</option>
                        <option>Cloud Infrastructure & DevOps</option>
                        <option>UI/UX Product Design</option>
                        <option>Social Media Marketing (SSM)</option>
                        <option>Google Ads & Performance Marketing</option>
                        <option>Other / General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1 font-heading">Project Details *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about what you're looking to build..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500 font-sans"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-brand-gradient text-white font-bold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all font-heading"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
