import React from 'react';
import { ClubEvent, MediaItem } from '../types/gallery';
import { Play, Camera, Film } from 'lucide-react';

interface MediaStreamViewProps {
  events: ClubEvent[];
  onOpenMedia: (event: ClubEvent, mediaIndex: number) => void;
}

export const MediaStreamView: React.FC<MediaStreamViewProps> = ({ events, onOpenMedia }) => {
  const allMediaItems: { event: ClubEvent; media: MediaItem; indexInEvent: number }[] = [];

  events.forEach((ev) => {
    ev.media.forEach((m, idx) => {
      allMediaItems.push({
        event: ev,
        media: m,
        indexInEvent: idx
      });
    });
  });

  return (
    <div className="pt-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {allMediaItems.map(({ event, media, indexInEvent }, i) => (
          <div
            key={`${event.id}-${media.id}-${i}`}
            onClick={() => onOpenMedia(event, indexInEvent)}
            className="group relative aspect-[4/3] bg-white border-2 border-[#1d1b2e] shadow-[4px_4px_0px_#1d1b2e] hover:shadow-[7px_7px_0px_#1d1b2e] hover:-translate-x-0.5 hover:-translate-y-1 transition-all duration-200 cursor-pointer overflow-hidden"
          >
            <img
              src={media.url}
              alt={media.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1d1b2e]/90 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

            {/* Media Type Badge */}
            <div className="absolute top-2 right-2">
              {media.type === 'video' ? (
                <div className="px-1.5 py-0.5 bg-[#f7b8c4] text-[#1d1b2e] border border-[#1d1b2e] text-[9px] font-display font-extrabold flex items-center gap-1 shadow-[1px_1px_0px_#1d1b2e]">
                  <Film className="w-2.5 h-2.5" />
                  <span>VIDEO</span>
                </div>
              ) : (
                <div className="p-1 bg-white text-[#1d1b2e] border border-[#1d1b2e] shadow-[1px_1px_0px_#1d1b2e]">
                  <Camera className="w-3 h-3 text-[#6c233d]" />
                </div>
              )}
            </div>

            {/* Caption & Event Link */}
            <div className="absolute bottom-2 left-2.5 right-2.5">
              <span className="text-[10px] font-display font-extrabold uppercase tracking-wide text-[#ffd166] drop-shadow-sm">
                {event.title}
              </span>
              <h4 className="font-display font-bold text-xs text-white line-clamp-1 mt-0.5 leading-snug">
                {media.title}
              </h4>
              <p className="text-[10px] text-slate-300 font-medium line-clamp-1">
                {event.date}
              </p>
            </div>

            {media.type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 bg-[#ffd166] text-[#1d1b2e] border-2 border-[#1d1b2e] shadow-[2px_2px_0px_#1d1b2e] flex items-center justify-center">
                  <Play className="w-4 h-4 fill-[#1d1b2e] ml-0.5" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
