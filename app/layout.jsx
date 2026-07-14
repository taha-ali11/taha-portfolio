import { Baloo_2, Plus_Jakarta_Sans } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const siteUrl = "https://tahaali.dev"; // TODO: replace with your live domain

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Taha Ali — Full-Stack Developer & AI Automation Specialist",
    template: "%s | Taha Ali",
  },
  description:
    "Taha Ali is a freelance full-stack developer in Lahore, Pakistan, building Next.js websites, animated interfaces, and AI automation for real businesses.",
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
        url: "/og-image.jpg", // TODO: add a 1200x630 social preview image
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
    <html lang="en" className={`${baloo.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <CustomCursor />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
