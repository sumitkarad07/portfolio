import React, { useState } from 'react';
import { 
  Code2, 
  FileCode2, 
  Layout, 
  Palette, 
  Layers, 
  Server, 
  Cpu, 
  Globe, 
  Database, 
  Terminal, 
  Binary, 
  Code, 
  GitFork, 
  BarChart3, 
  Brain, 
  Sparkles, 
  GitBranch, 
  Send,
  Layers3
} from 'lucide-react';
import { GithubIcon as Github } from './Icons';
import { skillCategories } from '../data/skills';

const iconMap = {
  Code2,
  FileCode2,
  Layout,
  Palette,
  Layers,
  Server,
  Cpu,
  Globe,
  Database,
  Terminal,
  Binary,
  Code,
  GitFork,
  BarChart3,
  Brain,
  Sparkles,
  GitBranch,
  Github,
  Send
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filterCategories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend-db', label: 'Backend & DB' },
    { id: 'programming', label: 'Programming & DSA' },
    { id: 'data-ai', label: 'Data Science & AI' },
    { id: 'tools', label: 'Tools' }
  ];

  const displayedCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider">
            <Layers3 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-400 text-base">
            Structured overview of technical stacks, programming languages, and engineering tools.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
                activeTab === tab.id
                  ? 'bg-cyan-500/20 border-cyan-500/60 text-cyan-300 font-semibold shadow-md shadow-cyan-500/10'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Category Grids */}
        <div className="space-y-10">
          {displayedCategories.map((cat) => (
            <div key={cat.id} className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-cyan-500 rounded-full" />
                  {cat.category}
                </h3>
                <span className="text-xs font-mono text-slate-500">{cat.description}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {cat.skills.map((skill) => {
                  const IconComp = iconMap[skill.icon] || Code;
                  return (
                    <div
                      key={skill.name}
                      className="glass-panel glass-panel-hover rounded-xl p-4 border border-slate-800 flex items-center space-x-3.5 group"
                    >
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 group-hover:bg-cyan-950/50 group-hover:border-cyan-500/40 transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>

                      <div className="overflow-hidden">
                        <div className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors truncate">
                          {skill.name}
                        </div>
                        <div className="text-[11px] font-mono text-slate-400">
                          {skill.level}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
