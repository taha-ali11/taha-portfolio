import { Fredoka, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { socials } from "@/lib/data";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://tahabuilds.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Taha Ali — Full-Stack Web Developer & AI Engineer",
    template: "%s | Taha Ali",
  },
  description:
    "Taha Ali is a full-stack web developer and AI engineer in Lahore, Pakistan, building Next.js applications, AI-integrated platforms, and automation pipelines for real businesses.",
  keywords: [
    "Taha Ali",
    "Full-Stack Web Developer",
    "AI Engineer",
    "Next.js developer Lahore",
    "React developer Pakistan",
    "AI automation developer",
    "LLM integration developer",
    "AI engineer portfolio",
    "freelance web developer Pakistan",
    "AlphaGeeks",
  ],

  authors: [{ name: "Taha Ali" }],
  creator: "Taha Ali",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Taha Ali — Full-Stack Web Developer & AI Engineer",
    description:
      "Full-stack web developer and AI engineer building Next.js applications, animated interfaces, and AI-powered automation for real businesses.",
    siteName: "Taha Ali",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Taha Ali — Full-Stack Web Developer & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taha Ali — Full-Stack Web Developer & AI Engineer",
    description:
      "Full-stack web developer and AI engineer building Next.js applications, animated interfaces, and AI-powered automation for real businesses.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Taha Ali",
  jobTitle: "Full-Stack Web Developer & AI Engineer",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Central Punjab",
  },
  worksFor: {
    "@type": "Organization",
    name: "AlphaGeeks",
    url: "https://alphageeks.vercel.app/",
  },
  knowsAbout: [
    "Next.js",
    "React",
    "Node.js",
    "AI Automation",
    "AI Agents",
    "OpenAI API Integration",
    "Retrieval-Augmented Generation",
    "n8n Workflow Automation",
    "UI/UX Animation",
  ],
  sameAs: [socials.linkedin, socials.github, socials.instagram],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}