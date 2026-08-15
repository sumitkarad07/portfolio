import React, { useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Terminal as TerminalIcon, 
  Activity, 
  Cpu, 
  Code2, 
  Database, 
  BrainCircuit, 
  CheckCircle2, 
  Sparkles,
  Download
} from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import { personalData } from '../data/personal';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('terminal'); // 'terminal' | 'flow' | 'telemetry'

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none animate-glow" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-sky-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-400 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Available for Software & Data Roles</span>
            </div>

            {/* Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                SUMIT <span className="gradient-text">KARAD</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-cyan-400 font-mono tracking-tight">
                {personalData.title}
              </p>
            </div>

            {/* Tagline / Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              "{personalData.heroDescription}"
            </p>

            {/* Key Skill Highlights Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['Python', 'MERN Stack', 'Machine Learning', 'Data Analysis', 'REST APIs'].map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 text-xs font-mono rounded-md bg-slate-800/60 border border-slate-700/60 text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-200 hover:text-white hover:bg-slate-800 hover:border-cyan-500/50 text-sm font-semibold transition-all"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-6 pt-4 text-sm text-slate-400 border-t border-slate-800/80 max-w-lg">
              <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Connect:</span>
              
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors group"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium">GitHub</span>
              </a>

              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors group"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium">LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalData.socials.email}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium">Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Custom Developer & Data Science Visualizer Panel */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-panel rounded-2xl border border-slate-800/90 overflow-hidden shadow-2xl shadow-cyan-950/30">
              
              {/* Terminal Window Header Bar */}
              <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400 font-medium">
                    sumit_dev_workspace.py
                  </span>
                </div>

                {/* Tab Controls */}
                <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800/80 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'terminal'
                        ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Terminal
                  </button>
                  <button
                    onClick={() => setActiveTab('flow')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'flow'
                        ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Pipeline
                  </button>
                  <button
                    onClick={() => setActiveTab('telemetry')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'telemetry'
                        ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Stack
                  </button>
                </div>
              </div>

              {/* Window Body Content */}
              <div className="p-5 font-mono text-xs min-h-[340px] flex flex-col justify-between bg-slate-950/90 text-slate-200">
                
                {activeTab === 'terminal' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-slate-500 border-b border-slate-900 pb-2">
                      <span>Python 3.11.4 | Node.js v20.10</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        Active
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <p className="text-slate-400">
                        <span className="text-cyan-400">sumit@dev:~$</span> python load_profile.py
                      </p>
                      <p className="text-emerald-400">✔ Initializing Full-Stack Data Science Profile...</p>
                    </div>

                    <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800/80 space-y-1 text-slate-300">
                      <p><span className="text-sky-400">class</span> <span className="text-amber-300">Developer</span>:</p>
                      <p className="pl-4"><span className="text-purple-400">name</span> = <span className="text-emerald-300">"Sumit Karad"</span></p>
                      <p className="pl-4"><span className="text-purple-400">degree</span> = <span className="text-emerald-300">"B.E. CS (Data Science)"</span></p>
                      <p className="pl-4"><span className="text-purple-400">stack</span> = [<span className="text-amber-200">"React"</span>, <span className="text-amber-200">"Node.js"</span>, <span className="text-amber-200">"MongoDB"</span>, <span className="text-amber-200">"Python"</span>]</p>
                      <p className="pl-4"><span className="text-purple-400">interests</span> = [<span className="text-cyan-300">"ML/AI Integration"</span>, <span className="text-cyan-300">"Data Analytics"</span>, <span className="text-cyan-300">"REST APIs"</span>]</p>
                    </div>

                    <div className="space-y-1 pt-1">
                      <p className="text-slate-400">
                        <span className="text-cyan-400">sumit@dev:~$</span> npm run build:ecommerce-platform
                      </p>
                      <p className="text-sky-300">➜ MERN E-Commerce Backend: REST API Online [Ready]</p>
                      <p className="text-purple-300">➜ Machine Learning Model: Trained & Integrated</p>
                    </div>

                    <div className="flex items-center gap-2 pt-2 text-cyan-400">
                      <span className="animate-pulse">❯</span>
                      <span className="text-slate-400 animate-pulse">Building scalable digital experiences...</span>
                    </div>
                  </div>
                )}

                {activeTab === 'flow' && (
                  <div className="space-y-4">
                    <div className="text-slate-400 text-[11px] border-b border-slate-900 pb-2">
                      Full-Stack & AI Pipeline Architecture
                    </div>

                    <div className="space-y-3 pt-1">
                      <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded bg-cyan-500/10 text-cyan-400">
                            <Code2 className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-white font-semibold text-xs">MERN Frontend & REST API</div>
                            <div className="text-slate-400 text-[11px]">React, Express, Node.js</div>
                          </div>
                        </div>
                        <span className="text-xs text-emerald-400 font-mono">100% Active</span>
                      </div>

                      <div className="flex justify-center">
                        <div className="w-[1px] h-4 bg-gradient-to-b from-cyan-500 to-sky-500" />
                      </div>

                      <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded bg-sky-500/10 text-sky-400">
                            <Database className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-white font-semibold text-xs">Data Layer & MongoDB</div>
                            <div className="text-slate-400 text-[11px]">Document Storage & Data Pipeline</div>
                          </div>
                        </div>
                        <span className="text-xs text-sky-400 font-mono">Structured</span>
                      </div>

                      <div className="flex justify-center">
                        <div className="w-[1px] h-4 bg-gradient-to-b from-sky-500 to-purple-500" />
                      </div>

                      <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded bg-purple-500/10 text-purple-400">
                            <BrainCircuit className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-white font-semibold text-xs">AI & Data Analytics</div>
                            <div className="text-slate-400 text-[11px]">Python, Scikit-Learn, NLP</div>
                          </div>
                        </div>
                        <span className="text-xs text-purple-400 font-mono">Integrated</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'telemetry' && (
                  <div className="space-y-4">
                    <div className="text-slate-400 text-[11px] border-b border-slate-900 pb-2">
                      Core Technology Competencies
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                        <div className="text-slate-400 text-[11px]">Core Languages</div>
                        <div className="text-cyan-400 font-bold text-sm mt-1">Python, C++, JS</div>
                        <div className="text-[10px] text-slate-500 mt-1">Data Science & Web Logic</div>
                      </div>

                      <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                        <div className="text-slate-400 text-[11px]">Web Architecture</div>
                        <div className="text-sky-400 font-bold text-sm mt-1">MERN Stack</div>
                        <div className="text-[10px] text-slate-500 mt-1">React, Node, Express, Mongo</div>
                      </div>

                      <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                        <div className="text-slate-400 text-[11px]">Data Science</div>
                        <div className="text-purple-400 font-bold text-sm mt-1">ML / Analytics</div>
                        <div className="text-[10px] text-slate-500 mt-1">Python, Pandas, ML Models</div>
                      </div>

                      <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                        <div className="text-slate-400 text-[11px]">Tools & Version Control</div>
                        <div className="text-emerald-400 font-bold text-sm mt-1">Git, Postman</div>
                        <div className="text-[10px] text-slate-500 mt-1">API Testing & Collaboration</div>
                      </div>
                    </div>

                    <div className="p-3 bg-cyan-950/30 border border-cyan-500/20 rounded-lg text-[11px] text-slate-300">
                      <span className="text-cyan-400 font-semibold">Focus: </span>
                      Building robust full-stack software backed by intelligent data insights.
                    </div>
                  </div>
                )}

                {/* Footer bar */}
                <div className="pt-3 mt-3 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Status: Ready for Opportunity</span>
                  <span className="font-mono text-cyan-400">Sumit Karad Portfolio v2026</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
