// Based on: https://tailwindcss.com/docs/responsive-design
"use client";

import { useEffect, useState } from "react";
import { screens } from "tailwindcss/defaultTheme";

export function useMediaQuery(query: "sm" | "md" | "lg" | "xl" | "2xl") {
  const parsedQuery = `(min-width: ${screens[query]})`;
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(parsedQuery);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    media.addEventListener("change", listener);

    return () => {
      media.removeEventListener("change", listener);
    };
  }, [matches, parsedQuery]);

  return matches;
}
