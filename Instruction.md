# Portfolio Website — pawangujral.dev

## Overview

Build a personal portfolio website for **Pawan Gujral**, a Senior Frontend Engineer with 12+ years of experience. The site should showcase work experience, projects, tech stack, and contact information. It will be deployed to `pawangujral.dev`.

---

## Design Direction

- **Vibe**: Dark & Techy
- **Theme**: Dark background (#0a0a0f or similar deep navy-black), with a neon/electric accent color (e.g., electric green #00e5a0, or electric blue/cyan). Subtle grid or dot-pattern background texture.
- **Typography**: Use a monospace font for labels, headings, and code-like elements (e.g., JetBrains Mono, Fira Code). Pair with a clean geometric sans-serif for body text (e.g., Sora, General Sans, Satoshi). Avoid generic fonts like Inter, Roboto, Arial.
- **Feel**: Terminal/hacker aesthetic — think code editors, CLI vibes, glowing accents, subtle animations. Professional but with personality.
- **Layout**: Single-page scrolling site with smooth anchor navigation. Generous whitespace. Asymmetric/editorial sections. Cards with subtle glass-morphism or border glow effects.

---

## Tech Stack for the Site

Choose ONE of the following based on preference:

### Option A — Next.js (Recommended)
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel (connect to pawangujral.dev)

### Option B — Plain HTML/CSS/JS
- Single `index.html` file with embedded CSS and minimal JS
- Use Google Fonts for typography
- Deploy anywhere (Netlify, Vercel, GitHub Pages)

---

## Site Structure & Sections

### 1. Navigation (Fixed Top)
- Logo: `pawan.dev` or `<PG />` styled as a code tag
- Links: About, Experience, Projects, Contact
- Style: Frosted glass background (backdrop-filter blur), thin bottom border
- Nav links prefixed with `//` for a code-comment aesthetic
- Mobile: Hamburger menu

### 2. Hero Section
- **Name**: Pawan Gujral
- **Title**: Senior Frontend Engineer
- **Location**: Stockholm, Sweden
- **Current Company**: H&M (mention working on COS global e-commerce platform)
- **Tagline/Bio**: "Experienced Senior Frontend Engineer with over 12 years of expertise in designing and building user-centric web and mobile applications. Specialized in scalable frontend architectures, React ecosystem, and performance-driven development."
- **CTA Buttons**: "View My Work" (scrolls to projects), "Get in Touch" (scrolls to contact)
- **Visual**: Subtle animated background — floating glow orbs, grid lines, or particle effect. A terminal-style typing animation for the tagline is a nice touch.
- **Social Icons Row**: GitHub, LinkedIn, Email — small, minimal icons

### 3. About Me
- Section label styled like a code comment: `// about`
- Short paragraph version of the bio (rewrite slightly for a personal, first-person tone):
  > I'm a Senior Frontend Engineer based in Stockholm, Sweden, with 12+ years of experience building user-centric web and mobile applications. I specialize in scalable frontend architectures, the React ecosystem, and performance-driven development. Currently, I lead architectural decisions and strategic initiatives at H&M's COS global e-commerce platform. I thrive on cross-functional collaboration, mentoring teams, and delivering digital experiences that make a real impact.
- Include a "quick facts" grid:
  - 12+ Years Experience
  - 2 Countries Worked In (India → Sweden)
  - React / Next.js Specialist
  - Currently @ H&M

### 4. Tech Stack
- Section label: `// tech-stack`
- Display skills as styled tags/chips/badges grouped by category:
  - **Languages**: JavaScript, TypeScript, HTML5, CSS3, C++, Node.js
  - **Frameworks & Libraries**: React, Next.js, Redux, GraphQL, Angular, React Native
  - **Tools & Platforms**: Docker, Kubernetes, AWS, Google Cloud
  - **Testing**: Jest, Mocha, React Testing Library
  - **Other**: Microfrontend Architecture, Browser Extensions
- Optional: animate tags on scroll (fade/stagger in)

### 5. Work Experience
- Section label: `// experience`
- Timeline or card-based layout. Each entry should include: company, role, location, dates, bullet points, and tech tags.
- Entries (newest first):

#### H&M — Senior Frontend Engineer
- Location: Stockholm, Sweden
- Dates: Feb 2025 – Present
- Details:
  - Spearheading multiple initiatives across H&M's global e-commerce platform focusing on performance, scalability, and best-in-class UX
  - Leading front-end architectural decisions and standardizing development practices across teams
  - Collaborating with product, design, and backend teams to align solutions with business objectives
  - Shaping the technical roadmap and contributing to the platform's long-term vision
- Tech: Next.js, Node.js, Redux, GraphQL

#### Safello — Senior Frontend Engineer (Mobile & Web Platform)
- Location: Stockholm, Sweden
- Dates: March 2023 – Feb 2025
- Details:
  - Developed modular architecture and mono repo setup for streamlined feature development
  - Integrated secure payment and authentication modules
  - Significantly improved mobile performance and user onboarding experience
- Tech: React Native, Next.js, Node.js, Redux, GraphQL

#### Instabox — Senior Frontend Engineer
- Location: Stockholm, Sweden
- Dates: Nov 2021 – March 2023
- Details:
  - Led front-end development efforts across the organization, driving scalability and maintainability
  - Implemented new features that improved delivery tracking accuracy by 20%
- Tech: Next.js, React, Node.js

#### JPMorgan Chase — Lead Frontend Engineer
- Location: Bangalore, India
- Dates: March 2020 – May 2021
- Details:
  - Led front-end development across the organization, driving scalability and maintainability
  - Architected a micro-frontend solution for a next-gen commercial real estate platform
  - Reduced deployment time by 25% through streamlined processes and automation
- Tech: React.js, Node.js, Kubernetes

#### McAfee — Senior UI/UX Engineer
- Location: Bangalore, India
- Dates: Oct 2017 – March 2020
- Details:
  - Delivered end-to-end solutions for antivirus and PC optimization products, improving customer satisfaction
  - Designed intuitive user interfaces, boosting user engagement by 15%
- Tech: React.js, Node.js, Vanilla JavaScript

#### Earlier Roles (display as a compact list, less detail):
- **Intel Security** (Consultant) — UI Developer, Bangalore (June 2017 – Oct 2017)
- **SwediumGlobal** — Senior UI Developer, Bangalore (July 2015 – Sep 2017)
- **i22Technologies** — Co-founder & Sr. Software Developer, Bangalore (April 2010 – July 2015)

### 6. Projects
- Section label: `// projects`
- Card grid (2 columns on desktop, 1 on mobile). Each card has: project name, description, tech tags, and optional link.

#### Project 1: Safello Crypto Exchange
- Description: Full-stack mobile and web crypto trading platform with payment integration, login modules, monorepo architecture, and optimized mobile UX.
- Tech: React Native, Next.js, Node.js, Redux, GraphQL

#### Project 2: JPMC Real Estate Platform
- Description: Scalable commercial real estate platform built with micro-frontend architecture, improving system performance by 30%.
- Tech: React, Styled-Components, Material-UI

#### Project 3: McAfee Gamer Security
- Description: Antivirus software tailored for gamers with optimized resource consumption, reducing CPU usage by 20%.
- Tech: React.js, TypeScript, Electron

#### Project 4: McAfee Web Boost / PC Optimizer
- Description: Browser extension to block autoplay videos and enhance browsing speed for end users.
- Tech: Angular, JavaScript

### 7. Certifications (Optional small section)
- Section label: `// certifications`
- Simple list or badge row:
  - Cloud Computing — IBM
  - Front-End Web Developer Nanodegree — Udacity
  - React Nanodegree — Udacity
  - Android Basics Nanodegree — Google

### 8. Contact / Footer
- Section label: `// contact`
- Heading: "Let's Connect" or "Get in Touch"
- Subtext: "I'm always open to discussing new projects, creative ideas, or opportunities."
- Links displayed as styled rows or buttons:
  - Email: gujral87@gmail.com (mailto link)
  - LinkedIn: https://www.linkedin.com/in/pawangujral/
  - GitHub: https://github.com/pawangujral
- Footer at the very bottom: "© 2026 Pawan Gujral. Built with passion." and a small "Made in Stockholm" note.

---

## Visual & Interaction Details

### Animations
- **On-scroll reveal**: Sections and cards should fade/slide in as they enter the viewport (use Intersection Observer or Framer Motion)
- **Staggered entry**: Tech tags, experience cards, and project cards animate in with a slight stagger delay
- **Hero typing effect**: The tagline or role title types out character by character
- **Hover effects**: Cards lift slightly with a glow border on hover. Nav links get accent color on hover.
- **Smooth scrolling**: All anchor links scroll smoothly

### Background Effects
- Fixed subtle grid pattern overlay (thin lines, very low opacity ~2-3%)
- 1-2 blurred gradient orbs (accent color + purple/blue) that float slowly with CSS animation
- Keep it performant — CSS only, no heavy JS particle libraries

### Responsive Design
- Fully responsive: desktop, tablet, mobile
- Mobile nav collapses to hamburger menu
- Cards stack to single column on mobile
- Font sizes scale down appropriately
- Touch-friendly tap targets (min 44px)

### Accessibility
- Semantic HTML (header, main, section, footer, nav)
- Alt text on any images
- Sufficient color contrast (accent on dark bg should pass WCAG AA)
- Keyboard navigable
- Skip-to-content link (hidden, visible on focus)

---

## File Structure (Next.js)

```
pawangujral.dev/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Main single-page content
│   └── globals.css         # Global styles, CSS variables
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── TechStack.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
│   ├── favicon.ico
│   └── og-image.png        # Open Graph image for social sharing
├── tailwind.config.ts
├── package.json
└── README.md
```

---

## SEO & Meta

```html
<title>Pawan Gujral — Senior Frontend Engineer | Stockholm</title>
<meta name="description" content="Portfolio of Pawan Gujral, a Senior Frontend Engineer with 12+ years of experience. Currently at H&M, previously at JPMorgan Chase, McAfee, and Safello. Specializing in React, Next.js, and scalable frontend architectures." />
<meta property="og:title" content="Pawan Gujral — Senior Frontend Engineer" />
<meta property="og:description" content="12+ years building user-centric web and mobile applications. React, Next.js, TypeScript." />
<meta property="og:url" content="https://pawangujral.dev" />
<meta property="og:type" content="website" />
<link rel="canonical" href="https://pawangujral.dev" />
```

---

## Deployment

1. Push to GitHub repository
2. Connect to Vercel (or Netlify)
3. Add custom domain `pawangujral.dev`
4. Configure DNS:
   - If Vercel: Add A record `76.76.21.21` and CNAME `cname.vercel-dns.com`
   - Enable HTTPS (auto via Vercel/Netlify)

---

## Summary

Build a dark, techy, single-page portfolio for a senior frontend engineer. Prioritize clean code, smooth animations, strong typography, and a memorable visual identity. The site should feel like it was built by someone who deeply understands frontend craft.