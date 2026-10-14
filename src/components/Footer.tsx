import React from 'react';
import { PersonalProfile } from '../types/portfolio';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  profile: PersonalProfile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#E8E6E1] dark:border-[#27272A] bg-[#FBFBFA] dark:bg-[#0A0A0C] text-[#73726C] dark:text-[#A1A1AA] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity & Title */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-bold text-sm text-[#111110] dark:text-white font-display">
              {profile.name}
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-[#B5B3A8] dark:text-[#3F3F46]">·</span>
            <span className="text-xs text-[#73726C] dark:text-[#71717A]">
              {profile.roleTitle} (5 Years Experience)
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 text-xs font-medium">
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-0.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-0.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
            {profile.dribbble && (
              <a
                href={profile.dribbble}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-0.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <span>Dribbble</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-4 text-xs">
            <span>© {currentYear} All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 text-[#5E5D57] dark:text-[#A1A1AA] hover:text-[#111110] dark:hover:text-white hover:bg-[#F2F1EC] dark:hover:bg-[#18181B] rounded-full transition-colors cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
