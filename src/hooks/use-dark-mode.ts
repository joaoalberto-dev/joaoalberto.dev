"use client";

import { useEffect, useState } from "react";

function useDarkMode() {
  const [darkMode, setDarkMode] = useState(
    (typeof window !== "undefined" &&
      window?.matchMedia("(prefers-color-scheme: dark)")?.matches) ||
      false
  );

  useEffect(() => {
    function update(event: MediaQueryListEventMap["change"]) {
      setDarkMode(event.matches);
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", update);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", update);
    };
  }, []);

  return darkMode;
}

export { useDarkMode };
