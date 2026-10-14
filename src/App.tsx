import { useState, useEffect } from 'react';
import { defaultProfile, defaultProjects, experienceData, educationData } from './data/portfolioData';
import { PersonalProfile, Project } from './types/portfolio';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { CaseStudyView } from './components/CaseStudyView';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CustomizeDrawer } from './components/CustomizeDrawer';
import { SlidersHorizontal } from 'lucide-react';

export default function App() {
  // Theme state: checks localStorage or system preference
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const savedTheme = localStorage.getItem('aura_theme') as 'light' | 'dark' | null;
      if (savedTheme) return savedTheme;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch {
      // ignore
    }
    return 'light';
  });

  // Apply dark class to document root
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('aura_theme', theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const [profile, setProfile] = useState<PersonalProfile>(() => {
    try {
      const saved = localStorage.getItem('aura_portfolio_profile');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return defaultProfile;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('work');

  // Handle URL hash changes for deep linking (e.g., #work/symphony-design-system)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#work/')) {
        const slug = hash.replace('#work/', '');
        const found = defaultProjects.find((p) => p.slug === slug);
        if (found) {
          setSelectedProject(found);
          window.scrollTo({ top: 0, behavior: 'instant' });
          return;
        }
      }
      if (!hash.startsWith('#work/')) {
        setSelectedProject(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Section observer to update active navigation state
  useEffect(() => {
    if (selectedProject) return;

    const sections = ['work', 'experience', 'education', 'philosophy', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedProject]);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    window.location.hash = `#work/${project.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToOverview = () => {
    setSelectedProject(null);
    window.location.hash = '';
    setTimeout(() => {
      const workEl = document.getElementById('work');
      workEl?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleUpdateProfile = (updated: PersonalProfile) => {
    setProfile(updated);
    try {
      localStorage.setItem('aura_portfolio_profile', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleResetDefaults = () => {
    setProfile(defaultProfile);
    try {
      localStorage.removeItem('aura_portfolio_profile');
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] dark:bg-[#0A0A0C] text-[#111110] dark:text-[#F4F4F5] selection:bg-indigo-600 selection:text-white flex flex-col font-sans transition-colors duration-300">
      {/* 3-Zone Clean Header with Dark/Light Toggle */}
      <Navigation
        profile={profile}
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        onNavigateHome={() => {
          setSelectedProject(null);
          window.location.hash = '';
        }}
        isCaseStudyOpen={!!selectedProject}
      />

      {/* Main View Area */}
      <main className="flex-1 w-full overflow-x-hidden">
        {selectedProject ? (
          <CaseStudyView
            project={selectedProject}
            allProjects={defaultProjects}
            onBack={handleBackToOverview}
            onSelectProject={handleSelectProject}
          />
        ) : (
          <>
            <HeroSection
              profile={profile}
              onExploreWork={() => {
                const el = document.getElementById('work');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onContact={() => {
                const el = document.getElementById('contact');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            <ProjectShowcase
              projects={defaultProjects}
              onSelectProject={handleSelectProject}
            />

            <ExperienceSection experience={experienceData} />

            <EducationSection education={educationData} />

            <PhilosophySection />

            <ContactSection
              profile={profile}
              onOpenResume={() => setIsResumeOpen(true)}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Formatted Resume Sheet Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
      />

      {/* Quick Profile & Placeholder Customizer Drawer */}
      <CustomizeDrawer
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        profile={profile}
        onUpdateProfile={handleUpdateProfile}
        onResetDefaults={handleResetDefaults}
      />

      {/* Discreet floating edit button at bottom right (responsive) */}
      {!isCustomizerOpen && (
        <button
          onClick={() => setIsCustomizerOpen(true)}
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-30 flex items-center gap-2 px-3.5 py-2.5 bg-white/95 dark:bg-[#18181B]/95 hover:bg-white dark:hover:bg-[#202026] text-[#111110] dark:text-white text-xs font-semibold rounded-full border border-[#E3E1D9] dark:border-[#27272A] shadow-xl backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          title="Click to personalize name, role, and details"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
          <span className="hidden sm:inline">Customize Details</span>
        </button>
      )}
    </div>
  );
}
