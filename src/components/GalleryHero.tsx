import React from 'react';
import { Camera, Film, Calendar, Users, Sparkles } from 'lucide-react';
import { GALLERY_STATS } from '../data/galleryData';

export const GalleryHero: React.FC = () => {
  return (
    <section className="relative pt-8 pb-8 px-4 sm:px-8 border-b-2 border-[#1d1b2e] bg-[#faf7ef] overflow-hidden">
      {/* Neo-brutalist star decoration from ccfoet */}
      <div 
        aria-hidden="true" 
        className="shape-star absolute right-8 sm:right-16 top-6 w-14 h-14 bg-[#ffd166] border border-[#1d1b2e] opacity-80 pointer-events-none rotate-12 hidden md:block" 
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-3xl space-y-3">
          {/* Eyebrow Label matching ccfoet */}
          <div className="flex items-center gap-2">
            <span className="inline-block px-2.5 py-0.5 text-xs font-display font-extrabold uppercase tracking-wider bg-[#6c233d] text-white border border-[#1d1b2e]">
              GALLERY
            </span>
            <span className="text-xs font-semibold text-[#6e6b7c] font-display">
              CODING CONNOISSEURS · FOET
            </span>
          </div>

          {/* Main Title in Archivo Maroon */}
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#6c233d] tracking-tight leading-none">
            Moments from our community
          </h1>

          {/* Supporting Text */}
          <p className="text-[#6e6b7c] text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
            Workshops, hackathons, meetups, competitions and the moments that bring the Coding Connoisseurs community together at the Faculty of Engineering & Technology, University of Lucknow.
          </p>
        </div>

        {/* Stats Strip matching ccfoet style */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 shrink-0">
          <div className="bg-white border-2 border-[#1d1b2e] shadow-[3px_3px_0px_#1d1b2e] px-3.5 py-2 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#6c233d]" />
            <span className="font-display font-black text-base text-[#1d1b2e] tabular-nums">
              {GALLERY_STATS.totalEvents}
            </span>
            <span className="text-xs font-medium text-[#6e6b7c]">Events</span>
          </div>

          <div className="bg-white border-2 border-[#1d1b2e] shadow-[3px_3px_0px_#1d1b2e] px-3.5 py-2 flex items-center gap-2">
            <Camera className="w-4 h-4 text-[#6c233d]" />
            <span className="font-display font-black text-base text-[#1d1b2e] tabular-nums">
              {GALLERY_STATS.totalPhotos}+
            </span>
            <span className="text-xs font-medium text-[#6e6b7c]">Photos</span>
          </div>

          <div className="bg-white border-2 border-[#1d1b2e] shadow-[3px_3px_0px_#1d1b2e] px-3.5 py-2 flex items-center gap-2">
            <Film className="w-4 h-4 text-[#6c233d]" />
            <span className="font-display font-black text-base text-[#1d1b2e] tabular-nums">
              {GALLERY_STATS.totalVideos}
            </span>
            <span className="text-xs font-medium text-[#6e6b7c]">Videos</span>
          </div>
        </div>
      </div>
    </section>
  );
};
