import React, { useState, useEffect } from 'react';
import { PersonalProfile } from '../types/portfolio';
import { Menu, X, ArrowUpRight, SlidersHorizontal, Sun, Moon } from 'lucide-react';

interface NavigationProps {
  profile: PersonalProfile;
  activeSection: string;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onOpenCustomizer: () => void;
  onOpenResume: () => void;
  onNavigateHome: () => void;
  isCaseStudyOpen?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  profile,
  activeSection,
  theme,
  onToggleTheme,
  onOpenCustomizer,
  onOpenResume,
  onNavigateHome,
  isCaseStudyOpen,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (isCaseStudyOpen) {
      onNavigateHome();
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBFBFA]/90 dark:bg-[#0A0A0C]/90 backdrop-blur-md border-b border-[#E8E6E1]/80 dark:border-[#27272A]/80 py-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Brand wordmark (Single text element) */}
        <button
          onClick={() => {
            onNavigateHome();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-left group cursor-pointer shrink-0"
          aria-label="Go to homepage"
        >
          <span className="text-base sm:text-lg font-bold tracking-tight text-[#111110] dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors whitespace-nowrap font-display">
            {profile.name.toUpperCase()}
          </span>
          <span className="hidden sm:inline-block ml-2 text-xs font-normal text-[#73726C] dark:text-[#A1A1AA] tracking-normal">
            / {profile.roleTitle}
          </span>
        </button>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium text-[#5E5D57] dark:text-[#A1A1AA]"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1) && !isCaseStudyOpen;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`transition-colors whitespace-nowrap shrink-0 relative py-1 hover:text-[#111110] dark:hover:text-white ${
                  isActive ? 'text-[#111110] dark:text-white font-semibold' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-indigo-600 dark:bg-indigo-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action + theme toggle + controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Dark / Light Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="p-2 text-[#5E5D57] dark:text-[#A1A1AA] hover:text-[#111110] dark:hover:text-white bg-[#F2F1EC] dark:bg-[#18181B] hover:bg-[#EAE8E1] dark:hover:bg-[#27272A] rounded-lg transition-colors border border-[#E3E1D9] dark:border-[#27272A] cursor-pointer"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {/* Quick Edit Placeholder drawer toggle */}
          <button
            onClick={onOpenCustomizer}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#5E5D57] dark:text-[#A1A1AA] hover:text-[#111110] dark:hover:text-white bg-[#F2F1EC] dark:bg-[#18181B] hover:bg-[#EAE8E1] dark:hover:bg-[#27272A] rounded-lg transition-colors border border-[#E3E1D9] dark:border-[#27272A] whitespace-nowrap shrink-0 cursor-pointer"
            title="Edit designer name, role, and details"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Edit Details</span>
          </button>

          {/* Primary Action Button (Resume) */}
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-[#111110] dark:bg-white dark:text-[#111110] hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-lg transition-all whitespace-nowrap shrink-0 shadow-sm active:scale-[0.98] cursor-pointer"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-600" />
          </button>

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="inline-flex sm:hidden items-center px-3 py-1.5 text-xs font-medium text-white bg-[#111110] dark:bg-white dark:text-[#111110] rounded-lg"
          >
            Contact
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#111110] dark:text-white hover:bg-[#F2F1EC] dark:hover:bg-[#18181B] rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FBFBFA] dark:bg-[#0A0A0C] border-b border-[#E8E6E1] dark:border-[#27272A] px-5 py-5 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-medium text-[#2B2A27] dark:text-[#D4D4D8] hover:text-[#111110] dark:hover:text-white transition-colors py-1"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-[#E8E6E1] dark:border-[#27272A] flex flex-col gap-2.5">
              <div className="flex items-center justify-between py-1">
                <span className="text-xs font-medium text-[#73726C] dark:text-[#A1A1AA]">Theme</span>
                <button
                  onClick={onToggleTheme}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-[#F2F1EC] dark:bg-[#18181B] rounded-lg border border-[#E3E1D9] dark:border-[#27272A] text-[#111110] dark:text-white"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="w-3.5 h-3.5 text-amber-400" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </div>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium text-white bg-[#111110] dark:bg-white dark:text-[#111110] rounded-lg"
              >
                View Full Resume
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCustomizer();
                }}
                className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium text-[#5E5D57] dark:text-[#A1A1AA] bg-[#F2F1EC] dark:bg-[#18181B] rounded-lg border border-[#E3E1D9] dark:border-[#27272A]"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Edit Profile Details</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
