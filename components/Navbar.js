import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/portfolio" },
    { name: "About", href: "/about" },
  ];

  const isActive = (path) => mounted && router.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-2.5 group">
          <img src="/logo-myperf.png" alt="Company Logo" className="h-8 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105" />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-all px-3.5 py-1.5 rounded-lg ${
                  active
                    ? "text-blue-600 font-bold bg-blue-50/90 border border-blue-200/70 shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-brand-gradient text-white text-sm font-bold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-base font-semibold ${
                isActive(link.href) ? "text-blue-600 font-bold bg-blue-50 border border-blue-200/60" : "text-slate-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center py-3 rounded-xl bg-brand-gradient text-white font-bold text-sm mt-2 shadow-md"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
