import { motion } from 'framer-motion'
import { Award, Users, Cpu, TrendingUp, BookOpen, BadgeCheck, Linkedin } from 'lucide-react'
import { revealVariants, viewportConfig } from '../hooks/useScrollReveal'

const highlights = [
  { icon: Award, label: 'BRAVO Award', desc: 'Innovation, execution excellence & leadership at Tech Mahindra', color: '#f59e0b' },
  { icon: Cpu, label: 'GenAI Platform Builder', desc: 'Conceived & led n8n-like AI automation platform — now adopted across IBU', color: '#ea580c' },
  { icon: Users, label: 'Chairperson — SIT ACM', desc: 'Led ACM Student Chapter at Sinhgad Institute of Technology, Lonavala (2022-23). Organized DSA Olympiad, Code Clash, workshops & FUNFEST. Received formal letter of appreciation for outstanding leadership.', color: '#8b5cf6' },
  { icon: BookOpen, label: 'Editor-in-Chief', desc: 'Led the Computer Engineering department\'s annual magazine for 3 consecutive years — recognized for publication quality & team leadership', color: '#10b981' },
  { icon: TrendingUp, label: 'Revenue Assurance', desc: 'PL/SQL-driven analysis resolving order fallout & billing discrepancies for BT Openreach', color: '#06b6d4' },
  { icon: BadgeCheck, label: 'Certifications', desc: 'MongoDB Basics (MongoDB University) · COVID-19 Operational Planning (WHO)', color: '#f59e0b' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="absolute left-0 top-1/2 w-64 h-64 bg-amber-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportConfig} className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">01 / About</span>
          <div className="flex-1 h-px bg-gradient-to-r from-amber-500/30 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left 3 cols */}
          <div className="lg:col-span-3 space-y-6">
            <motion.h2 variants={revealVariants} custom={100} initial="hidden" whileInView="visible" viewport={viewportConfig} className="font-syne font-bold text-4xl md:text-5xl text-white leading-tight">
              Engineer. Innovator.<br />
              <span className="gold-text">AI Platform Builder.</span>
            </motion.h2>

            <motion.p variants={revealVariants} custom={200} initial="hidden" whileInView="visible" viewport={viewportConfig} className="font-dm text-white/50 leading-relaxed text-[15px]">
              I'm a Software Engineer at <span className="text-amber-400">Tech Mahindra</span> working on-site for
              BT Openreach (UK) — one of the UK's largest telecom providers. My work sits at the intersection
              of <span className="text-amber-400">Generative AI</span>, telecom BSS/OSS automation, and enterprise engineering.
            </motion.p>

            <motion.p variants={revealVariants} custom={300} initial="hidden" whileInView="visible" viewport={viewportConfig} className="font-dm text-white/50 leading-relaxed text-[15px]">
              I conceptualized, architected, and delivered a <span className="text-amber-400">GenAI-powered automation platform</span> — 
              similar to n8n — integrating <span className="text-amber-400">Claude</span> and <span className="text-amber-400">Amazon Q</span> to 
              orchestrate complex telecom workflows. The platform was widely adopted across the IBU and 
              recognized as one of the most impactful AI initiatives in our delivery organization.
            </motion.p>

            <motion.p variants={revealVariants} custom={400} initial="hidden" whileInView="visible" viewport={viewportConfig} className="font-dm text-white/50 leading-relaxed text-[15px]">
              Beyond enterprise work, I build <span className="text-amber-400">production-ready RAG systems</span> with
              LangGraph & LangChain, explore <span className="text-amber-400">LLMs from scratch</span> with word embeddings,
              and orchestrate multi-agent pipelines using <span className="text-amber-400">AGNO, Google ADK & Amazon Bedrock</span>.
            </motion.p>

            {/* Quick facts */}
            <motion.div variants={revealVariants} custom={500} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid grid-cols-2 gap-3 pt-2">
              {[
                ['📍 Location', 'Pune, India'],
                ['🎓 Education', 'BE Computer Engg · CGPA 9.12'],
                ['🏢 Company', 'Tech Mahindra Ltd.'],
                ['📞 Contact', '+91 8788034004'],
              ].map(([k, v]) => (
                <div key={k} className="glass-card rounded-xl p-3">
                  <div className="font-mono text-[10px] text-white/25 mb-1">{k}</div>
                  <div className="font-dm text-white/65 text-sm">{v}</div>
                </div>
              ))}
            </motion.div>

            {/* LinkedIn featured post */}
            <motion.div variants={revealVariants} custom={600} initial="hidden" whileInView="visible" viewport={viewportConfig}>
              <a
                href="https://www.linkedin.com/in/pratik-gade/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-4 flex items-start gap-4 group block"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Linkedin size={15} className="text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-[9px] text-blue-400/50 uppercase tracking-widest mb-1">Featured on LinkedIn</div>
                  <div className="font-syne font-semibold text-white/70 text-sm mb-1 group-hover:text-white transition-colors">
                    Built a Fully Local, Production-Ready RAG Agent 🧠
                  </div>
                  <div className="font-dm text-white/30 text-xs leading-relaxed">
                    Hybrid retrieval with BM25 + Dense Vector Search, FlashRank reranking,
                    LangGraph orchestration — powered by Ollama & Qdrant. No API keys needed.
                  </div>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right 2 cols */}
          <div className="lg:col-span-2 space-y-3">
            {highlights.map(({ icon: Icon, label, desc, color }, i) => (
              <motion.div key={label} variants={revealVariants} custom={300 + i * 80} initial="hidden" whileInView="visible" viewport={viewportConfig} className="glass-card rounded-xl p-4 flex gap-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110"
                  style={{ background: `${color}12`, border: `1px solid ${color}25` }}>
                  <Icon size={15} style={{ color }} />
                </div>
                <div>
                  <div className="font-syne font-semibold text-white text-sm mb-0.5">{label}</div>
                  <div className="font-dm text-white/35 text-xs leading-relaxed">{desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
