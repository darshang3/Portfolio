import React from 'react';
import { designPrinciples } from '../data/portfolioData';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 md:py-28 border-t border-[#E8E6E1] dark:border-[#27272A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <div className="text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
            Design Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111110] dark:text-white font-display text-balance">
            Principles that Guide Every Decision
          </h2>
          <p className="text-base text-[#5E5D57] dark:text-[#A1A1AA] mt-4 leading-relaxed">
            Good product design isn’t about chasing transient trends. It is about understanding human cognitive load, respecting technical architecture, and creating durable clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {designPrinciples.map((principle) => (
            <div
              key={principle.number}
              className="rounded-2xl border border-[#E8E6E1] dark:border-[#27272A] bg-white dark:bg-[#141416] p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:border-[#D8D6CE] dark:hover:border-[#3F3F46]"
            >
              <div>
                <div className="text-2xl font-bold font-display text-indigo-600/30 dark:text-indigo-400/40 mb-6 tabular-nums">
                  {principle.number}.
                </div>

                <h3 className="text-xl font-bold tracking-tight text-[#111110] dark:text-white font-display mb-3">
                  {principle.title}
                </h3>

                <p className="text-sm text-[#5E5D57] dark:text-[#A1A1AA] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
