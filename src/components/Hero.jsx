import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] md:h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center gap-6 px-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/80 backdrop-blur">
          Tech • Portfolio • Interactive • Modern
        </span>
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          Clean, Animatic, Professional Portfolio
        </h1>
        <p className="max-w-2xl text-white/80 md:text-lg">
          Showcasing an elegant hero, about, skills, projects, certifications, experience, and publications — all in a playful, modern tech vibe.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-black transition hover:opacity-90"
          >
            Explore Work <ArrowRight size={18} />
          </a>
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            <Mail size={18} /> Contact
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            <Github size={18} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
