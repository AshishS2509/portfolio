import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import {
  ModeToggle,
  ThemeConfig,
  ThemeProvider,
} from "@/components/theme-provider";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  weight: ["100","200", "300", "400", "500","600", "700", "800", "900"],
  subsets: ["latin"],
});

const roboto = Roboto_Mono({
  variable: "--font-roboto-mono",
  weight: ["100","200", "300", "400", "500","600", "700"],
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
      <body className={`${poppins.variable} ${roboto.variable} antialiased`}>
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
