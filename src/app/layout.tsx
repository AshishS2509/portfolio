import type { Metadata } from "next";
import { Nunito, Ubuntu, Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import {
  ModeToggle,
  ThemeConfig,
  ThemeProvider,
} from "@/components/theme-provider";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu-sans",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const ubuntuMono = Ubuntu_Mono({
  variable: "--font-ubuntu-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashish Solanki | Software Developer",
  description: "Ashish Solanki | Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ubuntu.variable} ${ubuntuMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeConfig>
            <ModeToggle />
            {children}
          </ThemeConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
