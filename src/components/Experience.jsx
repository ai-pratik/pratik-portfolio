import { motion } from 'framer-motion'
import { Trophy, Code2, Database, Zap } from 'lucide-react'
import { revealVariants, viewportConfig } from '../hooks/useScrollReveal'

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="absolute right-0 top-1/3 w-72 h-72 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportConfig} className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">02 / Experience</span>
          <div className="flex-1 h-px bg-gradient-to-r from-amber-500/30 to-transparent" />
        </motion.div>

        <motion.h2 variants={revealVariants} custom={100} initial="hidden" whileInView="visible" viewport={viewportConfig} className="font-syne font-bold text-4xl md:text-5xl text-white mb-14">
          Work <span className="gold-text">History</span>
        </motion.h2>

        {/* BRAVO Award spotlight */}
        <motion.div variants={revealVariants} custom={150} initial="hidden" whileInView="visible" viewport={viewportConfig} className="mb-10">
          <div className="award-glow glass-card rounded-2xl p-6 border-amber-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none" />
            <div className="relative flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                <Trophy size={24} className="text-amber-400" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <span className="font-syne font-bold text-amber-400 text-xl">🏆 BRAVO Award</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-amber-500/30 text-amber-400/70 bg-amber-500/8">Tech Mahindra</span>
                </div>
                <p className="font-dm text-white/55 text-sm leading-relaxed max-w-2xl">
                  Awarded for <span className="text-amber-400">innovation, execution excellence, and leadership</span> — 
                  recognizing the conception and delivery of a GenAI-powered automation platform that became 
                  one of the most impactful AI initiatives across the IBU.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main role */}
        <motion.div variants={revealVariants} custom={200} initial="hidden" whileInView="visible" viewport={viewportConfig} className="glass-card rounded-2xl p-7 mb-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 to-transparent pointer-events-none" />
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 relative">
            <div>
              <h3 className="font-syne font-bold text-white text-xl mb-1">Automation Developer Lead</h3>
              <div className="font-dm text-white/40 text-sm">Tech Mahindra Ltd. · Client: BT Openreach (UK)</div>
              <div className="font-mono text-amber-400/60 text-xs mt-1">Telecom Order Journeys (OSS/BSS)</div>
            </div>
            <span className="font-mono text-xs px-3 py-1.5 rounded border border-white/10 text-white/30 whitespace-nowrap self-start">
              Sep 2023 – Present
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: Zap,
                color: '#f59e0b',
                title: 'GenAI Platform',
                points: [
                  'Conceived & built n8n-like GenAI automation platform',
                  'Integrated Claude & Amazon Q for LLM-driven intelligence',
                  'Advanced prompt engineering & contextual automation logic',
                  'Intelligent validation layers & reusable AI workflow templates',
                  'Platform widely adopted across IBU — BRAVO Award winner',
                ],
              },
              {
                icon: Code2,
                color: '#ea580c',
                title: 'Automation Engineering',
                points: [
                  'Led large-scale automation across Order Journeys & Lead-to-Cash',
                  'Python & Shell scripting eliminating repetitive manual tasks',
                  'Netcracker RBM integration — account lifecycle & billing readiness',
                  'Engineered GBSF parser for fixed-width telecom data transformation',
                  'Standardized automation assets improving OSS/BSS ecosystem maturity',
                ],
              },
              {
                icon: Database,
                color: '#06b6d4',
                title: 'BSS & Revenue Assurance',
                points: [
                  'PL/SQL-driven order fallout & billing discrepancy resolution',
                  'Identified high-risk revenue-impacting issues',
                  'BSS API integrations for order validation & orchestration stability',
                  'Worked with business, QA & platform stakeholders',
                  'Provisioning readiness & billing enablement for Tier-1 CSP',
                ],
              },
              {
                icon: Trophy,
                color: '#8b5cf6',
                title: 'Leadership & Impact',
                points: [
                  'Led end-to-end innovation initiatives from conception to delivery',
                  'Partnered with cross-functional teams to drive measurable outcomes',
                  'Platform recognized as most impactful AI-led enabler in delivery org',
                  'Delivery acceleration contributing to operational efficiency',
                  'Consistent delivery & improved maintainability across BSS solutions',
                ],
              },
            ].map(({ icon: Icon, color, title, points }) => (
              <div key={title} className="rounded-xl p-4 bg-white/2 border border-white/5">
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={14} style={{ color }} />
                  <span className="font-syne font-semibold text-white text-sm">{title}</span>
                </div>
                <ul className="space-y-1.5">
                  {points.map(p => (
                    <li key={p} className="flex items-start gap-2 font-dm text-xs text-white/40">
                      <span style={{ color }} className="mt-0.5 flex-shrink-0">›</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Internship */}
        <motion.div variants={revealVariants} custom={400} initial="hidden" whileInView="visible" viewport={viewportConfig} className="glass-card rounded-xl p-5 flex items-start gap-5">
          <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0">
            <span className="font-mono text-white/30 text-xs">KE</span>
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div>
                <div className="font-syne font-semibold text-white text-base">Database & Web Application Intern</div>
                <div className="font-dm text-white/35 text-xs">Kaizen Engineers</div>
              </div>
              <span className="font-mono text-xs text-white/20 px-3 py-1 rounded border border-white/8 self-start">Internship</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['PHP', 'MySQL', 'HTML/CSS', 'JavaScript', 'ER Modelling', 'Backend Logic'].map(t => (
                <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded border border-white/8 text-white/30">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
