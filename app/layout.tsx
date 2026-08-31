import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Bai_Jamjuree, DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baiJamjuree = Bai_Jamjuree({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-bai-jamjuree",
});

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jevxo.com";

export const viewport: Viewport = {
  themeColor: "#0052FF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "JEVXO - AI Software & Digital Product Studio | B2B SaaS & Web Development",
    template: "%s | JEVXO - Digital Product Studio",
  },
  description:
    "JEVXO is a premier AI-native software studio. We design, train, and ship intelligent digital products, Next.js web applications, and B2B SaaS platforms in days, not months.",
  keywords: [
    "JEVXO",
    "JEVXO Agency",
    "AI Software Company",
    "Digital Product Agency",
    "UI/UX Design Agency",
    "Next.js Software Studio",
    "B2B SaaS Engineering",
    "Custom AI Models",
    "Full-Stack Web Development",
    "Mobile App Development",
    "Automation Workflows",
  ],
  authors: [{ name: "JEVXO Engineering Team", url: siteUrl }],
  creator: "JEVXO Software Studio",
  publisher: "JEVXO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/fab.jpeg", type: "image/jpeg" },
    ],
    shortcut: "/fab.jpeg",
    apple: "/fab.jpeg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "JEVXO - AI Software & Digital Product Studio",
    description:
      "Full-service UI/UX and development agency helping startups and businesses create fast, scalable, and user-focused digital products.",
    siteName: "JEVXO",
    images: [
      {
        url: "/logo1.jpeg",
        width: 1200,
        height: 630,
        alt: "JEVXO Software Studio",
      }, 
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JEVXO - AI Software & Digital Product Studio",
    description:
      "Full-service UI/UX and development agency helping startups and businesses create fast, scalable, and user-focused digital products.",
    images: ["/logo1.jpeg"],
    creator: "@jevxo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "JEVXO",
    url: siteUrl,
    logo: `${siteUrl}/logo1.jpeg`,
    description:
      "JEVXO is an AI software company and digital product studio that designs, builds, and deploys scalable web, mobile, and B2B SaaS solutions.",
    sameAs: [
      "https://facebook.com/jevxo",
      "https://linkedin.com/company/jevxo",
      "https://twitter.com/jevxo",
      "https://instagram.com/jevxo",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Bengali"],
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${baiJamjuree.variable} ${dmSerif.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col justify-between bg-[#f6f8fc] text-[#0a0c16] font-sans">
        {children}
      </body>
    </html>
  );
}
