import { GithubIcon } from "./Icons";
import { ArrowRight, Code2, Cpu, ExternalLink, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Background glowing gradients & grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Status pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-xs font-mono mb-6 shadow-sm backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{PROFILE.status}</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Architecting <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Scalable Backends
            </span> <br />
            & Production AI SaaS.
          </h1>

          {/* Subtitle / Value proposition */}
          <p className="mt-6 text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-2xl font-normal">
            Hi, I'm <span className="text-zinc-200 font-semibold">{PROFILE.name}</span>. I engineer distributed microservices, low-latency WebSocket platforms, and enterprise AI/RAG architectures that scale reliably from zero to enterprise load.
          </p>

          {/* Call-to-actions */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#flagship"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-zinc-950 font-semibold text-sm shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:scale-[1.02] transition-all"
            >
              Explore Flagship SaaS
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-medium text-sm hover:text-white transition-all shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub Profile
              <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-4 py-3.5 text-zinc-400 hover:text-emerald-400 text-sm font-medium transition-colors"
            >
              Freelance Packages & Pricing →
            </a>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-10 border-t border-zinc-800/80">
          {PROFILE.metrics.map((metric, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/70 backdrop-blur-sm"
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono text-white tracking-tight">
                {metric.value}
              </div>
              <div className="mt-1 text-xs text-zinc-400 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
