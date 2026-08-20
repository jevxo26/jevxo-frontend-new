import type { Metadata } from "next";
import { Geist, Geist_Mono, Bai_Jamjuree } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Jevxo - Digital Product Agency",
  description: "High-impact value & world-class digital product design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${baiJamjuree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col justify-between bg-[#f6f8fc] text-[#0a0c16] font-sans">
        {children}
      </body>
    </html>
  );
}
