import { motion } from 'framer-motion'
import { Mail, Linkedin, Phone, ArrowUpRight, Download } from 'lucide-react'
import { revealVariants, viewportConfig } from '../hooks/useScrollReveal'

export default function Contact() {
  const links = [
    { icon: Mail, label: 'Email', value: 'pratikgade5151@gmail.com', href: 'mailto:pratikgade5151@gmail.com', color: '#f59e0b' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/pratik-gade', href: 'https://linkedin.com/in/pratik-gade', color: '#06b6d4' },
    { icon: Phone, label: 'Phone', value: '+91 8788034004', href: 'tel:+918788034004', color: '#ea580c' },
  ]

  return (
    <section id="contact" className="relative py-28 px-6 pb-10">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportConfig} className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">06 / Contact</span>
          <div className="flex-1 h-px bg-gradient-to-r from-amber-500/30 to-transparent" />
        </motion.div>

        <div className="text-center mb-14">
          <motion.h2 variants={revealVariants} custom={100} initial="hidden" whileInView="visible" viewport={viewportConfig} className="font-syne font-bold text-4xl md:text-6xl text-white mb-4">
            Let's Work<br />
            <span className="gold-text">Together</span>
          </motion.h2>
          <motion.p variants={revealVariants} custom={200} initial="hidden" whileInView="visible" viewport={viewportConfig} className="font-dm text-white/40 max-w-md mx-auto text-[15px]">
            Open to new opportunities in GenAI engineering, platform development, and enterprise automation.
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div variants={revealVariants} custom={300} initial="hidden" whileInView="visible" viewport={viewportConfig} className="flex justify-center gap-4 flex-wrap mb-12">
          <a href="mailto:pratikgade5151@gmail.com"
            className="flex items-center gap-3 px-10 py-4 rounded bg-amber-500 text-black font-syne font-bold text-base hover:bg-amber-400 hover:scale-105 hover:shadow-[0_0_50px_rgba(245,158,11,0.35)] transition-all">
            <Mail size={16} /> Send a Message
          </a>
          <a href="/resume.pdf" download
            className="flex items-center gap-3 px-8 py-4 rounded border border-amber-500/30 text-amber-400 font-syne font-semibold text-base hover:bg-amber-500/10 hover:border-amber-500/50 hover:scale-105 transition-all">
            <Download size={16} /> Download Resume
          </a>
        </motion.div>

        {/* Contact cards */}
        <motion.div variants={revealVariants} custom={400} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid sm:grid-cols-3 gap-4 mb-14">
          {links.map(({ icon: Icon, label, value, href, color }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="glass-card rounded-xl p-4 flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                style={{ background: `${color}12`, border: `1px solid ${color}25` }}>
                <Icon size={14} style={{ color }} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-mono text-[10px] text-white/25 uppercase tracking-widest">{label}</div>
                <div className="font-dm text-white/55 text-xs truncate group-hover:text-white transition-colors">{value}</div>
              </div>
              <ArrowUpRight size={12} className="text-white/15 group-hover:text-amber-400 transition-colors flex-shrink-0" />
            </a>
          ))}
        </motion.div>

        {/* Footer */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-amber-500/15 border border-amber-500/25 flex items-center justify-center">
              <span className="font-mono text-amber-400 text-[9px] font-bold">PG</span>
            </div>
            <span className="font-syne font-bold text-white/60 text-sm">Pratik Gade</span>
          </div>
          <p className="font-dm text-xs text-white/20">Built with React · Vite · Tailwind CSS</p>
          <p className="font-dm text-xs text-white/20">© 2026 Pratik Gade</p>
        </div>
      </div>
    </section>
  )
}
