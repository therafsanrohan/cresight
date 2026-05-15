# Software Requirements Specification (SRS)
## Project: CRESIGHT Agency Official Website
**Version:** 1.0.0  
**Status:** Production Ready  
**Date:** May 15, 2026

---

### 1. Introduction
#### 1.1 Purpose
The purpose of this document is to provide a comprehensive overview of the technical requirements, architecture, and maintenance guidelines for the CRESIGHT creative agency website. It serves as a manual for future developers and the website owner to ensure long-term stability and scalability.

#### 1.2 Project Scope
CRESIGHT is a high-end digital landing page designed to showcase a premium creative agency's philosophy, strategic value, and client portfolio. The platform focuses on #GrowthThroughStories through a minimal, high-impact user interface.

---

### 2. Technical Architecture
#### 2.1 Technology Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS (Utility-first) + Custom CSS Variables
- **Motion:** Framer Motion (Hardware-accelerated animations)
- **Icons:** Custom SVG Assets

#### 2.2 Core Design Principles
- **Monochrome Palette:** Strict adherence to the CRESIGHT identity (Black #050505, White #F5F5F3, Gray #CFCFCF).
- **Fluid Typography:** Implementation of `clamp()` and `vw` units for consistent visual impact across all viewport sizes.
- **Micro-interactions:** Staggered text reveals, custom cursors, and viewport-aware scroll animations.

---

### 3. Functional Requirements
#### 3.1 Hero Section
- Dynamic staggered text reveal on initial load.
- Integrated brand pillar typewriter cycling (Distinctive, Relevant, Forward-Moving).

#### 3.2 Dynamic Client Management
- The website uses a centralized data structure for client logos located in `@/lib/clients.ts`.
- Future updates to the "Trust" or "Philosophy" sections can be managed by modifying this array without touching core component logic.

#### 3.3 Philosophy & Strategy Blocks
- Sequential numbering (01, 02, 03) with a unified editorial design pattern.
- Responsive handling of long-form headings to ensure zero layout shift.

#### 3.4 Contact & Lead Generation
- Integrated contact CTA with physical studio address and direct communication channels.

---

### 4. Non-Functional Requirements
#### 4.1 Performance
- **Zero CLS:** All animations use layout-stable transforms (`y`, `opacity`, `scale`).
- **Asset Optimization:** Next.js Image component and optimized SVG vectors for minimal payload.

#### 4.2 SEO Strategy
- Semantic HTML5 structure (h1-h6 hierarchy).
- Metadata API integration in `app/layout.tsx` for social sharing and search ranking.

#### 4.3 Responsiveness
- Full support for mobile (320px+), tablet, and ultra-wide desktop monitors.
- Critical logic ensures long headings wrap or shrink appropriately on mobile.

---

### 5. Maintenance & Updates
#### 5.1 Content Updates
- **Text Content:** Managed directly within the respective files in `sections/home/`.
- **Client Logos:** Add SVG files to `public/assets/logos/` and update `lib/clients.ts`.

#### 5.2 Technical Maintenance
- Ensure `npm update` is run periodically to maintain security patches.
- Maintain the `use client` directive for interactive sections to prevent hydration errors.

---

### 6. Deployment Guide
The application is optimized for high-performance hosting. While tested on Vercel, the production environment should be configured as follows:
1. **Build Process:** Run `npm run build` to generate the `.next` optimized bundle.
2. **Environment:** Node.js 18.x or higher.
3. **Caching:** Ensure headers are set for static assets to leverage browser caching.

---

### 7. Credits & Contact
**Design & Development:**
This project was designed and developed by **Creatiancy**.

**Creatiancy Official Contact:**
- **Phone:** +880 1325 078 941
- **Email:** contact@creatiancy.com
- **Web:** [www.creatiancy.com](http://www.creatiancy.com)

**Management:**
**Rafsan Rohan**  
Founder & Creative Lead, Creatiancy  
- **Phone:** +880 1325 078 241
- **Email:** knock.rafsan@gmail.com
- **Web:** [www.rafsanrohan.com](http://www.rafsanrohan.com)

---
© 2026 Creatiancy. All rights reserved.
