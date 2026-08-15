import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle, 
  Layers, 
  Server, 
  Database, 
  Sparkles, 
  X, 
  Plus, 
  ArrowUpRight,
  ShoppingBag,
  ShieldCheck,
  Zap,
  Lock
} from 'lucide-react';
import { GithubIcon as Github } from './Icons';
import { projects } from '../data/projects';
import { personalData } from '../data/personal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Software & <span className="gradient-text">Data Projects</span>
          </h2>
          <p className="text-slate-400 text-base">
            Detailed engineering showcases demonstrating full-stack architecture, API design, and data integrations.
          </p>
        </div>

        {/* Featured Projects Showcase List */}
        <div className="space-y-12">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl border border-slate-800 overflow-hidden shadow-2xl shadow-cyan-950/20 group hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                
                {/* Left Side: Visual Banner & Tech Badge Panel */}
                <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[460px] bg-slate-900 overflow-hidden flex flex-col justify-between p-6">
                  {/* Background Image with Dark Gradient Overlay */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-40 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-[#080c14]/70 to-transparent" />

                  {/* Top Badge Overlay */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-semibold backdrop-blur-md flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>FEATURED PROJECT</span>
                    </span>

                    <span className="font-mono text-xs text-slate-400 bg-slate-950/80 px-2.5 py-1 rounded border border-slate-800 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Bottom Visual Highlights */}
                  <div className="relative z-10 space-y-3 pt-12">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 backdrop-blur-md">
                        <FolderGit2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">{project.title}</h4>
                        <p className="text-xs text-cyan-300 font-mono font-medium">{project.subtitle}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-300 pt-2">
                      <div className="bg-slate-950/80 p-2 rounded border border-slate-800/80 flex items-center gap-1.5 backdrop-blur-md">
                        <Lock className="w-3 h-3 text-cyan-400" />
                        <span>JWT Authentication</span>
                      </div>
                      <div className="bg-slate-950/80 p-2 rounded border border-slate-800/80 flex items-center gap-1.5 backdrop-blur-md">
                        <ShieldCheck className="w-3 h-3 text-cyan-400" />
                        <span>Protected APIs</span>
                      </div>
                      <div className="bg-slate-950/80 p-2 rounded border border-slate-800/80 flex items-center gap-1.5 backdrop-blur-md">
                        <Database className="w-3 h-3 text-cyan-400" />
                        <span>MongoDB Storage</span>
                      </div>
                      <div className="bg-slate-950/80 p-2 rounded border border-slate-800/80 flex items-center gap-1.5 backdrop-blur-md">
                        <Zap className="w-3 h-3 text-cyan-400" />
                        <span>REST API Backend</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Detailed Project Information */}
                <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-cyan-400 text-xs font-mono mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights Bullet List */}
                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                        Core Built-in Modules:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        {project.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack Pills & Action Buttons */}
                  <div className="space-y-6 pt-4 border-t border-slate-800">
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 mb-2">Technologies Used:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono rounded bg-slate-900 text-slate-200 border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/30 text-xs font-mono font-semibold transition-all flex items-center gap-2"
                      >
                        <Layers className="w-4 h-4" />
                        <span>View Architecture & Details</span>
                      </button>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-xs font-mono font-semibold transition-all flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub Repo</span>
                      </a>

                      {project.demo && project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 text-xs font-mono font-semibold transition-all flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4 text-cyan-400" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid (Renders if additional projects exist) */}
        {otherProjects.length > 0 && (
          <div className="mt-16 space-y-6">
            <h3 className="text-xl font-bold text-white">More Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((p) => (
                <div key={p.id} className="glass-panel p-6 rounded-xl border border-slate-800 space-y-4">
                  <h4 className="text-lg font-bold text-white">{p.title}</h4>
                  <p className="text-slate-400 text-sm">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.technologies.map(t => (
                      <span key={t} className="text-xs font-mono px-2 py-0.5 bg-slate-900 text-slate-300 border border-slate-800 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Architecture Note for Adding Future Projects */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Plus className="w-4 h-4 text-cyan-400" />
              <span>Extensible Project Showcase Architecture</span>
            </div>
            <p className="text-xs text-slate-400 max-w-2xl">
              Need to showcase your next Data Science or Full-Stack project? Simply append a new project object to <code className="text-cyan-400 bg-slate-900 px-1 py-0.5 rounded">src/data/projects.js</code>. The UI automatically renders cards, tech badges, and modal views without code modifications.
            </p>
          </div>

          <a
            href={personalData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 hover:border-cyan-500/50 text-xs font-mono flex items-center gap-1.5"
          >
            <span>Explore All Repos</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="glass-panel max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700 p-6 sm:p-8 space-y-6 shadow-2xl text-slate-100">
            
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  System Architecture Details
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                Full Technical Overview
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                {selectedProject.longDescription}
              </p>
            </div>

            {selectedProject.architecture && (
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                  Layered Architecture Breakdown
                </h4>
                
                <div className="space-y-2">
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-start gap-3 text-xs">
                    <Layers className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Frontend Layer</span>
                      <span className="text-slate-400">{selectedProject.architecture.frontend}</span>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-start gap-3 text-xs">
                    <Server className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Backend REST API Layer</span>
                      <span className="text-slate-400">{selectedProject.architecture.backend}</span>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-start gap-3 text-xs">
                    <Database className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Database Store</span>
                      <span className="text-slate-400">{selectedProject.architecture.database}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-2 hover:bg-cyan-400"
              >
                <Github className="w-4 h-4" />
                <span>Visit GitHub Repository</span>
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-800"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
