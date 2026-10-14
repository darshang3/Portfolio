import React from 'react';
import { PersonalProfile } from '../types/portfolio';
import { ArrowDown, ArrowUpRight, Sparkles, Layers, Cpu, Compass } from 'lucide-react';
import { IMAGES } from '../data/portfolioData';

interface HeroSectionProps {
  profile: PersonalProfile;
  onExploreWork: () => void;
  onContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  onExploreWork,
  onContact,
}) => {
  return (
    <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 md:pb-24 overflow-hidden">
      {/* Dynamic Luminous Ambient Aura Backgrounds for Modern Colorful Feel */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] pointer-events-none -z-10 overflow-hidden">
        {/* Violet-Indigo Luminous Orb */}
        <div className="absolute -top-16 -left-10 w-[22rem] sm:w-[32rem] h-[22rem] sm:h-[32rem] bg-gradient-to-tr from-violet-500/20 via-indigo-500/20 to-sky-400/15 dark:from-violet-600/30 dark:via-indigo-500/25 dark:to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />
        
        {/* Warm Sunrise / Coral-Amber Glow */}
        <div className="absolute top-24 -right-10 w-[20rem] sm:w-[28rem] h-[20rem] sm:h-[28rem] bg-gradient-to-br from-amber-400/15 via-rose-400/15 to-violet-400/10 dark:from-amber-500/20 dark:via-rose-500/20 dark:to-violet-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '9s' }} />
        
        {/* Subtle Emerald / Cyan accent shimmer */}
        <div className="absolute bottom-10 left-1/3 w-[18rem] sm:w-[24rem] h-[18rem] sm:h-[24rem] bg-gradient-to-r from-emerald-400/10 via-teal-400/15 to-indigo-400/15 dark:from-emerald-500/15 dark:via-teal-500/20 dark:to-indigo-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top availability & current-role indicator with modern color badge */}
        <div className="mb-6 sm:mb-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50/80 dark:bg-indigo-950/50 border border-indigo-200/80 dark:border-indigo-800/60 backdrop-blur-xs text-indigo-900 dark:text-indigo-200 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-emerald-300 dark:ring-emerald-700/60" />
            <span>{profile.currentRole}</span>
          </div>

          <span aria-hidden="true" className="text-[#C8C7C0] dark:text-[#3F3F46] hidden sm:inline">·</span>
          <span className="text-[#61605A] dark:text-[#A1A1AA]">{profile.availability}</span>
          <span aria-hidden="true" className="text-[#C8C7C0] dark:text-[#3F3F46] hidden md:inline">·</span>
          <span className="hidden md:inline text-[#73726C] dark:text-[#71717A]">{profile.location}</span>
        </div>

        {/* 2-Column Balanced Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typographic Hierarchy & Colorful Accents */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Primary Heading / Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#111110] dark:text-white mb-5 sm:mb-6 font-display leading-[1.08] text-balance">
              {profile.name}
            </h1>

            {/* Headline with modern gradient highlight */}
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#2E2D2A] dark:text-[#E4E4E7] leading-snug tracking-tight mb-5 sm:mb-6 text-balance font-display">
              Designing digital products that{' '}
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-500 dark:from-violet-400 dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent font-semibold">
                feel intuitive and make a difference.
              </span>
            </p>

            {/* Short Introduction referencing 5 years of experience */}
            <p className="text-base sm:text-lg text-[#5E5D57] dark:text-[#A1A1AA] leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              With over <span className="text-[#111110] dark:text-white font-semibold">{profile.yearsExperience} years</span> of professional product design experience, I bridge systems thinking, user behavioral research, and high-fidelity interaction design to build enterprise-scale products people love using every day.
            </p>

            {/* Modern Competency Chips (Responsive) */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md bg-white/80 dark:bg-[#18181B]/80 border border-[#E8E6E1] dark:border-[#27272A] text-[#474641] dark:text-[#D4D4D8] shadow-xs">
                <Layers className="w-3.5 h-3.5 text-indigo-500" />
                Design Systems
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md bg-white/80 dark:bg-[#18181B]/80 border border-[#E8E6E1] dark:border-[#27272A] text-[#474641] dark:text-[#D4D4D8] shadow-xs">
                <Compass className="w-3.5 h-3.5 text-amber-500" />
                FinTech & Core Workflows
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md bg-white/80 dark:bg-[#18181B]/80 border border-[#E8E6E1] dark:border-[#27272A] text-[#474641] dark:text-[#D4D4D8] shadow-xs">
                <Cpu className="w-3.5 h-3.5 text-cyan-500" />
                Human-AI Interaction
              </span>
            </div>

            {/* Actions: Primary CTA and Secondary CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <button
                onClick={onExploreWork}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#111110] via-neutral-900 to-indigo-950 dark:from-indigo-600 dark:via-indigo-500 dark:to-violet-600 hover:from-black hover:to-indigo-900 dark:hover:from-indigo-500 dark:hover:to-violet-500 rounded-xl transition-all duration-300 shadow-[0_4px_16px_rgba(99,102,241,0.18)] dark:shadow-[0_4px_24px_rgba(99,102,241,0.35)] active:scale-[0.98] cursor-pointer min-h-[44px]"
              >
                <span>Explore my work</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={onContact}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#2A2926] dark:text-[#E4E4E7] hover:text-[#111110] dark:hover:text-white bg-white/80 dark:bg-[#18181B]/80 hover:bg-white dark:hover:bg-[#27272A] border border-[#E3E1D9] dark:border-[#27272A] rounded-xl transition-all duration-200 cursor-pointer backdrop-blur-sm min-h-[44px]"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-4 h-4 text-[#73726C] dark:text-[#A1A1AA]" />
              </button>
            </div>
          </div>

          {/* Right Column: Modernized Visual Frame with Colored Gradient Border & Floating Badge */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Ambient Backlight for Image Container */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500/30 via-violet-500/20 to-amber-500/25 dark:from-indigo-500/40 dark:via-violet-600/30 dark:to-cyan-500/30 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-700" />

            <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-indigo-500/40 via-violet-400/20 to-amber-400/20 dark:from-indigo-400/50 dark:via-violet-500/30 dark:to-cyan-400/20 shadow-xl overflow-hidden group">
              <div className="relative rounded-[15px] overflow-hidden bg-white dark:bg-[#141416] aspect-[4/3]">
                <img
                  src={IMAGES.heroWorkspace}
                  alt="Product designer workspace with sketchbook and Figma interface"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Floating Interactive Badge */}
                <div className="absolute top-3.5 left-3.5 px-3 py-1.5 rounded-lg bg-black/60 dark:bg-black/75 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Product Craft · 2025</span>
                </div>

                {/* Bottom Photo Caption */}
                <div className="absolute bottom-3 right-3 sm:right-4 text-[11px] font-mono text-white/90 drop-shadow-sm">
                  Design Systems & UX Strategy
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI / Proof Strip below Hero Split (Responsive 2 to 4 cols) */}
        <div className="mt-14 sm:mt-16 pt-8 sm:pt-10 border-t border-[#E8E6E1] dark:border-[#27272A] grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-500/5 to-transparent dark:from-indigo-500/10 dark:to-transparent border border-indigo-200/50 dark:border-indigo-900/40">
            <div className="text-2xl sm:text-3xl font-bold font-display text-indigo-950 dark:text-indigo-200 tabular-nums tracking-tight">
              5+ Years
            </div>
            <div className="text-xs sm:text-sm text-[#73726C] dark:text-[#A1A1AA] mt-1">
              Professional Craft & Strategy
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-violet-500/5 to-transparent dark:from-violet-500/10 dark:to-transparent border border-violet-200/50 dark:border-violet-900/40">
            <div className="text-2xl sm:text-3xl font-bold font-display text-violet-950 dark:text-violet-200 tabular-nums tracking-tight">
              4 Systems
            </div>
            <div className="text-xs sm:text-sm text-[#73726C] dark:text-[#A1A1AA] mt-1">
              Shipped Multi-Surface Libraries
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/5 to-transparent dark:from-cyan-500/10 dark:to-transparent border border-cyan-200/50 dark:border-cyan-900/40">
            <div className="text-2xl sm:text-3xl font-bold font-display text-cyan-950 dark:text-cyan-200 tabular-nums tracking-tight">
              60+ Eng
            </div>
            <div className="text-xs sm:text-sm text-[#73726C] dark:text-[#A1A1AA] mt-1">
              Active Design System Consumers
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/5 to-transparent dark:from-amber-500/10 dark:to-transparent border border-amber-200/50 dark:border-amber-900/40">
            <div className="text-2xl sm:text-3xl font-bold font-display text-amber-950 dark:text-amber-200 tabular-nums tracking-tight">
              WCAG AA
            </div>
            <div className="text-xs sm:text-sm text-[#73726C] dark:text-[#A1A1AA] mt-1">
              Accessible By Design Standards
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
