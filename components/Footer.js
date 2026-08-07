import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
          
          <div className="space-y-3 md:col-span-2">
            <Link href="/" className="inline-block">
              <div className="bg-white px-3 py-1 rounded-xl shadow-xs inline-block">
                <img src="/logo-myperf.png" alt="Company Logo" className="h-8 sm:h-9 w-auto object-contain" />
              </div>
            </Link>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              We design and build custom web applications, mobile apps, and cloud solutions for modern companies.
            </p>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">Pages</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Work</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>hello@nexoris.com</li>
              <li>+1 (555) 234-5678</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-2 sm:space-y-0">
          <p>© {new Date().getFullYear()} Nexoris. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#privacy" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
