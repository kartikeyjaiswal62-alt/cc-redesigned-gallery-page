export type MediaCategory = 'image' | 'video';

export interface MediaItem {
  id: string;
  type: MediaCategory;
  url: string;
  thumbnail?: string;
  title: string;
  caption: string;
  photographer?: string;
  duration?: string;
  videoUrl?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
}

export type EventCategory = 
  | 'All'
  | 'Workshops' 
  | 'Hackathons' 
  | 'Competitions' 
  | 'Bootcamps' 
  | 'Meetups' 
  | 'Inductions'
  | 'Tech Talks';

export interface ClubEvent {
  id: string;
  slug: string;
  title: string;
  year: number;
  date: string; // e.g., "18 Sept 2026"
  fullDate: string;
  category: Exclude<EventCategory, 'All'>;
  location: string;
  venue: string;
  attendees: number;
  summary: string;
  description: string;
  keyHighlights: string[];
  coordinators: string[];
  coverImage: string;
  media: MediaItem[];
}

export type ActiveNavTab = 
  | 'Home' 
  | 'Events' 
  | 'Gallery' 
  | 'Projects' 
  | 'Hall of Fame' 
  | 'Resources' 
  | 'Team' 
  | 'Contact';
