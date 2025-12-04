# Swift Tech Group - Comprehensive Design Guidelines

## Design Approach: Reference-Based Modern SaaS Aesthetic

Drawing inspiration from modern SaaS platforms like kula.ai, Linear, and Notion to create a minimal yet impactful corporate website that balances technical credibility with contemporary design.

**Core Principles:**
- Bold typography with generous white space
- Confident, declarative messaging
- Smooth micro-interactions and transitions
- Clean layouts that prioritize content hierarchy
- Professional minimalism without sacrificing visual impact

---

## Typography System

**Font Families:**
- Primary: Inter (via Google Fonts) - clean, modern, excellent readability
- Monospace: JetBrains Mono - for technical specs and product codes

**Hierarchy:**
- Hero Headlines: 3.5rem (desktop) / 2.25rem (mobile), font-weight 700, line-height 1.1
- Section Titles: 2.5rem (desktop) / 1.75rem (mobile), font-weight 700, line-height 1.2
- Subsection Headers: 1.5rem, font-weight 600, line-height 1.3
- Body Large: 1.125rem, font-weight 400, line-height 1.7
- Body Regular: 1rem, font-weight 400, line-height 1.6
- Small Text: 0.875rem, font-weight 400, line-height 1.5
- Labels/Tags: 0.75rem, font-weight 600, uppercase, letter-spacing 0.05em

---

## Layout & Spacing System

**Tailwind Units:** Consistently use 4, 8, 12, 16, 20, 24, 32 for spacing primitives

**Container Strategy:**
- Max-width: 1280px (max-w-7xl) for main content
- Section padding: py-24 (desktop), py-16 (mobile)
- Inner content: px-8 (desktop), px-4 (mobile)
- Card spacing: gap-8 for grids, gap-6 for lists

**Grid Systems:**
- 3-column grid for service/product cards: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- 2-column for content sections: `grid-cols-1 lg:grid-cols-2`
- Client logos: 6 columns desktop, 3 mobile: `grid-cols-3 md:grid-cols-6`

---

## Component Library

### Navigation
- Sticky header with blur backdrop effect
- Logo left, navigation center, CTA button right
- Navigation items: 1rem, font-weight 500, gap-8
- Mobile: Hamburger menu with full-screen slide-in overlay
- Mega-menu for Services dropdown with 3-column layout

### Hero Section
**Layout:** Full-width container with centered content, 85vh height
**Structure:**
- Eyebrow text (small, uppercase, tracking-wide)
- Main headline with animated gradient text effect on key words
- Subheadline: 1.25rem, max-width 700px, centered
- Two CTAs side-by-side: Primary button + Secondary outline button
- Background: Large hero image (modern office/technology workspace) with subtle gradient overlay
- Floating trust indicator: "Trusted by 70+ Global Brands" with animated client logos

### Division Cards (Homepage)
**Grid:** 2x2 layout for four divisions
**Card Design:**
- Hover-lift effect with shadow transition
- Icon/logo at top (60px size)
- Division name: 1.5rem, font-weight 700
- Short description: 1rem, max 2 lines
- "Explore →" link with arrow animation
- Subtle border, rounded corners (12px)

### Service Showcases
**Layout:** Alternating image-text sections
**Structure:**
- Image side: 50% width, rounded corners (16px), subtle shadow
- Content side: Title (2rem), description paragraphs, bullet points, CTA button
- Reverse layout every other section for visual rhythm

### Statistics Counter Section
**Grid:** 4 columns for key metrics
**Design:**
- Large animated numbers: 3rem, font-weight 700
- Label underneath: 1rem, font-weight 500
- Icons above numbers (48px size)
- Trigger count-up animation on scroll into view

### Client Showcase
**Layout:** Logo grid with infinite scroll marquee
**Design:**
- Grayscale logos with smooth hover transition to full brightness
- Equal-sized containers (180px width) for consistency
- Two rows for visual impact

### Testimonials
**Carousel:** 3 cards visible at once (desktop), 1 on mobile
**Card Design:**
- Quote text: 1.125rem, line-height 1.7, max 3 lines
- Client photo: 64px circle
- Name + Title: stacked, centered below photo
- Company logo in bottom corner
- Navigation dots below carousel

### Industry Grid
**Layout:** Icon-first approach with 5 columns (desktop), 2 (mobile)
**Card Design:**
- Industry icon: 80px, centered
- Industry name: 1.125rem, font-weight 600
- Hover: Scale up slightly (1.05x), shadow elevation
- Click navigates to dedicated industry page

### Footer
**Structure:** 4-column layout
- Column 1: Logo + company description (max 200 characters)
- Column 2: Quick Links (About, Services, Industries, Contact)
- Column 3: Divisions (links to each division page)
- Column 4: Newsletter signup + Social media icons
- Bottom bar: Copyright, Privacy Policy, Terms

---

## Page-Specific Guidelines

### Swift Altus (AI Software Division)
**Design Language:** More modern/tech-forward than other divisions
- Gradient accents on section dividers
- Code snippet showcases with syntax highlighting
- Product demo section with embedded interactive walkthrough
- Tech stack icons displayed prominently
- Startup story timeline with milestone markers

### Swift Tech Engineers (Water Treatment)
**Design Language:** Technical credibility with visual professionalism
- Technical specifications in expandable accordion panels
- Product catalog with filterable categories
- Certification badges prominently displayed (ISO 9001:2015)
- Before/after project comparison sliders
- Geographic reach map showing international presence

### Industry Pages
**Template Structure:**
- Hero: Industry-specific image + headline
- Challenges section: 3-column grid of pain points
- Solutions: Product/service cards tailored to industry
- Case study spotlight: Large image + results metrics
- Related industries suggestions at bottom

---

## Images & Visual Assets

**Hero Images Required:**
- Homepage: Modern corporate building/team collaboration scene
- Swift Altus: Developers working on AI dashboards/code
- Swift Tech Engineers: Water treatment facility/clean water imagery
- Engineering & Consulting: Construction site/blueprint review
- Building Construction: Modern building exterior/interior

**Product Images:**
- Water treatment equipment: Professional product photography on white background
- Software screenshots: Modern UI mockups with gradient overlays
- Project photos: High-quality installation/completion photos

**Icons:**
- Use Heroicons for UI elements (outline style)
- Custom icons for divisions (simple, geometric, 2-3 stroke weights)

---

## Animations & Interactions

**Scroll Animations:**
- Fade-up on scroll: 30px translate, 0.6s duration, ease-out
- Stagger children animations: 100ms delay between each card
- Parallax on hero images: Subtle 0.5x scroll speed

**Micro-interactions:**
- Button hover: Slight scale (1.02x) + shadow elevation
- Card hover: Lift effect (-4px translate) + shadow growth
- Link underline: Expand from center animation
- Navigation: Smooth color transition on hover (200ms)

**Page Transitions:**
- Fade between route changes: 300ms duration
- Maintain scroll position on back navigation

---

## Accessibility & Performance

- Minimum touch target: 44px x 44px for all interactive elements
- Focus indicators: 2px outline with offset
- Semantic HTML5: proper heading hierarchy, landmarks
- Alt text for all images: descriptive and concise
- Lazy loading for images below fold
- Preload critical fonts and hero images
- Mobile-first responsive breakpoints: 640px, 768px, 1024px, 1280px

---

This comprehensive design system ensures a cohesive, modern, and impressive web presence that elevates Swift Tech Group's brand while maintaining usability and performance across all divisions.