"use client";
import { GithubIcon } from "./Icons";
import { useState } from "react";
import { ArrowUpRight, CheckCircle, ExternalLink, MessageSquare, ShoppingBag, Wallet, Radio } from "lucide-react";
import { PROJECTS, Project } from "../data/portfolioData";

export default function FeaturedProjects() {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects = filter === "all"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "realtime": return <Radio className="w-4 h-4 text-emerald-400" />;
      case "fullstack": return <ShoppingBag className="w-4 h-4 text-teal-400" />;
      case "backend": return <Wallet className="w-4 h-4 text-cyan-400" />;
      default: return <MessageSquare className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="systems" className="py-20 bg-zinc-950/60 border-t border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono text-emerald-400 tracking-wider uppercase mb-2">
              Production Codebases
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Systems & APIs
            </h2>
            <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
              High-concurrency systems featuring persistent WebSockets, transactional Prisma ledgers, and modular NestJS architecture.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900 border border-zinc-800 self-start sm:self-auto">
            {["all", "realtime", "fullstack", "backend"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${
                  filter === cat
                    ? "bg-emerald-500 text-zinc-950 font-semibold shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {cat === "all" ? "All Systems" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group p-6 sm:p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                    {getCategoryIcon(project.category)}
                    <span className="capitalize">{project.category}</span>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-zinc-800 text-emerald-400 border border-zinc-700/50">
                    {project.statusBadge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-1 mb-3">
                  {project.subtitle}
                </p>

                <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/80 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-800/60 text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold transition-all"
                    >
                      Live Demo
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-800 text-zinc-200 text-xs font-medium transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    View Source
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
