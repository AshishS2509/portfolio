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
  title: "Ashish Solanki — Tech Consultant & Full Stack Developer",
  description:
    "I help businesses solve real problems with the right technology. Full-stack web apps, AI chatbots, WhatsApp automation, SEO, and API integrations — scoped, built, and shipped end to end.",
  keywords: [
    "Tech Consultant India",
    "Full Stack Developer India",
    "Next.js Developer",
    "AI Chatbot Developer",
    "WhatsApp Automation",
    "Freelance Developer India",
    "Node.js Developer",
    "React Developer",
    "SaaS Developer",
    "API Integration",
  ],
  authors: [{ name: "Ashish Solanki" }],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Ashish Solanki — Tech Consultant & Full Stack Developer",
    description:
      "I build technology solutions that help businesses save time, automate repetitive work, generate more leads, and deliver better customer experiences. From high-performance websites and web applications to AI chatbots, WhatsApp automation, CRM integrations, and custom business software, I provide complete end-to-end development tailored to your goals.",
    url: siteUrl,
    siteName: "Ashish Solanki",
    locale: "en_IN",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashish Solanki — Tech Consultant & Full Stack Developer",
    description:
      "Freelance tech consultant building web apps, AI chatbots, and automation tools for real businesses.",
    creator: "@Ashish_2509_",
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
                "https://github.com/AshishS2509",
                "https://linkedin.com/in/solanki-ashish",
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
