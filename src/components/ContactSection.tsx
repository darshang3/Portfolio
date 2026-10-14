import React, { useState } from 'react';
import { PersonalProfile } from '../types/portfolio';
import { Copy, Check, Send, ArrowUpRight, FileText } from 'lucide-react';

interface ContactSectionProps {
  profile: PersonalProfile;
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  profile,
  onOpenResume,
}) => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'Product Design Leadership',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-32 border-t border-[#E8E6E1] dark:border-[#27272A] bg-[#F7F6F1] dark:bg-[#0C0C0F] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Editorial Callout & Direct Links */}
          <div className="lg:col-span-6 space-y-7 sm:space-y-8">
            <div>
              <div className="text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
                Initiate Conversation
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111110] dark:text-white font-display text-balance leading-[1.1]">
                Have a good problem to solve? Let’s talk.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#5E5D57] dark:text-[#A1A1AA] leading-relaxed max-w-xl">
              I’m always open to discussing senior design leadership opportunities, design systems architecture, strategic advisory, or high-impact digital ventures.
            </p>

            {/* Direct Email with 1-click Copy Interaction */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#141416] border border-[#E8E6E1] dark:border-[#27272A] shadow-sm space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#73726C] dark:text-[#71717A]">
                Direct Inquiries
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-base sm:text-lg font-mono font-medium text-[#111110] dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline underline-offset-4 break-all"
                >
                  {profile.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#111110] dark:text-white bg-[#F2F1EC] dark:bg-[#1F1F24] hover:bg-[#EAE8E1] dark:hover:bg-[#2A2A30] rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 border border-[#E3E1D9] dark:border-[#2E2E36] min-h-[40px]"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#5E5D57] dark:text-[#A1A1AA]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs text-[#73726C] dark:text-[#71717A]">
                Typical response turnaround within 24–48 hours.
              </div>
            </div>

            {/* Social & Resume Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-medium">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-[#111110] dark:text-white bg-white dark:bg-[#141416] border border-[#E8E6E1] dark:border-[#27272A] hover:border-indigo-400 dark:hover:border-indigo-500 rounded-xl transition-colors cursor-pointer min-h-[40px]"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-500" />
                <span>View Formatted Resume</span>
              </button>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 text-[#5E5D57] dark:text-[#A1A1AA] hover:text-[#111110] dark:hover:text-white transition-colors py-2 px-1 min-h-[40px]"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 text-[#5E5D57] dark:text-[#A1A1AA] hover:text-[#111110] dark:hover:text-white transition-colors py-2 px-1 min-h-[40px]"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}

              {profile.dribbble && (
                <a
                  href={profile.dribbble}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 text-[#5E5D57] dark:text-[#A1A1AA] hover:text-[#111110] dark:hover:text-white transition-colors py-2 px-1 min-h-[40px]"
                >
                  <span>Dribbble</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-6 w-full">
            <div className="rounded-2xl border border-[#E8E6E1] dark:border-[#27272A] bg-white dark:bg-[#141416] p-5 sm:p-8 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 rounded-full mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-[#111110] dark:text-white">
                    Message Sent Successfully
                  </h3>
                  <p className="text-sm text-[#5E5D57] dark:text-[#A1A1AA] max-w-sm mx-auto">
                    Thank you for reaching out. I’ve received your inquiry and will follow up shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({ name: '', email: '', projectType: 'Product Design Leadership', message: '' });
                    }}
                    className="inline-flex text-xs font-semibold text-indigo-600 dark:text-indigo-400 underline underline-offset-4 pt-2 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <h3 className="text-lg font-bold font-display text-[#111110] dark:text-white mb-2">
                    Send a Direct Note
                  </h3>

                  <div>
                    <label className="block text-xs font-semibold text-[#2E2D2A] dark:text-[#D4D4D8] mb-1.5" htmlFor="contact-name">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:py-3 text-sm rounded-xl border border-[#E3E1D9] dark:border-[#27272A] bg-[#FAF9F6] dark:bg-[#1A1A1E] focus:bg-white dark:focus:bg-[#141416] focus:outline-none focus:ring-1 focus:ring-indigo-500 text-[#111110] dark:text-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2E2D2A] dark:text-[#D4D4D8] mb-1.5" htmlFor="contact-email">
                      Work Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:py-3 text-sm rounded-xl border border-[#E3E1D9] dark:border-[#27272A] bg-[#FAF9F6] dark:bg-[#1A1A1E] focus:bg-white dark:focus:bg-[#141416] focus:outline-none focus:ring-1 focus:ring-indigo-500 text-[#111110] dark:text-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2E2D2A] dark:text-[#D4D4D8] mb-1.5" htmlFor="contact-topic">
                      Discussion Topic
                    </label>
                    <select
                      id="contact-topic"
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:py-3 text-sm rounded-xl border border-[#E3E1D9] dark:border-[#27272A] bg-[#FAF9F6] dark:bg-[#1A1A1E] focus:bg-white dark:focus:bg-[#141416] focus:outline-none focus:ring-1 focus:ring-indigo-500 text-[#111110] dark:text-white transition-colors"
                    >
                      <option value="Senior / Lead Role">Full-Time Product Design Role</option>
                      <option value="Design Systems Consultation">Design Systems Architecture</option>
                      <option value="Advisory / Fractional">Strategic Product Advisory</option>
                      <option value="General Conversation">Casual Networking</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2E2D2A] dark:text-[#D4D4D8] mb-1.5" htmlFor="contact-msg">
                      Project or Role Details
                    </label>
                    <textarea
                      id="contact-msg"
                      rows={4}
                      required
                      placeholder="Share a brief overview of your team, product challenge, or timeline..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:py-3 text-sm rounded-xl border border-[#E3E1D9] dark:border-[#27272A] bg-[#FAF9F6] dark:bg-[#1A1A1E] focus:bg-white dark:focus:bg-[#141416] focus:outline-none focus:ring-1 focus:ring-indigo-500 text-[#111110] dark:text-white transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold text-white bg-[#111110] dark:bg-white dark:text-[#111110] hover:bg-neutral-800 dark:hover:bg-neutral-200 disabled:opacity-50 rounded-xl transition-all cursor-pointer shadow-sm active:scale-[0.99] min-h-[44px]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
