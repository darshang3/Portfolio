import React from 'react';
import { EducationItem } from '../types/portfolio';
import { GraduationCap, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface EducationSectionProps {
  education: EducationItem[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-[#E8E6E1] dark:border-[#27272A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with whileInView reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
            Academic & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111110] dark:text-white font-display text-balance">
            Education & Certifications
          </h2>
        </motion.div>

        {/* Education Cards with staggered whileInView slide-up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {education.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.55,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-2xl border border-[#E8E6E1] dark:border-[#27272A] bg-white dark:bg-[#141416] p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200 hover:border-[#D8D6CE] dark:hover:border-[#3F3F46] hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#73726C] dark:text-[#A1A1AA] mb-4">
                  <div className="flex items-center gap-2">
                    {idx === 0 ? (
                      <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    ) : (
                      <Award className="w-4 h-4 text-amber-500" />
                    )}
                    <span className="font-semibold text-[#111110] dark:text-white">{item.degree}</span>
                  </div>
                  <span className="font-mono tabular-nums">{item.period}</span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-[#111110] dark:text-white font-display mb-1">
                  {item.field}
                </h3>

                <div className="text-sm text-[#73726C] dark:text-[#A1A1AA] mb-6">
                  {item.institution} {item.location ? `· ${item.location}` : ''}
                </div>

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="space-y-2 pt-4 border-t border-[#F0EFEA] dark:border-[#27272A]">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-xs sm:text-sm text-[#5E5D57] dark:text-[#D4D4D8] flex items-start gap-2">
                        <span className="text-indigo-500 dark:text-indigo-400 mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
