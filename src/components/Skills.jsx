import React from 'react';
import { Code } from 'lucide-react';

const SkillBar = ({ name, level }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between text-sm text-white/80">
      <span>{name}</span>
      <span>{level}%</span>
    </div>
    <div className="h-2 w-full rounded-full bg-white/10">
      <div
        className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const Skills = () => {
  const primary = [
    { name: 'React / Vite', level: 92 },
    { name: 'TypeScript', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Node.js', level: 80 },
  ];

  const secondary = [
    { name: 'Three.js / Spline', level: 75 },
    { name: 'Framer Motion', level: 78 },
    { name: 'FastAPI', level: 70 },
    { name: 'MongoDB', level: 72 },
  ];

  return (
    <section id="skills" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-lg bg-white/10 p-2">
            <Code size={20} />
          </div>
          <h2 className="text-3xl font-semibold md:text-4xl">Skills</h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-lg font-medium text-white/90">Core</h3>
            <div className="space-y-4">
              {primary.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-lg font-medium text-white/90">Tools & Motion</h3>
            <div className="space-y-4">
              {secondary.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
