import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../types/portfolio';
import { ArrowUpRight, ArrowLeft, ArrowRight, LayoutGrid, Sliders } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectShowcaseProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  projects,
  onSelectProject,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const touchStartX = useRef<number | null>(null);

  const total = projects.length;
  const currentProject = projects[currentIndex] || projects[0];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Touch swipe support on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  // Keyboard navigation when user is near work section
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== 'carousel') return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode]);

  return (
    <section id="work" className="py-20 md:py-28 border-t border-[#E8E6E1] dark:border-[#27272A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Simple, Creative Restraint */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
              Selected Work · 2021 — 2025
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111110] dark:text-white font-display">
              Featured Projects
            </h2>
          </div>

          {/* Carousel Controls & View Mode Toggle */}
          <div className="flex items-center gap-4 self-start sm:self-auto">
            {/* View Mode Switcher: Carousel / Grid */}
            <div className="flex items-center p-1 bg-[#F2F1EC] dark:bg-[#18181B] rounded-lg border border-[#E3E1D9] dark:border-[#27272A] text-xs font-medium text-[#73726C] dark:text-[#A1A1AA]">
              <button
                onClick={() => setViewMode('carousel')}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'carousel'
                    ? 'bg-white dark:bg-[#27272A] text-[#111110] dark:text-white shadow-xs'
                    : 'hover:text-[#111110] dark:hover:text-white'
                }`}
                title="Interactive Carousel View"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Carousel</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-[#27272A] text-[#111110] dark:text-white shadow-xs'
                    : 'hover:text-[#111110] dark:hover:text-white'
                }`}
                title="All Projects Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Index</span>
              </button>
            </div>

            {/* Carousel Arrow Controls */}
            {viewMode === 'carousel' && (
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#73726C] dark:text-[#A1A1AA] tabular-nums mr-1">
                  0{currentIndex + 1} <span className="text-[#B5B3A8] dark:text-[#52525B]">/</span> 0{total}
                </span>

                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full border border-[#E8E6E1] dark:border-[#27272A] bg-white dark:bg-[#141416] text-[#111110] dark:text-white hover:bg-[#F2F1EC] dark:hover:bg-[#27272A] transition-colors cursor-pointer active:scale-95"
                  aria-label="Previous project"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full border border-[#E8E6E1] dark:border-[#27272A] bg-white dark:bg-[#141416] text-[#111110] dark:text-white hover:bg-[#F2F1EC] dark:hover:bg-[#27272A] transition-colors cursor-pointer active:scale-95"
                  aria-label="Next project"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ================= CAROUSEL VIEW ================= */}
        {viewMode === 'carousel' ? (
          <div
            className="relative"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Active Slide Frame */}
            <div className="rounded-2xl border border-[#E8E6E1] dark:border-[#27272A] bg-white dark:bg-[#141416] p-6 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, x: direction > 0 ? 35 : -35 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -35 : 35 }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
                >
                  {/* Left Column: Typographic Details */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      {/* Quiet Index & Category */}
                      <div className="flex items-center gap-2 text-xs text-[#73726C] dark:text-[#A1A1AA] mb-4">
                        <span className="font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                          0{currentIndex + 1}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="font-medium text-[#111110] dark:text-white">{currentProject.productName}</span>
                        <span aria-hidden="true">·</span>
                        <span>{currentProject.year}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111110] dark:text-white font-display mb-4 text-balance">
                        {currentProject.title}
                      </h3>

                      {/* Calm, refined description */}
                      <p className="text-sm sm:text-base text-[#5E5D57] dark:text-[#A1A1AA] leading-relaxed mb-6">
                        {currentProject.shortDescription}
                      </p>

                      {/* Role & Category in clean unboxed text */}
                      <div className="text-xs text-[#73726C] dark:text-[#A1A1AA] space-y-1 mb-8">
                        <div>
                          <span className="font-semibold text-[#2E2D2A] dark:text-white">Role:</span> {currentProject.role}
                        </div>
                        <div>
                          <span className="font-semibold text-[#2E2D2A] dark:text-white">Domain:</span> {currentProject.category}
                        </div>
                      </div>
                    </div>

                    {/* Simple CTA */}
                    <div>
                      <button
                        onClick={() => onSelectProject(currentProject)}
                        className="group inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#111110] dark:bg-white dark:text-[#111110] hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-xl transition-all cursor-pointer shadow-sm active:scale-[0.98]"
                      >
                        <span>Explore case study</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Visual Mockup Showcase */}
                  <div className="lg:col-span-7">
                    <div
                      onClick={() => onSelectProject(currentProject)}
                      className="group cursor-pointer relative rounded-xl overflow-hidden border border-[#ECEAE3] dark:border-[#27272A] bg-[#F4F3EE] dark:bg-[#1C1C1F] aspect-[16/10] shadow-sm"
                    >
                      <img
                        src={currentProject.coverImage}
                        alt={`${currentProject.title} interface preview`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-black/[0.02] dark:bg-black/10 group-hover:bg-transparent transition-colors" />

                      {/* Subtle hover prompt */}
                      <div className="absolute bottom-3.5 right-3.5 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-sm text-white text-xs font-medium flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>View Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Scrubber & Slide Quick-Jump Strip */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Progress Line */}
              <div className="w-full sm:w-48 h-1 bg-[#E8E6E1] dark:bg-[#27272A] rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 rounded-full"
                  style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
                />
              </div>

              {/* Direct Jump Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-xs">
                {projects.map((proj, idx) => (
                  <button
                    key={proj.id}
                    onClick={() => goToSlide(idx)}
                    className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                      currentIndex === idx
                        ? 'font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60'
                        : 'text-[#73726C] dark:text-[#A1A1AA] hover:text-[#111110] dark:hover:text-white'
                    }`}
                  >
                    <span className="font-mono text-[10px] mr-1 text-[#9CA3AF]">0{idx + 1}</span>
                    <span>{proj.productName}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* ================= ALL PROJECTS GRID VIEW ================= */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 animate-in fade-in duration-300">
            {projects.map((project, idx) => (
              <article
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer rounded-2xl border border-[#E8E6E1] dark:border-[#27272A] bg-white dark:bg-[#141416] p-6 sm:p-8 transition-all hover:border-[#D8D6CE] dark:hover:border-[#3F3F46] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
              >
                <div className="rounded-xl overflow-hidden border border-[#ECEAE3] dark:border-[#27272A] bg-[#F4F3EE] dark:bg-[#1C1C1F] aspect-[16/10] mb-5">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs text-[#73726C] dark:text-[#A1A1AA] mb-2">
                  <span className="font-mono text-indigo-600 dark:text-indigo-400 font-semibold">0{idx + 1}</span>
                  <span>·</span>
                  <span>{project.category}</span>
                  <span>·</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-[#111110] dark:text-white font-display mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5E5D57] dark:text-[#A1A1AA] leading-relaxed line-clamp-2 mb-4">
                  {project.shortDescription}
                </p>

                <div className="text-xs font-semibold text-[#111110] dark:text-white inline-flex items-center gap-1 group-hover:underline underline-offset-4">
                  <span>View case study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
