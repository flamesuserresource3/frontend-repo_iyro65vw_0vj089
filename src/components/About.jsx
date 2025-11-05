import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">About</h2>
            <p className="mt-4 text-white/80">
              I craft delightful, performant experiences with a strong focus on clarity, motion, and scalability.
              My work spans modern web apps, interactive 3D, and polished product design.
            </p>
            <p className="mt-4 text-white/70">
              This portfolio blends a clean aesthetic with subtle animation to present projects, certifications,
              experience, and publications in a cohesive narrative.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-semibold">8+ yrs</p>
              <p className="text-white/70">Building digital products</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-semibold">30+</p>
              <p className="text-white/70">Projects shipped</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-semibold">10</p>
              <p className="text-white/70">Certifications</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-semibold">6</p>
              <p className="text-white/70">Publications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
