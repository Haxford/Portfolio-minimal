import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harry Axford | Technician to Cloud Engineer",
  description: "Portfolio of Harry Axford - IT Technician, Linux Enthusiast, and Future Cloud Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-neutral-950 text-neutral-200`}
      >
        <Navbar />
        <main className="flex-grow max-w-4xl mx-auto w-full px-6 py-12">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
