import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Mohamed Esam | Full-Stack & AI Systems Engineer",
  description: "Portfolio of Mohamed Esam. Specializing in scalable Node/NestJS backends, real-time WebSockets, and production AI/RAG architectures. Creator of Apex Athletic (SmartCoach AI) and Chatify.",
  keywords: ["Mohamed Esam", "Full-Stack Developer", "Backend Engineer", "AI Engineer", "FastAPI RAG", "NestJS", "Next.js 15", "Node.js", "WebSockets"],
  authors: [{ name: "Mohamed Esam" }],
  openGraph: {
    title: "Mohamed Esam | Full-Stack & AI Systems Engineer",
    description: "Specializing in scalable Node/NestJS backends, real-time WebSockets, and production AI/RAG systems.",
    url: "https://mohamed-portfolio.vercel.app",
    siteName: "Mohamed Esam Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Esam | Full-Stack & AI Systems Engineer",
    description: "Specializing in scalable Node/NestJS backends, real-time WebSockets, and production AI/RAG systems.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohamed Esam",
              jobTitle: "Full-Stack & AI Systems Engineer",
              url: "https://github.com/Mohamed11Esam",
              sameAs: [
                "https://github.com/Mohamed11Esam",
                "https://apex-athletic-beta.vercel.app",
                "https://smart-coach-dashboard.vercel.app"
              ]
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans bg-zinc-950 text-zinc-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
