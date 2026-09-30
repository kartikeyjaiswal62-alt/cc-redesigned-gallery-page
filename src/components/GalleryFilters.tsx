import React from 'react';
import { Search, X, Grid, LayoutGrid } from 'lucide-react';
import { EventCategory } from '../types/gallery';
import { AVAILABLE_YEARS, EVENT_CATEGORIES } from '../data/galleryData';

interface GalleryFiltersProps {
  selectedYear: number | 'all';
  onYearChange: (year: number | 'all') => void;
  selectedCategory: EventCategory;
  onCategoryChange: (cat: EventCategory) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  viewMode: 'events' | 'stream';
  onViewModeChange: (mode: 'events' | 'stream') => void;
  filteredCount: number;
  totalCount: number;
}

export const GalleryFilters: React.FC<GalleryFiltersProps> = ({
  selectedYear,
  onYearChange,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange,
  filteredCount,
  totalCount
}) => {
  const hasActiveFilters = selectedYear !== 'all' || selectedCategory !== 'All' || searchQuery.trim() !== '';

  const clearAllFilters = () => {
    onYearChange('all');
    onCategoryChange('All');
    onSearchChange('');
  };

  return (
    <div className="py-6 space-y-4 border-b-2 border-[#1d1b2e]/10">
      {/* Search & Year Bar & View Mode */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search input matching .events-search from ccfoet */}
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6e6b7c]">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search events, workshops, hackathons…"
            className="w-full pl-10 pr-9 py-2.5 bg-white text-sm text-[#1d1b2e] placeholder-[#6e6b7c] border-2 border-[#1d1b2e] shadow-[2px_2px_0px_#1d1b2e] focus:outline-none focus:shadow-[3px_3px_0px_#6c233d] transition-all font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#6e6b7c] hover:text-[#1d1b2e]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Year Filter Tabs matching .ftab */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
          <span className="text-xs font-display font-bold uppercase tracking-wider text-[#6e6b7c] mr-1 shrink-0">
            Year:
          </span>
          <button
            onClick={() => onYearChange('all')}
            className={`cc-ftab ${selectedYear === 'all' ? 'active' : ''}`}
          >
            All Years
          </button>
          {AVAILABLE_YEARS.map((year) => (
            <button
              key={year}
              onClick={() => onYearChange(year)}
              className={`cc-ftab ${selectedYear === year ? 'active' : ''}`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* View mode toggle */}
        <div className="hidden sm:flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => onViewModeChange('events')}
            className={`px-3 py-2 text-xs font-bold font-display border-2 border-[#1d1b2e] transition-all flex items-center gap-1.5 cursor-pointer ${
              viewMode === 'events'
                ? 'bg-[#1d1b2e] text-white shadow-[2px_2px_0px_#6c233d]'
                : 'bg-white text-[#1d1b2e] shadow-[2px_2px_0px_#1d1b2e] hover:bg-[#faf7ef]'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>Event Cards</span>
          </button>
          <button
            onClick={() => onViewModeChange('stream')}
            className={`px-3 py-2 text-xs font-bold font-display border-2 border-[#1d1b2e] transition-all flex items-center gap-1.5 cursor-pointer ${
              viewMode === 'stream'
                ? 'bg-[#1d1b2e] text-white shadow-[2px_2px_0px_#6c233d]'
                : 'bg-white text-[#1d1b2e] shadow-[2px_2px_0px_#1d1b2e] hover:bg-[#faf7ef]'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Media Stream</span>
          </button>
        </div>
      </div>

      {/* Category / Topic Filters matching ccfoet filter-bar */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-display font-bold uppercase tracking-wider text-[#6e6b7c] mr-1 shrink-0">
            Category:
          </span>
          {EVENT_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => onCategoryChange(category as EventCategory)}
                className={`cc-ftab ${isActive ? 'active' : ''}`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="shrink-0 text-xs font-bold text-[#6c233d] hover:underline flex items-center gap-1 cursor-pointer font-display"
          >
            <X className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Feedback counts */}
      <div className="flex items-center justify-between text-xs text-[#6e6b7c] font-medium pt-1">
        <span>
          Showing <strong className="text-[#1d1b2e] font-bold tabular-nums">{filteredCount}</strong> of{' '}
          <span className="tabular-nums">{totalCount}</span> events
          {selectedYear !== 'all' ? ` in ${selectedYear}` : ''}
          {selectedCategory !== 'All' ? ` under ${selectedCategory}` : ''}
        </span>
        {searchQuery && (
          <span>
            matching <strong className="text-[#6c233d]">"{searchQuery}"</strong>
          </span>
        )}
      </div>
    </div>
  );
};
