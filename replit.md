# Swift Tech Group - Corporate Website

## Project Overview
A comprehensive, modern corporate website for Swift Tech Group showcasing their four business divisions:
1. **Swift Tech Engineers** - Water & Wastewater Treatment Solutions (Since 2006)
2. **Swift Altus** - AI-Powered Software & Products (New startup division)
3. **Engineering & Consulting** - Professional Engineering Services
4. **Building Construction** - Modern Construction Solutions

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
- `/altus` - Swift Altus AI software division page
- `/industries` - Industries served with detailed info

## Key Features
- Modern, minimal design inspired by kula.ai
- Dark/Light theme toggle
- Global search functionality (Cmd+K)
- Responsive mobile-first design
- Animated statistics counters
- Client logo marquee
- Testimonial carousel
- SEO optimized with meta tags

## Design System
- Font: Inter (sans-serif), JetBrains Mono (monospace)
- Primary color: Blue (#2563eb)
- Animations: Fade-in, slide-in, float, marquee
- Border radius: Subtle (0.5rem)
- Shadows: Minimal, used sparingly

## Recent Changes
- December 2024: Initial website design created with all major sections
- Generated hero images for all divisions
- Implemented search dialog with real-time filtering
- Added dark mode support
- Created all major pages (Home, About, Contact, Engineers, Altus, Industries)

## User Preferences
- Minimal yet impressive design
- kula.ai style inspiration
- SEO-optimized
- Search functionality for services
- Three company divisions + Swift Altus (new AI software startup)
