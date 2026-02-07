"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/shared/button";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div
      className="absolute top-8 right-8 lg:right-28 p-0 duration-500"
      title="Toggle Theme"
    >
      <Button variant="outline" size="icon" onClick={toggleTheme}>
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}

export function ThemeConfig({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full pt-32 px-4 md:pt-36 md:px-8 lg:pt-40 lg:px-20">
      <div
        className="fixed inset-0 -z-10"
        style={{ background: "var(--bg-gradient)" }}
      />
      {children}
    </div>
  );
}
