import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://michaeljoniferecmj.vercel.app"),
  title: "Michael | Full-Stack Developer",
  description:
    "Full-stack developer portfolio showcasing modern web applications, AI-assisted builds, and automation solutions.",
  openGraph: {
    title: "Michael | Full-Stack Developer",
    description:
      "Full-stack developer portfolio showcasing modern web applications, AI-assisted builds, and automation solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael | Full-Stack Developer",
    description:
      "Full-stack developer portfolio showcasing modern web applications, AI-assisted builds, and automation solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
