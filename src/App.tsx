import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GalleryHero } from './components/GalleryHero';
import { GalleryFilters } from './components/GalleryFilters';
import { EventCard } from './components/EventCard';
import { EventModal } from './components/EventModal';
import { MediaStreamView } from './components/MediaStreamView';
import { SubmitMediaModal } from './components/SubmitMediaModal';
import { OtherPages } from './components/OtherPages';
import { CLUB_EVENTS } from './data/galleryData';
import { ActiveNavTab, ClubEvent, EventCategory } from './types/gallery';
import { Sparkles, AlertCircle, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveNavTab>('Gallery');
  const [selectedEvent, setSelectedEvent] = useState<ClubEvent | null>(null);
  const [modalMediaIndex, setModalMediaIndex] = useState<number>(0);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Filter state
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'events' | 'stream'>('events');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  // Filter events based on active filters
  const filteredEvents = useMemo(() => {
    return CLUB_EVENTS.filter((ev) => {
      if (selectedYear !== 'all' && ev.year !== selectedYear) {
        return false;
      }
      if (selectedCategory !== 'All' && ev.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = ev.title.toLowerCase().includes(query);
        const matchesDesc = ev.description.toLowerCase().includes(query);
        const matchesVenue = ev.venue.toLowerCase().includes(query);
        const matchesLead = ev.coordinators.some((c) => c.toLowerCase().includes(query));
        const matchesHighlights = ev.keyHighlights.some((h) => h.toLowerCase().includes(query));
        if (!matchesTitle && !matchesDesc && !matchesVenue && !matchesLead && !matchesHighlights) {
          return false;
        }
      }
      return true;
    });
  }, [selectedYear, selectedCategory, searchQuery]);

  // Group filtered events by year (chronological, descending)
  const eventsByYear = useMemo(() => {
    const grouped: { [year: number]: ClubEvent[] } = {};
    const allYears = Array.from(new Set(CLUB_EVENTS.map((e) => e.year))).sort((a, b) => b - a);

    allYears.forEach((year) => {
      grouped[year] = filteredEvents.filter((e) => e.year === year);
    });

    return grouped;
  }, [filteredEvents]);

  const handleOpenEventModal = (event: ClubEvent, initialIndex: number = 0) => {
    setSelectedEvent(event);
    setModalMediaIndex(initialIndex);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#faf7ef] text-[#1d1b2e] flex flex-col font-body selection:bg-[#ffd166] selection:text-[#1d1b2e]">
      {/* Toast Notification Container with ccfoet styling */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md bg-[#ffd166] text-[#1d1b2e] p-4 border-2 border-[#1d1b2e] shadow-[5px_5px_0px_#1d1b2e] animate-in slide-in-from-bottom-3 duration-200 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-[#6c233d] shrink-0 mt-0.5" />
          <p className="text-xs font-bold leading-relaxed">{toastMessage}</p>
        </div>
      )}

      {/* Official Top Bar Navigation matching ccfoet.vercel.app */}
      <Navbar
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSubmitMediaClick={() => setIsSubmitModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'Gallery' ? (
          <div className="page-grid">
            {/* Gallery Hero Section matching ccfoet page-hero */}
            <GalleryHero />

            {/* Gallery Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
              {/* Interactive Filters & Search */}
              <GalleryFilters
                selectedYear={selectedYear}
                onYearChange={setSelectedYear}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                filteredCount={filteredEvents.length}
                totalCount={CLUB_EVENTS.length}
              />

              {/* Empty state if search returned no results */}
              {filteredEvents.length === 0 ? (
                <div className="py-20 text-center space-y-4 max-w-md mx-auto">
                  <div className="w-12 h-12 bg-white border-2 border-[#1d1b2e] shadow-[3px_3px_0px_#1d1b2e] flex items-center justify-center mx-auto text-[#6c233d]">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-black text-xl text-[#6c233d]">
                    No matching events found
                  </h3>
                  <p className="text-sm text-[#6e6b7c] font-medium">
                    Try adjusting your search keywords, selecting another topic, or checking all years.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedYear('all');
                      setSelectedCategory('All');
                      setSearchQuery('');
                    }}
                    className="btn-brutal-yellow px-5 py-2.5 text-xs cursor-pointer"
                  >
                    Reset all filters
                  </button>
                </div>
              ) : viewMode === 'stream' ? (
                /* Media Stream View */
                <MediaStreamView
                  events={filteredEvents}
                  onOpenMedia={handleOpenEventModal}
                />
              ) : (
                /* Chronological Year by Year Event Cards Layout */
                <div className="space-y-12 sm:space-y-14 pt-8">
                  {Object.entries(eventsByYear).map(([yearStr, yearEvents]) => {
                    const yearNum = Number(yearStr);
                    if (selectedYear !== 'all' && selectedYear !== yearNum) return null;
                    if (yearEvents.length === 0) return null;

                    return (
                      <section key={yearStr} className="space-y-6">
                        {/* Year Heading Section Header */}
                        <div className="flex items-center justify-between border-b-2 border-[#1d1b2e] pb-3">
                          <div className="flex items-center gap-3">
                            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#6c233d] tracking-tight">
                              {yearNum}
                            </h2>
                            <span className="text-[#1d1b2e]/30 font-bold" aria-hidden="true">/</span>
                            <span className="text-xs font-display font-extrabold uppercase px-2 py-0.5 bg-[#ffd166] text-[#1d1b2e] border border-[#1d1b2e]">
                              {yearEvents.length} {yearEvents.length === 1 ? 'EVENT' : 'EVENTS'}
                            </span>
                          </div>

                          <span className="text-xs font-semibold text-[#6e6b7c] hidden sm:inline">
                            Faculty of Engineering & Technology, LU
                          </span>
                        </div>

                        {/* Event Card Grid: 4 on large desktop, 3 on md, 2 on sm, 1 on mobile */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
                          {yearEvents.map((event) => (
                            <EventCard
                              key={event.id}
                              event={event}
                              onSelectEvent={(ev) => handleOpenEventModal(ev, 0)}
                            />
                          ))}
                        </div>
                      </section>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Other cohesive pages when navigating Home, Events, Projects, etc. */
          <OtherPages
            currentTab={activeTab}
            onExploreGallery={() => setActiveTab('Gallery')}
            events={CLUB_EVENTS}
          />
        )}
      </main>

      {/* Floating Scroll to Top helper with ccfoet brutalist styling */}
      <div className="fixed bottom-6 left-6 z-30">
        <button
          onClick={scrollToTop}
          className="p-2.5 bg-white text-[#1d1b2e] border-2 border-[#1d1b2e] shadow-[3px_3px_0px_#1d1b2e] hover:shadow-[5px_5px_0px_#1d1b2e] hover:-translate-y-0.5 transition-all cursor-pointer"
          title="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4 stroke-[3]" />
        </button>
      </div>

      {/* The Central Lightbox Modal */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          initialMediaIndex={modalMediaIndex}
          onClose={() => setSelectedEvent(null)}
        />
      )}

      {/* Contribute Media Modal for Community Members */}
      <SubmitMediaModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onSuccess={showToast}
      />

      {/* Official Footer matching ccfoet theme */}
      <Footer onNavClick={(tab) => setActiveTab(tab)} />
    </div>
  );
}
