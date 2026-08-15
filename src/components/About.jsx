import React from 'react';
import { Layout, BarChart3, Cpu, GraduationCap, Code, CheckCircle } from 'lucide-react';
import { personalData } from '../data/personal';

const iconMap = {
  Layout: Layout,
  BarChart3: BarChart3,
  Cpu: Cpu
};

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-slate-950/60 border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider">
            <Code className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Passionate About <span className="gradient-text">Full Stack & Data Science</span>
          </h2>
          <p className="text-slate-400 text-base">
            Combining software engineering fundamentals with data analytics to solve practical engineering challenges.
          </p>
        </div>

        {/* Top Split: Bio Card & Education Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-8 glass-panel rounded-2xl p-8 border border-slate-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-6 bg-cyan-500 rounded-full inline-block" />
                Background & Mindset
              </h3>
              <p className="text-slate-300 leading-relaxed text-base">
                {personalData.aboutBio}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                My academic foundation in Computer Science & Engineering (Data Science) provides me with a balanced perspective on both application development and algorithmic data modeling. Whether constructing REST APIs or analyzing dataset patterns, I aim for high code quality, maintainability, and clean architecture.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>Responsive Web Design</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>REST API Engineering</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>Data-Driven Logic</span>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="lg:col-span-4 glass-panel rounded-2xl p-8 border border-slate-800 flex flex-col justify-between bg-gradient-to-b from-slate-900/90 to-slate-950">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Education</span>
                <h4 className="text-lg font-bold text-white mt-1">
                  {personalData.education.degree}
                </h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Focused on core computer science fundamentals, data structures, algorithms, database management, statistics, and machine learning.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>Status: Pursuing B.E.</span>
              <span className="text-cyan-400">Computer Science</span>
            </div>
          </div>

        </div>

        {/* "What I Do" Three Cards Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">What I Do</h3>
            <span className="text-xs font-mono text-slate-400">03 Core Specialization Areas</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personalData.services.map((service) => {
              const IconComponent = iconMap[service.icon] || Code;
              return (
                <div
                  key={service.id}
                  className="glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800/90 flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50 group-hover:bg-cyan-950/40 transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-sm font-bold text-slate-600 group-hover:text-cyan-400 transition-colors">
                        {service.id}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h4>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-slate-900/90 text-slate-300 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
