import { motion } from 'framer-motion'
import { revealVariants, viewportConfig } from '../hooks/useScrollReveal'

const allSkills = [
  'Python', 'LangGraph', 'LangChain', 'AGNO', 'Spring Boot', 'Shell / Bash', 'Oracle SQL', 'PL/SQL', 'REST APIs',
  'Claude API', 'Amazon Bedrock', 'Google ADK', 'OpenAI', 'Multi-Agent', 'Prompt Engineering',
  'Vector DB', 'Word Embeddings', 'LLM from Scratch', 'Qdrant', 'RAG', 'Ollama', 'React (Vite)',
  'Flask', 'FastAPI', 'Streamlit', 'Gradio', 'n8n', 'Docker', 'Netcracker RBM', 'BSS APIs', 'Git', 'Linux/Unix',
]

const groups = [
  {
    label: 'AI Agents & Orchestration',
    color: '#10b981',
    icon: '🧠',
    items: ['LangGraph', 'LangChain', 'AGNO', 'Multi-Agent Orchestration', 'Google ADK', 'Amazon Bedrock', 'Qdrant (Vector DB)', 'Vector DB', 'Word Embeddings', 'LLM from Scratch', 'Ollama', 'Gradio', 'FlashRank'],
    desc: 'Building production-ready RAG pipelines, multi-agent systems, and LLMs from scratch with modern AI tooling',
  },
  {
    label: 'GenAI & LLM',
    color: '#f59e0b',
    icon: '🤖',
    items: ['Claude API', 'Amazon Q', 'OpenAI GPT', 'LLM Integration', 'Prompt Engineering', 'RAG Pipelines', 'AI Orchestration', 'Contextual Automation', 'AI Workflow Templates'],
    desc: 'Conceived and built an n8n-like GenAI automation platform adopted across IBU',
  },
  {
    label: 'Telecom BSS/OSS',
    color: '#06b6d4',
    icon: '📡',
    items: ['Netcracker RBM', 'Order Journeys', 'Billing & Mediation', 'Lead-to-Cash', 'Revenue Assurance', 'B2C Flows', 'BSS Core APIs', 'GBSF Parser', 'OSS/BSS Lifecycle'],
    desc: 'Delivered enterprise-scale automation for Tier-1 CSP BT Openreach (UK)',
  },
  {
    label: 'Backend & Automation',
    color: '#ea580c',
    icon: '⚙️',
    items: ['Python', 'Spring Boot', 'Shell / Bash', 'Oracle SQL', 'PL/SQL', 'REST APIs', 'FastAPI', 'Flask', 'Streamlit'],
    desc: 'Engineered Python automation frameworks eliminating repetitive manual tasks',
  },
  {
    label: 'Frontend & Tools',
    color: '#8b5cf6',
    icon: '🎨',
    items: ['React (Vite)', 'JavaScript', 'HTML / CSS', 'PHP', 'MySQL', 'Git', 'Linux / Unix', 'Agile Scrum'],
    desc: 'Full-stack capabilities from backend automation to modern React frontends',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      {/* Ticker */}
      <div className="overflow-hidden border-y border-amber-500/10 py-3 mb-20 bg-amber-500/3">
        <div className="ticker-inner flex gap-0 whitespace-nowrap" style={{ width: 'max-content' }}>
          {[...allSkills, ...allSkills].map((s, i) => (
            <span key={i} className="font-mono text-xs text-amber-400/40 px-6">
              {s} <span className="text-amber-500/20 mx-1">◆</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportConfig} className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">03 / Skills</span>
          <div className="flex-1 h-px bg-gradient-to-r from-amber-500/30 to-transparent" />
        </motion.div>

        <motion.h2 variants={revealVariants} custom={100} initial="hidden" whileInView="visible" viewport={viewportConfig} className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">
          Technical <span className="gold-text">Expertise</span>
        </motion.h2>
        <motion.p variants={revealVariants} custom={200} initial="hidden" whileInView="visible" viewport={viewportConfig} className="font-dm text-white/40 mb-14 max-w-xl text-[15px]">
          From multi-agent AI orchestration to telecom BSS automation — a versatile stack built through real production delivery.
        </motion.p>

        {/* Featured AI Agents card */}
        <motion.div variants={revealVariants} custom={300} initial="hidden" whileInView="visible" viewport={viewportConfig} className="mb-5">
          <div className="glass-card rounded-2xl p-6 border-emerald-500/15 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/3 to-transparent pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl">{groups[0].icon}</span>
                <span className="font-syne font-bold text-white text-lg">{groups[0].label}</span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded border border-emerald-500/25 text-emerald-400/70 bg-emerald-500/8 ml-2">NEW</span>
              </div>
              <p className="font-dm text-white/30 text-xs mb-4 leading-relaxed">{groups[0].desc}</p>
              <div className="flex flex-wrap gap-2">
                {groups[0].items.map(item => (
                  <span key={item}
                    onMouseEnter={e => { e.target.style.borderColor = groups[0].color; e.target.style.color = groups[0].color; e.target.style.boxShadow = `0 0 12px ${groups[0].color}25` }}
                    onMouseLeave={e => { e.target.style.borderColor = ''; e.target.style.color = ''; e.target.style.boxShadow = '' }}
                    className="text-xs font-mono px-2.5 py-1 rounded border border-white/8 text-white/40 bg-white/3 transition-all cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Remaining skill groups */}
        <div className="grid sm:grid-cols-2 gap-5">
          {groups.slice(1).map(({ label, color, icon, items, desc }, i) => (
            <motion.div key={label} variants={revealVariants} custom={380 + i * 80} initial="hidden" whileInView="visible" viewport={viewportConfig} className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl">{icon}</span>
                <span className="font-syne font-bold text-white text-lg">{label}</span>
              </div>
              <p className="font-dm text-white/30 text-xs mb-4 leading-relaxed">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {items.map(item => (
                  <span key={item}
                    onMouseEnter={e => { e.target.style.borderColor = color; e.target.style.color = color; e.target.style.boxShadow = `0 0 12px ${color}25` }}
                    onMouseLeave={e => { e.target.style.borderColor = ''; e.target.style.color = ''; e.target.style.boxShadow = '' }}
                    className="text-xs font-mono px-2.5 py-1 rounded border border-white/8 text-white/40 bg-white/3 transition-all cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
