import { ClubEvent } from '../types/gallery';

// Generated authentic workshop & hackathon images
const gitWorkshopCover = '/src/assets/images/event_git_github_workshop_1790789748786.jpg';
const hackathonCover = '/src/assets/images/event_hackathon_codefiesta_1790789763373.jpg';
const aimlWorkshopCover = '/src/assets/images/event_aiml_workshop_1790789775413.jpg';
const webdevBootcampCover = '/src/assets/images/event_webdev_bootcamp_1790789790105.jpg';
const compProgCover = '/src/assets/images/event_competitive_programming_1790789801610.jpg';

export const CLUB_EVENTS: ClubEvent[] = [
  // ================= 2026 EVENTS =================
  {
    id: 'aiml-workshop-2026',
    slug: 'aiml-workshop-2026',
    title: 'AI/ML Workshop',
    year: 2026,
    date: '18 Sept 2026',
    fullDate: 'September 18, 2026',
    category: 'Workshops',
    location: 'FOET New Campus, Lucknow',
    venue: 'Seminar Hall 1, Faculty of Engineering & Technology',
    attendees: 145,
    summary: 'Hands-on exploration of Machine Learning models, Neural Networks, and practical Agentic workflows.',
    description: 'A deep-dive workshop organized by Coding Connoisseurs focusing on modern Artificial Intelligence and Machine Learning fundamentals. FOET students built and deployed real neural classification pipelines and learned about LLM orchestration.',
    keyHighlights: [
      'Interactive session on Foundation Models & Fine-Tuning',
      'Over 145 students actively participating with live Jupyter notebooks',
      'Live demonstration of Agentic reasoning pipelines by senior mentors',
      'Certificate distribution and open Q&A with tech alumni'
    ],
    coordinators: ['Kartikey Jaiswal (Lead)', 'Priya Sharma (AI Mentor)', 'Aman Verma (Event Head)'],
    coverImage: aimlWorkshopCover,
    media: [
      {
        id: 'aiml-1',
        type: 'image',
        url: aimlWorkshopCover,
        title: 'Keynote & Architecture Overview',
        caption: 'Introduction to neural networks and transformer architecture at Seminar Hall 1, FOET Lucknow.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'aiml-2',
        type: 'video',
        url: aimlWorkshopCover,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        duration: '0:45',
        title: 'Live Agent Demo Recap',
        caption: 'Short video snippet showing real-time autonomous agent reasoning running locally on student rigs.',
        photographer: 'Media Team FOET'
      },
      {
        id: 'aiml-3',
        type: 'image',
        url: compProgCover,
        title: 'Hands-on Coding & Debugging Session',
        caption: 'Participants working in teams to optimize loss functions and train vision classifiers.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'aiml-4',
        type: 'image',
        url: webdevBootcampCover,
        title: 'Mentor Guidance at Lab 3',
        caption: 'Senior club leads mentoring first and second year engineering students through PyTorch basics.',
        photographer: 'FOET Tech Society'
      },
      {
        id: 'aiml-5',
        type: 'image',
        url: gitWorkshopCover,
        title: 'Audience Interaction & Doubts',
        caption: 'Enthusiastic crowd asking questions regarding ML deployment and HuggingFace pipelines.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'aiml-6',
        type: 'image',
        url: hackathonCover,
        title: 'Closing Ceremony & Certificates',
        caption: 'Dean and faculty advisor presenting merit recognitions to top workshop project teams.',
        photographer: 'University of Lucknow Media Cell'
      },
      {
        id: 'aiml-7',
        type: 'video',
        url: aimlWorkshopCover,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        duration: '1:15',
        title: 'Workshop Highlights Reel',
        caption: 'Full recap reel showcasing the energy, student code submissions, and mentor speeches.',
        photographer: 'CC Media Cell'
      }
    ]
  },
  {
    id: 'git-github-workshop-2026',
    slug: 'git-github-workshop-2026',
    title: 'Git & GitHub Workshop',
    year: 2026,
    date: '28 Aug 2026',
    fullDate: 'August 28, 2026',
    category: 'Workshops',
    location: 'FOET New Campus, Lucknow',
    venue: 'Computer Center Lab 2, FOET-LU',
    attendees: 160,
    summary: 'Mastering version control, branch management, merge conflict resolution, and open-source contributions.',
    description: 'An intensive, hands-on workshop guiding students from their first "git init" all the way to resolving complex merge conflicts, rebasing, and collaborating on production open-source repositories.',
    keyHighlights: [
      '100% hands-on terminal command line training',
      'Step-by-step fork, branch, pull request lifecycle',
      'Simulated group merge conflict resolution tournament',
      'Setting up automated GitHub Actions CI/CD workflows'
    ],
    coordinators: ['Rohan Gupta (Tech Lead)', 'Ananya Singh (Core Team)', 'Mohit Kumar (Open Source Head)'],
    coverImage: gitWorkshopCover,
    media: [
      {
        id: 'git-1',
        type: 'image',
        url: gitWorkshopCover,
        title: 'Computer Lab Workstations Live',
        caption: 'Over 160 students synchronized in Lab 2 pushing their first upstream commits on GitHub.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'git-2',
        type: 'video',
        url: gitWorkshopCover,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        duration: '0:35',
        title: 'Merge Conflict Challenge Snippet',
        caption: 'Exciting moments during the 15-minute speed merge conflict resolution competition.',
        photographer: 'Media Team FOET'
      },
      {
        id: 'git-3',
        type: 'image',
        url: webdevBootcampCover,
        title: 'One-on-One Troubleshooting',
        caption: 'Mentors helping freshman engineers set up SSH keys and configure GPG commit signing.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'git-4',
        type: 'image',
        url: compProgCover,
        title: 'Interactive Command Challenge',
        caption: 'Live CLI terminal quiz testing knowledge of interactive rebase and cherry-pick.',
        photographer: 'FOET Tech Society'
      },
      {
        id: 'git-5',
        type: 'image',
        url: hackathonCover,
        title: 'Open Source Community Rollout',
        caption: 'Announcement of FOET GitHub organization repos and hacktoberfest preparation.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'git-6',
        type: 'image',
        url: aimlWorkshopCover,
        title: 'Batch Group Photo',
        caption: 'Participants and mentors holding up their Git Cheat Sheets at the conclusion.',
        photographer: 'Media Cell FOET-LU'
      }
    ]
  },
  {
    id: 'codefiesta-hackathon-2026',
    slug: 'codefiesta-hackathon-2026',
    title: 'CodeFiesta Hackathon 2026',
    year: 2026,
    date: '14 July 2026',
    fullDate: 'July 14-15, 2026',
    category: 'Hackathons',
    location: 'FOET Campus Auditorium & Labs',
    venue: 'FOET Innovation Hub & Multi-Purpose Hall',
    attendees: 320,
    summary: 'The flagship 24-hour hackathon bringing together over 80 teams to solve real-world community problems.',
    description: 'CodeFiesta 2026 was the largest collegiate hackathon in Lucknow University engineering history. 80+ multidisciplinary teams worked overnight across tracks including Smart Governance, HealthTech, EduTech, and AI for Social Good.',
    keyHighlights: [
      '24 hours of non-stop building, coffee, and mentorship',
      '₹1,00,000+ total prize pool and cloud credit sponsors',
      'Mid-night gaming and trivia relaxation rounds',
      'Jury panel consisting of FAANG alumni and senior startup founders'
    ],
    coordinators: ['Kartikey Jaiswal (Chief Organizer)', 'Shreya Srivastava (Logistics)', 'Ayush Pandey (Technical Head)'],
    coverImage: hackathonCover,
    media: [
      {
        id: 'hack-1',
        type: 'image',
        url: hackathonCover,
        title: 'Midnight Sprint at Innovation Hub',
        caption: 'Teams burning the midnight oil fine-tuning React frontends and Python microservices at 2:30 AM.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'hack-2',
        type: 'video',
        url: hackathonCover,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
        duration: '1:02',
        title: '24-Hour Hackathon Time-lapse',
        caption: 'High-energy time-lapse capturing the entire 24 hours of hacking from kickoff to final pitches.',
        photographer: 'Media Team FOET'
      },
      {
        id: 'hack-3',
        type: 'image',
        url: webdevBootcampCover,
        title: 'Jury Evaluation & Pitching',
        caption: 'Team "AlgoRiders" demonstrating their offline-first emergency relief dispatch prototype.',
        photographer: 'FOET Tech Society'
      },
      {
        id: 'hack-4',
        type: 'image',
        url: compProgCover,
        title: 'Hardware & IoT Track Prototype',
        caption: 'Team deploying ESP32 sensor cluster for smart energy monitoring across university hostels.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'hack-5',
        type: 'image',
        url: aimlWorkshopCover,
        title: 'Midnight Refreshments & Energizers',
        caption: 'Volunteers serving hot tea, coffee, and pizza to energized hackers.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'hack-6',
        type: 'image',
        url: gitWorkshopCover,
        title: 'Champions Podium & Trophy Presentation',
        caption: 'The winning teams celebrating with grand trophies and sponsored developer goodie bags.',
        photographer: 'University of Lucknow Media Cell'
      }
    ]
  },
  {
    id: 'webdev-bootcamp-2026',
    slug: 'webdev-bootcamp-2026',
    title: 'Web Development Bootcamp',
    year: 2026,
    date: '05 May 2026',
    fullDate: 'May 5-7, 2026',
    category: 'Bootcamps',
    location: 'FOET New Campus, Lucknow',
    venue: 'Computer Science Department Labs 1 & 2',
    attendees: 180,
    summary: 'A 3-day intensive zero-to-production bootcamp building modern full-stack web applications.',
    description: 'From semantic HTML and modern CSS flexbox/grid to TypeScript, React, Tailwind, and Node.js REST APIs. Every attendee deployed their first portfolio project and collaborative team app to Vercel.',
    keyHighlights: [
      'Three dedicated tracks: UI/UX, Frontend React, and Backend Node/Express',
      'Real-world project building: Personal Dev Portfolio & Community Event Tracker',
      'Pair-programming sprint on day three with live code reviews',
      'Free hosting & domain setup vouchers provided to all students'
    ],
    coordinators: ['Divyansh Mishra (Web Lead)', 'Ritu Raj (Frontend Lead)', 'Tanmay Saxena (Backend Lead)'],
    coverImage: webdevBootcampCover,
    media: [
      {
        id: 'web-1',
        type: 'image',
        url: webdevBootcampCover,
        title: 'Component Architecture Workshop',
        caption: 'Exploring modern UI composition and responsive layout design in CS Department Lab 1.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'web-2',
        type: 'video',
        url: webdevBootcampCover,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        duration: '0:50',
        title: 'Live Project Deployments Showreel',
        caption: 'Students cheering as their live production websites go live on custom subdomains.',
        photographer: 'Media Team FOET'
      },
      {
        id: 'web-3',
        type: 'image',
        url: gitWorkshopCover,
        title: 'Mentors Conducting Live Code Audits',
        caption: 'Third-year leads reviewing accessibility, semantic tags, and performance benchmarks.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'web-4',
        type: 'image',
        url: compProgCover,
        title: 'CSS Grid & Flexbox Mastery Challenge',
        caption: 'Interactive visual layout puzzle competition with instantaneous browser feedback.',
        photographer: 'FOET Tech Society'
      },
      {
        id: 'web-5',
        type: 'image',
        url: hackathonCover,
        title: 'Full-Stack Integration Showcase',
        caption: 'Connecting client-side state hooks with MongoDB and serverless backend handlers.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'web-6',
        type: 'image',
        url: aimlWorkshopCover,
        title: 'Cohort Graduation & Badges',
        caption: 'Certified bootcamp graduates proudly holding up their verified credential badges.',
        photographer: 'University of Lucknow Media Cell'
      }
    ]
  },
  {
    id: 'algorithmic-arena-2026',
    slug: 'algorithmic-arena-2026',
    title: 'Coding Contest: Algorithmic Arena',
    year: 2026,
    date: '12 Apr 2026',
    fullDate: 'April 12, 2026',
    category: 'Competitions',
    location: 'FOET Computer Labs',
    venue: 'Central Computing Facility, FOET-LU',
    attendees: 210,
    summary: 'A fast-paced 3-hour competitive programming contest hosted on our customized HackerRank arena.',
    description: 'Solving complex dynamic programming, graph theory, number theory, and data structure problems. Over 200 undergraduate engineers battled on an ICPC-style live scoreboard with balloon penalties.',
    keyHighlights: [
      'ICPC-style contest environment with real-time dynamic leaderboard',
      '6 carefully curated algorithmic problems ranging from Div3 to Div1 difficulty',
      'Immediate editorial breakdown and problem walk-through post contest',
      'Cash prizes and Codeforces/LeetCode merchandise for top 5 ranks'
    ],
    coordinators: ['Harsh Vardhan (CP Lead)', 'Aditya Narang (Problem Setter)', 'Kavya Sahu (Editorial Lead)'],
    coverImage: compProgCover,
    media: [
      {
        id: 'cp-1',
        type: 'image',
        url: compProgCover,
        title: 'The Arena in Full Throttle',
        caption: 'Tense silence in the Central Computing Facility as rank lists shift by seconds.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'cp-2',
        type: 'video',
        url: compProgCover,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        duration: '0:42',
        title: 'Leaderboard Freeze & Final Countdown',
        caption: 'The dramatic final 10 minutes of the contest when the live scoreboard froze.',
        photographer: 'Media Team FOET'
      },
      {
        id: 'cp-3',
        type: 'image',
        url: aimlWorkshopCover,
        title: 'Problem Editorial Session',
        caption: 'Lead problem setter Aditya walking through the $O(N \\log N)$ segment tree solution on blackboard.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'cp-4',
        type: 'image',
        url: gitWorkshopCover,
        title: 'Top First-Year Performer Award',
        caption: 'Special recognition presented to first-year prodigy solving 4 out of 6 challenging problems.',
        photographer: 'FOET Tech Society'
      },
      {
        id: 'cp-5',
        type: 'image',
        url: webdevBootcampCover,
        title: 'Post-Contest Strategy Discussion',
        caption: 'Participants discussing edge-cases, memory constraints, and time limits over tea.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'cp-6',
        type: 'image',
        url: hackathonCover,
        title: 'Top 3 Podium Winners',
        caption: 'Grand champions posing with golden keyboards and commendation scrolls.',
        photographer: 'University of Lucknow Media Cell'
      }
    ]
  },
  {
    id: 'open-source-meetup-2026',
    slug: 'open-source-meetup-2026',
    title: 'Open Source Meetup',
    year: 2026,
    date: '22 Mar 2026',
    fullDate: 'March 22, 2026',
    category: 'Meetups',
    location: 'FOET Campus Lawns & Amphitheatre',
    venue: 'FOET Open Amphitheatre, University of Lucknow',
    attendees: 110,
    summary: 'A casual, invigorating tech circle discussing GSoC, Linux kernels, and public digital goods.',
    description: 'An informal open-air community meetup under the campus trees. FOET alumni who cleared Google Summer of Code (GSoC) and LFX Mentorship shared their insider application secrets and repo selection methods.',
    keyHighlights: [
      'Panel of 4 past GSoC & Outreachy student scholars from FOET',
      'Step-by-step proposal drafting and open issue claiming guides',
      'Lightning talks on Linux customization, Neovim configs, and Rust tooling',
      'Peer code clinics for first-time open source contributors'
    ],
    coordinators: ['Abhishek Tiwari (Open Source Lead)', 'Sneha Pal (Community Manager)'],
    coverImage: gitWorkshopCover,
    media: [
      {
        id: 'os-1',
        type: 'image',
        url: gitWorkshopCover,
        title: 'Open Air Community Circle',
        caption: 'Students gathered in the amphitheatre listening to GSoC journey stories.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'os-2',
        type: 'video',
        url: gitWorkshopCover,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        duration: '0:30',
        title: 'Lightning Talk Clips',
        caption: 'Fast-paced 3-minute student lightning talks on developer tools and CLI wizardry.',
        photographer: 'Media Team FOET'
      },
      {
        id: 'os-3',
        type: 'image',
        url: hackathonCover,
        title: 'GSoC Proposal Review Station',
        caption: 'Alumni reviewing draft markdown proposals and giving concrete feedback.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'os-4',
        type: 'image',
        url: aimlWorkshopCover,
        title: 'Sticker Swap & Merch Distribution',
        caption: 'Passing out official GitHub, Linux, and Coding Connoisseurs vinyl stickers.',
        photographer: 'FOET Tech Society'
      },
      {
        id: 'os-5',
        type: 'image',
        url: webdevBootcampCover,
        title: 'Networking & Mentorship Circles',
        caption: 'Connecting juniors with seniors working in remote tech roles across India.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'os-6',
        type: 'image',
        url: compProgCover,
        title: 'Evening Sunset Group Capture',
        caption: 'The whole open source community waving from the central amphitheatre stairs.',
        photographer: 'University of Lucknow Media Cell'
      }
    ]
  },
  {
    id: 'tech-talk-ai-agents-2026',
    slug: 'tech-talk-ai-agents-2026',
    title: 'Tech Talk: AI Agents 101',
    year: 2026,
    date: '10 Feb 2026',
    fullDate: 'February 10, 2026',
    category: 'Tech Talks',
    location: 'FOET Main Auditorium',
    venue: 'Auditorium Hall B, Faculty of Engineering & Technology',
    attendees: 230,
    summary: 'Foundational insights into Autonomous AI Agents, Tool-use, and Multi-Agent Collaboration.',
    description: 'An authoritative seminar on how large language models evolve from static completions into goal-seeking autonomous agents capable of web browsing, database querying, and code execution.',
    keyHighlights: [
      'Invited guest speaker: Senior Research Engineer in Generative AI',
      'Real-world system architecture: Memory, Planning, and Tool Execution loops',
      'Live demonstration of multi-agent software engineering workflows',
      'Interactive student Q&A on safety, reliability, and career trajectories'
    ],
    coordinators: ['Kartikey Jaiswal', 'Ananya Singh', 'Prof. Advisor FOET-LU'],
    coverImage: aimlWorkshopCover,
    media: [
      {
        id: 'tt-1',
        type: 'image',
        url: aimlWorkshopCover,
        title: 'Full Auditorium Keynote',
        caption: 'Packed auditorium attentive to the architectural shifts in agentic artificial intelligence.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'tt-2',
        type: 'video',
        url: aimlWorkshopCover,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        duration: '1:10',
        title: 'Keynote Q&A Highlights',
        caption: 'Engaging answers regarding vector retrieval and autonomous multi-agent consensus.',
        photographer: 'Media Team FOET'
      },
      {
        id: 'tt-3',
        type: 'image',
        url: compProgCover,
        title: 'Student Questions at the Mic',
        caption: 'Final year research students inquiring about evaluation benchmarks for agentic systems.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'tt-4',
        type: 'image',
        url: webdevBootcampCover,
        title: 'Faculty Felicitation',
        caption: 'Head of Department presenting formal memento to the guest speaker.',
        photographer: 'FOET Tech Society'
      },
      {
        id: 'tt-5',
        type: 'image',
        url: gitWorkshopCover,
        title: 'Informal Post-Talk Discussion',
        caption: 'Crowd of students continuing discussions around the podium long after conclusion.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'tt-6',
        type: 'image',
        url: hackathonCover,
        title: 'Core Committee Photo with Speaker',
        caption: 'Coding Connoisseurs organizing committee commemorative capture on stage.',
        photographer: 'University of Lucknow Media Cell'
      }
    ]
  },
  {
    id: 'freshers-orientation-2026',
    slug: 'freshers-orientation-2026',
    title: 'Orientation & Induction 2026',
    year: 2026,
    date: '15 Jan 2026',
    fullDate: 'January 15, 2026',
    category: 'Inductions',
    location: 'FOET Main Campus',
    venue: 'Auditorium Hall A, University of Lucknow',
    attendees: 380,
    summary: 'Welcoming the incoming engineering batch into the vibrant coding ecosystem of FOET.',
    description: 'The annual flagship induction session introducing first-year computer science, IT, and engineering students to Coding Connoisseurs, our learning roadmaps, past placements, and upcoming hackathons.',
    keyHighlights: [
      'Over 380 new students inducted into our peer learning community',
      'Roadmap reveal: Web Dev, App Dev, AI/ML, Cloud, and Competitive Programming',
      'Alumni video messages from Google, Microsoft, Amazon, and top startups',
      'Live quiz with immediate Coding Connoisseurs merchandise giveaways'
    ],
    coordinators: ['Kartikey Jaiswal (President)', 'Core Committee FOET-LU'],
    coverImage: hackathonCover,
    media: [
      {
        id: 'ori-1',
        type: 'image',
        url: hackathonCover,
        title: 'Packed Hall A at Orientation Kickoff',
        caption: 'A full house of enthusiastic first-year engineers ready to kickstart their coding journey.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'ori-2',
        type: 'video',
        url: hackathonCover,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        duration: '1:05',
        title: 'Club Anthem & Journey Video',
        caption: 'High-energy teaser video recounting Coding Connoisseurs milestones over the years.',
        photographer: 'Media Team FOET'
      },
      {
        id: 'ori-3',
        type: 'image',
        url: aimlWorkshopCover,
        title: 'Roadmap Presentation',
        caption: 'Domain leads breaking down learning paths from beginner to competitive programmer.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'ori-4',
        type: 'image',
        url: gitWorkshopCover,
        title: 'Interactive Live Quiz Round',
        caption: 'Students using their phones to participate in a high-voltage tech trivia clash.',
        photographer: 'FOET Tech Society'
      },
      {
        id: 'ori-5',
        type: 'image',
        url: webdevBootcampCover,
        title: 'Welcome Kits Distribution',
        caption: 'Handing out orientation folders, curated roadmaps, and club stickers to freshers.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'ori-6',
        type: 'image',
        url: compProgCover,
        title: 'Freshman Batch Grand Photo',
        caption: 'Auditorium standing ovation celebrating the beginning of the academic engineering year.',
        photographer: 'University of Lucknow Media Cell'
      }
    ]
  },

  // ================= 2025 EVENTS =================
  {
    id: 'codefiesta-hackathon-2025',
    slug: 'codefiesta-hackathon-2025',
    title: 'CodeFiesta Hackathon 2025',
    year: 2025,
    date: '18 Oct 2025',
    fullDate: 'October 18-19, 2025',
    category: 'Hackathons',
    location: 'FOET Campus Lucknow',
    venue: 'FOET Multipurpose Hall & Software Labs',
    attendees: 280,
    summary: 'The inaugural edition of our flagship 24-hour inter-college hackathon with 60 teams.',
    description: 'The monumental launch of CodeFiesta, where teams built smart mobility solutions, automated campus grievance portals, and decentralized ledger tools.',
    keyHighlights: [
      '60 teams selected from over 250 applicant registrations',
      'First overnight engineering hackathon hosted in FoET history',
      'Keynote by alumni working at Silicon Valley unicorns',
      'Live demo day and project repository showcase on GitHub'
    ],
    coordinators: ['Kartikey Jaiswal', 'Ananya Singh', 'Shreya Srivastava'],
    coverImage: hackathonCover,
    media: [
      {
        id: 'hack25-1',
        type: 'image',
        url: hackathonCover,
        title: 'Midnight Coding Rush 2025',
        caption: 'Students collaborating intensively in the software lab during the inaugural CodeFiesta.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'hack25-2',
        type: 'video',
        url: hackathonCover,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
        duration: '0:48',
        title: 'Hackathon Aftermovie 2025',
        caption: 'The unforgettable 24 hours encapsulated in high-tempo rhythm and student smiles.',
        photographer: 'Media Team FOET'
      },
      {
        id: 'hack25-3',
        type: 'image',
        url: webdevBootcampCover,
        title: 'Team Brainstorming on Glass Boards',
        caption: 'Architecture diagrams and API endpoints mapped out in real-time.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'hack25-4',
        type: 'image',
        url: compProgCover,
        title: 'Judges Evaluation Round',
        caption: 'Senior engineering faculty scrutinizing the code quality and database schemas.',
        photographer: 'FOET Tech Society'
      },
      {
        id: 'hack25-5',
        type: 'image',
        url: gitWorkshopCover,
        title: 'Grand Finale Prize Distribution',
        caption: 'Winners lifting the first ever CodeFiesta Golden Trophy.',
        photographer: 'University of Lucknow Media Cell'
      }
    ]
  },
  {
    id: 'cp-bootcamp-2025',
    slug: 'cp-bootcamp-2025',
    title: 'Competitive Programming Bootcamp',
    year: 2025,
    date: '14 Aug 2025',
    fullDate: 'August 14-16, 2025',
    category: 'Bootcamps',
    location: 'FOET Central Labs',
    venue: 'Computer Center Lab 1, FOET-LU',
    attendees: 175,
    summary: 'A 3-day deep sprint into data structures, dynamic programming, and complexity analysis.',
    description: 'Designed to elevate the competitive programming culture at FoET. Students conquered recursion trees, disjoint set unions, graph traversals, and dynamic programming optimization.',
    keyHighlights: [
      'Comprehensive coverage of graph algorithms and shortest paths',
      'Daily 1-hour speed virtual contests with instant leaderboard updates',
      'Editorial discussion circles and code review sessions',
      'Personalized tracking sheets and problem recommendations'
    ],
    coordinators: ['Harsh Vardhan', 'Priya Sharma', 'Aditya Narang'],
    coverImage: compProgCover,
    media: [
      {
        id: 'cp25-1',
        type: 'image',
        url: compProgCover,
        title: 'Students Tackling Tree Problems',
        caption: 'Focused faces tackling binary lifting and Lowest Common Ancestor logic.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'cp25-2',
        type: 'video',
        url: compProgCover,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        duration: '0:38',
        title: 'Daily Contest Speed Run',
        caption: 'Fastest solvers racing to submit AC verdicts before the timer expires.',
        photographer: 'Media Team FOET'
      },
      {
        id: 'cp25-3',
        type: 'image',
        url: aimlWorkshopCover,
        title: 'Blackboard Algorithm Walkthrough',
        caption: 'Visualizing state transitions in multidimensional knapsack problems.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'cp25-4',
        type: 'image',
        url: gitWorkshopCover,
        title: 'Cohort Peer Collaboration',
        caption: 'Students sharing test cases to diagnose difficult edge cases and runtime errors.',
        photographer: 'FOET Tech Society'
      },
      {
        id: 'cp25-5',
        type: 'image',
        url: webdevBootcampCover,
        title: 'Bootcamp Completion Ceremony',
        caption: 'Over 150 students receiving their advanced algorithmic badge.',
        photographer: 'University of Lucknow Media Cell'
      }
    ]
  },
  {
    id: 'cloud-devops-workshop-2025',
    slug: 'cloud-devops-workshop-2025',
    title: 'Cloud & DevOps Masterclass',
    year: 2025,
    date: '20 Apr 2025',
    fullDate: 'April 20, 2025',
    category: 'Workshops',
    location: 'FOET Seminar Hall 2',
    venue: 'Seminar Hall 2, FOET Campus',
    attendees: 130,
    summary: 'Containerization with Docker, Kubernetes clustering, and CI/CD pipelines.',
    description: 'Students set up Docker containers, learned Dockerfiles optimization, and pushed automated GitHub workflows to deploy scalable web services to the cloud.',
    keyHighlights: [
      'Containerizing multi-service Node.js and Postgres stacks',
      'Demystifying Kubernetes pods, services, and ingress controllers',
      'Automated testing with GitHub Actions CI',
      'Zero-downtime deployment demonstrations'
    ],
    coordinators: ['Rohan Gupta', 'Divyansh Mishra'],
    coverImage: webdevBootcampCover,
    media: [
      {
        id: 'cloud25-1',
        type: 'image',
        url: webdevBootcampCover,
        title: 'Dockerizing Real Applications',
        caption: 'Hands-on workstation exercises building lightweight multi-stage Dockerfiles.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'cloud25-2',
        type: 'video',
        url: webdevBootcampCover,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        duration: '0:40',
        title: 'Kubernetes Pod Scaling Demo',
        caption: 'Live demonstration scaling pods under synthetic traffic spikes without dropped requests.',
        photographer: 'Media Team FOET'
      },
      {
        id: 'cloud25-3',
        type: 'image',
        url: gitWorkshopCover,
        title: 'CLI Configuration and Secrets',
        caption: 'Best practices for managing environment variables and cloud IAM safely.',
        photographer: 'FOET Tech Society'
      },
      {
        id: 'cloud25-4',
        type: 'image',
        url: aimlWorkshopCover,
        title: 'Interactive Q&A Session',
        caption: 'Answering career questions regarding Site Reliability Engineering and DevOps roles.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'cloud25-5',
        type: 'image',
        url: hackathonCover,
        title: 'Workshop Group Commemoration',
        caption: 'Participants and instructors celebrating successful cluster deployments.',
        photographer: 'University of Lucknow Media Cell'
      }
    ]
  },
  {
    id: 'readme-challenge-2025',
    slug: 'readme-challenge-2025',
    title: 'Open Source Readme Challenge',
    year: 2025,
    date: '10 Feb 2025',
    fullDate: 'February 10-12, 2025',
    category: 'Competitions',
    location: 'Virtual & FOET Campus',
    venue: 'Online GitHub Challenge + Final Review in Hall 1',
    attendees: 190,
    summary: 'A creative open source challenge celebrating documentation excellence and developer tooling.',
    description: 'Coding Connoisseurs hosted the Readme-Challenge repo competition where students crafted exemplary, production-grade documentation, architecture diagrams, and contribution guidelines for their software projects.',
    keyHighlights: [
      'Focus on clear developer experience, setup guides, and badges',
      'Over 90 public repository submissions on GitHub',
      'Mermaid.js diagramming and automated preview workflows',
      'Top 10 repos featured on the official club GitHub organization'
    ],
    coordinators: ['Kartikey Jaiswal', 'Mohit Kumar'],
    coverImage: gitWorkshopCover,
    media: [
      {
        id: 'rm25-1',
        type: 'image',
        url: gitWorkshopCover,
        title: 'Readme Challenge Showcase',
        caption: 'Reviewing top student documentation portfolios on the main projector screen.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'rm25-2',
        type: 'video',
        url: gitWorkshopCover,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        duration: '0:32',
        title: 'Interactive Submission Tour',
        caption: 'Browsing through the beautifully documented markdown submissions.',
        photographer: 'Media Team FOET'
      },
      {
        id: 'rm25-3',
        type: 'image',
        url: hackathonCover,
        title: 'Mentors Reviewing Contribution Guides',
        caption: 'Evaluating issue templates, pull request workflows, and clear open source license terms.',
        photographer: 'FOET Tech Society'
      },
      {
        id: 'rm25-4',
        type: 'image',
        url: aimlWorkshopCover,
        title: 'Prize & Swag Distribution',
        caption: 'Rewarding the best technical writers and documentation architects.',
        photographer: 'University of Lucknow Media Cell'
      }
    ]
  },

  // ================= 2024 EVENTS =================
  {
    id: 'founding-meetup-2024',
    slug: 'founding-meetup-2024',
    title: 'Coding Connoisseurs Genesis Meetup',
    year: 2024,
    date: '15 Nov 2024',
    fullDate: 'November 15, 2024',
    category: 'Meetups',
    location: 'FOET Campus Lucknow',
    venue: 'Conference Hall, Faculty of Engineering & Technology',
    attendees: 120,
    summary: 'The historic founding meetup where Coding Connoisseurs FOET was officially inaugurated.',
    description: 'The beginning of our student developer movement at FoET-LU. Passionate coders gathered with faculty support to establish a dedicated platform for competitive programming, open source, and software engineering.',
    keyHighlights: [
      'Official inauguration of Coding Connoisseurs by Dean of FOET',
      'Unveiling of the club vision: Fostering Innovation & Peer Mentorship',
      'Formation of core domains: Web, CP, AI/ML, and Open Source',
      'Sign-up of our first 100 founding student members'
    ],
    coordinators: ['Founding Core Team', 'Faculty Advisor FOET-LU'],
    coverImage: aimlWorkshopCover,
    media: [
      {
        id: 'gen24-1',
        type: 'image',
        url: aimlWorkshopCover,
        title: 'The Founding Inauguration',
        caption: 'Faculty advisor and founding student members cutting the ceremonial ribbon for CC-FOET.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'gen24-2',
        type: 'video',
        url: aimlWorkshopCover,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        duration: '0:45',
        title: 'Founding Day Speeches',
        caption: 'Inspirational remarks setting the mission for engineering excellence at FoET-LU.',
        photographer: 'Media Team FOET'
      },
      {
        id: 'gen24-3',
        type: 'image',
        url: gitWorkshopCover,
        title: 'Founding Member Discussions',
        caption: 'Early brainstorming on how to bring weekly coding competitions and workshops to FOET.',
        photographer: 'FOET Tech Society'
      },
      {
        id: 'gen24-4',
        type: 'image',
        url: compProgCover,
        title: 'First Coding Session',
        caption: 'Our very first informal pair programming session in the campus lab.',
        photographer: 'CC FOET Media Wing'
      },
      {
        id: 'gen24-5',
        type: 'image',
        url: hackathonCover,
        title: 'Historic First Group Photo',
        caption: 'The founding members of Coding Connoisseurs, Faculty of Engineering & Technology.',
        photographer: 'University of Lucknow Media Cell'
      }
    ]
  }
];

export const AVAILABLE_YEARS = [2026, 2025, 2024] as const;

export const EVENT_CATEGORIES = [
  'All',
  'Workshops',
  'Hackathons',
  'Competitions',
  'Bootcamps',
  'Meetups',
  'Tech Talks',
  'Inductions'
] as const;

export const GALLERY_STATS = {
  totalEvents: 18,
  totalPhotos: 140,
  totalVideos: 22,
  totalAttendees: '2,200+',
  activeYears: 3
};
