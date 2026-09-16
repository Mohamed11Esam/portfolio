import { ArrowRight, Bot, Check, Code, Cpu, Radio, Server, Sparkles, Terminal } from "lucide-react";
import { SERVICES } from "../data/portfolioData";

export default function Services() {
  const getIcon = (id: string) => {
    switch (id) {
      case "ai-rag": return <Bot className="w-6 h-6 text-emerald-400" />;
      case "backend-architecture": return <Server className="w-6 h-6 text-teal-400" />;
      case "realtime-systems": return <Radio className="w-6 h-6 text-cyan-400" />;
      default: return <Cpu className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-zinc-950/70 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Client Engagements
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            High-Impact Freelance Services
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Fixed-scope projects or milestone-based contracts designed to deliver production-grade software fast without technical debt.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-7 sm:p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center">
                    {getIcon(service.id)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                    What You Receive:
                  </div>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-800/80">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-zinc-400">
                    <span className="font-semibold text-zinc-300">Ideal for:</span> {service.idealFor}
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-emerald-500 hover:text-zinc-950 text-zinc-200 text-xs font-semibold transition-all shrink-0"
                  >
                    Request Quote
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
