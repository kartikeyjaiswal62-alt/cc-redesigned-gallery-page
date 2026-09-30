import React from 'react';
import { ActiveNavTab, ClubEvent } from '../types/gallery';
import { ArrowRight, Trophy, BookOpen, MapPin, Mail, ExternalLink, Sparkles } from 'lucide-react';

interface OtherPagesProps {
  currentTab: ActiveNavTab;
  onExploreGallery: () => void;
  events: ClubEvent[];
}

export const OtherPages: React.FC<OtherPagesProps> = ({
  currentTab,
  onExploreGallery,
  events
}) => {
  switch (currentTab) {
    case 'Home':
      return (
        <div>
          {/* Authentic ccfoet Hero Section */}
          <section className="hero-maroon text-center py-20 px-6 sm:px-12 relative overflow-hidden text-white border-b-3 border-[#1d1b2e]">
            <div className="max-w-4xl mx-auto space-y-6 relative z-10">
              <p className="text-white/85 text-xs sm:text-sm font-bold tracking-widest uppercase font-body">
                University of Lucknow
              </p>

              <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl tracking-tight text-white leading-none">
                Coding <span className="text-[#ffd166]">Connois</span><span className="text-[#f7b8c4]">seurs</span>
              </h1>

              {/* Word Definition Card from ccfoet */}
              <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-sm border-2 border-white/30 p-6 rounded-none text-left space-y-2 shadow-[4px_4px_0px_#1d1b2e]">
                <p className="text-xs uppercase tracking-wider text-[#ffd166] font-display font-black">
                  noun
                </p>
                <p className="font-display font-black text-xl text-white">
                  con·nois·seur <span className="text-sm font-normal text-white/70">/ˌkɒn.əˈsɜːr/</span>
                </p>
                <p className="text-sm text-white/90 leading-relaxed font-medium">
                  Someone who cares enough about a craft to help others fall in love with it too. That's the whole idea behind this club — passing that love forward, one student at a time.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  onClick={onExploreGallery}
                  className="btn-brutal-yellow px-8 py-3.5 text-base cursor-pointer"
                >
                  Explore Redesigned Gallery →
                </button>
              </div>

              {/* Philosophy Note from ccfoet */}
              <div className="pt-8 text-center max-w-lg mx-auto border-t border-white/20">
                <p className="text-xs font-display font-extrabold uppercase text-[#ffd166] tracking-wider mb-1">
                  Our Philosophy
                </p>
                <p className="text-sm text-white/90 leading-relaxed font-medium italic">
                  "We strive — always — to give students the most we can. If it helps you <em>learn</em>, <em>grow</em>, or <em>step up</em>, we're already reaching for it."
                </p>
              </div>
            </div>
          </section>

          {/* Featured Gallery Callout */}
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="bg-white border-3 border-[#1d1b2e] shadow-[8px_8px_0px_#1d1b2e] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-block px-2.5 py-0.5 text-xs font-display font-black uppercase bg-[#ffd166] text-[#1d1b2e] border-2 border-[#1d1b2e]">
                  NEW FEATURE
                </div>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-[#6c233d]">
                  Brand New Event-Based Media Gallery
                </h2>
                <p className="text-[#6e6b7c] text-base leading-relaxed font-medium">
                  Check out all photos, 4K video clips, and documented moments from our Git workshops, Web Dev bootcamps, and CodeFiesta hackathons across 2026, 2025, and 2024.
                </p>
              </div>
              <button
                onClick={onExploreGallery}
                className="btn-brutal-maroon px-8 py-4 text-base font-display shrink-0 cursor-pointer"
              >
                Open Gallery Now →
              </button>
            </div>
          </div>
        </div>
      );

    case 'Events':
      return (
        <div className="page-grid py-8 px-4 sm:px-8 max-w-6xl mx-auto space-y-8">
          <div className="border-b-2 border-[#1d1b2e] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-display font-black text-4xl sm:text-5xl text-[#6c233d]">
                Events
              </h1>
              <p className="text-[#6e6b7c] text-base mt-2 font-medium">
                Register for upcoming workshops and hackathons, or explore media from past gatherings.
              </p>
            </div>
            <button
              onClick={onExploreGallery}
              className="btn-brutal-yellow px-5 py-2 text-xs font-display cursor-pointer shrink-0"
            >
              Browse Event Photo Gallery →
            </button>
          </div>

          <div className="space-y-4">
            {events.map((ev) => (
              <div
                key={ev.id}
                className="bg-white border-2 border-[#1d1b2e] shadow-[4px_4px_0px_#1d1b2e] p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex items-center gap-2 text-xs font-bold">
                    <span className="text-[#6c233d]">{ev.date}</span>
                    <span className="text-[#6e6b7c]">·</span>
                    <span className="text-[#6e6b7c]">{ev.venue}</span>
                    <span className="text-[#6e6b7c]">·</span>
                    <span className="px-1.5 py-0.5 bg-[#ffd166] text-[#1d1b2e] border border-[#1d1b2e] font-display text-[10px]">
                      {ev.category}
                    </span>
                  </div>
                  <h3 className="font-display font-black text-xl text-[#1d1b2e]">{ev.title}</h3>
                  <p className="text-xs sm:text-sm text-[#6e6b7c] font-medium">{ev.summary}</p>
                </div>
                <button
                  onClick={onExploreGallery}
                  className="btn-brutal-white px-4 py-2 text-xs font-display self-start md:self-auto cursor-pointer"
                >
                  View Event Photos ({ev.media.length})
                </button>
              </div>
            ))}
          </div>
        </div>
      );

    case 'Projects':
      return (
        <div className="page-grid py-8 px-4 sm:px-8 max-w-6xl mx-auto space-y-8">
          <div className="border-b-2 border-[#1d1b2e] pb-6">
            <h1 className="font-display font-black text-4xl sm:text-5xl text-[#6c233d]">
              Projects
            </h1>
            <p className="text-[#6e6b7c] text-base mt-2 font-medium">
              Open source tools, hackathon platforms, and student libraries built by Coding Connoisseurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-[#1d1b2e] shadow-[5px_5px_0px_#1d1b2e] p-6 space-y-4">
              <span className="px-2 py-0.5 text-xs font-display font-extrabold bg-[#6fcf97] text-[#1d1b2e] border border-[#1d1b2e]">
                ACTIVE REPOSITORY
              </span>
              <h3 className="font-display font-black text-2xl text-[#1d1b2e]">CodeFiesta Portal</h3>
              <p className="text-sm text-[#6e6b7c] font-medium leading-relaxed">
                The open-source hackathon registration, submission, and automated judge scoring portal used for CodeFiesta 2026.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1d1b2e] pt-3 border-t border-[#1d1b2e]/10">
                <span>TypeScript</span> · <span>Next.js</span> · <span>PostgreSQL</span>
              </div>
            </div>

            <div className="bg-white border-2 border-[#1d1b2e] shadow-[5px_5px_0px_#1d1b2e] p-6 space-y-4">
              <span className="px-2 py-0.5 text-xs font-display font-extrabold bg-[#ffd166] text-[#1d1b2e] border border-[#1d1b2e]">
                FEATURED CHALLENGE
              </span>
              <h3 className="font-display font-black text-2xl text-[#1d1b2e]">Readme-Challenge Repos</h3>
              <p className="text-sm text-[#6e6b7c] font-medium leading-relaxed">
                Standardized repository scaffolds, contribution templates, and GitHub action automation workflows for engineering students.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1d1b2e] pt-3 border-t border-[#1d1b2e]/10">
                <span>Markdown</span> · <span>GitHub Actions</span> · <span>DevOps</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'Hall of Fame':
      return (
        <div className="page-grid py-8 px-4 sm:px-8 max-w-6xl mx-auto space-y-8">
          <div className="border-b-2 border-[#1d1b2e] pb-6">
            <h1 className="font-display font-black text-4xl sm:text-5xl text-[#6c233d]">
              Hall of Fame
            </h1>
            <p className="text-[#6e6b7c] text-base mt-2 font-medium">
              Celebrating FOET students who distinguished themselves in GSoC, national hackathons, and ICPC.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Google Summer of Code',
                tag: 'GSoC Scholars',
                desc: 'Students selected across Open Source organizations including Apache, Debian, and LibreOffice.'
              },
              {
                title: 'ICPC Regional Finalists',
                tag: 'Competitive Programming',
                desc: 'Represented University of Lucknow at Amritapuri ICPC Regional Onsite Contests.'
              },
              {
                title: 'Smart India Hackathon',
                tag: 'National Winners',
                desc: 'Secured 1st place in Smart Governance Ministry track with automated grievance AI.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-[#1d1b2e] shadow-[4px_4px_0px_#1d1b2e] p-6 space-y-3"
              >
                <span className="px-2 py-0.5 text-xs font-display font-extrabold bg-[#ffd166] text-[#1d1b2e] border border-[#1d1b2e]">
                  {item.tag}
                </span>
                <h3 className="font-display font-black text-xl text-[#1d1b2e]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#6e6b7c] font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 'Resources':
      return (
        <div className="page-grid py-8 px-4 sm:px-8 max-w-6xl mx-auto space-y-8">
          <div className="border-b-2 border-[#1d1b2e] pb-6">
            <h1 className="font-display font-black text-4xl sm:text-5xl text-[#6c233d]">
              Resources
            </h1>
            <p className="text-[#6e6b7c] text-base mt-2 font-medium">
              Roadmaps, problem lists, and curated notes for coding enthusiasts at FoET-LU.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'DSA Roadmap (150 Questions)',
                tag: 'Algorithms',
                desc: 'Structured progression from Arrays & Strings to Dynamic Programming and Graph traversals.'
              },
              {
                title: 'Modern Full-Stack Web',
                tag: 'Web Dev',
                desc: 'Zero-to-production guide covering React 19, TypeScript, Tailwind, Node.js, and Vercel.'
              },
              {
                title: 'Open Source Handbook',
                tag: 'Open Source',
                desc: 'First pull request guide, issue claiming etiquette, and GSoC proposal writing secrets.'
              }
            ].map((res, i) => (
              <div
                key={i}
                className="bg-white border-2 border-[#1d1b2e] shadow-[4px_4px_0px_#1d1b2e] p-6 space-y-3"
              >
                <span className="px-2 py-0.5 text-xs font-display font-extrabold bg-[#f7b8c4] text-[#1d1b2e] border border-[#1d1b2e]">
                  {res.tag}
                </span>
                <h3 className="font-display font-black text-lg text-[#1d1b2e]">{res.title}</h3>
                <p className="text-xs sm:text-sm text-[#6e6b7c] font-medium leading-relaxed">{res.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 'Team':
      return (
        <div className="page-grid py-8 px-4 sm:px-8 max-w-6xl mx-auto space-y-8">
          <div className="border-b-2 border-[#1d1b2e] pb-6">
            <h1 className="font-display font-black text-4xl sm:text-5xl text-[#6c233d]">
              Team
            </h1>
            <p className="text-[#6e6b7c] text-base mt-2 font-medium">
              The student organizers and domain leads behind Coding Connoisseurs FOET.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Kartikey Jaiswal', role: 'Club Lead & Technical Organizer' },
              { name: 'Ananya Singh', role: 'AI & Data Science Head' },
              { name: 'Harsh Vardhan', role: 'Competitive Programming Head' },
              { name: 'Divyansh Mishra', role: 'Web Development Lead' }
            ].map((member, i) => (
              <div
                key={i}
                className="bg-white border-2 border-[#1d1b2e] shadow-[4px_4px_0px_#1d1b2e] p-5 text-center space-y-2"
              >
                <div className="w-16 h-16 bg-[#6c233d] text-white font-display font-black text-2xl flex items-center justify-center mx-auto border-2 border-[#1d1b2e] shadow-[3px_3px_0px_#ffd166]">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-display font-black text-base text-[#1d1b2e]">{member.name}</h3>
                <p className="text-xs font-bold text-[#6c233d]">{member.role}</p>
                <p className="text-[11px] text-[#6e6b7c] font-medium">Faculty of Engineering & Technology</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 'Contact':
      return (
        <div className="page-grid py-8 px-4 sm:px-8 max-w-4xl mx-auto space-y-8">
          <div className="border-b-2 border-[#1d1b2e] pb-6">
            <h1 className="font-display font-black text-4xl sm:text-5xl text-[#6c233d]">
              Contact
            </h1>
            <p className="text-[#6e6b7c] text-base mt-2 font-medium">
              Get in touch with Coding Connoisseurs leads for collaborations, sponsorships, or queries.
            </p>
          </div>

          <div className="bg-white border-3 border-[#1d1b2e] shadow-[6px_6px_0px_#1d1b2e] p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <span className="text-xs font-display font-extrabold uppercase text-[#6e6b7c]">
                  Campus Location
                </span>
                <p className="text-sm font-semibold text-[#1d1b2e] leading-snug">
                  Faculty of Engineering & Technology, University of Lucknow, New Campus, Jankipuram, Lucknow, UP 226031
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-display font-extrabold uppercase text-[#6e6b7c]">
                  Email Us
                </span>
                <p className="text-sm font-bold text-[#6c233d]">
                  codingconnoisseurs.foet@gmail.com
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#faf7ef] border-2 border-[#1d1b2e] text-xs font-medium text-[#1d1b2e]">
              Looking for workshop photos or wanting to contribute your captures? Visit our{' '}
              <button
                onClick={onExploreGallery}
                className="font-display font-extrabold text-[#6c233d] underline cursor-pointer"
              >
                Gallery
              </button>{' '}
              to see moments from all past events.
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
