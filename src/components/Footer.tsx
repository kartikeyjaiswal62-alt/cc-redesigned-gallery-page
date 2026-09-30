import React from 'react';
import { ActiveNavTab } from '../types/gallery';
import { Github, Linkedin, Instagram, Mail, MapPin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavClick: (tab: ActiveNavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  return (
    <footer className="border-t-3 border-[#1d1b2e] bg-[#1d1b2e] text-[#faf7ef] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Club Motto & Details */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#ffd166] text-[#1d1b2e] border-2 border-white shadow-[2px_2px_0px_#fff] flex items-center justify-center font-display font-black text-base">
                CC
              </div>
              <span className="font-display font-black text-xl text-white tracking-tight">
                Coding Connoisseurs
              </span>
            </div>
            <p className="text-[#faf7ef]/80 text-sm leading-relaxed max-w-md font-medium">
              The technical and coding club at the Faculty of Engineering & Technology (FoET), University of Lucknow. Passing the love of programming forward, one student at a time.
            </p>
            <div className="flex items-start gap-2 text-xs text-[#faf7ef]/70">
              <MapPin className="w-4 h-4 text-[#ffd166] shrink-0 mt-0.5" />
              <span>
                Faculty of Engineering & Technology, University of Lucknow, New Campus, Jankipuram, Lucknow, UP 226031
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-black uppercase tracking-wider text-[#ffd166]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              {(['Home', 'Events', 'Gallery', 'Projects', 'Hall of Fame', 'Resources', 'Team'] as ActiveNavTab[]).map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => onNavClick(item)}
                      className="text-[#faf7ef]/70 hover:text-[#ffd166] transition-colors cursor-pointer text-left"
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Col 3: Connect & Vercel Site */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-black uppercase tracking-wider text-[#ffd166]">
              Community
            </h4>
            <p className="text-xs text-[#faf7ef]/70">
              Star our open-source challenges, participate in CodeFiesta, and connect with mentors.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://github.com/coding-connoisseurs-foet"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-white text-[#1d1b2e] border-2 border-white shadow-[2px_2px_0px_#ffd166] flex items-center justify-center hover:-translate-y-0.5 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-white text-[#1d1b2e] border-2 border-white shadow-[2px_2px_0px_#ffd166] flex items-center justify-center hover:-translate-y-0.5 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-white text-[#1d1b2e] border-2 border-white shadow-[2px_2px_0px_#ffd166] flex items-center justify-center hover:-translate-y-0.5 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:codingconnoisseurs.foet@gmail.com"
                className="w-8 h-8 bg-white text-[#1d1b2e] border-2 border-white shadow-[2px_2px_0px_#ffd166] flex items-center justify-center hover:-translate-y-0.5 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <a
                href="https://ccfoet.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#ffd166] hover:underline font-display font-bold"
              >
                <span>Live Site: ccfoet.vercel.app</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-[#faf7ef]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#faf7ef]/60 font-medium">
          <p>© {new Date().getFullYear()} Coding Connoisseurs · FOET, University of Lucknow</p>
          <p>Fostering student developers & engineers at FoET-LU</p>
        </div>
      </div>
    </footer>
  );
};
