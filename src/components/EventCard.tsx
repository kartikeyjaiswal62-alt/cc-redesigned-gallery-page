import React, { useState } from 'react';
import { ClubEvent } from '../types/gallery';
import { ArrowRight, Camera, Film, MapPin } from 'lucide-react';

interface EventCardProps {
  event: ClubEvent;
  onSelectEvent: (event: ClubEvent) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onSelectEvent }) => {
  const [imageError, setImageError] = useState(false);

  // Derive counts
  const photosCount = event.media.filter((m) => m.type === 'image').length;
  const videosCount = event.media.filter((m) => m.type === 'video').length;

  const memoriesText =
    videosCount > 0
      ? `${photosCount} Photos · ${videosCount} ${videosCount === 1 ? 'Video' : 'Videos'}`
      : `${photosCount} Photos`;

  const coverImage = event.coverImage || event.media[0]?.url;

  return (
    <div
      onClick={() => onSelectEvent(event)}
      className="group relative flex flex-col bg-white border-2 border-[#1d1b2e] shadow-[5px_5px_0px_#1d1b2e] hover:shadow-[8px_8px_0px_#1d1b2e] hover:-translate-x-0.5 hover:-translate-y-1 transition-all duration-200 cursor-pointer overflow-hidden"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectEvent(event);
        }
      }}
      aria-label={`View gallery for ${event.title}, ${event.date}`}
    >
      {/* Cover Image Container with 16:10 aspect ratio */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#faf7ef] border-b-2 border-[#1d1b2e]">
        {!imageError ? (
          <img
            src={coverImage}
            alt={`${event.title} event cover`}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center transform transition-transform duration-300 ease-out group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#faf7ef] p-4 text-center">
            <Camera className="w-8 h-8 text-[#6c233d] mb-1 opacity-70" />
            <span className="text-xs font-display font-bold text-[#1d1b2e]">
              {event.title}
            </span>
          </div>
        )}

        {/* Gradient overlay near bottom (per prompt spec) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d1b2e]/90 via-[#1d1b2e]/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-200" />

        {/* Category Sticker Badge top-left in neo-brutalist style */}
        <div className="absolute top-2.5 left-2.5">
          <span className="px-2 py-0.5 text-[11px] font-display font-extrabold uppercase bg-[#ffd166] text-[#1d1b2e] border-2 border-[#1d1b2e] shadow-[2px_2px_0px_#1d1b2e]">
            {event.category}
          </span>
        </div>

        {/* Video badge if event has video clips */}
        {videosCount > 0 && (
          <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-0.5 text-[10px] font-display font-extrabold bg-[#f7b8c4] text-[#1d1b2e] border-2 border-[#1d1b2e] shadow-[2px_2px_0px_#1d1b2e]">
            <Film className="w-3 h-3" />
            <span>VIDEO</span>
          </div>
        )}

        {/* Overlaid Event Title & Metadata near bottom */}
        <div className="absolute bottom-2.5 left-3 right-3 flex flex-col">
          <h3 className="font-display font-extrabold text-base sm:text-lg text-white group-hover:text-[#ffd166] transition-colors line-clamp-1 leading-snug drop-shadow-sm">
            {event.title}
          </h3>
          <div className="flex items-center gap-2 text-xs text-slate-200 mt-0.5 font-medium">
            <span className="font-bold text-white">{event.date}</span>
            <span className="text-slate-400" aria-hidden="true">·</span>
            <span className="text-slate-300">{memoriesText}</span>
          </div>
        </div>
      </div>

      {/* Card Content & Action Bar */}
      <div className="p-3.5 flex items-center justify-between bg-white">
        <span className="text-xs text-[#6e6b7c] font-semibold line-clamp-1 flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-[#6c233d] shrink-0" />
          <span className="truncate">{event.location.split(',')[0]}</span>
        </span>

        {/* Small arrow / View Gallery → affordance per prompt */}
        <div className="inline-flex items-center gap-1 text-xs font-display font-extrabold text-[#6c233d] group-hover:text-[#421627] transition-colors whitespace-nowrap ml-2">
          <span>View Gallery</span>
          <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};
