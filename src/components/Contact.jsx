import React, { useState } from 'react';
import { Mail, Send, Sparkles, CheckCircle2, MessageSquare, AlertCircle, Copy, Check } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import { personalData } from '../data/personal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  /**
   * Form Submission Handler
   * Currently set up as a clean simulated frontend handler.
   * 
   * TO CONNECT TO A REAL EMAIL BACKEND (e.g., Formspree or EmailJS):
   * 
   * 1. FOR FORMSPREE:
   *    Replace the handleSubmit logic below with:
   *    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   *      method: 'POST',
   *      headers: { 'Content-Type': 'application/json' },
   *      body: JSON.stringify(formData)
   *    });
   * 
   * 2. FOR EMAILJS:
   *    import emailjs from '@emailjs/browser';
   *    await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY');
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');

    // Simulating smooth asynchronous form response
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build <span className="gradient-text">Something Together</span>
          </h2>
          <p className="text-slate-400 text-base">
            I'm always interested in opportunities to learn, build, and collaborate on meaningful projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">

              <div>
                <h3 className="text-xl font-bold text-white">Contact Details</h3>
                <p className="text-slate-400 text-xs mt-1">
                  Feel free to reach out directly via email or connect on social platforms.
                </p>
              </div>

              <div className="space-y-4">

                {/* Email Card with Copy Feature */}
                <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-500 uppercase">Direct Email</div>
                      <a
                        href={`mailto:${personalData.socials.email}`}
                        className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
                      >
                        {personalData.socials.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* GitHub Card */}
                <a
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-between group hover:border-cyan-500/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-slate-800 text-slate-300 group-hover:text-cyan-400">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-500 uppercase">GitHub Profile</div>
                      <div className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300">
                        github.com/sumitkarad07
                      </div>
                    </div>
                  </div>
                </a>

                {/* LinkedIn Card */}
                <a
                  href={personalData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-between group hover:border-cyan-500/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-500 uppercase">LinkedIn Profile</div>
                      <div className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300">
                        linkedin.com/in/sumit-karad
                      </div>
                    </div>
                  </div>
                </a>

              </div>

              {/* Status Note */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-400">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Currently open for Software & Data internships & full-time roles.</span>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">

              <div>
                <h3 className="text-xl font-bold text-white">Send A Message</h3>
                <p className="text-slate-400 text-xs mt-1">
                  Fill out the form below to initiate contact directly.
                </p>
              </div>

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-3 font-mono animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="font-bold block">Message Sent Successfully!</span>
                    <span>Thank you for reaching out, Sumit will respond to your email shortly.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Hi Sumit, I'd like to discuss an opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>

              <div className="pt-2 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                <span>Backend Hook: Isolated & Configurable</span>
                <span className="text-slate-400">Formspree / EmailJS Ready</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
