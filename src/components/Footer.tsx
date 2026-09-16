import { GithubIcon } from "./Icons";
import { Terminal, Mail, ArrowUp } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">{PROFILE.name}</div>
              <p className="text-[11px] text-zinc-500 font-mono">Full-Stack & AI Systems</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-zinc-400">
            <a href="#flagship" className="hover:text-white transition-colors">Flagship SaaS</a>
            <a href="#systems" className="hover:text-white transition-colors">Systems</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} Mohamed Esam. All rights reserved.
          </div>
          <div>
            Built with Next.js 15 & Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  );
}
