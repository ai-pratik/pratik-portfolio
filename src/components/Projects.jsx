import { motion } from 'framer-motion'
import { enterpriseProjects } from '../data/projectsData'
import { revealVariants, viewportConfig } from '../hooks/useScrollReveal'

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportConfig} className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">04 / Projects</span>
          <div className="flex-1 h-px bg-gradient-to-r from-amber-500/30 to-transparent" />
        </motion.div>

        <motion.h2 variants={revealVariants} custom={100} initial="hidden" whileInView="visible" viewport={viewportConfig} className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">
          Key <span className="gold-text">Initiatives</span>
        </motion.h2>
        <motion.p variants={revealVariants} custom={200} initial="hidden" whileInView="visible" viewport={viewportConfig} className="font-dm text-white/40 mb-14 max-w-xl text-[15px]">
          Production-grade work delivered for Tier-1 CSPs and enterprise teams — from AI platforms to telecom automation engines.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-5">
          {enterpriseProjects.map((p, i) => (
            <motion.div key={p.title} variants={revealVariants} custom={300 + i * 80} initial="hidden" whileInView="visible" viewport={viewportConfig} className="glass-card rounded-2xl p-6 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl">{p.icon}</span>
                {p.featured && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded border text-amber-400/70 border-amber-500/25 bg-amber-500/8">
                    Featured
                  </span>
                )}
              </div>

              <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded self-start mb-3"
                style={{ color: p.badgeColor, background: `${p.badgeColor}12`, border: `1px solid ${p.badgeColor}25` }}>
                {p.badge}
              </span>

              <h3 className="font-syne font-bold text-white text-lg mb-1">{p.title}</h3>
              <p className="font-dm text-white/30 text-xs mb-3">{p.subtitle}</p>
              <p className="font-dm text-white/45 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>

              <ul className="space-y-1.5 mb-5">
                {p.highlights.map(h => (
                  <li key={h} className="flex items-start gap-2 text-xs font-dm text-white/40">
                    <span className="text-amber-400/60 flex-shrink-0 mt-0.5">›</span>{h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {p.stack.map(s => (
                  <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded border border-white/8 text-white/30 bg-white/3">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
