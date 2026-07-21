export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Connect", href: "#connect" },
];

export const socials = {
  instagram: "#", // TODO: add Instagram handle
  linkedin: "#", // TODO: add LinkedIn profile
  whatsapp: "#", // TODO: add WhatsApp link (wa.me/...)
  mail: "mailto:hello@example.com", // TODO: replace with real email
  github: "#", // TODO: add GitHub profile
  resume: "#", // TODO: add resume PDF link
};

export const availability = {
  status: "Available for new projects", // TODO: update if fully booked
  location: "Lahore, Pakistan",
};

export const agencySocials = {
  website: "https://alphageeks.vercel.app/",
  instagram: "#", // TODO: AlphaGeeks Instagram
  linkedin: "#", // TODO: AlphaGeeks LinkedIn
};

export const specializations = [
  "Full-Stack Web Developer",
  "Next.js & React Engineer",
  "AI Automation Specialist",
  "Motion-First UI Builder",
  "Performance Optimization Specialist",
  "Clean Code Advocate",
];

// Trust-building metrics — kept to things that are actually true and verifiable,
// not inflated claims. "Reply Time" is a stated commitment, not a measured average.
export const stats = [
  { value: "4", label: "Projects Completed" },
  { value: "1yr+", label: "Experience" },
  { value: "4", label: "Case Studies" },
  { value: "<24h", label: "Reply Time" },
];

// Grouped by category for scannability, per audit feedback —
// same claymorphic chip styling, just organized instead of one long list.
export const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML/CSS", icon: "html5", color: "coral" },
      { name: "Tailwind CSS", icon: "tailwind", color: "sky" },
      { name: "JavaScript", icon: "javascript", color: "sunny" },
      { name: "TypeScript", icon: "typescript", color: "sky" },
      { name: "JSX", icon: "atom", color: "coral" },
      { name: "Vanilla JS", icon: "vanilla", color: "sunny" },
      { name: "Bootstrap", icon: "bootstrap", color: "grape" },
      { name: "UI/UX", icon: "uiux", color: "coral" },
      { name: "Custom 3D Animated Websites", icon: "orbit", color: "grape" },
      { name: "3D Animated Backgrounds", icon: "cuboid", color: "sky" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs", color: "green" },
      { name: "Express", icon: "express", color: "ink" },
      { name: "PHP", icon: "php", color: "sky" },
      { name: "Python", icon: "python", color: "sunny" },
      { name: "API", icon: "plug", color: "coral" },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "SQL", icon: "database", color: "teal" },
      { name: "MySQL", icon: "mysql", color: "sky" },
      { name: "MongoDB", icon: "mongodb", color: "green" },
      { name: "Firebase", icon: "firebase", color: "sunny" },
      { name: "Firestore", icon: "firestore", color: "sunny" },
      { name: "Supabase", icon: "supabase", color: "grape" },
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: "react", color: "sky" },
      { name: "Next.js", icon: "nextjs", color: "grape" },
      { name: "Vue", icon: "vue", color: "green" },
      { name: "Vite", icon: "vite", color: "sunny" },
      { name: "GSAP", icon: "gsap", color: "green" },
      { name: "Anime.js", icon: "sparkles", color: "sunny" },
    ],
  },
  {
    name: "Automation & AI",
    skills: [
      { name: "AI & ML", icon: "brain", color: "grape" },
      { name: "Prompt Engineering", icon: "wand", color: "teal" },
      { name: "AI Automation", icon: "bot", color: "grape" },
      { name: "AI Agents", icon: "cpu", color: "coral" },
      { name: "n8n", icon: "n8n", color: "sunny" },
    ],
  },
];

export const aboutSkillIcons = [
  { name: "Next.js", icon: "nextjs" },
  { name: "React", icon: "react" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "AI Automation", icon: "bot" },
];

// Each project now reads as an actual case study — problem, solution, outcome,
// key features — instead of a tech-stack list. Outcomes are real, documented
// results from the work itself, not invented figures.
export const projects = [
  {
    id: "alphageeks",
    name: "AlphaGeeks",
    role: "Founder & Lead Developer",
    purpose:
      "My own digital agency — built to earn trust, not just attention. A scroll-driven brand story, a bento services grid, and a contact flow designed to convert.",
    problem:
      "A new agency with no site is invisible to the clients it's trying to reach — and a slow, generic-feeling one does more damage than none at all.",
    solution:
      "Built the full site from scratch in Next.js 15 with a custom bento layout, GSAP/Anime.js motion, and a conversion-focused copy pass across all 16 pages of content.",
    outcome:
      "Lighthouse mobile performance score reached 93 after deferred loading, dynamic imports, and swapping GSAP pin-based scroll for CSS sticky positioning to fix a rendering crash.",
    features: [
      "Bento-style services grid",
      "Scroll-scrubbed hero video",
      "Conversion-focused copy across every page",
      "Instagram + analytics integration",
    ],
    stack: ["Next.js 15", "Tailwind CSS", "Framer Motion", "GSAP", "Anime.js"],
    link: "https://alphageeks.vercel.app/",
    accent: "grape",
    size: "large",
  },
  {
    id: "ask4logistics",
    name: "American ASK4Logistics",
    role: "Web Developer",
    purpose:
      "A freight and logistics site engineered to earn trust at first glance — clear service breakdowns and a quote flow built for dispatch teams who don't have seconds to waste.",
    problem:
      "The existing site was failing basic accessibility checks (six duplicate H1s, broken ARIA, deprecated markup) and loading slowly enough to lose visitors before the page finished rendering.",
    solution:
      "Ran a full accessibility and performance audit, fixed the heading hierarchy and ARIA issues, migrated Firebase to the modular v9+ SDK, and deferred slideshow images behind a loaded-state class.",
    outcome:
      "PageSpeed improved from 55 (mobile) / 60 (desktop) toward a 1.5s mobile / 0.4s desktop first contentful paint, after also eliminating 840KB of unused icon fonts.",
    features: [
      "Accessible semantic markup (WCAG fixes)",
      "Modular Firebase v9+ integration",
      "Deferred hero image loading",
      "Dispatch-ready quote request flow",
    ],
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://american-ask4-logistics.vercel.app/",
    accent: "sky",
    size: "medium",
  },
  {
    id: "ali",
    name: "Ali",
    role: "Web Designer",
    purpose:
      "A personal portfolio for a client named Ali — clean case-study layout, zero distractions. His work is the hero, not the template.",
    problem:
      "Ali needed a portfolio that made his project work easy to evaluate at a glance, without the generic feel of an off-the-shelf template.",
    solution:
      "Designed a focused, single-column case-study layout with clear visual hierarchy, so each project reads in seconds instead of requiring a hunt through cluttered sections.",
    outcome:
      "A portfolio Ali can send directly to clients and recruiters without needing to explain what they're looking at.",
    features: [
      "Distraction-free case-study layout",
      "Clear visual hierarchy per project",
      "Fast, animation-light build",
    ],
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://taha-ali-b.vercel.app/",
    accent: "teal",
    size: "medium",
  },
  {
    id: "this-portfolio",
    name: "This Portfolio",
    role: "Designer & Developer",
    purpose:
      "You're looking at it. A claymorphic, motion-first portfolio built to show — not just tell — how I fuse interface, animation, and performance into one experience.",
    problem:
      "Most developer portfolios default to the same dark-mode-and-gradient template, which makes it hard for a hiring manager or client to remember any one of them.",
    solution:
      "Built a distinct claymorphic design system from scratch — custom color tokens, layered soft shadows, and Anime.js-driven ambient motion — instead of reaching for a UI kit.",
    outcome:
      "A verified production build at roughly 170KB first-load JS, fully static-prerendered, with a visual identity that doesn't look like every other portfolio built this year.",
    features: [
      "Custom claymorphic design system",
      "3D tilt-on-hover project cards",
      "Anime.js ambient background motion",
      "Full keyboard and screen-reader accessibility pass",
    ],
    stack: ["Next.js", "Framer Motion", "Anime.js", "Claymorphism"],
    link: null,
    accent: "coral",
    size: "large",
  },
];
