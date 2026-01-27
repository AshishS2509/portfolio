import type { Metadata, Viewport } from "next";
import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import {
  ModeToggle,
  ThemeConfig,
  ThemeProvider,
} from "@/components/theme-provider";
import { siteUrl } from "@/lib/utils";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const roboto = Roboto_Mono({
  variable: "--font-roboto-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashish Solanki — Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, and scalable web applications.",
  openGraph: {
    title: "Ashish Solanki — Full Stack Developer",
    description: "Building scalable web apps with React & Node.js",
    url: siteUrl,
    images: ["/og-image.png"],
  },
  metadataBase: siteUrl,
  alternates: {
    canonical: siteUrl,
  },
  twitter: {
    images: ["/og-image.png"],
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ashish Solanki",
              jobTitle: "Full Stack Developer",
              url: siteUrl,
              sameAs: [
                "https://github.com/yourusername",
                "https://linkedin.com/in/yourusername",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Savitribai Phule Pune University",
              },
              knowsAbout: [
                "React",
                "Next.js",
                "Node.js",
                "System Design",
                "Microservices",
                "Artificial Intelligence",
                "Agentic AI",
                "Machine Learning",
                "API Design",
                "JavaScript",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${roboto.variable} antialiased font-sans`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 z-50"
        >
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeConfig>
            <ModeToggle />
            <main id="main-content">{children}</main>
          </ThemeConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
