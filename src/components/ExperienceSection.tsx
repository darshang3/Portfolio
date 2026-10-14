import React, { useState } from 'react';
import { ExperienceItem } from '../types/portfolio';
import { ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'exp-1': true,
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-[#E8E6E1] dark:border-[#27272A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with whileInView reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-14"
        >
          <div className="text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
            Career History
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111110] dark:text-white font-display text-balance">
            5 Years of Craft & Leadership
          </h2>
        </motion.div>

        {/* Editorial Timeline / List with staggered whileInView reveals */}
        <div className="space-y-5 sm:space-y-6">
          {experience.map((item, idx) => {
            const isExpanded = !!expandedIds[item.id];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-2xl border border-[#E8E6E1] dark:border-[#27272A] bg-white dark:bg-[#141416] p-5 sm:p-8 transition-colors duration-200 hover:border-[#D8D6CE] dark:hover:border-[#3F3F46] hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              >
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-x-2 text-xs text-[#73726C] dark:text-[#A1A1AA]">
                      <span className="font-mono text-indigo-600 dark:text-indigo-400 font-semibold">0{idx + 1}.</span>
                      <span className="font-semibold text-[#111110] dark:text-white">{item.company}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#73726C] dark:text-[#A1A1AA]" />
                        {item.location} ({item.workArrangement})
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111110] dark:text-white font-display">
                      {item.role}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-4">
                    <div className="text-xs sm:text-sm font-mono text-[#73726C] dark:text-[#A1A1AA] tabular-nums whitespace-nowrap">
                      {item.period}
                    </div>

                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="p-2 text-[#5E5D57] dark:text-[#A1A1AA] hover:text-[#111110] dark:hover:text-white hover:bg-[#F2F1EC] dark:hover:bg-[#18181B] rounded-lg transition-colors cursor-pointer"
                      aria-label={isExpanded ? 'Collapse role details' : 'Expand role details'}
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Role Summary */}
                <p className="text-sm sm:text-base text-[#5E5D57] dark:text-[#A1A1AA] leading-relaxed mt-4">
                  {item.summary}
                </p>

                {/* Expandable Key Contributions */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-[#F0EFEA] dark:border-[#27272A] space-y-4 animate-in fade-in duration-200">
                    <div className="text-xs uppercase tracking-wider text-[#73726C] dark:text-[#71717A] font-semibold">
                      Key Contributions & Impact
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {item.keyContributions.map((contrib, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#474641] dark:text-[#D4D4D8] leading-relaxed">
                          <span className="text-indigo-600 dark:text-indigo-400 font-bold mt-0.5">•</span>
                          <span>{contrib}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Core Skills as clean unboxed text */}
                    {item.coreSkills && item.coreSkills.length > 0 && (
                      <div className="pt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#73726C] dark:text-[#A1A1AA]">
                        <span className="font-semibold text-[#111110] dark:text-white">Competencies:</span>
                        {item.coreSkills.map((skill, sIdx) => (
                          <React.Fragment key={skill}>
                            <span className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{skill}</span>
                            {sIdx < item.coreSkills.length - 1 && (
                              <span aria-hidden="true" className="text-[#C8C7C0] dark:text-[#3F3F46]">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
