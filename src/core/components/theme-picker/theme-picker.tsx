"use client";

import { useState } from "react";

export type Theme = "amber" | "emerald" | "indigo" | "neutral";

export type ThemePickerProps = {
  onThemeChange?: (theme: Theme) => void;
  defaultTheme?: Theme;
  initialTheme?: Theme;
};

const setCookie = (name: string, value: string, days: number = 365) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

export function ThemePicker({
  onThemeChange,
  defaultTheme = "neutral",
  initialTheme,
}: ThemePickerProps) {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(
    initialTheme || defaultTheme
  );

  const handleThemeSelect = (theme: Theme) => {
    setSelectedTheme(theme);
    setCookie("theme", theme);

    document.body.className = document.body.className.replace(
      /theme-\w+/,
      `theme-${theme}`
    );

    onThemeChange?.(theme);
  };

  const getThemeColor = (theme: Theme) => {
    switch (theme) {
      case "amber":
        return "bg-amber-500";
      case "emerald":
        return "bg-emerald-500";
      case "indigo":
        return "bg-indigo-500";
      case "neutral":
        return "bg-neutral-500";
      default:
        return "bg-amber-500";
    }
  };

  const themes: Theme[] = ["amber", "emerald", "indigo", "neutral"];

  return (
    <div className="h-10 w-10 bg-amber-100 rounded-lg relative overflow-hidden transition-[width] duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] p-1.5 hover:w-[185px] group">
      <div className="h-7 w-48 flex gap-1.5">
        <div className={`w-7 h-7 rounded-md ${getThemeColor(selectedTheme)}`} />
        {themes.map((theme, index) => (
          <button
            key={theme}
            onClick={() => handleThemeSelect(theme)}
            className={`w-7 h-7 relative rounded-md transition-all duration-300 ${getThemeColor(
              theme
            )} translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-50 hover:opacity-100`}
            style={{ transitionDelay: `${200 + index * 100}ms` }}
            aria-label={`${theme} theme`}
          />
        ))}
      </div>
    </div>
  );
}
