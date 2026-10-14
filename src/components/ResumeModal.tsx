import React, { useEffect } from 'react';
import { PersonalProfile } from '../types/portfolio';
import { defaultProjects, experienceData, educationData } from '../data/portfolioData';
import { X, Printer, Download, Mail, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: PersonalProfile;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const resumeText = `
${profile.name} — ${profile.roleTitle}
${profile.email} | ${profile.location} | ${profile.linkedin}

EXECUTIVE SUMMARY
${profile.leadCopy}

EXPERIENCE (${profile.yearsExperience} Years Total)
${experienceData.map((e) => `
- ${e.role} at ${e.company} (${e.period}) [${e.location} - ${e.workArrangement}]
  ${e.summary}
  Contributions:
  ${e.keyContributions.map((c) => `  * ${c}`).join('\n')}
`).join('\n')}

SELECTED SHIPPED SYSTEMS
${defaultProjects.map((p) => `- ${p.title} (${p.year}): ${p.shortDescription}`).join('\n')}

EDUCATION & CREDENTIALS
${educationData.map((edu) => `- ${edu.degree} in ${edu.field}, ${edu.institution} (${edu.period})`).join('\n')}
    `.trim();

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${profile.name.replace(/\s+/g, '_')}_Resume.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-[#141416] text-[#111110] dark:text-[#E4E4E7] rounded-2xl border border-[#E8E6E1] dark:border-[#27272A] max-w-3xl w-full max-h-[92vh] overflow-y-auto p-5 sm:p-10 shadow-2xl relative my-auto print:shadow-none print:border-none print:p-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Top Actions Bar */}
        <div className="flex items-center justify-between border-b border-[#E8E6E1] dark:border-[#27272A] pb-4 sm:pb-5 mb-6 sm:mb-8 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-mono font-semibold text-indigo-600 dark:text-indigo-400">
              Curriculum Vitae Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#2E2D2A] dark:text-[#D4D4D8] bg-[#F2F1EC] dark:bg-[#1E1E22] hover:bg-[#EAE8E1] dark:hover:bg-[#2A2A30] rounded-lg transition-colors cursor-pointer border border-[#E3E1D9] dark:border-[#2E2E36]"
              title="Download text resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-[#111110] dark:bg-white dark:text-[#111110] hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
              title="Print resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-[#5E5D57] dark:text-[#A1A1AA] hover:text-[#111110] dark:hover:text-white rounded-lg hover:bg-[#F2F1EC] dark:hover:bg-[#1E1E22] transition-colors ml-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Content */}
        <div className="space-y-6 sm:space-y-8">
          {/* Header */}
          <div className="border-b border-[#E8E6E1] dark:border-[#27272A] pb-5 sm:pb-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight mb-1 text-[#111110] dark:text-white">
              {profile.name}
            </h2>
            <div className="text-sm sm:text-base text-indigo-600 dark:text-indigo-400 font-medium mb-3">
              {profile.roleTitle} · {profile.yearsExperience} Years Experience
            </div>
            <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1 text-xs text-[#73726C] dark:text-[#A1A1AA]">
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3" />
                {profile.email}
              </span>
              <span>·</span>
              <span>{profile.location}</span>
              <span>·</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:underline flex items-center gap-0.5"
              >
                LinkedIn <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[#73726C] dark:text-[#71717A] mb-2 font-mono">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-[#474641] dark:text-[#A1A1AA] leading-relaxed">
              {profile.leadCopy}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[#73726C] dark:text-[#71717A] mb-4 font-mono">
              Professional Experience
            </h3>
            <div className="space-y-5 sm:space-y-6">
              {experienceData.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                    <div className="font-bold text-[#111110] dark:text-white font-display">
                      {exp.role} <span className="font-normal text-[#73726C] dark:text-[#A1A1AA]">at {exp.company}</span>
                    </div>
                    <div className="font-mono text-xs text-[#73726C] dark:text-[#71717A] tabular-nums">
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-xs text-[#5E5D57] dark:text-[#A1A1AA] leading-relaxed mb-2">
                    {exp.summary}
                  </p>
                  <ul className="space-y-1">
                    {exp.keyContributions.slice(0, 3).map((c, i) => (
                      <li key={i} className="text-xs text-[#474641] dark:text-[#D4D4D8] flex items-start gap-2">
                        <span className="text-indigo-500">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[#73726C] dark:text-[#71717A] mb-3 font-mono">
              Education & Credentials
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {educationData.map((edu) => (
                <div key={edu.id} className="text-xs">
                  <div className="font-bold text-[#111110] dark:text-white font-display text-sm">
                    {edu.degree} in {edu.field}
                  </div>
                  <div className="text-[#73726C] dark:text-[#A1A1AA]">
                    {edu.institution} · {edu.period}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies */}
          <div className="pt-2 border-t border-[#E8E6E1] dark:border-[#27272A]">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[#73726C] dark:text-[#71717A] mb-2 font-mono">
              Core Competencies & Tools
            </h3>
            <div className="text-xs text-[#474641] dark:text-[#A1A1AA] leading-relaxed">
              Design Systems Architecture · Multi-Platform Design (Web, iOS, Android) · Accessibility (WCAG 2.2 AA) · Quantitative User Research · Interaction & Motion Design · Figma Tokens & Variables · React & Next.js UI Prototyping.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
