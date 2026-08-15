import React from 'react';
import { Briefcase, Calendar, User, CheckCircle2, Code2, ShieldCheck, Building2, ExternalLink } from 'lucide-react';
import { personalData } from '../data/personal';

export default function Experience() {
  const { internship } = personalData;

  return (
    <section id="experience" className="py-24 relative bg-slate-950/60 border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 text-base">
            Verified internship experience and hands-on application of computer science & full-stack development principles.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Line */}
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/80 via-sky-600/40 to-slate-800" />

          {/* Internship Card */}
          <div className="relative pl-0 sm:pl-20 space-y-6">
            
            {/* Timeline Dot Icon */}
            <div className="hidden sm:flex absolute left-4 -translate-x-1/2 top-6 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-500 items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/20">
              <Briefcase className="w-4 h-4" />
            </div>

            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/90 space-y-6">
              
              {/* Card Header & Metadata */}
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-800 pb-5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>VERIFIED INTERNSHIP</span>
                    </span>
                    {internship.certificateId && (
                      <span className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs">
                        ID: {internship.certificateId}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {internship.role}
                  </h3>

                  <div className="flex items-center gap-2 text-slate-300 font-medium text-sm">
                    <Building2 className="w-4 h-4 text-cyan-400" />
                    <a 
                      href={internship.organizationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                    >
                      <span>{internship.organization}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-start sm:items-end space-y-1 font-mono text-xs">
                  <div className="flex items-center gap-1.5 text-cyan-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{internship.period}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400">
                    <User className="w-3 h-3" />
                    <span>{internship.candidateName}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {internship.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                    Key Responsibilities & Hands-On Exposure:
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {internship.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technology Badges */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Technologies & Tools Applied:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {internship.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-900 border border-slate-700/80 text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
