import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['About', 'Experience', 'Skills', 'Projects', 'GitHub', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Track active section via IntersectionObserver
  useEffect(() => {
    const ids = links.map(l => l.toLowerCase())
    const observers = []

    ids.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  const go = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0e0e0e]/90 backdrop-blur-xl border-b border-amber-500/10' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => go('hero')} className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-amber-500/15 border border-amber-500/30 flex items-center justify-center">
            <span className="font-mono text-amber-400 text-xs font-bold">PG</span>
          </div>
          <span className="font-syne font-bold text-white text-sm tracking-wide">Pratik Gade</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <button key={l} onClick={() => go(l)}
              className={`nav-link font-dm text-sm transition-colors ${active === l.toLowerCase() ? 'text-amber-400' : 'text-white/50 hover:text-white'}`}>
              {l}
            </button>
          ))}
          <a href="mailto:pratikgade5151@gmail.com"
            className="text-xs font-mono font-semibold px-4 py-2 rounded border border-amber-500/40 text-amber-400 hover:bg-amber-500/10 transition-all tracking-wider">
            HIRE ME
          </a>
        </div>

        <button className="md:hidden text-white/50" onClick={() => setOpen(!open)}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0e0e0e]/98 border-t border-amber-500/10 px-6 py-6 flex flex-col gap-5">
          {links.map(l => (
            <button key={l} onClick={() => go(l)}
              className={`text-left font-syne text-lg transition-colors ${active === l.toLowerCase() ? 'text-amber-400' : 'text-white/60 hover:text-amber-400'}`}>
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
