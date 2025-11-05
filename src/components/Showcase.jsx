import React from 'react';
import { Award, Briefcase, BookOpen, ExternalLink } from 'lucide-react';

const Card = ({ title, subtitle, meta, href }) => (
  <a
    href={href || '#'}
    target={href ? '_blank' : undefined}
    rel={href ? 'noreferrer' : undefined}
    className="group block rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
  >
    <div className="flex items-start justify-between gap-4">
      <div>
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        {subtitle && <p className="mt-1 text-sm text-white/70">{subtitle}</p>}
      </div>
      {href && (
        <ExternalLink className="text-white/50 transition group-hover:text-white" size={18} />
      )}
    </div>
    {meta && <p className="mt-3 text-xs uppercase tracking-wide text-white/50">{meta}</p>}
  </a>
);

const Showcase = () => {
  return (
    <section id="projects" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Projects */}
        <div className="mb-14">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-white/10 p-2">
              <Briefcase size={20} />
            </div>
            <h2 className="text-3xl font-semibold md:text-4xl">Projects</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Card
              title="Interactive 3D Portfolio"
              subtitle="Spline + React experience with smooth motion"
              meta="2024 • React, Spline, Tailwind"
              href="#"
            />
            <Card
              title="Realtime Collab Notes"
              subtitle="CRDT-powered editor with presence indicators"
              meta="2023 • React, WebSockets, Node"
              href="#"
            />
            <Card
              title="AI Product Finder"
              subtitle="Semantic search across catalog with RAG"
              meta="2023 • FastAPI, Pinecone, Next"
              href="#"
            />
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-14" id="certifications">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-white/10 p-2">
              <Award size={20} />
            </div>
            <h2 className="text-2xl font-semibold md:text-3xl">Certifications</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Card title="AWS Certified Cloud Practitioner" subtitle="Amazon Web Services" meta="2022" />
            <Card title="Google Professional Cloud Architect" subtitle="Google Cloud" meta="2021" />
            <Card title="Meta Front-End Developer" subtitle="Meta" meta="2023" />
          </div>
        </div>

        {/* Experience */}
        <div className="mb-14" id="experience">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-white/10 p-2">
              <Briefcase size={20} />
            </div>
            <h2 className="text-2xl font-semibold md:text-3xl">Experience</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card
              title="Senior Frontend Engineer"
              subtitle="TechLabs — Led design systems and motion"
              meta="2021 — Present"
            />
            <Card
              title="Full-Stack Developer"
              subtitle="Product Studio — Built data-driven apps"
              meta="2018 — 2021"
            />
          </div>
        </div>

        {/* Publications */}
        <div id="publications">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-white/10 p-2">
              <BookOpen size={20} />
            </div>
            <h2 className="text-2xl font-semibold md:text-3xl">Publications</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card
              title="Designing Motion That Matters"
              subtitle="A guide to purposeful interface animation"
              meta="Smashing Magazine"
              href="#"
            />
            <Card
              title="Bringing 3D to the Web"
              subtitle="From Three.js to no-code Spline pipelines"
              meta="CSS-Tricks"
              href="#"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
