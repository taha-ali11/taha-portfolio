# Taha Ali — Portfolio

A claymorphic, motion-first portfolio site built to double as a working
sample of how I build: real animation, real performance numbers, real
accessibility — not just a template with my name on it.

This README is written for two audiences: recruiters/clients skimming
GitHub, and future-me setting the project up again. Skip to
[Getting Started](#getting-started) if you just want it running.

---

## About Taha Ali

Freelance full-stack developer and entrepreneur based in **Lahore, Pakistan**.
BS Science graduate from the **University of Central Punjab (UCP)**. I run my
own digital agency, **AlphaGeeks**, and take on independent client work
alongside it — currently around 2 years of professional experience across
4 shipped projects.

I focus on three things at once: full-stack web development (Next.js/React),
motion design (Framer Motion, Anime.js), and increasingly, AI automation and
AI agent integration for real client workflows.

---

## What this site demonstrates

Every section was built to prove a specific skill, not just fill space.

### 🧭 Navbar — scroll-spy navigation
- Claymorphic pill nav that tracks scroll position with `IntersectionObserver`
  and slides an animated highlight (`layoutId` in Framer Motion) to the
  active section — no page jumps, no janky scroll-to.
- Fully responsive: collapses into an animated mobile drawer under `md`.
- Direct links to Instagram and LinkedIn baked into the nav itself.

**Skills shown:** Framer Motion shared-layout animation, `IntersectionObserver`
API, responsive component design, accessible nav markup (`aria-current`,
`aria-expanded`).

### 🏠 Home — typing animation, no dependency bloat
- A hand-rolled typing/deleting animation cycles through my specializations
  (Full-Stack Developer, Next.js Engineer, AI Automation Specialist, Motion-First
  UI Builder) — built with plain React state and `useEffect`, not a third-party
  typewriter library.
- Respects `prefers-reduced-motion`: if a visitor has that setting on, the
  text just displays statically instead of animating.
- Anime.js-driven ambient blobs float and morph their border-radius in the
  background — a genuine claymorphic signature, not a stock gradient.

**Skills shown:** custom React hooks, Anime.js timeline/easing control,
accessibility-aware motion design.

### 👤 About Me — two-column bio + live stats
- Left column: bio, vision, and focus areas, plus a row of real tool icons
  (Next.js, React, Node.js, Tailwind, MongoDB, AI automation) pulled from
  `react-icons`/`lucide-react` — actual brand marks, not emoji.
- Right column: photo frame with a claymorphic blob mask.
- A stats row (4 projects completed, 2 years experience, 4 case studies)
  bridges both columns, followed by a direct CTA into Connect.

**Skills shown:** content-driven component architecture (all copy pulled from
a single `lib/data.js` source of truth), responsive grid layout, icon
library integration.

### 💼 Experience & Case Studies — animated bento grid
The centerpiece section. Each project card:
- Tilts in 3D toward the cursor using Framer Motion's `useMotionValue` +
  `useSpring`, mapped from raw mouse position — a real physics-based
  interaction, not a CSS `:hover` transform.
- Sits in a bento layout where featured projects span two columns.
- Displays the actual tech stack and a one-line explanation of what problem
  the project solved — not just a screenshot and a "view project" button.

Projects included:
| Project | My Role | Stack |
|---|---|---|
| **AlphaGeeks** | Founder & Lead Developer | Next.js 15, Tailwind CSS, Framer Motion, GSAP, Anime.js |
| **American ASK4Logistics** | Web Developer | Next.js, Tailwind CSS, Framer Motion |
| **Ali** (client portfolio) | Web Developer | Next.js, Tailwind CSS, Framer Motion |
| **This Portfolio** | Designer & Developer | Next.js, Framer Motion, Anime.js, Claymorphism |

**Skills shown:** advanced Framer Motion (motion values, springs, 3D transforms),
information architecture for case studies, real client project delivery.

### 🛠️ Skills — two categories, no skill-soup
Split cleanly into **Core Skills** and **Frameworks & Libraries** so a
recruiter can tell the difference between "language/fundamentals" and
"tools I build with":

**Core Skills:** HTML/CSS, Tailwind CSS, JavaScript, SQL, Node.js, AI & ML

**Frameworks & Libraries:** React, JSX, Express, Anime.js, Next.js, Vite, Vue,
API integration, MySQL, MongoDB, AI Automation, AI Agents integration

Each shows as a puffy claymorphic chip with its real brand icon, staggered in
on scroll and lifting on hover.

**Skills shown:** front-end/back-end breadth, database work (SQL, MySQL,
MongoDB), and the AI automation/agents work that's becoming a bigger part of
my client projects.

### 🤝 Connect — no generic contact form
Instead of a form nobody enjoys filling out, direct channels: WhatsApp,
Instagram, LinkedIn, Email — each its own claymorphic tile. Below that, a
dedicated callout for **AlphaGeeks**, my agency, for anyone who needs SEO,
branding, or marketing beyond web development.

**Skills shown:** conversion-minded UX writing, understanding that a contact
form is friction most people skip.

### 📄 Footer
Simple, on purpose: copyright + the same nav links, smooth-scrolling back
to any section.

---

## Design system

**Style:** Claymorphism — soft, puffy, dual-shadow surfaces (a light source
from one corner, a shadow from the other) on a light, colorful base. No
dark theme anywhere; every claymorphic surface sits on a `#EFEAFA` panel
against an `#F4F1FC` page background.

**Palette:**
| Role | Color |
|---|---|
| Grape (primary) | `#8C6FE6` |
| Coral | `#FF8A65` |
| Teal | `#3ED5C9` |
| Sunny | `#FFC94D` |
| Sky | `#5FB6E8` |
| Ink (text) | `#3A3450` |

**Type:** Baloo 2 (rounded display face, matches the puffy claymorphic shapes)
paired with Plus Jakarta Sans (body/UI text).

**Signature element:** Anime.js-driven blobs that morph their `border-radius`
and drift slowly — the one piece of real, deliberate motion the whole
palette and layout are built around.

---

## Tech stack

- **Framework:** Next.js 15 (App Router)
- **Animation:** Framer Motion (UI transitions, scroll reveals, 3D tilt,
  shared-layout nav) + Anime.js (ambient blob morphing)
- **Styling:** Tailwind CSS with a custom claymorphic design-token layer
  (colors, shadows, border-radius, keyframes)
- **Icons:** `react-icons` (real brand marks) + `lucide-react` (UI icons)
- **SEO:** per-page metadata, Open Graph/Twitter cards, `Person` JSON-LD,
  `sitemap.xml` and `robots.txt` via Next.js file conventions
- **Accessibility:** visible focus rings, skip-to-content link, `aria-live`
  on the typing animation, `prefers-reduced-motion` respected in both CSS
  and the Anime.js/typing hooks

**Verified production build:** ~166 kB first-load JS for the entire page,
fully static-prerendered — checked by actually running `next build`, not
assumed.

---

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Before deploying — fill these in

Everything below is marked `// TODO` in code.

**`lib/data.js`**
- `socials` — WhatsApp (`wa.me/yourNumber`), Instagram, LinkedIn, email
- `agencySocials` — AlphaGeeks Instagram + LinkedIn

**`app/layout.jsx`, `app/sitemap.js`, `app/robots.js`**
- `siteUrl` — swap in the real domain once live
- Add a real `/public/og-image.jpg` (1200×630px) for social previews

**`components/About.jsx`**
- Add a photo at `/public/profile.jpg`, then replace the placeholder div with:
  ```jsx
  <Image src="/profile.jpg" alt="Portrait of Taha Ali" fill className="object-cover rounded-blob" />
  ```
  (import `Image` from `next/image` at the top of the file)

---

## Project structure

```
app/
  layout.jsx      — fonts, metadata, JSON-LD Person schema, skip link
  page.jsx         — assembles all sections
  globals.css      — claymorphism tokens + reduced-motion handling
  sitemap.js, robots.js
components/
  Navbar.jsx       — scroll-spy pill nav, mobile menu
  Hero.jsx         — intro + typing animation
  TypingText.jsx   — accessible rotating-text component
  About.jsx        — two-column bio + stats row
  Experience.jsx   — bento grid with 3D tilt-on-hover cards
  Skills.jsx        — core skills + frameworks, puffy chip grid
  Connect.jsx       — social contact channels + AlphaGeeks callout
  Footer.jsx
  ClayBlob.jsx      — anime.js-driven ambient blob shapes
lib/
  data.js           — all site content in one place
  icons.jsx         — real brand icon lookup (react-icons + lucide)
```
