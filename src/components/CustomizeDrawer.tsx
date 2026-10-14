import React, { useState } from 'react';
import { PersonalProfile } from '../types/portfolio';
import { X, RotateCcw, Check, Sparkles } from 'lucide-react';

interface CustomizeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  profile: PersonalProfile;
  onUpdateProfile: (updated: PersonalProfile) => void;
  onResetDefaults: () => void;
}

export const CustomizeDrawer: React.FC<CustomizeDrawerProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile,
  onResetDefaults,
}) => {
  const [formData, setFormData] = useState<PersonalProfile>({ ...profile });
  const [savedToast, setSavedToast] = useState(false);

  React.useEffect(() => {
    setFormData({ ...profile });
  }, [profile]);

  if (!isOpen) return null;

  const handleChange = (field: keyof PersonalProfile, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile(formData);
    setSavedToast(true);
    setTimeout(() => {
      setSavedToast(false);
      onClose();
    }, 900);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-[#141416] text-[#111110] dark:text-[#E4E4E7] w-full max-w-md h-full shadow-2xl p-5 sm:p-8 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-[#E8E6E1] dark:border-[#27272A]">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-lg font-bold font-display text-[#111110] dark:text-white">
                  Portfolio Customizer
                </h3>
              </div>
              <p className="text-xs text-[#73726C] dark:text-[#71717A] mt-1">
                Personalize placeholders with your own details.
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-[#73726C] dark:text-[#A1A1AA] hover:text-[#111110] dark:hover:text-white rounded-lg hover:bg-[#F2F1EC] dark:hover:bg-[#1E1E22] transition-colors cursor-pointer"
              aria-label="Close customizer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <form id="customize-form" onSubmit={handleSave} className="py-5 sm:py-6 space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-[#2E2D2A] dark:text-[#D4D4D8] mb-1" htmlFor="edit-name">
                Your Full Name (Primary Heading)
              </label>
              <input
                id="edit-name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#E3E1D9] dark:border-[#27272A] bg-[#FAF9F6] dark:bg-[#1C1C20] focus:bg-white dark:focus:bg-[#141416] focus:outline-none focus:ring-1 focus:ring-indigo-500 text-[#111110] dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-[#2E2D2A] dark:text-[#D4D4D8] mb-1" htmlFor="edit-role">
                Professional Role Title
              </label>
              <input
                id="edit-role"
                type="text"
                value={formData.roleTitle}
                onChange={(e) => handleChange('roleTitle', e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#E3E1D9] dark:border-[#27272A] bg-[#FAF9F6] dark:bg-[#1C1C20] focus:bg-white dark:focus:bg-[#141416] focus:outline-none focus:ring-1 focus:ring-indigo-500 text-[#111110] dark:text-white"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-[#2E2D2A] dark:text-[#D4D4D8] mb-1" htmlFor="edit-years">
                  Years Experience
                </label>
                <input
                  id="edit-years"
                  type="number"
                  min={1}
                  max={30}
                  value={formData.yearsExperience}
                  onChange={(e) => handleChange('yearsExperience', Number(e.target.value))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[#E3E1D9] dark:border-[#27272A] bg-[#FAF9F6] dark:bg-[#1C1C20] focus:bg-white dark:focus:bg-[#141416] focus:outline-none focus:ring-1 focus:ring-indigo-500 text-[#111110] dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-[#2E2D2A] dark:text-[#D4D4D8] mb-1" htmlFor="edit-loc">
                  Location
                </label>
                <input
                  id="edit-loc"
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[#E3E1D9] dark:border-[#27272A] bg-[#FAF9F6] dark:bg-[#1C1C20] focus:bg-white dark:focus:bg-[#141416] focus:outline-none focus:ring-1 focus:ring-indigo-500 text-[#111110] dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-[#2E2D2A] dark:text-[#D4D4D8] mb-1" htmlFor="edit-curr-role">
                Current Role / Company Status
              </label>
              <input
                id="edit-curr-role"
                type="text"
                value={formData.currentRole}
                onChange={(e) => handleChange('currentRole', e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#E3E1D9] dark:border-[#27272A] bg-[#FAF9F6] dark:bg-[#1C1C20] focus:bg-white dark:focus:bg-[#141416] focus:outline-none focus:ring-1 focus:ring-indigo-500 text-[#111110] dark:text-white"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#2E2D2A] dark:text-[#D4D4D8] mb-1" htmlFor="edit-avail">
                Availability Status
              </label>
              <input
                id="edit-avail"
                type="text"
                value={formData.availability}
                onChange={(e) => handleChange('availability', e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#E3E1D9] dark:border-[#27272A] bg-[#FAF9F6] dark:bg-[#1C1C20] focus:bg-white dark:focus:bg-[#141416] focus:outline-none focus:ring-1 focus:ring-indigo-500 text-[#111110] dark:text-white"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#2E2D2A] dark:text-[#D4D4D8] mb-1" htmlFor="edit-headline">
                Hero Headline
              </label>
              <textarea
                id="edit-headline"
                rows={2}
                value={formData.headline}
                onChange={(e) => handleChange('headline', e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#E3E1D9] dark:border-[#27272A] bg-[#FAF9F6] dark:bg-[#1C1C20] focus:bg-white dark:focus:bg-[#141416] focus:outline-none focus:ring-1 focus:ring-indigo-500 text-[#111110] dark:text-white"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#2E2D2A] dark:text-[#D4D4D8] mb-1" htmlFor="edit-email">
                Contact Email
              </label>
              <input
                id="edit-email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#E3E1D9] dark:border-[#27272A] bg-[#FAF9F6] dark:bg-[#1C1C20] focus:bg-white dark:focus:bg-[#141416] focus:outline-none focus:ring-1 focus:ring-indigo-500 text-[#111110] dark:text-white"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#2E2D2A] dark:text-[#D4D4D8] mb-1" htmlFor="edit-linkedin">
                LinkedIn URL
              </label>
              <input
                id="edit-linkedin"
                type="url"
                value={formData.linkedin}
                onChange={(e) => handleChange('linkedin', e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#E3E1D9] dark:border-[#27272A] bg-[#FAF9F6] dark:bg-[#1C1C20] focus:bg-white dark:focus:bg-[#141416] focus:outline-none focus:ring-1 focus:ring-indigo-500 text-[#111110] dark:text-white"
              />
            </div>
          </form>
        </div>

        {/* Footer controls */}
        <div className="pt-4 border-t border-[#E8E6E1] dark:border-[#27272A] space-y-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onResetDefaults}
              className="flex items-center gap-1.5 px-3 py-2.5 text-xs font-medium text-[#73726C] dark:text-[#A1A1AA] hover:text-[#111110] dark:hover:text-white bg-[#F2F1EC] dark:bg-[#1E1E22] hover:bg-[#EAE8E1] dark:hover:bg-[#2A2A30] rounded-xl transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>

            <button
              type="submit"
              form="customize-form"
              className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all cursor-pointer shadow-md active:scale-[0.98] min-h-[40px]"
            >
              {savedToast ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Changes Applied!</span>
                </>
              ) : (
                <span>Save & Apply</span>
              )}
            </button>
          </div>

          <div className="text-[11px] text-center text-[#73726C] dark:text-[#71717A]">
            Updates persist in local storage.
          </div>
        </div>
      </div>
    </div>
  );
};
