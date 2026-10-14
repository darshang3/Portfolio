import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import { ArrowUpRight } from 'lucide-react';

interface ProjectShowcaseProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  projects,
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Design Systems', 'FinTech & B2B', 'AI & Tools', 'HealthTech'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-20 md:py-28 border-t border-[#E8E6E1] dark:border-[#27272A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
              Selected Work (2021 – 2025)
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111110] dark:text-white font-display text-balance">
              Featured Case Studies
            </h2>
          </div>

          {/* Interactive Filter Tabs (Segmented control) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#F2F1EC] dark:bg-[#18181B] rounded-xl border border-[#E3E1D9] dark:border-[#27272A] overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white dark:bg-[#27272A] text-[#111110] dark:text-white shadow-[0_1px_4px_rgba(0,0,0,0.08)]'
                    : 'text-[#61605A] dark:text-[#A1A1AA] hover:text-[#111110] dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Projects Grid */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <article
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer rounded-2xl border border-[#E8E6E1] dark:border-[#27272A] bg-white dark:bg-[#141416] p-5 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] hover:border-[#D8D6CE] dark:hover:border-[#3F3F46]"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center ${
                    !isEven ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Media Container */}
                  <div
                    className={`lg:col-span-7 ${
                      !isEven ? 'lg:col-start-6' : ''
                    }`}
                  >
                    <div className="relative rounded-xl overflow-hidden border border-[#ECEAE3] dark:border-[#27272A] bg-[#F4F3EE] dark:bg-[#1C1C1F] aspect-[16/10] sm:aspect-[16/9]">
                      <img
                        src={project.coverImage}
                        alt={`${project.title} interface preview`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-black/[0.02] dark:bg-black/20 group-hover:bg-transparent transition-colors" />
                    </div>
                  </div>

                  {/* Content & Metadata */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-between h-full ${
                      !isEven ? 'lg:col-start-1 lg:row-start-1' : ''
                    }`}
                  >
                    <div>
                      {/* Clean Unboxed Metadata */}
                      <div className="flex flex-wrap items-center gap-x-2 text-xs text-[#73726C] dark:text-[#A1A1AA] mb-3">
                        <span className="font-semibold text-indigo-600 dark:text-indigo-400">{project.productName}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{project.year}</span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111110] dark:text-white mb-3 sm:mb-4 font-display group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>

                      {/* Short Description */}
                      <p className="text-sm sm:text-base text-[#5E5D57] dark:text-[#A1A1AA] leading-relaxed mb-6">
                        {project.shortDescription}
                      </p>

                      {/* Role Info */}
                      <div className="text-xs text-[#73726C] dark:text-[#A1A1AA] mb-6">
                        <span className="font-semibold text-[#2E2D2A] dark:text-[#E4E4E7]">Role:</span> {project.role}
                        {project.duration && (
                          <>
                            <span className="mx-2 text-[#C8C7C0] dark:text-[#3F3F46]">·</span>
                            <span className="font-semibold text-[#2E2D2A] dark:text-[#E4E4E7]">Timeline:</span> {project.duration}
                          </>
                        )}
                      </div>

                      {/* Business Impact Metrics - Tabular Numerals */}
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-[#F0EFEA] dark:border-[#27272A] mb-6 sm:mb-8">
                          {project.metrics.slice(0, 3).map((metric, mIdx) => (
                            <div key={mIdx}>
                              <div className="text-lg sm:text-xl font-bold font-display text-[#111110] dark:text-white tabular-nums tracking-tight">
                                {metric.value}
                              </div>
                              <div className="text-[11px] text-[#73726C] dark:text-[#A1A1AA] leading-snug line-clamp-2 mt-0.5">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* CTA link */}
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111110] dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:underline underline-offset-4">
                        <span>View case study</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
