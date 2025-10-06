import { useEffect, useState } from "react";

export function useScreenSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function setScreenSize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setSize({ width, height });
    }

    setScreenSize();

    window.addEventListener("resize", setScreenSize);

    return () => {
      window.removeEventListener("resize", setScreenSize);
    };
  }, []);

  return size;
}
