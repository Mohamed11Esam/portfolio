import { Activity, ArrowRight, Bot, Cpu, Database, Globe, Layers, Lock, Server, ShieldCheck, Zap } from "lucide-react";

export default function SystemArchitecture() {
  const steps = [
    {
      role: "Client Layer",
      name: "React 19 / Vite Web Clients",
      details: "State management via Zustand, biometrics visualization with Recharts, optimistic caching.",
      icon: <Globe className="w-5 h-5 text-emerald-400" />
    },
    {
      role: "Gateway & Security",
      name: "Arcjet Bot Defense & CORS",
      details: "Rate limiting, automated bot heuristics, JWT token authorization, SSL termination.",
      icon: <ShieldCheck className="w-5 h-5 text-teal-400" />
    },
    {
      role: "Application Services",
      name: "Node.js / NestJS 11 Core",
      details: "REST & GraphQL APIs, Socket.io persistent channels, Prisma/Mongoose ORMs.",
      icon: <Server className="w-5 h-5 text-cyan-400" />
    },
    {
      role: "AI & RAG Engine",
      name: "FastAPI + LLM RAG Engine",
      details: "Vector search over contextual embeddings, intelligent nutrition/workout plan generation.",
      icon: <Bot className="w-5 h-5 text-purple-400" />
    },
    {
      role: "Persistence & Edge",
      name: "MongoDB / PostgreSQL + Cloudinary",
      details: "ACID transactions, asset CDN streaming, and Dockerized edge deployments on Koyeb.",
      icon: <Database className="w-5 h-5 text-indigo-400" />
    }
  ];

  return (
    <section id="architecture" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            Engineering Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Architect Distributed Systems
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            From single-tenant MVPs to resilient multi-service architectures: clean separation of concerns, strict type-safety, and production-tested resilience.
          </p>
        </div>

        {/* Visual Architecture Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between relative group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1">
                  {step.role}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {step.name}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {step.details}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Phase 0{index + 1}</span>
                <Zap className="w-3 h-3 text-emerald-400/60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
