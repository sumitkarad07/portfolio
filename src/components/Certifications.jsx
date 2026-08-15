import React from 'react';
import { Award, ExternalLink, Clock, Calendar, CheckCircle2, BookOpen, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative bg-slate-950/60 border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Continuous Learning & Verification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-400 text-base">
            Specialized bootcamps and verified learning paths in Data Science, Machine Learning, and NLP.
          </p>
        </div>

        {/* Certifications Grid Showcase */}
        <div className="max-w-4xl mx-auto space-y-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6 relative overflow-hidden group"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-500" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                
                {/* Left Side: Badge, Title & Credential Details */}
                <div className="space-y-4 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>VERIFIED CERTIFICATE</span>
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 font-mono text-xs">
                      {cert.platform}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-slate-300 text-sm font-medium mt-1">
                      Instructor: <span className="text-cyan-400">{cert.instructor}</span> ({cert.organization})
                    </p>
                  </div>

                  {/* Metadata Chips */}
                  <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-slate-400">
                    <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{cert.duration}</span>
                    </div>

                    <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Completed: {cert.completionDate}</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: External Credential CTA Button */}
                <div className="shrink-0 pt-2 md:pt-0">
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] transition-all"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

              </div>

              {/* Skills Covered List */}
              <div className="pt-6 border-t border-slate-800/80 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Curriculum & Competencies Covered:</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {cert.skillsCovered.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Credential ID Footer */}
              <div className="pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Credential ID: {cert.credentialId}</span>
                <span className="text-emerald-400">Status: Authenticated</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
