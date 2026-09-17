import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import SparkleCursor from "@/components/SparkleCursor";
import AmbientBokeh from "@/components/AmbientBokeh";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const topicSerif = Playfair_Display({
  variable: "--font-topic-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ruhini Udara | Software Engineer & IT Portfolio",
  description:
    "Portfolio of Ruhini Udara — Information Technology & Management undergraduate at University of Moratuwa. Full-stack developer with Next.js, Spring Boot, and PostgreSQL.",
  keywords: [
    "Ruhini Udara",
    "Software Engineer",
    "IT Portfolio",
    "University of Moratuwa",
    "Next.js",
    "Spring Boot",
    "Full-Stack Developer",
    "Sri Lanka",
    "Internship",
  ],
  authors: [{ name: "Ruhini Udara" }],
  openGraph: {
    title: "Ruhini Udara | Software Engineer & IT Portfolio",
    description:
      "IT & Management undergraduate at University of Moratuwa specializing in Next.js, Spring Boot, and modern cloud web apps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${inter.variable} ${topicSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <SparkleCursor />
          <AmbientBokeh />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
