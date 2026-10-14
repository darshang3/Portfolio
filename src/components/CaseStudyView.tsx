import React, { useEffect, useState } from 'react';
import { Project } from '../types/portfolio';
import { ArrowLeft, ArrowRight, CheckCircle2, Quote, Maximize2, X } from 'lucide-react';

interface CaseStudyViewProps {
  project: Project;
  allProjects: Project[];
  onBack: () => void;
  onSelectProject: (project: Project) => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({
  project,
  allProjects,
  onBack,
  onSelectProject,
}) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
        } else {
          onBack();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, isLightboxOpen, onBack]);

  const nextProject = allProjects.find((p) => p.slug === project.nextProjectSlug) || allProjects[0];

  return (
    <article className="min-h-screen pt-24 sm:pt-28 pb-20 sm:pb-24 bg-[#FBFBFA] dark:bg-[#0A0A0C] transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb / Back Action */}
        <div className="mb-8 sm:mb-10 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 text-xs font-semibold text-[#5E5D57] dark:text-[#A1A1AA] hover:text-[#111110] dark:hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-[#F2F1EC] dark:hover:bg-[#18181B] -ml-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Selected Work</span>
          </button>

          <div className="text-xs text-[#73726C] dark:text-[#71717A] font-mono">
            Case Study · {project.year}
          </div>
        </div>

        {/* Header Block */}
        <header className="mb-10 sm:mb-12">
          {/* Unboxed Metadata */}
          <div className="flex flex-wrap items-center gap-x-2 text-xs md:text-sm text-[#73726C] dark:text-[#A1A1AA] mb-4">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">{project.productName}</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.duration}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111110] dark:text-white mb-5 sm:mb-6 font-display leading-[1.1] text-balance">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-[#5E5D57] dark:text-[#A1A1AA] leading-relaxed mb-8">
            {project.shortDescription}
          </p>

          {/* Project Details Grid (Responsive 2 to 4 cols) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#141416] border border-[#E8E6E1] dark:border-[#27272A]">
            <div>
              <div className="text-[11px] uppercase tracking-wider text-[#73726C] dark:text-[#71717A] font-medium">My Role</div>
              <div className="text-xs sm:text-sm font-semibold text-[#111110] dark:text-white mt-1">{project.role}</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-[#73726C] dark:text-[#71717A] font-medium">Domain</div>
              <div className="text-xs sm:text-sm font-semibold text-[#111110] dark:text-white mt-1">{project.category}</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-[#73726C] dark:text-[#71717A] font-medium">Timeline</div>
              <div className="text-xs sm:text-sm font-semibold text-[#111110] dark:text-white mt-1">{project.duration}</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-[#73726C] dark:text-[#71717A] font-medium">Platform</div>
              <div className="text-xs sm:text-sm font-semibold text-[#111110] dark:text-white mt-1">Web, iOS & Android</div>
            </div>
          </div>
        </header>

        {/* Hero Visual Mockup */}
        <div className="relative rounded-2xl overflow-hidden border border-[#E8E6E1] dark:border-[#27272A] bg-white dark:bg-[#141416] shadow-sm mb-12 sm:mb-16 group">
          <img
            src={project.coverImage}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-[560px] object-cover object-top"
          />
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="absolute bottom-4 right-4 bg-black/75 hover:bg-black text-white p-2.5 rounded-lg text-xs flex items-center gap-1.5 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-lg"
            title="Expand image view"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Expand Image</span>
          </button>
        </div>

        {/* Key Metrics Strip */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-14 sm:mb-16">
            <h2 className="text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-4">
              Verified Business Impact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#141416] border border-[#E8E6E1] dark:border-[#27272A] shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                >
                  <div className="text-2xl sm:text-3xl font-bold font-display text-[#111110] dark:text-white tabular-nums tracking-tight mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-[#2E2D2A] dark:text-[#E4E4E7] mb-1">
                    {metric.label}
                  </div>
                  {metric.context && (
                    <div className="text-[11px] text-[#73726C] dark:text-[#A1A1AA] leading-snug">
                      {metric.context}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* In-depth Editorial Content */}
        <div className="space-y-12 sm:space-y-14 text-[#2E2D2A] dark:text-[#D4D4D8]">
          {/* Section: Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#111110] dark:text-white font-display">
              01. Executive Overview
            </h2>
            <p className="text-base sm:text-lg text-[#5E5D57] dark:text-[#A1A1AA] leading-relaxed">
              {project.overview}
            </p>
          </section>

          {/* Section: Problem & Challenge */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-6 border-t border-[#E8E6E1] dark:border-[#27272A]">
            <div className="space-y-3">
              <h3 className="text-lg font-bold tracking-tight text-[#111110] dark:text-white font-display">
                The Problem
              </h3>
              <p className="text-sm sm:text-base text-[#5E5D57] dark:text-[#A1A1AA] leading-relaxed">
                {project.theProblem}
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold tracking-tight text-[#111110] dark:text-white font-display">
                The Core Challenge
              </h3>
              <p className="text-sm sm:text-base text-[#5E5D57] dark:text-[#A1A1AA] leading-relaxed">
                {project.theChallenge}
              </p>
            </div>
          </section>

          {/* Section: Research & Discovery */}
          <section className="space-y-4 pt-6 border-t border-[#E8E6E1] dark:border-[#27272A]">
            <h2 className="text-2xl font-bold tracking-tight text-[#111110] dark:text-white font-display">
              02. Research & Discovery Insights
            </h2>
            <p className="text-base sm:text-lg text-[#5E5D57] dark:text-[#A1A1AA] leading-relaxed">
              {project.researchAndDiscovery}
            </p>
          </section>

          {/* Section: Architectural & Design Decisions */}
          <section className="space-y-6 pt-6 border-t border-[#E8E6E1] dark:border-[#27272A]">
            <h2 className="text-2xl font-bold tracking-tight text-[#111110] dark:text-white font-display">
              03. Architectural & Design Decisions
            </h2>
            <div className="space-y-3.5 sm:space-y-4">
              {project.designDecisions.map((decision, dIdx) => (
                <div key={dIdx} className="flex items-start gap-3.5 p-4 sm:p-5 rounded-xl bg-white dark:bg-[#141416] border border-[#E8E6E1] dark:border-[#27272A]">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-[#474641] dark:text-[#D4D4D8] leading-relaxed">
                    {decision}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Key Outcomes */}
          <section className="space-y-4 pt-6 border-t border-[#E8E6E1] dark:border-[#27272A]">
            <h2 className="text-2xl font-bold tracking-tight text-[#111110] dark:text-white font-display">
              04. Key Outcomes & Delivery
            </h2>
            <ul className="space-y-3">
              {project.keyOutcomes.map((outcome, oIdx) => (
                <li key={oIdx} className="flex items-start gap-3 text-sm sm:text-base text-[#5E5D57] dark:text-[#A1A1AA]">
                  <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400 font-bold mt-1">0{oIdx + 1}.</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Testimonial Quote */}
          {project.testimonial && (
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F4F3EE] dark:bg-[#18181B] border border-[#E8E6E1] dark:border-[#27272A] relative">
              <Quote className="w-8 h-8 text-indigo-400/50 mb-3" />
              <blockquote className="text-base sm:text-lg italic text-[#2E2D2A] dark:text-[#E4E4E7] leading-relaxed mb-5">
                “{project.testimonial.quote}”
              </blockquote>
              <div className="text-xs text-[#73726C] dark:text-[#A1A1AA]">
                <span className="font-semibold text-[#111110] dark:text-white">{project.testimonial.author}</span>
                <span className="mx-2">·</span>
                <span>{project.testimonial.role}</span>
                <span className="mx-2">·</span>
                <span>{project.testimonial.company}</span>
              </div>
            </div>
          )}
        </div>

        {/* Next Project Footer Bar */}
        {nextProject && nextProject.id !== project.id && (
          <div className="mt-16 sm:mt-20 pt-10 sm:pt-12 border-t border-[#E8E6E1] dark:border-[#27272A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <div className="text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-1">
                Next Case Study
              </div>
              <h3 className="text-xl font-bold tracking-tight text-[#111110] dark:text-white font-display">
                {nextProject.title}
              </h3>
            </div>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#111110] dark:bg-white dark:text-[#111110] hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-xl transition-colors cursor-pointer min-h-[44px]"
            >
              <span>Explore Next Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close image lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={project.coverImage}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </article>
  );
};
