import { motion } from 'framer-motion'
import { Github, ArrowRight } from 'lucide-react'
import { githubProjects } from '../data/projectsData'
import { revealVariants, viewportConfig } from '../hooks/useScrollReveal'

export default function GitHubProjects() {
  return (
    <section id="github" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportConfig} className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">05 / Open Source</span>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/30 to-transparent" />
        </motion.div>

        <motion.h2 variants={revealVariants} custom={100} initial="hidden" whileInView="visible" viewport={viewportConfig} className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">
          AI & <span className="emerald-text">Open Source</span> Projects
        </motion.h2>
        <motion.p variants={revealVariants} custom={200} initial="hidden" whileInView="visible" viewport={viewportConfig} className="font-dm text-white/40 mb-6 max-w-2xl text-[15px]">
          Production-grade AI systems — from building LLMs from scratch and multi-agent RAG with LangGraph
          to AGNO orchestration, Google ADK, and Amazon Bedrock integrations.
        </motion.p>

        <motion.a
          href="https://github.com/ai-pratik"
          target="_blank"
          rel="noopener noreferrer"
          variants={revealVariants} custom={250} initial="hidden" whileInView="visible" viewport={viewportConfig}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5 text-emerald-400/80 font-mono text-xs hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:text-emerald-400 transition-all mb-12"
        >
          <Github size={13} />
          github.com/ai-pratik
          <ArrowRight size={11} />
        </motion.a>

        <div className="grid lg:grid-cols-2 gap-6">
          {githubProjects.map((p, i) => (
            <motion.div
              key={p.title}
              variants={revealVariants} custom={300 + i * 120} initial="hidden" whileInView="visible" viewport={viewportConfig}
              className="shimmer-card group relative rounded-2xl"
            >
              <div className="shimmer-border absolute inset-0 rounded-2xl pointer-events-none" />

              <div className="relative glass-card-enhanced rounded-2xl p-6 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{p.icon}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded border text-emerald-400/80 border-emerald-500/25 bg-emerald-500/8">
                      Featured
                    </span>
                  </div>
                  <span
                    className="text-[9px] font-mono tracking-wider px-2 py-0.5 rounded"
                    style={{
                      color: p.badgeColor,
                      background: `${p.badgeColor}12`,
                      border: `1px solid ${p.badgeColor}25`,
                    }}
                  >
                    {p.category}
                  </span>
                </div>

                <span
                  className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded self-start mb-3"
                  style={{
                    color: p.badgeColor,
                    background: `${p.badgeColor}12`,
                    border: `1px solid ${p.badgeColor}25`,
                  }}
                >
                  {p.badge}
                </span>

                <h3 className="font-syne font-bold text-white text-lg mb-1 group-hover:text-emerald-300 transition-colors">
                  {p.title}
                </h3>
                <p className="font-dm text-white/30 text-xs mb-3">{p.subtitle}</p>
                <p className="font-dm text-white/45 text-sm leading-relaxed mb-4">{p.desc}</p>

                {p.architecture && (
                  <div className="mb-4 px-3 py-2 rounded-lg bg-white/3 border border-white/5">
                    <div className="font-mono text-[9px] text-emerald-400/50 uppercase tracking-widest mb-1">Architecture</div>
                    <div className="font-mono text-[11px] text-white/40 leading-relaxed">{p.architecture}</div>
                  </div>
                )}

                <ul className="space-y-1.5 mb-5">
                  {p.highlights.map(h => (
                    <li key={h} className="flex items-start gap-2 text-xs font-dm text-white/40">
                      <span className="text-emerald-400/60 flex-shrink-0 mt-0.5">›</span>{h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                  {p.stack.map(s => (
                    <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded border border-white/8 text-white/35 bg-white/3 hover:border-emerald-500/30 hover:text-emerald-400/70 transition-all">
                      {s}
                    </span>
                  ))}
                </div>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500/8 border border-emerald-500/20 text-emerald-400/80 font-mono text-xs hover:bg-emerald-500/15 hover:border-emerald-500/40 hover:text-emerald-400 transition-all group/btn self-start"
                >
                  <Github size={13} />
                  View on GitHub
                  <ArrowRight size={11} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
