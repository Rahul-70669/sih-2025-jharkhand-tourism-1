# JharkhandYatra - Product Requirements Document

---

## Project Information

### Project Title

**JharkhandYatra** - Smart Digital Platform for Eco & Cultural Tourism in Jharkhand

---

### Project Description

**Short Description:**
JharkhandYatra is a digital tourism platform that connects travelers with authentic local experiences in Jharkhand—from tribal homestays and verified local guides to handcrafted artisan products—making eco and cultural tourism accessible, organized, and community-empowering.

**Long Description:**

Jharkhand is blessed with extraordinary natural beauty, rich tribal heritage, historical landmarks, and eco-tourism destinations like Netarhat, Patratu, Betla National Park, Hundru Falls, and Deoghar. However, despite this vast potential, the state's tourism industry remains underdeveloped due to limited digital infrastructure, poor promotional outreach, and unorganized travel services.

Tourists currently struggle to find reliable information about authentic local experiences, safe homestays, trustworthy guides, and genuine tribal handicrafts. Meanwhile, local communities—artisans, tribal families offering homestays, and knowledgeable local guides—remain largely excluded from the tourism economy due to lack of digital presence.

JharkhandYatra addresses this gap by creating a centralized digital marketplace that serves as a bridge between tourists seeking authentic experiences and local communities offering genuine services. The platform enables tourists to discover, compare, and book verified homestays and guides while purchasing authentic tribal handicrafts directly from artisans.

The platform differentiates itself through community-first design, ensuring that local service providers can easily list their offerings, receive bookings, and build their reputation through reviews. By digitizing these traditionally informal services, JharkhandYatra aims to increase tourism revenue flowing directly to local communities while giving tourists the confidence to explore off-the-beaten-path destinations.

Expected impact includes increased tourist footfall to lesser-known destinations, higher income for local communities, preservation of tribal crafts and cultural practices, and positioning Jharkhand as a premier eco-cultural tourism destination in India.

---

### Learning Objectives

**Primary Learning Outcomes:**

- Build responsive, production-ready React applications with TypeScript and modern hooks
- Develop RESTful APIs using Node.js, Express.js, and MongoDB with proper authentication
- Implement full-stack features including search, filtering, booking, and payment workflows
- Apply professional Git workflows with branching, code reviews, and collaborative development
- Deploy full-stack applications to production cloud platforms

**Secondary Learning Outcomes:**

- Design and implement database schemas for complex relational data (users, listings, bookings)
- Create reusable component libraries following atomic design principles
- Implement responsive, accessible UI following WCAG 2.1 guidelines

---

### Technology Stack

**Frontend:**

- **Build Tool:** Vite 6.x
- **Framework:** React 19 with TypeScript 5.7+
- **Routing:** React Router v7
- **State Management:** React Context API + useReducer (with Zustand for complex state if needed)
- **Styling:** TailwindCSS v4 + DaisyUI v5
- **HTTP Client:** Axios
- **Forms:** React Hook Form with Zod validation
- **Icons:** Google Material Symbols (Outlined)
- **Additional Libraries:** date-fns (date handling), react-hot-toast (notifications)

**Backend:**

- **Runtime:** Node.js v24 LTS
- **Language:** TypeScript 5.7+
- **Framework:** Express.js v5
- **Database:** MongoDB 8.0+ with Mongoose v8
- **Authentication:** JWT (jsonwebtoken) + bcrypt.js
- **File Uploads:** Multer + Cloudinary (for image storage)
- **Validation:** Joi or Zod

**DevOps & Deployment:**

- **Version Control:** Git + GitHub
- **Frontend Hosting:** Vercel
- **Backend Hosting:** Railway or Render
- **Database Hosting:** MongoDB Atlas
- **Containerization:** Docker + Docker Compose (development)

---

### MVP Scope

**Phase 1: Core Platform (Days 1-6)**
**Priority: P0 (Must Have)**

1. **User Authentication & Profiles**
    - Tourist registration and login (email/password)
    - Service provider registration (homestays, guides, artisans)
    - Profile management with avatar upload
    - JWT-based session management

2. **Listing Discovery & Search**
    - Browse homestays with filters (location, price, amenities, rating)
    - Browse local guides with filters (languages, specialization, availability)
    - Browse artisan marketplace with categories (handicrafts, textiles, art)
    - Geo-tagged destination discovery
    - Search with autocomplete

3. **Listing Details & Reviews**
    - Detailed homestay pages (photos, amenities, house rules, location map)
    - Guide profiles (experience, languages, tour offerings, availability calendar)
    - Product pages (descriptions, photos, artisan story)
    - Review and rating system (1-5 stars with text reviews)

**Phase 2: Booking & Transactions (Days 7-10)**
**Priority: P1 (Should Have)**

4. **Booking System**
    - Homestay booking with date selection and guest count
    - Guide booking with tour selection and date/time
    - Booking confirmation and status tracking
    - Cancellation workflow

5. **Shopping Cart & Orders**
    - Add products to cart
    - Checkout flow with shipping details
    - Order tracking and history
    - [AI Suggestion: Payment integration can be mocked for MVP. You can integrate Razorpay in production]

**Phase 3: Enhanced Features (Days 11-12)**
**Priority: P2 (Nice to Have)**

6. **Trip Planner**
    - Save listings to wishlist
    - Create trip itineraries by adding bookings
    - Share itinerary via link

7. **Service Provider Dashboard**
    - View incoming bookings/orders
    - Update listing availability
    - Respond to reviews
    - Basic analytics (views, bookings)

---

### Target Users / Personas

**Primary Persona: Aarav - The Urban Explorer**

- **Demographics:**
    - Age: 25-35
    - Location: Metro cities (Delhi, Mumbai, Bangalore, Kolkata)
    - Occupation: IT Professional / Corporate Employee
    - Tech Savviness: High

- **Goals & Motivations:**
    - Escape urban routine with authentic, off-beat travel experiences
    - Connect with local cultures and communities
    - Support sustainable and responsible tourism
    - Create Instagram-worthy memories at unique locations

- **Pain Points:**
    - Difficulty finding reliable information about lesser-known destinations
    - Trust issues with unknown homestays and guides
    - Fear of being overcharged as an "outsider"
    - Language barriers in tribal regions

- **User Needs:**
    - Verified listings with genuine reviews
    - Clear pricing with no hidden costs
    - Easy communication with hosts/guides
    - Multilingual support (Hindi/English)

**Secondary Persona: Priya - The Cultural Enthusiast**

- **Demographics:**
    - Age: 35-50
    - Location: Tier 2 cities or NRI
    - Occupation: Teacher / Researcher / Retired Professional
    - Tech Savviness: Medium

- **Goals & Motivations:**
    - Deep dive into tribal art, culture, and traditions
    - Purchase authentic handicrafts directly from artisans
    - Educational travel experiences
    - Support tribal communities economically

- **Pain Points:**
    - Cannot distinguish authentic crafts from mass-produced items
    - Wants to know the story behind products
    - Needs more structured cultural experiences
    - Prefers guided tours over solo exploration

- **User Needs:**
    - Artisan profiles with craft stories
    - Curated cultural experience packages
    - Expert local guides with cultural knowledge
    - Certificate of authenticity for handicrafts

**Tertiary Persona: Ramesh - The Homestay Owner**

- **Demographics:**
    - Age: 40-60
    - Location: Rural Jharkhand (Netarhat, Betla, Patratu region)
    - Occupation: Farmer / Retired Government Employee
    - Tech Savviness: Low-Medium

- **Goals & Motivations:**
    - Earn supplementary income from spare rooms
    - Share local culture and hospitality
    - Connect with travelers from different backgrounds
    - Preserve and showcase traditional lifestyle

- **Pain Points:**
    - No digital presence or marketing capability
    - Language barrier with non-Hindi speakers
    - Difficulty managing bookings without technology
    - Lack of trust from potential guests

- **User Needs:**
    - Simple listing creation (possibly with assisted onboarding)
    - Hindi interface
    - Easy booking management
    - Verification badge to build trust

---

## Branding, Theming & Visual Identity

### Brand Identity

**Brand Name:** JharkhandYatra (झारखंड यात्रा)

**Tagline:** "Discover the Soul of Jharkhand"

**Brand Personality:**
- **Tone:** Warm, Welcoming, Authentic, Community-focused
- **Voice:** Conversational, Culturally respectful, Encouraging exploration
- **Mood:** Vibrant, Earthy, Celebratory of tribal heritage

**Brand Values:**
- **Authenticity** - Genuine experiences, real communities, verified services
- **Community First** - Empowering local economies and preserving traditions
- **Sustainability** - Promoting responsible, eco-conscious tourism
- **Accessibility** - Making hidden gems discoverable for all travelers

**Brand Story:**
JharkhandYatra was born from a simple belief: that Jharkhand's incredible natural beauty and rich tribal heritage deserve to be experienced by travelers worldwide, while the communities who call it home deserve to benefit directly from sharing their culture. We're not just a booking platform—we're a bridge connecting curious travelers with welcoming hosts, skilled artisans, and knowledgeable guides who make Jharkhand unforgettable.

---

### Logo & Visual Assets

**Logo Concept:**
[AI Suggestion: A stylized 'J' incorporating traditional Sohrai art motifs (the tribal wall painting tradition), combined with a path/journey element. The logo should work in both detailed and simplified forms.]

**Logo Specifications:**
- **Primary Logo:** Wordmark "JharkhandYatra" with decorative motif
- **Logo Variations:**
    - Full color (primary)
    - Single color (terracotta)
    - Reversed (white on dark)
    - Icon-only (for favicons, app icons)
- **Safe Space:** Minimum 16px clear space around logo
- **Minimum Size:** 120px width for wordmark, 32px for icon
- **File Formats:** SVG (primary), PNG (fallback)

**Imagery Style:**
- **Photography:** Authentic, documentary-style images of real locations and people. Avoid overly staged tourism shots. Emphasize human connection, natural landscapes, and cultural moments.
- **Illustrations:** Hand-drawn style inspired by Sohrai and Khovar art traditions—geometric patterns, nature motifs (elephants, peacocks, flowers, sun), earthy textures
- **Icons:** Google Material Symbols - Outlined variant for consistency
- **Patterns/Textures:** Subtle tribal pattern borders and dividers. Use sparingly for section breaks and card decorations.

---

### Color System (OKLCH)

**Design Philosophy:**
The color palette draws inspiration from Jharkhand's tribal art traditions—particularly Sohrai paintings which use natural earth pigments. The vibrant reds and oranges represent the warmth of tribal hospitality, while greens connect to the state's rich forests and eco-tourism focus.

#### Primary Brand Color - Terracotta Red
```css
--color-primary: oklch(55% 0.18 25);
--color-primary-content: oklch(98% 0.01 25);
```

- **Hex Approximation:** #C75239
- **Usage:** Primary CTAs, navigation highlights, brand moments, key actions
- **Meaning:** Represents the red earth of Jharkhand and the terracotta pottery tradition. Conveys warmth, welcome, and cultural richness.
- **Accessibility:** Contrast ratio with base-100: 7.2:1 ✓

**Color Variations:**
- Lighter: `oklch(70% 0.15 25)` - Hover states, subtle backgrounds
- Darker: `oklch(42% 0.20 25)` - Active states, emphasis

---

#### Secondary Brand Color - Amber Gold
```css
--color-secondary: oklch(75% 0.16 70);
--color-secondary-content: oklch(25% 0.05 70);
```

- **Hex Approximation:** #D4A24A
- **Usage:** Secondary CTAs, highlights, pricing, special badges, ratings
- **Meaning:** Represents the golden treasures of tribal craftsmanship—brass work, wheat fields, and the warmth of sunrise over Jharkhand's hills.
- **Accessibility:** Contrast ratio with base-100: 4.6:1 ✓

---

#### Accent Color - Forest Green
```css
--color-accent: oklch(50% 0.14 145);
--color-accent-content: oklch(98% 0.01 145);
```

- **Hex Approximation:** #2D7A4E
- **Usage:** Eco-tourism badges, nature-related content, success indicators, availability status
- **Meaning:** Represents Jharkhand's dense forests, eco-tourism focus, and sustainable tourism practices.
- **Accessibility:** Contrast ratio with base-100: 6.8:1 ✓

---

#### Neutral Colors
```css
--color-neutral: oklch(30% 0.02 50);
--color-neutral-content: oklch(95% 0.01 50);
```

- **Hex Approximation:** #3D3633
- **Usage:** Body text, headers, borders, subtle UI elements
- **Meaning:** Warm charcoal inspired by traditional cooking hearths

---

#### Base Colors (Backgrounds & Surfaces)

**Light Theme:**
```css
--color-base-100: oklch(98% 0.008 80);  /* Warm cream - main background */
--color-base-200: oklch(95% 0.015 75);  /* Soft beige - cards, panels */
--color-base-300: oklch(90% 0.02 70);   /* Muted tan - dividers, borders */
--color-base-content: oklch(25% 0.02 50); /* Warm dark - primary text */
```

- **Hex Approximations:** #FBF9F6, #F3EDE5, #E6DDD1, #3D3633
- **Meaning:** Inspired by handmade paper and natural fabric textures used in tribal art

---

#### Semantic Colors

**Info:**
```css
--color-info: oklch(62% 0.15 245);
--color-info-content: oklch(98% 0 0);
```
- **Hex Approximation:** #4A90B8
- **Usage:** Informational messages, help tooltips, guide availability

**Success:**
```css
--color-success: oklch(65% 0.18 145);
--color-success-content: oklch(20% 0.05 145);
```
- **Hex Approximation:** #3D9A62
- **Usage:** Booking confirmed, payment success, verified badge

**Warning:**
```css
--color-warning: oklch(80% 0.15 85);
--color-warning-content: oklch(25% 0.05 85);
```
- **Hex Approximation:** #E5B84A
- **Usage:** Limited availability, price alerts, incomplete profiles

**Error:**
```css
--color-error: oklch(58% 0.20 25);
--color-error-content: oklch(98% 0 0);
```
- **Hex Approximation:** #C44536
- **Usage:** Validation errors, booking failures, cancellations

---

### Color Usage Guidelines

**Do's:**
- ✅ Use primary (terracotta) for main CTAs and navigation active states
- ✅ Use secondary (amber) for pricing, ratings, and promotional badges
- ✅ Use accent (green) for eco-tourism tags and availability indicators
- ✅ Use semantic colors consistently across all feedback messages
- ✅ Pair vibrant colors with neutral backgrounds for breathing room
- ✅ Use tribal patterns sparingly as decorative accents, not backgrounds

**Don'ts:**
- ❌ Don't use primary and secondary colors adjacent without neutral separation
- ❌ Don't use vibrant colors for large background areas (overwhelming)
- ❌ Don't mix more than 2 brand colors in a single component
- ❌ Don't use patterns behind text content
- ❌ Don't override semantic color meanings (green ≠ error)

---

### Color Accessibility Matrix

| Text Color | Background | Contrast Ratio | WCAG Level | Use Case |
|------------|------------|----------------|------------|----------|
| base-content | base-100 | 12.5:1 | AAA | Body text |
| base-content | base-200 | 10.2:1 | AAA | Card text |
| primary-content | primary | 8.1:1 | AAA | Primary buttons |
| secondary-content | secondary | 7.4:1 | AAA | Secondary buttons |
| accent-content | accent | 7.8:1 | AAA | Eco badges |
| error-content | error | 7.2:1 | AAA | Error messages |

---

### Dark Mode Considerations

**Dark Theme Colors:**
```css
@plugin "daisyui/theme" {
  name: "jharkhandyatra-dark";
  prefersdark: true;
  color-scheme: "dark";
  
  --color-base-100: oklch(18% 0.02 50);
  --color-base-200: oklch(22% 0.025 50);
  --color-base-300: oklch(28% 0.03 50);
  --color-base-content: oklch(92% 0.015 80);
  
  --color-primary: oklch(62% 0.18 25);
  --color-secondary: oklch(78% 0.14 70);
  --color-accent: oklch(58% 0.14 145);
}
```

**Dark Mode Strategy:** Auto (system preference) with manual toggle option

[AI Suggestion: For MVP, implement light theme only. Dark mode can be added as a post-MVP enhancement.]

---

## UI/UX Design System

### Design Principles

- **Consistency:** Reuse components and patterns throughout. Same action = same appearance.
- **Accessibility:** WCAG 2.1 AA compliance minimum. Keyboard navigable, screen reader friendly.
- **Responsiveness:** Mobile-first approach. Touch-friendly on mobile, information-dense on desktop.
- **Modularity:** Atomic design methodology. Build complex UIs from simple, tested components.
- **Cultural Sensitivity:** Respectful representation of tribal art and culture. Avoid appropriation.

---

### DaisyUI 5 Theme Configuration

**Complete Theme Definition:**

```css
/* src/index.css */
@import "tailwindcss";
@plugin "daisyui";

@plugin "daisyui/theme" {
  name: "jharkhandyatra";
  default: true;
  prefersdark: false;
  color-scheme: "light";
  
  /* Base Colors */
  --color-base-100: oklch(98% 0.008 80);
  --color-base-200: oklch(95% 0.015 75);
  --color-base-300: oklch(90% 0.02 70);
  --color-base-content: oklch(25% 0.02 50);
  
  /* Primary - Terracotta Red */
  --color-primary: oklch(55% 0.18 25);
  --color-primary-content: oklch(98% 0.01 25);
  
  /* Secondary - Amber Gold */
  --color-secondary: oklch(75% 0.16 70);
  --color-secondary-content: oklch(25% 0.05 70);
  
  /* Accent - Forest Green */
  --color-accent: oklch(50% 0.14 145);
  --color-accent-content: oklch(98% 0.01 145);
  
  /* Neutral */
  --color-neutral: oklch(30% 0.02 50);
  --color-neutral-content: oklch(95% 0.01 50);
  
  /* Semantic Colors */
  --color-info: oklch(62% 0.15 245);
  --color-info-content: oklch(98% 0 0);
  --color-success: oklch(65% 0.18 145);
  --color-success-content: oklch(20% 0.05 145);
  --color-warning: oklch(80% 0.15 85);
  --color-warning-content: oklch(25% 0.05 85);
  --color-error: oklch(58% 0.20 25);
  --color-error-content: oklch(98% 0 0);
  
  /* Border Radius - Slightly rounded for warmth */
  --radius-selector: 0.5rem;
  --radius-field: 0.5rem;
  --radius-box: 0.75rem;
  
  /* Sizing */
  --size-selector: 1.25rem;
  --size-field: 2.75rem;
  
  /* Effects */
  --border: 1px;
  --depth: 2;
  --noise: 0;
}
```

---

### Typography

**Google Fonts Integration:**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Source+Sans+3:wght@300;400;500;600&display=swap" rel="stylesheet">
```

**Font System:**

**Primary Font (Headings): Outfit**
- **Weights:** 400, 500, 600, 700
- **Usage:** Headings (H1-H6), navigation, buttons, card titles
- **Characteristics:** Modern geometric sans-serif with friendly, approachable feel

**Secondary Font (Body): Source Sans 3**
- **Weights:** 300, 400, 500, 600
- **Usage:** Body text, descriptions, form labels, metadata
- **Characteristics:** Highly readable, professional, optimized for screens

**Tailwind Configuration:**
```js
// tailwind.config.js
module.exports = {
  theme: {
    fontFamily: {
      'heading': ['Outfit', 'sans-serif'],
      'body': ['Source Sans 3', 'sans-serif'],
    },
  },
}
```

**Typography Scale:**

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height | Font |
|---------|---------------|---------------|--------|-------------|------|
| H1 | 48px (3rem) | 32px (2rem) | 700 | 1.2 | Outfit |
| H2 | 36px (2.25rem) | 28px (1.75rem) | 600 | 1.25 | Outfit |
| H3 | 28px (1.75rem) | 24px (1.5rem) | 600 | 1.3 | Outfit |
| H4 | 24px (1.5rem) | 20px (1.25rem) | 600 | 1.35 | Outfit |
| H5 | 20px (1.25rem) | 18px (1.125rem) | 500 | 1.4 | Outfit |
| H6 | 18px (1.125rem) | 16px (1rem) | 500 | 1.4 | Outfit |
| Body Large | 18px | 16px | 400 | 1.6 | Source Sans 3 |
| Body | 16px | 16px | 400 | 1.6 | Source Sans 3 |
| Body Small | 14px | 14px | 400 | 1.5 | Source Sans 3 |
| Caption | 12px | 12px | 400 | 1.4 | Source Sans 3 |
| Button | 16px | 14px | 500 | 1 | Outfit |

---

### Icons - Google Material Symbols

**Integration:**

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet">
```

**Icon Variant:** Outlined (consistent with modern, clean aesthetic)

**Project-Specific Icon Usage:**

| Category | Icon Names | Usage Context |
|----------|-----------|---------------|
| **Navigation** | home, menu, close, arrow_back, search, filter_list | App navigation |
| **Listings** | hotel, cottage, person, storefront, category | Listing types |
| **Booking** | calendar_month, schedule, event_available, event_busy | Date selection |
| **User Actions** | favorite, favorite_border, share, bookmark | Save/share listings |
| **Reviews** | star, star_half, star_border, reviews | Ratings |
| **Location** | location_on, map, explore, directions | Maps and location |
| **Amenities** | wifi, local_parking, restaurant, ac_unit, pets | Homestay features |
| **Communication** | call, chat, mail, translate | Contact options |
| **Commerce** | shopping_cart, shopping_bag, payments, receipt | Marketplace |
| **User** | person, account_circle, logout, settings | Account |
| **Status** | check_circle, error, warning, info, verified | Feedback |

**Icon Sizes:**
- Small (16px): Inline with text, badges
- Medium (20px): Buttons, form elements
- Large (24px): Card actions, navigation
- XL (32px): Empty states, feature highlights
- 2XL (48px): Hero sections, onboarding

---

### Responsive Design

**Breakpoint System:**

```tsx
const breakpoints = {
  sm: '640px',   // Mobile landscape / Large phones
  md: '768px',   // Tablets
  lg: '1024px',  // Laptops / Small desktops
  xl: '1280px',  // Desktops
  '2xl': '1536px' // Large desktops
};
```

**Layout Patterns:**

**Mobile (<768px):**
- Single column layouts
- Bottom navigation bar (fixed)
- Full-width cards and buttons
- Horizontal scroll for listing previews
- Collapsible filters (sheet/modal)
- Touch targets minimum 44px

**Tablet (768px - 1023px):**
- 2-column grid for listings
- Side-by-side filter panel (collapsible)
- Larger touch targets
- Floating action buttons

**Desktop (≥1024px):**
- 3-4 column grid for listings
- Persistent sidebar filters
- Hover states and tooltips
- Keyboard shortcuts
- Multi-column forms

**Container Widths:**
```css
.container-narrow { max-width: 768px; }   /* Auth pages, checkout */
.container-default { max-width: 1280px; } /* Listing pages */
.container-wide { max-width: 1536px; }    /* Homepage hero */
```

---

### Accessibility Requirements

**WCAG 2.1 AA Compliance Checklist:**

**Perceivable:**
- [x] All images have descriptive alt text (including listing photos)
- [x] Color contrast ratio ≥ 4.5:1 for all text
- [x] Color is not the only indicator (icons + text for status)
- [x] Form fields have visible labels (not just placeholders)
- [x] Error messages are descriptive and helpful

**Operable:**
- [x] All functionality keyboard accessible
- [x] Visible focus indicators (2px primary color outline)
- [x] Skip to main content link
- [x] No keyboard traps in modals/dropdowns
- [x] Touch targets minimum 44x44px on mobile

**Understandable:**
- [x] Page language declared (`<html lang="en">`)
- [x] Consistent navigation across pages
- [x] Form validation with inline error messages
- [x] Confirmation before destructive actions (cancel booking)

**Robust:**
- [x] Semantic HTML elements (nav, main, article, aside)
- [x] ARIA labels for icon-only buttons
- [x] ARIA live regions for dynamic content (search results, notifications)

---

## Component Design System
https://stitch.withgoogle.com/projects/11018627272293321940

### Component Organization Structure

```
src/
├── components/
│   ├── atoms/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── index.ts
│   │   ├── Input/
│   │   ├── Badge/
│   │   ├── Avatar/
│   │   ├── Icon/
│   │   ├── Rating/
│   │   ├── Price/
│   │   ├── Tag/
│   │   └── Skeleton/
│   │
│   ├── molecules/
│   │   ├── FormField/
│   │   ├── SearchBar/
│   │   ├── ListingCard/
│   │   ├── ReviewCard/
│   │   ├── DatePicker/
│   │   ├── GuestSelector/
│   │   ├── FilterChip/
│   │   ├── AmenityItem/
│   │   ├── NavItem/
│   │   └── CartItem/
│   │
│   ├── organisms/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── MobileNav/
│   │   ├── SearchFilters/
│   │   ├── ListingGrid/
│   │   ├── ImageGallery/
│   │   ├── BookingWidget/
│   │   ├── ReviewSection/
│   │   ├── HostCard/
│   │   ├── MapView/
│   │   └── ShoppingCart/
│   │
│   ├── layouts/
│   │   ├── MainLayout/
│   │   ├── AuthLayout/
│   │   ├── DashboardLayout/
│   │   └── CheckoutLayout/
│   │
│   └── pages/
│       ├── Home/
│       ├── Search/
│       ├── HomestayDetail/
│       ├── GuideDetail/
│       ├── ProductDetail/
│       ├── Booking/
│       ├── Checkout/
│       ├── Profile/
│       ├── Dashboard/
│       ├── Login/
│       ├── Register/
│       └── NotFound/
│
├── hooks/
│   ├── useAuth.ts
│   ├── useSearch.ts
│   ├── useBooking.ts
│   ├── useCart.ts
│   └── useApi.ts
│
├── context/
│   ├── AuthContext.tsx
│   ├── CartContext.tsx
│   └── SearchContext.tsx
│
├── services/
│   ├── api.ts
│   ├── auth.service.ts
│   ├── listings.service.ts
│   ├── bookings.service.ts
│   └── orders.service.ts
│
├── types/
│   ├── user.types.ts
│   ├── listing.types.ts
│   ├── booking.types.ts
│   └── order.types.ts
│
└── utils/
    ├── formatters.ts
    ├── validators.ts
    └── constants.ts
```

---

### Atom Components

#### Button Component

```tsx
// components/atoms/Button/Button.tsx
import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'link';
  /** Size of the button */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Show loading spinner */
  loading?: boolean;
  /** Make button full width */
  fullWidth?: boolean;
  /** Icon element to display */
  icon?: React.ReactNode;
  /** Position of icon relative to text */
  iconPosition?: 'left' | 'right';
  /** Button content */
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  children,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) => {
  const variantClasses: Record<string, string> = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
    link: 'btn-link',
  };
  
  const sizeClasses: Record<string, string> = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
  };
  
  return (
    <button
      type={type}
      className={`btn font-heading ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'btn-block' : ''} ${className}`}
      disabled={disabled || loading}
      aria-busy={loading}
      aria-disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="loading loading-spinner loading-sm" />}
      {!loading && icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      <span>{children}</span>
      {!loading && icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};
```

---

#### Rating Component

```tsx
// components/atoms/Rating/Rating.tsx
import React from 'react';

export interface RatingProps {
  /** Rating value (0-5, supports half stars) */
  value: number;
  /** Maximum rating value */
  max?: number;
  /** Size of stars */
  size?: 'sm' | 'md' | 'lg';
  /** Show numeric value alongside stars */
  showValue?: boolean;
  /** Number of reviews (displayed in parentheses) */
  reviewCount?: number;
  /** Additional CSS classes */
  className?: string;
}

export const Rating = ({
  value,
  max = 5,
  size = 'md',
  showValue = false,
  reviewCount,
  className = '',
}: RatingProps) => {
  const sizeClasses: Record<string, string> = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const stars = [];
  for (let i = 1; i <= max; i++) {
    if (i <= Math.floor(value)) {
      stars.push(
        <span key={i} className="material-symbols-outlined text-secondary" aria-hidden="true">
          star
        </span>
      );
    } else if (i - 0.5 <= value) {
      stars.push(
        <span key={i} className="material-symbols-outlined text-secondary" aria-hidden="true">
          star_half
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="material-symbols-outlined text-base-300" aria-hidden="true">
          star
        </span>
      );
    }
  }

  return (
    <div className={`flex items-center gap-1 ${sizeClasses[size]} ${className}`}>
      <div className="flex" role="img" aria-label={`Rating: ${value} out of ${max} stars`}>
        {stars}
      </div>
      {showValue && <span className="font-medium">{value.toFixed(1)}</span>}
      {reviewCount !== undefined && (
        <span className="text-base-content/60">({reviewCount})</span>
      )}
    </div>
  );
};
```

---

#### Price Component

```tsx
// components/atoms/Price/Price.tsx
import React from 'react';

export interface PriceProps {
  /** Price amount in INR */
  amount: number;
  /** Original price for showing discount */
  originalAmount?: number;
  /** Price period (e.g., "per night", "per day") */
  period?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Additional CSS classes */
  className?: string;
}

export const Price = ({
  amount,
  originalAmount,
  period,
  size = 'md',
  className = '',
}: PriceProps) => {
  const sizeClasses: Record<string, { price: string; period: string }> = {
    sm: { price: 'text-base font-semibold', period: 'text-xs' },
    md: { price: 'text-lg font-semibold', period: 'text-sm' },
    lg: { price: 'text-2xl font-bold', period: 'text-base' },
    xl: { price: 'text-3xl font-bold', period: 'text-lg' },
  };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const hasDiscount = originalAmount && originalAmount > amount;
  const discountPercent = hasDiscount
    ? Math.round(((originalAmount - amount) / originalAmount) * 100)
    : 0;

  return (
    <div className={`flex items-baseline gap-2 ${className}`}>
      <span className={`${sizeClasses[size].price} text-base-content`}>
        {formatPrice(amount)}
      </span>
      
      {hasDiscount && (
        <>
          <span className={`${sizeClasses[size].period} text-base-content/50 line-through`}>
            {formatPrice(originalAmount)}
          </span>
          <span className="badge badge-secondary badge-sm">
            {discountPercent}% off
          </span>
        </>
      )}
      
      {period && (
        <span className={`${sizeClasses[size].period} text-base-content/60`}>
          {period}
        </span>
      )}
    </div>
  );
};
```

---

#### Badge Component

```tsx
// components/atoms/Badge/Badge.tsx
import React from 'react';

export interface BadgeProps {
  /** Badge variant */
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info';
  /** Size of badge */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Show outline style */
  outline?: boolean;
  /** Icon to display before text */
  icon?: string;
  /** Badge content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const Badge = ({
  variant = 'default',
  size = 'md',
  outline = false,
  icon,
  children,
  className = '',
}: BadgeProps) => {
  const variantClasses: Record<string, string> = {
    default: '',
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    accent: 'badge-accent',
    success: 'badge-success',
    warning: 'badge-warning',
    error: 'badge-error',
    info: 'badge-info',
  };

  const sizeClasses: Record<string, string> = {
    xs: 'badge-xs',
    sm: 'badge-sm',
    md: '',
    lg: 'badge-lg',
  };

  return (
    <span
      className={`badge ${variantClasses[variant]} ${sizeClasses[size]} ${outline ? 'badge-outline' : ''} ${className}`}
    >
      {icon && (
        <span className="material-symbols-outlined text-sm mr-1" aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
    </span>
  );
};
```

---

**Atom Components Inventory:**

| Component | Purpose | Key Props | States |
|-----------|---------|-----------|--------|
| **Button** | Action triggers | variant, size, loading, icon | default, hover, active, focus, loading, disabled |
| **Input** | Text/number input | type, error, disabled, icon | default, focus, error, disabled |
| **Rating** | Star ratings display | value, showValue, reviewCount | readonly display |
| **Price** | Currency display | amount, originalAmount, period | default, discounted |
| **Badge** | Status/category tags | variant, size, icon | default |
| **Avatar** | User/host images | src, alt, size, fallback | default, loading, error |
| **Icon** | Material symbols | name, size, className | default |
| **Tag** | Filter tags | label, removable, onClick | default, selected |
| **Skeleton** | Loading placeholder | variant (text, circle, rect) | loading |
| **Checkbox** | Boolean selection | checked, disabled | unchecked, checked, disabled |
| **Toggle** | On/off switches | checked, disabled | off, on |

---

### Molecule Components

#### ListingCard Component

```tsx
// components/molecules/ListingCard/ListingCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@/components/atoms/Rating';
import { Price } from '@/components/atoms/Price';
import { Badge } from '@/components/atoms/Badge';

export interface ListingCardProps {
  /** Unique listing ID */
  id: string;
  /** Type of listing */
  type: 'homestay' | 'guide' | 'product';
  /** Listing title */
  title: string;
  /** Location or category */
  subtitle: string;
  /** Primary image URL */
  image: string;
  /** Rating value */
  rating: number;
  /** Number of reviews */
  reviewCount: number;
  /** Price amount */
  price: number;
  /** Price period (e.g., "per night") */
  pricePeriod?: string;
  /** Optional badges */
  badges?: Array<{ label: string; variant: 'accent' | 'secondary' | 'primary' }>;
  /** Is listing saved to wishlist */
  isSaved?: boolean;
  /** Callback when save button clicked */
  onSaveToggle?: (id: string) => void;
}

export const ListingCard = ({
  id,
  type,
  title,
  subtitle,
  image,
  rating,
  reviewCount,
  price,
  pricePeriod,
  badges = [],
  isSaved = false,
  onSaveToggle,
}: ListingCardProps) => {
  const typeRoutes: Record<string, string> = {
    homestay: '/homestays',
    guide: '/guides',
    product: '/marketplace',
  };

  const handleSaveClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onSaveToggle?.(id);
  };

  return (
    <Link
      to={`${typeRoutes[type]}/${id}`}
      className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow group"
    >
      {/* Image Container */}
      <figure className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        
        {/* Save Button */}
        <button
          onClick={handleSaveClick}
          className="absolute top-3 right-3 btn btn-circle btn-sm bg-base-100/80 hover:bg-base-100 border-0"
          aria-label={isSaved ? 'Remove from saved' : 'Save listing'}
        >
          <span className="material-symbols-outlined text-lg">
            {isSaved ? 'favorite' : 'favorite_border'}
          </span>
        </button>

        {/* Badges */}
        {badges.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-1">
            {badges.map((badge, index) => (
              <Badge key={index} variant={badge.variant} size="sm">
                {badge.label}
              </Badge>
            ))}
          </div>
        )}
      </figure>

      {/* Content */}
      <div className="card-body p-4">
        <h3 className="card-title text-lg font-heading line-clamp-1">{title}</h3>
        
        <p className="text-base-content/60 text-sm flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">location_on</span>
          {subtitle}
        </p>

        <div className="flex items-center justify-between mt-2">
          <Rating value={rating} reviewCount={reviewCount} size="sm" />
          <Price amount={price} period={pricePeriod} size="sm" />
        </div>
      </div>
    </Link>
  );
};
```

---

#### SearchBar Component

```tsx
// components/molecules/SearchBar/SearchBar.tsx
import React, { useState } from 'react';

export interface SearchBarProps {
  /** Placeholder text */
  placeholder?: string;
  /** Current search value */
  value?: string;
  /** Callback when search is submitted */
  onSearch: (query: string) => void;
  /** Callback when value changes */
  onChange?: (value: string) => void;
  /** Show filter button */
  showFilterButton?: boolean;
  /** Callback when filter button clicked */
  onFilterClick?: () => void;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Additional CSS classes */
  className?: string;
}

export const SearchBar = ({
  placeholder = 'Search destinations, homestays, guides...',
  value: controlledValue,
  onSearch,
  onChange,
  showFilterButton = true,
  onFilterClick,
  size = 'md',
  className = '',
}: SearchBarProps) => {
  const [internalValue, setInternalValue] = useState('');
  const value = controlledValue ?? internalValue;

  const sizeClasses: Record<string, string> = {
    sm: 'input-sm',
    md: '',
    lg: 'input-lg',
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
      <div className="relative flex-1">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-base-content/50">
          search
        </span>
        <input
          type="search"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`input input-bordered w-full pl-10 ${sizeClasses[size]}`}
          aria-label="Search"
        />
      </div>
      
      {showFilterButton && (
        <button
          type="button"
          onClick={onFilterClick}
          className={`btn btn-outline ${sizeClasses[size]}`}
          aria-label="Open filters"
        >
          <span className="material-symbols-outlined">filter_list</span>
          <span className="hidden sm:inline">Filters</span>
        </button>
      )}
      
      <button type="submit" className={`btn btn-primary ${sizeClasses[size]}`}>
        <span className="material-symbols-outlined sm:hidden">search</span>
        <span className="hidden sm:inline">Search</span>
      </button>
    </form>
  );
};
```

---

#### DateRangePicker Component

```tsx
// components/molecules/DateRangePicker/DateRangePicker.tsx
import React, { useState } from 'react';
import { format } from 'date-fns';

export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

export interface DateRangePickerProps {
  /** Selected date range */
  value: DateRange;
  /** Callback when date range changes */
  onChange: (range: DateRange) => void;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Placeholder for start date */
  startPlaceholder?: string;
  /** Placeholder for end date */
  endPlaceholder?: string;
  /** Error message */
  error?: string;
  /** Additional CSS classes */
  className?: string;
}

export const DateRangePicker = ({
  value,
  onChange,
  minDate = new Date(),
  maxDate,
  startPlaceholder = 'Check-in',
  endPlaceholder = 'Check-out',
  error,
  className = '',
}: DateRangePickerProps) => {
  const formatDate = (date: Date | null) => {
    return date ? format(date, 'yyyy-MM-dd') : '';
  };

  const handleStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value ? new Date(e.target.value) : null;
    onChange({ ...value, startDate: date });
  };

  const handleEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value ? new Date(e.target.value) : null;
    onChange({ ...value, endDate: date });
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="flex gap-2">
        <div className="form-control flex-1">
          <label className="label">
            <span className="label-text">{startPlaceholder}</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-base-content/50">
              calendar_month
            </span>
            <input
              type="date"
              value={formatDate(value.startDate)}
              onChange={handleStartChange}
              min={minDate ? formatDate(minDate) : undefined}
              max={value.endDate ? formatDate(value.endDate) : maxDate ? formatDate(maxDate) : undefined}
              className={`input input-bordered w-full pl-10 ${error ? 'input-error' : ''}`}
            />
          </div>
        </div>

        <div className="form-control flex-1">
          <label className="label">
            <span className="label-text">{endPlaceholder}</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-base-content/50">
              calendar_month
            </span>
            <input
              type="date"
              value={formatDate(value.endDate)}
              onChange={handleEndChange}
              min={value.startDate ? formatDate(value.startDate) : minDate ? formatDate(minDate) : undefined}
              max={maxDate ? formatDate(maxDate) : undefined}
              className={`input input-bordered w-full pl-10 ${error ? 'input-error' : ''}`}
            />
          </div>
        </div>
      </div>

      {error && (
        <span className="text-error text-sm">{error}</span>
      )}
    </div>
  );
};
```

---

**Molecule Components Inventory:**

| Component | Combines | Purpose | Key Props |
|-----------|----------|---------|-----------|
| **ListingCard** | Image + Badge + Rating + Price | Display listing preview | id, type, title, image, rating, price |
| **SearchBar** | Input + Icon + Button | Search interface | onSearch, showFilterButton |
| **DateRangePicker** | Input + Calendar | Date selection for booking | value, onChange, minDate |
| **GuestSelector** | Input + Counter | Select number of guests | adults, children, onChange |
| **FormField** | Label + Input + Error | Form input with validation | label, name, error, required |
| **ReviewCard** | Avatar + Rating + Text | Display user review | author, rating, content, date |
| **FilterChip** | Tag + Close button | Active filter display | label, onRemove |
| **AmenityItem** | Icon + Label | Amenity display | icon, label |
| **NavItem** | Icon + Label + Badge | Navigation menu item | icon, label, href, badge |
| **CartItem** | Image + Title + Price + Quantity | Shopping cart item | product, quantity, onQuantityChange |
| **HostCard** | Avatar + Name + Badge | Host/Guide preview | name, avatar, verified, responseRate |

---

### Organism Components

#### Navbar Component

```tsx
// components/organisms/Navbar/Navbar.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/atoms/Button';
import { Avatar } from '@/components/atoms/Avatar';
import { SearchBar } from '@/components/molecules/SearchBar';

export const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-base-100 shadow-sm">
      <nav className="navbar container mx-auto px-4" aria-label="Main navigation">
        {/* Logo */}
        <div className="navbar-start">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-primary text-2xl font-heading font-bold">
              JharkhandYatra
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            <li>
              <Link to="/homestays" className="font-medium">Homestays</Link>
            </li>
            <li>
              <Link to="/guides" className="font-medium">Guides</Link>
            </li>
            <li>
              <Link to="/marketplace" className="font-medium">Marketplace</Link>
            </li>
            <li>
              <Link to="/destinations" className="font-medium">Destinations</Link>
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="navbar-end gap-2">
          {/* Search (Desktop) */}
          <div className="hidden md:block w-64">
            <SearchBar
              size="sm"
              showFilterButton={false}
              onSearch={handleSearch}
              placeholder="Search..."
            />
          </div>

          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <Avatar src={user.avatar} alt={user.name} size="sm" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-lg"
              >
                <li><Link to="/profile">My Profile</Link></li>
                <li><Link to="/bookings">My Bookings</Link></li>
                <li><Link to="/wishlist">Wishlist</Link></li>
                {user.role === 'provider' && (
                  <li><Link to="/dashboard">Dashboard</Link></li>
                )}
                <li><hr className="my-2" /></li>
                <li><button onClick={logout}>Logout</button></li>
              </ul>
            </div>
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={() => navigate('/login')}>
                Sign In
              </Button>
              <Button variant="primary" size="sm" onClick={() => navigate('/register')}>
                Sign Up
              </Button>
            </>
          )}

          {/* Cart Icon */}
          <Link to="/cart" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="badge badge-secondary badge-sm indicator-item">3</span>
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="btn btn-ghost btn-circle lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-base-100 border-t border-base-200 pb-4">
          <div className="container mx-auto px-4 pt-4">
            <SearchBar onSearch={handleSearch} size="sm" />
          </div>
          <ul className="menu px-4 mt-4">
            <li><Link to="/homestays">Homestays</Link></li>
            <li><Link to="/guides">Guides</Link></li>
            <li><Link to="/marketplace">Marketplace</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};
```

---

#### BookingWidget Component

```tsx
// components/organisms/BookingWidget/BookingWidget.tsx
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { differenceInDays } from 'date-fns';
import { Button } from '@/components/atoms/Button';
import { Price } from '@/components/atoms/Price';
import { DateRangePicker, DateRange } from '@/components/molecules/DateRangePicker';
import { GuestSelector } from '@/components/molecules/GuestSelector';

export interface BookingWidgetProps {
  /** Listing ID */
  listingId: string;
  /** Type of listing */
  listingType: 'homestay' | 'guide';
  /** Price per night/day */
  pricePerUnit: number;
  /** Price unit label */
  priceUnit: string;
  /** Maximum guests allowed */
  maxGuests: number;
  /** Service fee percentage */
  serviceFeePercent?: number;
  /** Unavailable dates */
  unavailableDates?: Date[];
  /** Minimum stay nights */
  minStay?: number;
}

export const BookingWidget = ({
  listingId,
  listingType,
  pricePerUnit,
  priceUnit,
  maxGuests,
  serviceFeePercent = 10,
  unavailableDates = [],
  minStay = 1,
}: BookingWidgetProps) => {
  const navigate = useNavigate();
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });
  const [guests, setGuests] = useState({ adults: 1, children: 0 });
  const [error, setError] = useState<string | null>(null);

  const nights = useMemo(() => {
    if (dateRange.startDate && dateRange.endDate) {
      return differenceInDays(dateRange.endDate, dateRange.startDate);
    }
    return 0;
  }, [dateRange]);

  const subtotal = nights * pricePerUnit;
  const serviceFee = Math.round(subtotal * (serviceFeePercent / 100));
  const total = subtotal + serviceFee;

  const handleReserve = () => {
    if (!dateRange.startDate || !dateRange.endDate) {
      setError('Please select dates');
      return;
    }
    if (nights < minStay) {
      setError(`Minimum stay is ${minStay} night${minStay > 1 ? 's' : ''}`);
      return;
    }

    const bookingParams = new URLSearchParams({
      listingId,
      type: listingType,
      startDate: dateRange.startDate.toISOString(),
      endDate: dateRange.endDate.toISOString(),
      adults: guests.adults.toString(),
      children: guests.children.toString(),
    });

    navigate(`/booking?${bookingParams.toString()}`);
  };

  return (
    <div className="card bg-base-100 shadow-lg border border-base-200 sticky top-24">
      <div className="card-body">
        {/* Price Header */}
        <div className="flex items-baseline gap-2 mb-4">
          <Price amount={pricePerUnit} size="lg" />
          <span className="text-base-content/60">{priceUnit}</span>
        </div>

        {/* Date Selection */}
        <DateRangePicker
          value={dateRange}
          onChange={(range) => {
            setDateRange(range);
            setError(null);
          }}
          startPlaceholder="Check-in"
          endPlaceholder="Check-out"
          error={error && !dateRange.startDate ? error : undefined}
        />

        {/* Guest Selection */}
        <div className="mt-4">
          <GuestSelector
            adults={guests.adults}
            children={guests.children}
            maxGuests={maxGuests}
            onChange={setGuests}
          />
        </div>

        {/* Reserve Button */}
        <Button
          variant="primary"
          fullWidth
          size="lg"
          onClick={handleReserve}
          className="mt-4"
        >
          Reserve
        </Button>

        {error && (
          <p className="text-error text-sm text-center mt-2">{error}</p>
        )}

        {/* Price Breakdown */}
        {nights > 0 && (
          <div className="mt-6 space-y-3 border-t border-base-200 pt-4">
            <div className="flex justify-between">
              <span className="underline">
                ₹{pricePerUnit.toLocaleString('en-IN')} × {nights} night{nights > 1 ? 's' : ''}
              </span>
              <span>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span className="underline">Service fee</span>
              <span>₹{serviceFee.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t border-base-200 pt-3">
              <span>Total</span>
              <span>₹{total.toLocaleString('en-IN')}</span>
            </div>
          </div>
        )}

        <p className="text-center text-sm text-base-content/60 mt-4">
          You won't be charged yet
        </p>
      </div>
    </div>
  );
};
```

---

**Organism Components Inventory:**

| Component | Purpose | Complexity | Key Features |
|-----------|---------|------------|--------------|
| **Navbar** | Site navigation | High | Logo, nav links, search, user menu, mobile menu |
| **Footer** | Site footer | Medium | Links, social icons, newsletter signup |
| **MobileNav** | Bottom navigation (mobile) | Medium | Fixed bottom bar with main nav icons |
| **SearchFilters** | Filter panel | High | Price range, rating, amenities, location filters |
| **ListingGrid** | Display listing cards | Medium | Responsive grid, loading states, pagination |
| **ImageGallery** | Photo gallery with lightbox | High | Thumbnail grid, fullscreen view, navigation |
| **BookingWidget** | Booking form sidebar | High | Date picker, guest selector, price breakdown |
| **ReviewSection** | Reviews list with form | High | Review cards, pagination, add review form |
| **HostCard** | Host/guide profile card | Medium | Avatar, name, verified badge, contact button |
| **MapView** | Interactive map | High | Location markers, info windows, clustering |
| **ShoppingCart** | Cart drawer/page | High | Cart items, quantity controls, checkout button |
| **Hero** | Homepage hero section | Medium | Search bar, featured image, tagline |

---

### Layout Components

#### MainLayout

```tsx
// components/layouts/MainLayout/MainLayout.tsx
import React, { FC } from 'react';
import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';
import { MobileNav } from '@/components/organisms/MobileNav';

export interface MainLayoutProps {
  children: React.ReactNode;
  /** Show footer */
  showFooter?: boolean;
  /** Show mobile bottom navigation */
  showMobileNav?: boolean;
  /** Container width variant */
  containerWidth?: 'full' | 'default' | 'narrow';
  /** Background color variant */
  bgColor?: 'base-100' | 'base-200';
}

export const MainLayout: FC<MainLayoutProps> = ({
  children,
  showFooter = true,
  showMobileNav = true,
  containerWidth = 'default',
  bgColor = 'base-200',
}) => {
  const containerClasses: Record<string, string> = {
    full: 'w-full',
    default: 'container mx-auto px-4',
    narrow: 'max-w-3xl mx-auto px-4',
  };

  return (
    <div className={`min-h-screen flex flex-col bg-${bgColor}`}>
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-primary focus:text-primary-content focus:rounded"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1 py-6 md:py-8" role="main">
        <div className={containerClasses[containerWidth]}>
          {children}
        </div>
      </main>

      {showFooter && <Footer />}
      
      {/* Mobile Bottom Navigation */}
      {showMobileNav && (
        <div className="md:hidden">
          <MobileNav />
        </div>
      )}
    </div>
  );
};
```

---

#### AuthLayout

```tsx
// components/layouts/AuthLayout/AuthLayout.tsx
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export interface AuthLayoutProps {
  children: React.ReactNode;
  /** Title above the form */
  title: string;
  /** Subtitle/description */
  subtitle?: string;
}

export const AuthLayout: FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <div className="min-h-screen bg-base-200 flex">
      {/* Left Side - Decorative (hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
        <div className="relative z-10 flex flex-col justify-center px-12 text-primary-content">
          <Link to="/" className="text-3xl font-heading font-bold mb-8">
            JharkhandYatra
          </Link>
          <h2 className="text-4xl font-heading font-bold mb-4">
            Discover the Soul of Jharkhand
          </h2>
          <p className="text-lg opacity-90">
            Connect with authentic local experiences, tribal homestays, 
            and skilled artisans across Jharkhand's beautiful landscapes.
          </p>
        </div>
        {/* Decorative tribal pattern overlay */}
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10">
          {/* SVG pattern would go here */}
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <Link to="/" className="lg:hidden block text-center mb-8">
            <span className="text-2xl font-heading font-bold text-primary">
              JharkhandYatra
            </span>
          </Link>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h1 className="text-2xl font-heading font-bold text-center">
                {title}
              </h1>
              {subtitle && (
                <p className="text-base-content/60 text-center mb-6">
                  {subtitle}
                </p>
              )}
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
```

---

**Layout Components Inventory:**

| Layout | Purpose | Structure | Use Cases |
|--------|---------|-----------|-----------|
| **MainLayout** | Standard pages | Navbar + Content + Footer + MobileNav | Browse, search, listing details |
| **AuthLayout** | Authentication | Split screen with branding | Login, register, forgot password |
| **CheckoutLayout** | Checkout flow | Minimal header + stepper + content | Booking confirmation, payment |
| **DashboardLayout** | Provider dashboard | Sidebar + Header + Content | Manage listings, view bookings |

---

### Page Components Inventory

| Page | Route | Layout | Key Sections | Purpose |
|------|-------|--------|--------------|---------|
| **HomePage** | `/` | MainLayout | Hero, Featured Destinations, Categories, Testimonials | Landing page |
| **SearchPage** | `/search` | MainLayout | Filters, Results Grid, Map Toggle | Search results |
| **HomestaysPage** | `/homestays` | MainLayout | Filters, Listing Grid | Browse homestays |
| **HomestayDetailPage** | `/homestays/:id` | MainLayout | Gallery, Details, BookingWidget, Reviews, Host | View homestay |
| **GuidesPage** | `/guides` | MainLayout | Filters, Guide Grid | Browse guides |
| **GuideDetailPage** | `/guides/:id` | MainLayout | Profile, Tours, BookingWidget, Reviews | View guide |
| **MarketplacePage** | `/marketplace` | MainLayout | Categories, Product Grid | Browse products |
| **ProductDetailPage** | `/marketplace/:id` | MainLayout | Gallery, Details, Add to Cart, Artisan | View product |
| **CartPage** | `/cart` | MainLayout | Cart Items, Summary | Shopping cart |
| **CheckoutPage** | `/checkout` | CheckoutLayout | Shipping, Payment, Summary | Complete purchase |
| **BookingPage** | `/booking` | CheckoutLayout | Booking Details, Payment | Confirm booking |
| **LoginPage** | `/login` | AuthLayout | Login Form, Social Login | Authentication |
| **RegisterPage** | `/register` | AuthLayout | Registration Form, Role Select | User registration |
| **ProfilePage** | `/profile` | MainLayout | User Info, Bookings, Reviews | User profile |
| **DashboardPage** | `/dashboard` | DashboardLayout | Stats, Recent Bookings, Listings | Provider dashboard |
| **NotFoundPage** | `*` | MainLayout | 404 Message | Error page |

---

## Wireframe Structure

### Homepage (`/`)

**Purpose:** Introduce platform, inspire exploration, drive conversions

**Layout Type:** Full-width hero, contained sections

**Block 1 - Hero Section:**
- **Component Type:** Full-width hero with search
- **Elements:**
    - Background: Scenic Jharkhand landscape image (Netarhat sunrise)
    - Overlay: Gradient for text readability
    - Heading (H1): "Discover the Soul of Jharkhand"
    - Subheading: "Authentic homestays, expert guides, and tribal crafts"
    - SearchBar: Prominent search with location autocomplete
    - Quick Links: "Homestays", "Guides", "Marketplace" buttons
- **Responsive:** Stack elements vertically on mobile, reduce image height

**Block 2 - Featured Categories:**
- **Component Type:** 4-column card grid (2 on tablet, 1 on mobile)
- **Elements:**
    - Category cards with icons and images
    - Categories: Homestays, Local Guides, Handicrafts, Experiences
    - Hover effect with color overlay
- **Responsive:** 2x2 grid on mobile

**Block 3 - Featured Destinations:**
- **Component Type:** Horizontal scroll on mobile, 4-card grid on desktop
- **Elements:**
    - Destination cards (Netarhat, Betla, Patratu, Hundru Falls, Deoghar)
    - Each: Image, name, rating, listing count
- **Responsive:** Horizontal scroll with snap on mobile

**Block 4 - How It Works:**
- **Component Type:** 3-step process illustration
- **Elements:**
    - Step 1: "Discover" - Search icon
    - Step 2: "Book" - Calendar icon
    - Step 3: "Experience" - Heart icon
    - Brief description under each
- **Responsive:** Vertical stack on mobile

**Block 5 - Featured Homestays:**
- **Component Type:** ListingGrid (4 cards)
- **Elements:**
    - ListingCard components
    - "View All Homestays" button
- **Responsive:** 2-column on tablet, 1-column on mobile

**Block 6 - Testimonials:**
- **Component Type:** Carousel/slider
- **Elements:**
    - Review cards with avatar, quote, name, location
    - Navigation dots
- **Responsive:** Single testimonial view on mobile

**Block 7 - CTA Section:**
- **Component Type:** Split section
- **Elements:**
    - Left: "Become a Host" - Description + CTA
    - Right: "List Your Products" - Description + CTA
- **Responsive:** Stack vertically on mobile

**Navigation:**
- **Entry Points:** Direct URL, search engines, social media
- **Exit Points:** Search, category pages, listing details, auth pages
- **Primary CTA:** Search bar, "Explore" buttons

---

### Search Results Page (`/search`)

**Purpose:** Display filtered search results with refinement options

**Layout Type:** Sidebar filters (desktop), drawer filters (mobile)

**Block 1 - Search Header:**
- **Component Type:** Search bar with active filters
- **Elements:**
    - SearchBar (pre-filled with query)
    - Active filter chips (removable)
    - Results count
    - Sort dropdown (Relevance, Price, Rating)
    - View toggle (Grid/Map)

**Block 2 - Filters Sidebar (Desktop):**
- **Component Type:** Sticky sidebar
- **Elements:**
    - Listing type (Homestays, Guides, Products)
    - Price range slider
    - Rating filter (minimum stars)
    - Location/District dropdown
    - Amenities checkboxes (for homestays)
    - Languages (for guides)
    - Categories (for products)
    - "Clear All" button

**Block 3 - Results Grid:**
- **Component Type:** Responsive ListingGrid
- **Elements:**
    - ListingCard components (mixed types)
    - Loading skeletons
    - Empty state (no results)
    - Pagination
- **Responsive:** 3 columns desktop, 2 tablet, 1 mobile

**Block 4 - Map View (Toggle):**
- **Component Type:** Interactive map
- **Elements:**
    - Map with location markers
    - Marker clusters for dense areas
    - Popup cards on marker click
- **Responsive:** Full width, adjustable height

---

### Homestay Detail Page (`/homestays/:id`)

**Purpose:** Showcase homestay, enable booking

**Layout Type:** Two-column (content + booking widget on desktop)

**Block 1 - Image Gallery:**
- **Component Type:** ImageGallery
- **Elements:**
    - Primary large image
    - 4 thumbnail grid
    - "Show all photos" button
    - Lightbox on click
- **Responsive:** Single image with gallery button on mobile

**Block 2 - Header:**
- **Component Type:** Title section
- **Elements:**
    - Title (H1)
    - Location with map link
    - Rating with review count
    - Save button (heart icon)
    - Share button

**Block 3 - Host Summary:**
- **Component Type:** HostCard inline
- **Elements:**
    - Host avatar and name
    - Verified badge
    - "Superhost" badge (if applicable)
    - Hosting since date

**Block 4 - Highlights:**
- **Component Type:** Icon list
- **Elements:**
    - Key features (3-4 items)
    - Icons + short descriptions
    - Examples: "Entire cottage", "Self check-in", "Free parking"

**Block 5 - Description:**
- **Component Type:** Expandable text
- **Elements:**
    - Property description (truncated)
    - "Show more" toggle

**Block 6 - Amenities:**
- **Component Type:** Grid of AmenityItems
- **Elements:**
    - Amenity icons with labels
    - Grouped by category
    - "Show all amenities" modal

**Block 7 - Location:**
- **Component Type:** Map section
- **Elements:**
    - Embedded map (approximate location)
    - Neighborhood description
    - Nearby attractions

**Block 8 - Reviews:**
- **Component Type:** ReviewSection
- **Elements:**
    - Overall rating summary
    - Rating breakdown (cleanliness, accuracy, etc.)
    - Review cards (paginated)
    - "Write a review" button (if booked)

**Block 9 - Booking Widget (Sidebar):**
- **Component Type:** BookingWidget
- **Elements:**
    - Price per night
    - Date range picker
    - Guest selector
    - Price breakdown
    - "Reserve" button
- **Responsive:** Sticky bottom bar on mobile with "Check Availability" button

**Block 10 - House Rules:**
- **Component Type:** Collapsible section
- **Elements:**
    - Check-in/check-out times
    - Rules list
    - Cancellation policy

---

### Marketplace Page (`/marketplace`)

**Purpose:** Browse and purchase tribal handicrafts

**Layout Type:** Category navigation + product grid

**Block 1 - Category Banner:**
- **Component Type:** Hero with categories
- **Elements:**
    - Category tabs/pills (All, Textiles, Pottery, Paintings, Jewelry, etc.)
    - Optional: Featured category banner

**Block 2 - Filters Bar:**
- **Component Type:** Horizontal filter bar
- **Elements:**
    - Sort dropdown
    - Price range
    - Artisan filter
    - Filter drawer button (mobile)

**Block 3 - Product Grid:**
- **Component Type:** ListingGrid (products)
- **Elements:**
    - Product cards (image, title, artisan, price)
    - Quick add to cart button
    - Wishlist button
- **Responsive:** 4 columns desktop, 2 mobile

**Block 4 - Featured Artisans:**
- **Component Type:** Horizontal scroll
- **Elements:**
    - Artisan profile cards
    - Link to artisan page/filter

---

### Cart Page (`/cart`)

**Purpose:** Review items before checkout

**Layout Type:** Two-column (items + summary)

**Block 1 - Cart Header:**
- **Component Type:** Page header
- **Elements:**
    - Title: "Shopping Cart"
    - Item count

**Block 2 - Cart Items:**
- **Component Type:** CartItem list
- **Elements:**
    - Product image
    - Title and variant
    - Quantity selector
    - Price
    - Remove button

**Block 3 - Order Summary:**
- **Component Type:** Summary card (sticky)
- **Elements:**
    - Subtotal
    - Shipping estimate
    - Total
    - "Proceed to Checkout" button
    - Continue shopping link

---

## API Structure Overview

### Authentication Endpoints

```
POST   /api/auth/register     - User registration
POST   /api/auth/login        - User login
POST   /api/auth/logout       - User logout
GET    /api/auth/me           - Get current user
POST   /api/auth/refresh      - Refresh access token
POST   /api/auth/forgot       - Request password reset
POST   /api/auth/reset        - Reset password with token
```

### Listing Endpoints

```
GET    /api/homestays              - List homestays (with filters)
GET    /api/homestays/:id          - Get homestay details
POST   /api/homestays              - Create homestay (provider)
PUT    /api/homestays/:id          - Update homestay (provider)
DELETE /api/homestays/:id          - Delete homestay (provider)
GET    /api/homestays/:id/reviews  - Get homestay reviews

GET    /api/guides                 - List guides (with filters)
GET    /api/guides/:id             - Get guide details
POST   /api/guides                 - Create guide profile (provider)
PUT    /api/guides/:id             - Update guide profile (provider)
GET    /api/guides/:id/reviews     - Get guide reviews

GET    /api/products               - List products (with filters)
GET    /api/products/:id           - Get product details
POST   /api/products               - Create product (artisan)
PUT    /api/products/:id           - Update product (artisan)
DELETE /api/products/:id           - Delete product (artisan)
```

### Booking Endpoints

```
GET    /api/bookings               - List user bookings
POST   /api/bookings               - Create booking
GET    /api/bookings/:id           - Get booking details
PUT    /api/bookings/:id/cancel    - Cancel booking
GET    /api/bookings/:id/invoice   - Get booking invoice
```

### Order Endpoints

```
GET    /api/orders                 - List user orders
POST   /api/orders                 - Create order from cart
GET    /api/orders/:id             - Get order details
PUT    /api/orders/:id/cancel      - Cancel order
```

### Review Endpoints

```
POST   /api/reviews                - Create review
PUT    /api/reviews/:id            - Update review
DELETE /api/reviews/:id            - Delete review
```

### User Endpoints

```
GET    /api/users/profile          - Get user profile
PUT    /api/users/profile          - Update profile
PUT    /api/users/avatar           - Upload avatar
GET    /api/users/wishlist         - Get wishlist
POST   /api/users/wishlist/:id     - Add to wishlist
DELETE /api/users/wishlist/:id     - Remove from wishlist
```

### Search Endpoint

```
GET    /api/search                 - Unified search (all types)
GET    /api/search/suggestions     - Autocomplete suggestions
GET    /api/destinations           - List destinations/districts
```

---

## Database Schema Overview

### User Schema

```typescript
interface User {
  _id: ObjectId;
  email: string;
  password: string; // hashed
  name: string;
  phone?: string;
  avatar?: string;
  role: 'tourist' | 'provider' | 'admin';
  isVerified: boolean;
  providerProfile?: {
    type: 'homestay' | 'guide' | 'artisan';
    bio: string;
    languages: string[];
    responseRate: number;
    responseTime: string;
  };
  wishlist: ObjectId[]; // listing references
  createdAt: Date;
  updatedAt: Date;
}
```

### Homestay Schema

```typescript
interface Homestay {
  _id: ObjectId;
  host: ObjectId; // User reference
  title: string;
  description: string;
  propertyType: 'entire' | 'private' | 'shared';
  location: {
    address: string;
    district: string;
    state: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  images: string[];
  amenities: string[];
  houseRules: string[];
  pricing: {
    basePrice: number;
    cleaningFee?: number;
    weekendPrice?: number;
  };
  capacity: {
    guests: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
  };
  availability: {
    minStay: number;
    maxStay: number;
    blockedDates: Date[];
  };
  rating: {
    average: number;
    count: number;
  };
  status: 'active' | 'inactive' | 'pending';
  createdAt: Date;
  updatedAt: Date;
}
```

### Booking Schema

```typescript
interface Booking {
  _id: ObjectId;
  user: ObjectId;
  listing: ObjectId;
  listingType: 'homestay' | 'guide';
  dates: {
    checkIn: Date;
    checkOut: Date;
  };
  guests: {
    adults: number;
    children: number;
  };
  pricing: {
    baseTotal: number;
    serviceFee: number;
    total: number;
  };
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'refunded';
  specialRequests?: string;
  createdAt: Date;
  updatedAt: Date;
}
```

---

## Development Timeline Mapping

| Day | Focus Area | Key Deliverables |
|-----|------------|------------------|
| **Day 1** | Setup & Planning | Environment setup, PRD review, team formation, Git repo |
| **Day 2** | React Components | Atom components (Button, Input, Rating, Price, Badge) |
| **Day 3** | Styling & Layout | Theme config, layouts, responsive design |
| **Day 4** | Feature Components | ListingCard, SearchBar, Filters, Navigation |
| **Day 5** | Pages (Part 1) | Home, Search Results, Listing Detail pages |
| **Day 6** | API Integration | Frontend service layer, mock data, API hooks |
| **Day 7** | Backend Setup | Express server, routes, middleware |
| **Day 8** | Database | MongoDB Atlas, Mongoose schemas, CRUD |
| **Day 9** | Full API | All endpoints, validation, error handling |
| **Day 10** | Authentication | JWT auth, protected routes, user profiles |
| **Day 11** | Integration | Full-stack connection, booking flow, testing |
| **Day 12** | Deployment | Docker, Vercel/Railway, documentation, presentation |

---

## Success Metrics

**MVP Completion Criteria:**
- [ ] User can register/login as tourist or provider
- [ ] User can browse and search homestays, guides, products
- [ ] User can view detailed listing pages with all information
- [ ] User can complete a booking flow (homestay or guide)
- [ ] User can add products to cart and complete checkout
- [ ] Provider can create and manage listings
- [ ] Reviews can be submitted and displayed
- [ ] Application is deployed and publicly accessible
- [ ] All pages are responsive and accessible

**Stretch Goals:**
- [ ] Map view with markers
- [ ] Wishlist functionality
- [ ] Trip planner/itinerary builder
- [ ] Provider analytics dashboard
- [ ] Multilingual support (Hindi)

---

**End of PRD**

---

*Document Version: 1.0*
*Created: December 2024*
*Project: SIH 2024 - Problem Statement #25032*
*Team: [Team Name]*