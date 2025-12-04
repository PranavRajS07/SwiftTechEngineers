# Swift Tech Engineers (India) Pvt. Ltd. - Corporate Website

## Project Overview
A comprehensive, modern corporate website for Swift Tech Engineers (India) Pvt. Ltd. - "The Water Specialist" - showcasing their three business divisions:
1. **Swift Tech Engineers** - Water & Wastewater Treatment Solutions (Since 2006)
2. **Swift Tech Builders & Constructions** - Residential, Industrial Construction & House Lifting
3. **Swift Altus** - AI-Powered Software & Products (New startup division)

## Company Information
- **Full Name**: Swift Tech Engineers (India) Private Limited
- **Tagline**: The Water Specialist
- **Established**: 2006
- **Certification**: ISO 9001:2015
- **Global Presence**: India, Sri Lanka, Bangladesh, Maldives, Saudi Arabia, Dubai, Kuwait

## Core Services (Water Treatment)
- WTP - Water Treatment Plants
- ETP - Effluent Treatment Plants
- STP - Sewage Treatment Plants
- RO Plants & DM Plants
- Clarifiers, Flocculators, Filtration Systems
- Oxygen Dosing Systems
- Chemical Dosing Systems
- Operation & Maintenance Services
- Troubleshooting & Water Audit

## Tech Stack
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + Shadcn UI components
- **Routing**: Wouter
- **State Management**: TanStack Query
- **Backend**: Express.js (Node.js)
- **Storage**: In-memory storage (MemStorage)

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── layout/         # Header, Footer
│   │   ├── sections/       # Hero, Divisions, Services, etc.
│   │   ├── ui/             # Shadcn UI components
│   │   └── examples/       # Component examples
│   ├── pages/              # Route pages (home, about, contact, etc.)
│   ├── hooks/              # Custom hooks
│   └── lib/                # Utilities
server/
├── routes.ts               # API routes
├── storage.ts              # Storage interface
└── index.ts                # Server entry
shared/
└── schema.ts               # Shared types
```

## Pages
- `/` - Homepage with all sections
- `/about` - About the company, mission, vision, certifications
- `/contact` - Contact form with multi-division inquiry
- `/engineers` - Swift Tech Engineers division page
- `/builders` - Swift Tech Builders & Constructions page
- `/altus` - Swift Altus AI software division page
- `/industries` - Industries served with detailed info

## Key Features
- Modern, minimal design inspired by kula.ai
- Dark/Light theme toggle
- Global search functionality (Cmd+K)
- Responsive mobile-first design
- Animated statistics counters
- Client logo marquee
- SEO optimized with meta tags

## Design System
- Font: Inter (sans-serif), JetBrains Mono (monospace)
- Primary color: Blue (#2563eb)
- Animations: Fade-in, slide-in, float, marquee
- Border radius: Subtle (0.5rem)
- Shadows: Minimal, used sparingly

## Recent Changes
- December 2024: Corrected company name to "Swift Tech Engineers (India) Pvt. Ltd."
- Updated tagline to "The Water Specialist"
- Fixed division structure (3 companies: Engineers, Builders, Altus)
- Removed newsletter signup
- Updated statistics with realistic numbers
- Added accurate services from actual website
- Created Swift Tech Builders & Constructions page with house lifting services

## User Preferences
- Minimal yet impressive design
- kula.ai style inspiration
- SEO-optimized for water treatment services
- No newsletter signup
- Realistic statistics
- Three company divisions only (no separate consulting)
