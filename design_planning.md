# Sateliții Artificiali - Design Planning Document

## Project Classification
**Type:** EDITORIAL MARKETING - Educational content site for students, teachers, and science enthusiasts

## Phase 1: Extraction

### 1.1 Project Analysis
- **Target Audience:** Gymnasium/high school students, teachers, general public interested in space technology
- **Language:** Romanian
- **Pages:** 9 interconnected pages + Help + Site Map = 11 total
- **Success Definition:** Student lands for physics project → understands satellite technology → finds citable sources → leaves with knowledge AND wonder

### 1.2 Visual DNA
- **Shape:** ORBIT (elliptical curves + circular motions)
- **Materials:** Deep space void, holographic glass panels, solar panel metallic accents
- **Transformation:** Complete orbital ring (hero) → fragmented trails → curved dividers → convergence (footer)

### 1.3 Color Palette

| Role | Hex | Source |
|------|-----|--------|
| Primary | #0B1426 | Deep space void |
| Secondary | #1E3A5F | Earth atmosphere twilight |
| Accent | #00D4FF | Ion thruster cyan |
| Support | #3B82F6 | Earth blue marble |
| Warm | #F59E0B | Solar panel gold |

### 1.4 Motion Character
- **Type:** ORBITAL — smooth, continuous, weightless
- **Timing:** cubic-bezier(0.25, 0.1, 0.25, 1), 600-800ms
- **Scroll:** Vertical default with parallax star field

### 1.5 Components Selected

| # | Slug | Category | Status |
|---|------|----------|--------|
| 1 | particles | BACKGROUND | ✅ USED - All hero sections |
| 2 | count-up | TEXT | ✅ USED - Statistics |
| 3 | blur-text | TEXT | ✅ USED - Hero headlines |
| 4 | animated-content | REVEAL | ✅ USED - All sections |

### 1.6 Page Architecture
1. Home - Introduction and navigation hub
2. History - Timeline from Sputnik to present
3. Types - 6 satellite categories
4. How It Works - Orbits, components, transmission
5. Daily Use - Practical applications
6. Problems - Challenges and regulations
7. Future - Trends and predictions
8. Gallery - Multimedia collection
9. Bibliography - Sources and citations
10. Help/FAQ - Support and questions
11. Site Map - Navigation overview

## Phase 2: Design Commitments

### Navigation
- Fixed position with scroll awareness
- Dropdown for "Despre Sateliți" submenu
- Search modal integration
- Mobile hamburger menu

### Section Patterns
- All sections use grid-cols-12 with col-span-12  px-4 md:col-start-2 md:col-span-10
- Parallax on hero images with scale: 1.8
- Particles background on all hero sections
- CountUp for statistics
- AnimatedContent for scroll reveals

### Typography
- Display: Space Grotesk
- Body: Inter
- Mono: JetBrains Mono
- Minimum size: 18px (text-lg)
- Default weight: 200 (font-extralight)

## Phase 3: Validation

### Component Reconciliation
- particles: Used in all 9 page hero sections
- count-up: Used in Home stats, Problems stats
- blur-text: Used in Home hero headline
- animated-content: Used throughout all pages

### Uniqueness Elements
1. Orbital DNA shape - curves and ellipses throughout
2. Cosmic color palette extracted from actual space imagery
3. Romanian language educational platform - unique market position

## Phase 4: Build

### Files Created
1. package.json - Dependencies including motion, animejs, simple-parallax-js
2. vite.config.js - Path aliases and host config
3. tailwind.config.js - Custom colors, fonts, animations
4. postcss.config.js - Tailwind/autoprefixer
5. vercel.json - SPA routing
6. index.html - Meta tags, fonts, favicon
7. src/index.css - Global styles, scrollbar, gradients
8. src/main.jsx - React entry point
9. src/App.jsx - Router with all 11 routes
10. src/components/ScrollToTop.jsx - Route change scroll
11. src/components/ui/particles.jsx - Star field effect
12. src/components/ui/count-up.jsx - Animated numbers
13. src/components/ui/blur-text.jsx - Text reveal
14. src/components/ui/animated-content.jsx - Scroll reveal
15. src/components/layout/Navigation.jsx - Main nav with dropdowns
16. src/components/layout/Footer.jsx - Site footer
17. src/components/layout/BackToTop.jsx - Scroll button
18. src/components/home/HeroSection.jsx - Home hero
19. src/components/home/IntroSection.jsx - What is satellite
20. src/components/home/DidYouKnowSection.jsx - Fun facts
21. src/components/home/NavigationSection.jsx - Page links
22. src/components/home/AgenciesSection.jsx - NASA/ESA/Roscosmos
23. src/pages/Home.jsx - Homepage assembly
24. src/pages/History.jsx - Timeline page
25. src/pages/Types.jsx - Satellite classification
26. src/pages/HowItWorks.jsx - Technical explanation
27. src/pages/DailyUse.jsx - Practical applications
28. src/pages/Problems.jsx - Challenges
29. src/pages/Future.jsx - Trends
30. src/pages/Gallery.jsx - Multimedia
31. src/pages/Bibliography.jsx - Sources
32. src/pages/Help.jsx - FAQ
33. src/pages/SiteMap.jsx - Navigation overview

### Verification Checklist
- [x] All text uses text-lg minimum (18px)
- [x] Font weight default is extralight (200)
- [x] Grid uses col-span-12 px-4 md:col-start-2 md:col-span-X pattern
- [x] Parallax uses scale: 1.8, overflow: false
- [x] All media URLs have search_term and img_prompt parameters
- [x] ScrollToTop component implemented
- [x] Navigation has active state styling
- [x] All 11 routes functional
- [x] Footer has Biela.dev attribution
- [x] Meta tags on index.html

## GATE 1: FILES COMPLETE ✅

Total: 33 files created

## GATE 2: CODE AUDIT ✅

- Typography: No text-xs, text-sm, text-base found
- Gutters: All sections use col-span-12 px-4 md:col-start-2
- Parallax: scale: 1.8 throughout
- Video/Image URLs: All have required parameters
- React imports: All files have proper imports

**STATUS: VERIFIED**
