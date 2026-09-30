import React, { useState, useEffect, useRef } from 'react';
import { ClubEvent, MediaItem } from '../types/gallery';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Download,
  Share2,
  MapPin,
  Users,
  Camera,
  Film,
  Check,
  Info
} from 'lucide-react';

interface EventModalProps {
  event: ClubEvent | null;
  initialMediaIndex?: number;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({
  event,
  initialMediaIndex = 0,
  onClose
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialMediaIndex);
  const [viewMode, setViewMode] = useState<'cinema' | 'grid'>('cinema');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [copiedToast, setCopiedToast] = useState(false);
  const [showInfoSidebar, setShowInfoSidebar] = useState(false);
  const [imageError, setImageError] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setCurrentIndex(initialMediaIndex);
    setImageError(false);
  }, [initialMediaIndex, event]);

  useEffect(() => {
    if (!event) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === ' ' && currentMedia?.type === 'video') {
        e.preventDefault();
        togglePlayVideo();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [event, currentIndex, onClose]);

  if (!event) return null;

  const currentMedia: MediaItem = event.media[currentIndex] || event.media[0];
  const totalMedia = event.media.length;

  const goToPrevious = () => {
    setImageError(false);
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalMedia - 1));
  };

  const goToNext = () => {
    setImageError(false);
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev < totalMedia - 1 ? prev + 1 : 0));
  };

  const togglePlayVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMuteVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleDownload = () => {
    if (!currentMedia) return;
    const a = document.createElement('a');
    a.href = currentMedia.url;
    a.download = `${event.slug}-${currentMedia.id}.jpg`;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1d1b2e]/90 backdrop-blur-md animate-in fade-in duration-150 p-2 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${event.title} Lightbox`}
    >
      {/* Modal Frame with neo-brutalist border & shadow */}
      <div className="relative w-full max-w-6xl h-[94vh] flex flex-col justify-between bg-[#faf7ef] border-3 border-[#1d1b2e] shadow-[10px_10px_0px_#1d1b2e] overflow-hidden">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b-2 border-[#1d1b2e] bg-white z-20">
          <div className="flex items-center gap-3 min-w-0">
            <span className="px-2.5 py-1 text-xs font-display font-black uppercase bg-[#ffd166] text-[#1d1b2e] border-2 border-[#1d1b2e] shadow-[2px_2px_0px_#1d1b2e] shrink-0">
              {event.category}
            </span>
            <div className="truncate">
              <h2 className="font-display font-black text-base sm:text-lg text-[#6c233d] truncate leading-tight">
                {event.title}
              </h2>
              <p className="text-xs text-[#6e6b7c] font-semibold truncate">
                {event.date} · {event.venue}
              </p>
            </div>
          </div>

          {/* Action buttons matching ccfoet buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Mode switch */}
            <div className="hidden sm:flex items-center border-2 border-[#1d1b2e] bg-white shadow-[2px_2px_0px_#1d1b2e]">
              <button
                onClick={() => setViewMode('cinema')}
                className={`px-3 py-1 text-xs font-display font-bold transition-colors cursor-pointer ${
                  viewMode === 'cinema'
                    ? 'bg-[#6c233d] text-white'
                    : 'text-[#1d1b2e] hover:bg-[#faf7ef]'
                }`}
              >
                Cinema
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1 text-xs font-display font-bold transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#6c233d] text-white'
                    : 'text-[#1d1b2e] hover:bg-[#faf7ef]'
                }`}
              >
                Grid ({totalMedia})
              </button>
            </div>

            {/* Event Dossier */}
            <button
              onClick={() => setShowInfoSidebar(!showInfoSidebar)}
              className={`p-2 border-2 border-[#1d1b2e] transition-all cursor-pointer ${
                showInfoSidebar
                  ? 'bg-[#ffd166] shadow-[2px_2px_0px_#1d1b2e]'
                  : 'bg-white hover:bg-[#faf7ef] shadow-[2px_2px_0px_#1d1b2e]'
              }`}
              title="Event Details & Highlights"
            >
              <Info className="w-4 h-4 text-[#1d1b2e]" />
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="relative p-2 bg-white border-2 border-[#1d1b2e] shadow-[2px_2px_0px_#1d1b2e] hover:bg-[#faf7ef] transition-all cursor-pointer"
              title="Share Event"
            >
              {copiedToast ? (
                <Check className="w-4 h-4 text-[#6c233d]" />
              ) : (
                <Share2 className="w-4 h-4 text-[#1d1b2e]" />
              )}
              {copiedToast && (
                <span className="absolute -bottom-8 right-0 px-2 py-1 bg-[#6c233d] text-white text-[10px] font-bold border-2 border-[#1d1b2e] shadow-[2px_2px_0px_#1d1b2e] whitespace-nowrap">
                  Link copied!
                </span>
              )}
            </button>

            {/* Download */}
            <button
              onClick={handleDownload}
              className="p-2 bg-white border-2 border-[#1d1b2e] shadow-[2px_2px_0px_#1d1b2e] hover:bg-[#faf7ef] transition-all cursor-pointer"
              title="Download Media"
            >
              <Download className="w-4 h-4 text-[#1d1b2e]" />
            </button>

            {/* Close Button (ESC) in ccfoet red */}
            <button
              onClick={onClose}
              className="p-2 bg-[#ff6b5b] hover:bg-[#e05344] text-white border-2 border-[#1d1b2e] shadow-[2px_2px_0px_#1d1b2e] transition-all cursor-pointer ml-1"
              title="Close (ESC)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Center Viewing Stage */}
        <div className="relative flex-1 flex overflow-hidden bg-[#faf7ef] page-grid">
          {viewMode === 'cinema' ? (
            /* CINEMA LIGHTBOX VIEW */
            <div className="relative flex-1 flex items-center justify-center p-3 sm:p-6 select-none overflow-hidden">
              {/* Previous Button (Left Arrow) */}
              <button
                onClick={goToPrevious}
                className="absolute left-2 sm:left-6 z-30 p-3 bg-[#ffd166] hover:bg-[#ffbe3b] text-[#1d1b2e] border-2 border-[#1d1b2e] shadow-[3px_3px_0px_#1d1b2e] hover:shadow-[4px_4px_0px_#1d1b2e] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                title="Previous (Left Arrow)"
                aria-label="Previous Media"
              >
                <ChevronLeft className="w-6 h-6 stroke-[3]" />
              </button>

              {/* Next Button (Right Arrow) */}
              <button
                onClick={goToNext}
                className="absolute right-2 sm:right-6 z-30 p-3 bg-[#ffd166] hover:bg-[#ffbe3b] text-[#1d1b2e] border-2 border-[#1d1b2e] shadow-[3px_3px_0px_#1d1b2e] hover:shadow-[4px_4px_0px_#1d1b2e] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                title="Next (Right Arrow)"
                aria-label="Next Media"
              >
                <ChevronRight className="w-6 h-6 stroke-[3]" />
              </button>

              {/* Large Media Window */}
              <div className="relative max-w-4xl max-h-[66vh] w-full flex items-center justify-center">
                {currentMedia.type === 'video' ? (
                  <div className="relative w-full aspect-video max-h-[66vh] bg-black border-3 border-[#1d1b2e] shadow-[8px_8px_0px_#1d1b2e] overflow-hidden flex items-center justify-center">
                    <video
                      ref={videoRef}
                      src={currentMedia.videoUrl || 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'}
                      poster={currentMedia.url}
                      muted={isMuted}
                      loop
                      playsInline
                      className="w-full h-full object-contain"
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                    />

                    {/* Video Overlay Controls */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={togglePlayVideo}
                            className="p-2 bg-[#ffd166] text-[#1d1b2e] border border-[#1d1b2e] font-bold"
                          >
                            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                          </button>
                          <button
                            onClick={toggleMuteVideo}
                            className="p-2 bg-white text-[#1d1b2e] border border-[#1d1b2e]"
                          >
                            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                          </button>
                          <span className="text-xs font-mono font-bold text-white">
                            {currentMedia.duration || '0:45'}
                          </span>
                        </div>
                        <span className="text-xs font-display font-extrabold uppercase bg-[#f7b8c4] text-[#1d1b2e] px-2 py-0.5 border border-[#1d1b2e]">
                          FoET Video Snippet
                        </span>
                      </div>
                    </div>

                    {!isPlaying && (
                      <button
                        onClick={togglePlayVideo}
                        className="absolute z-10 w-16 h-16 bg-[#ffd166] text-[#1d1b2e] border-3 border-[#1d1b2e] shadow-[4px_4px_0px_#1d1b2e] flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
                        title="Play Video"
                      >
                        <Play className="w-7 h-7 fill-[#1d1b2e] ml-1" />
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="relative max-h-[66vh] flex items-center justify-center">
                    {!imageError ? (
                      <img
                        key={currentMedia.id}
                        src={currentMedia.url}
                        alt={currentMedia.title || event.title}
                        referrerPolicy="no-referrer"
                        onError={() => setImageError(true)}
                        className="max-h-[66vh] max-w-full w-auto object-contain border-3 border-[#1d1b2e] shadow-[8px_8px_0px_#1d1b2e] bg-white"
                      />
                    ) : (
                      <div className="w-96 aspect-video bg-white border-2 border-[#1d1b2e] shadow-[4px_4px_0px_#1d1b2e] flex flex-col items-center justify-center p-6 text-center">
                        <Camera className="w-12 h-12 text-[#6c233d] mb-2 opacity-60" />
                        <p className="text-sm font-display font-bold text-[#1d1b2e]">{currentMedia.title}</p>
                        <p className="text-xs text-[#6e6b7c] mt-1">{currentMedia.caption}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* ALL MEDIA GRID VIEW */
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 max-w-5xl mx-auto w-full">
              <div className="mb-4 flex items-center justify-between pb-3 border-b-2 border-[#1d1b2e]">
                <div>
                  <h3 className="font-display font-black text-xl text-[#6c233d]">
                    Event Media Archive ({totalMedia} items)
                  </h3>
                  <p className="text-xs text-[#6e6b7c] font-semibold">
                    Click any thumbnail to open large viewer
                  </p>
                </div>
                <button
                  onClick={() => setViewMode('cinema')}
                  className="btn-brutal-yellow px-3 py-1.5 text-xs font-display cursor-pointer"
                >
                  Return to Cinema
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {event.media.map((item, idx) => {
                  const isCurrent = idx === currentIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        setCurrentIndex(idx);
                        setViewMode('cinema');
                      }}
                      className={`group relative aspect-[4/3] bg-white border-2 border-[#1d1b2e] cursor-pointer transition-all ${
                        isCurrent
                          ? 'shadow-[5px_5px_0px_#6c233d] ring-2 ring-[#6c233d]'
                          : 'shadow-[3px_3px_0px_#1d1b2e] hover:shadow-[5px_5px_0px_#1d1b2e] hover:-translate-x-0.5 hover:-translate-y-0.5'
                      }`}
                    >
                      <img
                        src={item.url}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                      {item.type === 'video' && (
                        <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-[#f7b8c4] text-[#1d1b2e] text-[9px] font-display font-extrabold border border-[#1d1b2e]">
                          VIDEO
                        </div>
                      )}

                      <div className="absolute bottom-2 left-2 right-2">
                        <p className="text-[11px] font-display font-bold text-white line-clamp-1">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Dossier Sidebar */}
          {showInfoSidebar && (
            <div className="w-80 border-l-2 border-[#1d1b2e] bg-white p-5 overflow-y-auto hidden md:block">
              <div className="flex items-center justify-between pb-3 border-b-2 border-[#1d1b2e] mb-4">
                <h4 className="font-display font-black text-sm text-[#6c233d] uppercase tracking-wider">
                  Event Dossier
                </h4>
                <button
                  onClick={() => setShowInfoSidebar(false)}
                  className="text-[#6e6b7c] hover:text-[#1d1b2e]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="font-display font-bold text-[11px] uppercase text-[#6e6b7c] block">
                    Overview
                  </span>
                  <p className="text-[#1d1b2e] text-xs leading-relaxed mt-1 font-medium">
                    {event.description}
                  </p>
                </div>

                <div>
                  <span className="font-display font-bold text-[11px] uppercase text-[#6e6b7c] block">
                    Key Highlights
                  </span>
                  <ul className="mt-1 space-y-1.5 text-[#1d1b2e] font-medium">
                    {event.keyHighlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#6c233d] font-bold shrink-0">✓</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="font-display font-bold text-[11px] uppercase text-[#6e6b7c] block">
                    Attendance & Location
                  </span>
                  <div className="mt-1 space-y-1 text-[#1d1b2e] font-semibold">
                    <p className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#6c233d]" />
                      <span>{event.attendees}+ engineering students</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#6c233d]" />
                      <span>{event.venue}</span>
                    </p>
                  </div>
                </div>

                <div>
                  <span className="font-display font-bold text-[11px] uppercase text-[#6e6b7c] block">
                    Coordinators
                  </span>
                  <div className="mt-1 space-y-0.5 text-[#6e6b7c] font-medium">
                    {event.coordinators.map((c, i) => (
                      <p key={i}>• {c}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Bar with Filmstrip Thumbnails */}
        <div className="border-t-2 border-[#1d1b2e] bg-white px-4 sm:px-6 py-2.5 z-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            {/* Caption & Index */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-xs font-display font-black bg-[#ffd166] text-[#1d1b2e] border border-[#1d1b2e] tabular-nums">
                  {currentIndex + 1} / {totalMedia}
                </span>
                <h4 className="font-display font-black text-sm text-[#1d1b2e] truncate">
                  {currentMedia.title}
                </h4>
              </div>
              <p className="text-xs text-[#6e6b7c] font-medium truncate mt-0.5">
                {currentMedia.caption}
              </p>
            </div>

            {/* Filmstrip Carousel */}
            <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none shrink-0 max-w-full sm:max-w-md">
              {event.media.map((item, index) => {
                const isActive = index === currentIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setImageError(false);
                      setIsPlaying(false);
                      setCurrentIndex(index);
                      setViewMode('cinema');
                    }}
                    className={`relative w-12 h-9 border-2 border-[#1d1b2e] shrink-0 transition-all cursor-pointer ${
                      isActive
                        ? 'shadow-[3px_3px_0px_#6c233d] -translate-y-0.5 ring-1 ring-[#6c233d]'
                        : 'opacity-70 hover:opacity-100 hover:shadow-[2px_2px_0px_#1d1b2e]'
                    }`}
                    title={item.title}
                  >
                    <img
                      src={item.url}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    {item.type === 'video' && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Play className="w-2.5 h-2.5 text-white fill-white" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
