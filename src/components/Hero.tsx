import { ArrowRight, Bot, CheckCircle2, Code2, Cpu, ExternalLink, Globe, Layers, Radio, Sparkles, Terminal, Zap, Server } from "lucide-react";
import { GithubIcon } from "./Icons";
import { PROFILE, FLAGSHIP_PROJECT } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic Ambient Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-15%,rgba(16,185,129,0.18),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Balanced Full-Stack & Backend Authority */}
          <div className="lg:col-span-7">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-emerald-500/30 text-zinc-200 text-xs font-mono mb-6 shadow-lg shadow-emerald-950/20 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 font-semibold">Available for Full-Stack & Backend Contracts</span>
            </div>

            {/* Main Balanced Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Architecting <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Scalable Backends,
              </span> <br />
              Full-Stack Systems <br />
              <span className="text-zinc-400 text-3xl sm:text-5xl lg:text-6xl font-bold">
                & Production AI SaaS.
              </span>
            </h1>

            {/* Subtitle / Bio */}
            <p className="mt-6 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
              Hi, I'm <strong className="text-white font-semibold">{PROFILE.name}</strong>. I engineer high-performance <span className="text-emerald-400 font-medium">Node/NestJS backends</span>, resilient <span className="text-teal-300 font-medium">distributed microservices</span>, and intelligent <span className="text-cyan-400 font-medium">FastAPI RAG AI systems</span> — backed by fluid, responsive <span className="text-zinc-200 font-medium">React 19 & Next.js</span> user interfaces.
            </p>

            {/* Core Tech Stack Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {[
                "Node.js",
                "NestJS 11",
                "FastAPI RAG",
                "WebSockets",
                "Docker",
                "Prisma / MongoDB",
                "React 19",
                "Next.js 15",
                "Tailwind CSS"
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#flagship"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-zinc-950 font-bold text-sm shadow-xl shadow-emerald-500/25 hover:scale-[1.02] transition-all"
              >
                <Sparkles className="w-4 h-4" />
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
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-zinc-400 hover:text-emerald-400 text-sm font-medium transition-colors"
              >
                Let's Talk Contracts →
              </a>
            </div>
          </div>

          {/* Right Column: Live Distributed Architecture Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-zinc-700/50 via-zinc-800/30 to-zinc-900/50 shadow-2xl">
              <div className="rounded-[22px] bg-zinc-950/90 p-6 backdrop-blur-2xl border border-zinc-800/80">
                {/* Header of the preview card */}
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-xs font-mono text-zinc-400 ml-2 font-medium">apex-athletic-beta.vercel.app</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Ecosystem
                  </span>
                </div>

                {/* Architecture Overview */}
                <div className="space-y-4">
                  {/* Top Architecture Banner */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-zinc-900 border border-emerald-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                        Distributed System
                      </span>
                      <span className="text-xs font-mono text-zinc-400">Docker • Koyeb Edge</span>
                    </div>
                    <div className="text-lg font-bold text-white tracking-tight">
                      Apex Athletic / SmartCoach Platform
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">
                      Event-driven Node/TypeScript API integrated with FastAPI RAG, persistent WebSockets, and dual React clients.
                    </p>
                  </div>

                  {/* Micro Live Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                      <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono mb-1">
                        <Server className="w-3.5 h-3.5 text-emerald-400" />
                        Backend Core
                      </div>
                      <div className="text-sm font-bold text-white font-mono">Node + Docker</div>
                      <div className="text-[11px] text-emerald-400">Koyeb Deployment Active</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                      <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono mb-1">
                        <Bot className="w-3.5 h-3.5 text-cyan-400" />
                        AI Inference
                      </div>
                      <div className="text-sm font-bold text-white font-mono">FastAPI RAG</div>
                      <div className="text-[11px] text-cyan-400">Contextual Embeddings</div>
                    </div>
                  </div>

                  {/* Quick Launch Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                    <a
                      href={FLAGSHIP_PROJECT.liveClientUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-1.5"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      Athlete Client App
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href={FLAGSHIP_PROJECT.liveDashboardUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-medium text-xs transition-all flex items-center justify-center gap-1.5"
                    >
                      <Layers className="w-3.5 h-3.5 text-zinc-400" />
                      Admin Dashboard
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Metrics Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-10 border-t border-zinc-800/80">
          {[
            { label: "Backend Architecture", value: "Node • NestJS • Prisma" },
            { label: "AI & RAG Services", value: "FastAPI • LLMs • RAG" },
            { label: "Full-Stack Web Apps", value: "React 19 • Next.js 15" },
            { label: "Production Deploys", value: "4+ Live Cloud Apps" },
          ].map((metric, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/70 backdrop-blur-sm hover:border-zinc-700 transition-colors"
            >
              <div className="text-base sm:text-xl lg:text-2xl font-bold font-mono text-white tracking-tight">
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
