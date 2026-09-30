import React, { useState } from 'react';
import { ActiveNavTab } from '../types/gallery';
import { Camera } from 'lucide-react';

interface NavbarProps {
  activeTab: ActiveNavTab;
  onTabChange: (tab: ActiveNavTab) => void;
  onSubmitMediaClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onTabChange,
  onSubmitMediaClick
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: ActiveNavTab[] = [
    'Home',
    'Events',
    'Gallery',
    'Projects',
    'Hall of Fame',
    'Resources',
    'Team'
  ];

  const handleLinkClick = (tab: ActiveNavTab) => {
    onTabChange(tab);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-[#1d1b2e] px-4 sm:px-6 py-2.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Brand logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleLinkClick('Home')}
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
          >
            <div className="w-8 h-8 bg-[#6c233d] text-white flex items-center justify-center font-display font-extrabold text-lg border-2 border-[#1d1b2e] shadow-[2px_2px_0px_#1d1b2e] group-hover:-translate-y-0.5 group-hover:shadow-[3px_3px_0px_#1d1b2e] transition-all">
              CC
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-lg tracking-tight text-[#1d1b2e] group-hover:text-[#6c233d] transition-colors leading-none">
                Coding Connoisseurs
              </span>
              <span className="text-[11px] font-semibold text-[#6e6b7c] tracking-wide mt-0.5">
                FOET · University of Lucknow
              </span>
            </div>
          </button>
        </div>

        {/* Center: Main Nav Links (Matching ccfoet.vercel.app) */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <li key={tab}>
                <button
                  onClick={() => handleLinkClick(tab)}
                  className={`px-3 py-1.5 text-[15px] font-medium transition-all rounded cursor-pointer ${
                    isActive
                      ? 'text-[#6c233d] font-bold bg-[#6c233d]/10'
                      : 'text-[#6e6b7c] hover:text-[#6c233d] hover:bg-[#6c233d]/5'
                  }`}
                >
                  {tab}
                  {tab === 'Gallery' && (
                    <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-display font-bold uppercase rounded bg-[#ffd166] text-[#1d1b2e] border border-[#1d1b2e]">
                      New
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right: Actions (Contribute Media & Contact Button matching ccfoet) */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onSubmitMediaClick}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#1d1b2e] bg-white hover:bg-[#faf7ef] border-2 border-[#1d1b2e] shadow-[2px_2px_0px_#1d1b2e] hover:shadow-[3px_3px_0px_#1d1b2e] hover:-translate-y-0.5 transition-all cursor-pointer font-display"
          >
            <Camera className="w-3.5 h-3.5 text-[#6c233d]" />
            <span>Upload Media</span>
          </button>

          <button
            onClick={() => handleLinkClick('Contact')}
            className="btn-brutal-yellow px-5 py-2 text-sm font-display cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Hamburger for mobile */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onSubmitMediaClick}
            className="p-1.5 text-[#1d1b2e] border border-[#1d1b2e] bg-[#ffd166] shadow-[2px_2px_0px_#1d1b2e]"
            title="Upload Media"
          >
            <Camera className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col gap-1 p-2 border-2 border-[#1d1b2e] bg-white shadow-[2px_2px_0px_#1d1b2e] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <span className="w-5 h-0.5 bg-[#6c233d] block"></span>
            <span className="w-5 h-0.5 bg-[#6c233d] block"></span>
            <span className="w-5 h-0.5 bg-[#6c233d] block"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-3 border-t-2 border-[#1d1b2e] space-y-1 bg-white">
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => handleLinkClick(tab)}
                  className={`text-left px-3 py-2 text-sm font-semibold rounded cursor-pointer ${
                    isActive
                      ? 'bg-[#6c233d] text-white'
                      : 'text-[#1d1b2e] hover:bg-[#6c233d]/10'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => handleLinkClick('Contact')}
              className="w-full text-center py-2 text-sm font-bold bg-[#ffd166] text-[#1d1b2e] border-2 border-[#1d1b2e] shadow-[2px_2px_0px_#1d1b2e]"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
