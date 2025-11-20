# Design Guidelines: Anime-Themed Personal Blog

## Design Approach

**Aesthetic Direction**: 二次元 (Anime) Flat Design Style
- Draw inspiration from modern anime-themed websites like Crunchyroll, MyAnimeList, and Japanese web design trends
- Emphasize clean geometric shapes, playful illustrations, and vibrant flat UI elements
- Balance kawaii (cute) aesthetics with modern minimalism for readability

## Typography System

**Font Families** (via Google Fonts):
- Primary: 'Nunito' or 'Quicksand' (rounded, friendly sans-serif for body text)
- Headings: 'Poppins' (bold, geometric, anime-style)
- Accent/Decorative: 'Fredoka One' or 'Righteous' (for name/headers)

**Hierarchy**:
- Site Name/Hero: text-5xl to text-7xl, font-black
- Section Headings: text-3xl to text-4xl, font-bold
- Content Titles: text-xl to text-2xl, font-semibold
- Body Text: text-base to text-lg, font-normal
- Metadata/Labels: text-sm, font-medium

## Layout System

**Spacing Units**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20
- Section padding: py-12 to py-20 (mobile to desktop)
- Card spacing: p-6 to p-8
- Grid gaps: gap-4 to gap-8
- Container: max-w-6xl mx-auto px-4

**Grid Patterns**:
- Diary entries: Single column max-w-3xl for readability
- Artwork gallery: Masonry-style grid (grid-cols-2 md:grid-cols-3 lg:grid-cols-4)
- Notes: 2-column layout on desktop (grid-cols-1 md:grid-cols-2)
- Videos: Responsive grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)

## Component Library

### Navigation
- Fixed top navbar with soft rounded corners and subtle shadow
- Smooth anime-style hover transitions (transform scale-105)
- Cute icon accompaniments from Heroicons (use outline style)
- Mobile: Hamburger menu with slide-in drawer

### Hero/Profile Section
- Centered vertical layout, NOT full viewport height (py-16 to py-24)
- Large circular avatar placeholder with border and shadow
- Name in decorative font (text-5xl)
- Self-introduction in speech-bubble-style card with rounded-2xl borders
- Contact email with icon (envelope) in pill-shaped button
- Decorative floating elements (stars, sparkles) as subtle SVG shapes

### Content Cards (Diary, Notes)
- Rounded-2xl borders with soft shadows (shadow-lg)
- Padding p-6 to p-8
- Hover effect: subtle lift (hover:-translate-y-1 transition-transform)
- Metadata section with date/tags in rounded-full pills
- Clear visual separation between title and content (border-b-2)

### Gallery Cards (Artwork)
- Aspect-ratio-square containers
- Rounded-xl borders
- Image with object-cover fit
- Overlay on hover showing title/description
- Grid layout with consistent gaps

### Video Embeds
- 16:9 aspect ratio containers (aspect-video)
- Rounded-xl borders with shadow
- Thumbnail placeholder with play icon overlay
- Title below in card format

### Action Buttons
- Primary: rounded-full, px-6 py-3, font-semibold, shadow-md
- Secondary: rounded-full, px-4 py-2, border-2
- Icon buttons: rounded-full p-3 for favorites/share
- Hover states: subtle scale and shadow increase

## Images

**Hero Section Image**: 
- Optional anime-style illustration or personal avatar
- If used: Circular frame (rounded-full) with decorative border
- Size: w-48 h-48 on desktop, w-32 h-32 on mobile
- Placement: Centered above name in hero section

**Gallery Images**:
- User-uploaded artwork displayed in masonry grid
- Maintain aspect ratios with object-cover
- Each image in rounded-xl container with shadow

**Decorative Elements**:
- SVG icons from Heroicons for UI elements
- Anime-style decorative shapes (stars, hearts, sparkles) as inline SVG
- Use sparingly for accent - corners of sections, floating near hero

## Special Design Elements

**Anime-Specific Details**:
- Rounded corners everywhere (rounded-lg minimum, rounded-2xl preferred)
- Soft drop shadows (shadow-md to shadow-lg)
- Playful micro-interactions (bounce, pulse on important elements)
- Speech bubble shapes for introductions/quotes (using CSS shapes)
- Pill-shaped tags and metadata badges
- Sticker-like effect on navigation items

**Content Sections Structure**:
1. Hero/Profile (name, intro, contact)
2. Diary Entries (chronological feed, latest first)
3. Artwork Gallery (masonry grid)
4. Notes (categorized cards)
5. Videos (embedded grid)
6. Footer (simple, centered, social links if any)

## Accessibility

- Maintain WCAG AA contrast ratios despite vibrant aesthetic
- Focus states with visible outline-offset-2 rings
- Semantic HTML structure
- Alt text for all images
- Keyboard navigation support

## Animations

**Minimal but Playful**:
- Entrance: Stagger fade-in for gallery items (delay increments)
- Hover: Scale transforms (scale-105) and shadow changes
- Page transitions: Simple fade effects
- NO distracting continuous animations or parallax

This design creates a cheerful, organized anime-themed blog that's visually engaging while maintaining excellent readability and usability.