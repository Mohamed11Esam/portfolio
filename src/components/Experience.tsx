import { Briefcase, Building2, CheckCircle2, Award, GraduationCap, Trophy, Sparkles, Download } from "lucide-react";
import { EXPERIENCES, PROFILE } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-zinc-950/40 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              Proven Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Work Experience & Background
            </h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-2xl">
              Professional enterprise development experience with ERP systems, payment gateways, AI workflows, and algorithmic competitions.
            </p>
          </div>

          <a
            href={PROFILE.resumeUrl}
            download="Mohamed_Esam_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-semibold text-xs tracking-tight transition-all self-start md:self-auto hover:border-emerald-500/50 shadow-lg"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            Download Complete CV (PDF)
          </a>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6 mb-16">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800/80 hover:border-emerald-500/40 transition-all backdrop-blur-md"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2.5">
                    <Building2 className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-xl font-bold text-white">
                      {exp.role} <span className="text-zinc-500 font-normal">@</span> <span className="text-emerald-400">{exp.company}</span>
                    </h3>
                  </div>
                  <div className="text-xs font-mono text-zinc-400 mt-1">
                    {exp.type}
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700/60 self-start sm:self-auto">
                  {exp.period}
                </span>
              </div>

              <div className="space-y-2.5 mt-5">
                {exp.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-zinc-800/80 flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-800/60 text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education & Honors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education Card */}
          <div className="p-7 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                Formal Education
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                {PROFILE.education.degree}
              </h4>
              <div className="text-sm font-medium text-zinc-300 mb-2">
                {PROFILE.education.university}
              </div>
              <div className="text-xs font-mono text-zinc-500 mb-4">
                {PROFILE.education.graduation}
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                <strong className="text-zinc-300">Coursework:</strong> {PROFILE.education.coursework}
              </p>
            </div>
          </div>

          {/* Honors & Certifications Card */}
          <div className="p-7 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
                Competitive & Professional Honors
              </div>
              <h4 className="text-lg font-bold text-white mb-4">
                Diplomas & ICPC Problem Solving
              </h4>
              <div className="space-y-4">
                {PROFILE.credentials.map((cred, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
                    <div className="text-sm font-semibold text-white">{cred.title}</div>
                    <div className="text-xs font-mono text-emerald-400/90 mt-0.5">{cred.issuer}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
