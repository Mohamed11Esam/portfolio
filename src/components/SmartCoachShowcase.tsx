import { GithubIcon } from "./Icons";
import { Activity, ArrowUpRight, Bot, CheckCircle2, Cpu, Database, ExternalLink, Layers, Shield, Sparkles } from "lucide-react";
import { FLAGSHIP_PROJECT } from "../data/portfolioData";

export default function SmartCoachShowcase() {
  return (
    <section id="flagship" className="py-20 relative">
      {/* Glow effect */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Flagship Enterprise SaaS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Apex Athletic <span className="text-zinc-500 text-2xl sm:text-3xl font-medium font-mono">/ SmartCoach AI</span>
            </h2>
            <p className="mt-3 text-zinc-400 text-base sm:text-lg max-w-2xl">
              {FLAGSHIP_PROJECT.description}
            </p>
          </div>

          {/* Quick links header buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href={FLAGSHIP_PROJECT.liveClientUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs transition-all shadow-md shadow-emerald-500/20"
            >
              Launch Athlete Portal
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={FLAGSHIP_PROJECT.liveDashboardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 text-xs font-medium transition-all"
            >
              Launch Admin Dashboard
              <ArrowUpRight className="w-4 h-4 text-zinc-400" />
            </a>
          </div>
        </div>

        {/* 4-Tier Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {FLAGSHIP_PROJECT.tiers.map((tier, idx) => (
            <div
              key={idx}
              className="relative group p-6 sm:p-7 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/50">
                    Tier 0{idx + 1}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {tier.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {tier.name}
                </h3>
                <div className="mt-1 text-xs font-mono text-emerald-400/90 mb-3">
                  {tier.badge}
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {tier.description}
                </p>
              </div>

              {tier.url && (
                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-xs text-zinc-500 font-mono truncate max-w-[200px]">
                    {tier.url.replace("https://", "")}
                  </span>
                  <a
                    href={tier.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Open Live Demo
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Feature Highlights & GitHub Repositories Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-emerald-400" />
                Key Architectural Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FLAGSHIP_PROJECT.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Repositories Links */}
            <div className="flex flex-col gap-2.5 bg-zinc-950/70 p-5 rounded-2xl border border-zinc-800/80">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                Source Code Repositories
              </div>
              <a
                href={FLAGSHIP_PROJECT.githubClient}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-xs text-zinc-300 hover:text-white hover:bg-zinc-800/50 p-2 rounded-lg transition-colors"
              >
                <span className="flex items-center gap-2 font-mono">
                  <GithubIcon className="w-3.5 h-3.5 text-emerald-400" />
                  SmartCoachFront (React 19)
                </span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>
              <a
                href={FLAGSHIP_PROJECT.githubBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-xs text-zinc-300 hover:text-white hover:bg-zinc-800/50 p-2 rounded-lg transition-colors"
              >
                <span className="flex items-center gap-2 font-mono">
                  <GithubIcon className="w-3.5 h-3.5 text-teal-400" />
                  SmartCoachBack (Koyeb/Docker)
                </span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>
              <a
                href={FLAGSHIP_PROJECT.githubAI}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-xs text-zinc-300 hover:text-white hover:bg-zinc-800/50 p-2 rounded-lg transition-colors"
              >
                <span className="flex items-center gap-2 font-mono">
                  <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                  SmartCoachAI (FastAPI + RAG)
                </span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>
              <a
                href={FLAGSHIP_PROJECT.githubDashboard}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-xs text-zinc-300 hover:text-white hover:bg-zinc-800/50 p-2 rounded-lg transition-colors"
              >
                <span className="flex items-center gap-2 font-mono">
                  <GithubIcon className="w-3.5 h-3.5 text-indigo-400" />
                  SmartCoachDashboard (Vite Admin)
                </span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
