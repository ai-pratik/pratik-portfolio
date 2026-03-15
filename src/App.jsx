import Cursor from './components/Cursor'
import NeuralBg from './components/NeuralBg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import GitHubProjects from './components/GitHubProjects'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0e0e0e]">
      <Cursor />
      <NeuralBg />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <GitHubProjects />
        <Contact />
      </main>
      <BackToTop />
    </div>
  )
}
