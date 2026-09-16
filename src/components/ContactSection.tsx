"use client";
import { GithubIcon } from "./Icons";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MessageSquare, Send, Sparkles } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", projectType: "ai-rag", budget: "$1k - $3k", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setResponseMsg("Thank you! Your message has been received. I will reply within 12 hours.");
        setFormData({ name: "", email: "", projectType: "ai-rag", budget: "$1k - $3k", message: "" });
      } else {
        setStatus("error");
        setResponseMsg(data.error || "Something went wrong. Please reach out via email directly.");
      }
    } catch {
      setStatus("error");
      setResponseMsg("Connection error. Please email me directly at mohamed.esam.dev@gmail.com.");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left info column */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Let's Build Something Great
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Have a Project in Mind?
            </h2>
            <p className="mt-4 text-zinc-400 text-base leading-relaxed">
              Whether you need an AI/RAG system, high-performance Node/NestJS backend, or a full-stack product built from scratch, I'm available for freelance contracts and consultations.
            </p>

            <div className="mt-8 space-y-4">
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-mono">Direct Email</div>
                  <a href={`mailto:${PROFILE.email}`} className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                    {PROFILE.email}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-mono">GitHub Profile</div>
                  <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors flex items-center gap-1">
                    github.com/Mohamed11Esam
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-xl shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Fill in the details below and I will get back to you with a scope estimate.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1.5">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1.5">Project Domain</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      <option value="ai-rag">AI & RAG Integration</option>
                      <option value="backend">Backend & API Architecture</option>
                      <option value="realtime">Real-Time WebSockets App</option>
                      <option value="fullstack-mvp">Full-Stack MVP (0 to 1)</option>
                      <option value="other">Other / Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1.5">Estimated Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      <option value="< $1k">Under $1,000</option>
                      <option value="$1k - $3k">$1,000 - $3,000</option>
                      <option value="$3k - $5k">$3,000 - $5,000</option>
                      <option value="$5k+">$5,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-1.5">Project Details *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe what you want to build, key requirements, or timeline..."
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                {status === "success" && (
                  <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{responseMsg}</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs">
                    {responseMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-zinc-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === "loading" ? (
                    "Sending Message..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Inquiries
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
