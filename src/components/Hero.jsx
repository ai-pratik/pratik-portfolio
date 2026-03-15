import { useEffect, useState, useRef } from 'react'
import { Github, Linkedin, Mail, Phone, ChevronDown, Download } from 'lucide-react'

const roles = [
  'Software Engineer — GenAI Lead',
  'Multi-Agent AI Orchestration Engineer',
  'Telecom BSS / OSS Architect',
  'LLM Integration Engineer',
  'AI Workflow Automation Expert',
  'Prompt Engineer & AI Builder',
]

const aiTags = ['LangGraph', 'LangChain', 'AGNO', 'Multi-Agent', 'Google ADK', 'Amazon Bedrock', 'Claude API', 'RAG Pipelines', 'Qdrant', 'Vector DB', 'Word Embeddings', 'LLM from Scratch', 'Prompt Engineering', 'Ollama', 'n8n', 'Gradio', 'GenAI Platform', 'OpenAI']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const timerRef = useRef(null)

  useEffect(() => {
    const current = roles[roleIdx]
    if (typing) {
      if (displayed.length < current.length) {
        timerRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55)
      } else {
        timerRef.current = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timerRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28)
      } else {
        setRoleIdx((roleIdx + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timerRef.current)
  }, [displayed, typing, roleIdx])

  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 pt-20">
      {/* Scanline */}
      <div className="scanline" />
      {/* Glow blobs */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-amber-500/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-orange-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-amber-500/20 bg-amber-500/5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-mono text-amber-400 text-[10px] tracking-[0.2em] uppercase">Available for Opportunities</span>
            </div>

            <h1 className="font-syne font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-none tracking-tight mb-4">
              Pratik<br />
              <span className="gold-text">Gade</span>
            </h1>

            {/* Typewriter */}
            <div className="font-mono text-sm text-amber-400/70 mb-6 h-6 flex items-center">
              <span className="mr-1 text-white/20">{'>'}</span>
              {displayed}
              <span className="type-cursor ml-0.5 text-amber-400">▋</span>
            </div>

            <p className="font-dm text-white/45 leading-relaxed mb-8 max-w-lg text-[15px]">
              Software Engineer with <span className="text-amber-400">2.7+ years</span> building GenAI platforms,
              telecom BSS/OSS automation, and enterprise-scale LLM integrations.
              BRAVO Award winner for conceiving and leading an <span className="text-amber-400">n8n-like AI automation platform</span> adopted across the IBU.
            </p>

            <div className="flex items-center gap-3 flex-wrap mb-10">
              <a href="mailto:pratikgade5151@gmail.com"
                className="flex items-center gap-2 px-6 py-3 rounded bg-amber-500 text-black font-dm font-semibold text-sm hover:bg-amber-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all">
                <Mail size={14} /> Get In Touch
              </a>
              <a href="https://linkedin.com/in/pratik-gade" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded border border-white/10 text-white/60 font-dm text-sm hover:border-amber-500/30 hover:text-amber-400 transition-all">
                <Linkedin size={14} /> LinkedIn
              </a>
              <a href="/resume.html" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded border border-amber-500/20 text-amber-400/70 font-dm text-sm hover:border-amber-500/40 hover:text-amber-400 hover:bg-amber-500/5 transition-all">
                <Download size={14} /> Resume
              </a>
            </div>

            <div className="flex items-center gap-5">
              {[
                { icon: Github, href: 'https://github.com/ai-pratik', label: 'GitHub' },
                { icon: Mail, href: 'mailto:pratikgade5151@gmail.com', label: 'Email' },
                { icon: Phone, href: 'tel:+918788034004', label: 'Phone' },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded border border-white/8 flex items-center justify-center text-white/30 hover:text-amber-400 hover:border-amber-500/30 transition-all">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — AI panel */}
          <div className="space-y-4">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: '2.7+', label: 'Years Experience', color: '#f59e0b' },
                { val: 'BRAVO', label: 'Award Winner', color: '#ea580c' },
                { val: 'Tier-1', label: 'CSP Delivery', color: '#f59e0b' },
                { val: 'IBU', label: 'Platform Adoption', color: '#ea580c' },
              ].map(({ val, label, color }) => (
                <div key={label} className="glass-card rounded-xl p-4">
                  <div className="font-syne font-bold text-2xl mb-0.5" style={{ color }}>{val}</div>
                  <div className="font-dm text-white/35 text-xs">{label}</div>
                </div>
              ))}
            </div>

            {/* AI tags cloud */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 ai-badge" />
                <span className="font-mono text-[10px] text-amber-400/60 tracking-widest uppercase">AI / GenAI Expertise</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {aiTags.map(tag => (
                  <span key={tag}
                    className="text-[11px] font-mono px-2.5 py-1 rounded border border-amber-500/15 text-amber-400/60 bg-amber-500/5 hover:border-amber-500/40 hover:text-amber-400 transition-all cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Company */}
            <div className="glass-card rounded-xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                <span className="font-mono text-blue-400 text-xs font-bold">TM</span>
              </div>
              <div>
                <div className="font-dm text-white/70 text-sm font-medium">Tech Mahindra Ltd.</div>
                <div className="font-dm text-white/30 text-xs">Client: BT Openreach (UK) — Sep 2023–Present</div>
              </div>
              <div className="ml-auto">
                <span className="text-[10px] font-mono px-2 py-1 rounded border border-green-500/20 text-green-400/70 bg-green-500/5">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/15 hover:text-amber-400/40 transition-colors">
        <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
        <ChevronDown size={14} className="animate-bounce" />
      </button>
    </section>
  )
}
