import { Fredoka, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
    default: "Taha Ali — Full-Stack Developer & AI Automation Specialist",
    template: "%s | Taha Ali",
  },
  description:
    "Taha Ali is a freelance full-stack developer in Lahore, Pakistan, building Next.js websites, animated interfaces, and AI automation for real businesses.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  keywords: [
    "Taha Ali",
    "Next.js developer Lahore",
    "freelance web developer Pakistan",
    "AI automation developer",
    "React developer portfolio",
    "AlphaGeeks",
  ],

  authors: [{ name: "Taha Ali" }],
  creator: "Taha Ali",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Taha Ali — Full-Stack Developer & AI Automation Specialist",
    description:
      "Freelance full-stack developer in Lahore, Pakistan, building Next.js websites, animated interfaces, and AI automation for real businesses.",
    siteName: "Taha Ali",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Taha Ali — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taha Ali — Full-Stack Developer & AI Automation Specialist",
    description:
      "Freelance full-stack developer in Lahore, Pakistan, building Next.js websites, animated interfaces, and AI automation for real businesses.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Taha Ali",
  jobTitle: "Full-Stack Developer & AI Automation Specialist",
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
    "UI/UX Animation",
  ],
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
