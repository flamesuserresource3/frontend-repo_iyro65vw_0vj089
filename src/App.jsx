import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Showcase from './components/Showcase';
import { Download } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      {/* Simple sticky header */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-semibold tracking-tight">Portfolio</a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="text-white/70 hover:text-white">About</a>
            <a href="#skills" className="text-white/70 hover:text-white">Skills</a>
            <a href="#projects" className="text-white/70 hover:text-white">Projects</a>
            <a href="#certifications" className="text-white/70 hover:text-white">Certifications</a>
            <a href="#experience" className="text-white/70 hover:text-white">Experience</a>
            <a href="#publications" className="text-white/70 hover:text-white">Publications</a>
          </nav>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-black hover:opacity-90"
          >
            <Download size={16} /> Resume
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Showcase />
      </main>

      <footer className="border-t border-white/10 bg-neutral-950 py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
