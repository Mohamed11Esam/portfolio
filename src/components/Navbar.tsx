'use client';
import { useState, useEffect } from "react";
import { Terminal, Menu, X, Sparkles, Download } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Flagship SaaS", href: "#flagship" },
    { label: "Systems", href: "#systems" },
    { label: "Experience", href: "#experience" },
    { label: "Architecture", href: "#architecture" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-800/80 shadow-2xl shadow-black/50 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 group-hover:scale-105 transition-all">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
              Mohamed Esam
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <p className="text-[11px] font-mono text-zinc-400">Software Engineer</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/60 border border-zinc-800/70 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-zinc-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-zinc-800/60 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Status */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={PROFILE.resumeUrl}
            download="Mohamed_Esam_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 text-xs font-medium transition-all"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-zinc-950 font-semibold text-xs tracking-tight shadow-lg shadow-emerald-500/20 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Let's Talk
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950/95 border-b border-zinc-800 px-4 pt-3 pb-6 space-y-3 backdrop-blur-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-white py-2 px-3 rounded-lg hover:bg-zinc-900"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2.5">
            <a
              href={PROFILE.resumeUrl}
              download="Mohamed_Esam_Resume.pdf"
              className="text-center py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs font-medium"
            >
              Download CV (PDF)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2.5 rounded-xl bg-emerald-500 text-zinc-950 font-semibold text-sm"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
