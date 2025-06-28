"use client";

import { useEffect, useMemo, useState } from "react";

const useColorMode = () => {
  const [mode, setMode] = useState<"light" | "dark" | undefined>(undefined);

  useEffect(() => {
    const match = window.matchMedia("(prefers-color-scheme: dark)");

    setMode(match.matches ? "dark" : "light");

    function handleMedia(event: MediaQueryListEvent) {
      setMode(event.matches ? "dark" : "light");
    }

    match.addEventListener("change", handleMedia);

    return () => match.removeEventListener("change", handleMedia);
  }, []);

  return mode;
};

export { useColorMode };
