"use client";

import { useDarkMode } from "@/hooks/use-dark-mode";
import { useEffect, useRef } from "react";

const lightColor = `255,255,255`;
const darkColor = `0,0,0`;

function Canvas() {
  const isDarkMode = useDarkMode();
  const color = isDarkMode ? lightColor : darkColor;
  const mouse = useRef<{ x: number; y: number }>({ x: -100, y: -100 });
  const isClicking = useRef(false);
  const canvas = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const SCREEN_WIDTH = window.innerWidth;
    const SCREEN_HEIGHT = window.innerHeight;

    if (!canvas.current) return;

    canvas.current.width = SCREEN_WIDTH;
    canvas.current.height = SCREEN_HEIGHT;

    const context = canvas.current.getContext("2d");

    if (!context) return;

    function render(context: CanvasRenderingContext2D) {
      context.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

      for (let row = 0; row <= SCREEN_HEIGHT / 10; row++) {
        for (let col = 0; col <= SCREEN_WIDTH / 10; col++) {
          const X = col * 10 + 2.5;
          const Y = row * 10 + 2.5;

          context.beginPath();
          context.fillStyle = `rgba(${color},.1)`;
          context.moveTo(col * 10 + 2.5, row * 10 + 2.5);
          context.arc(X, Y, 1, 0, Math.PI * 2);
          context.closePath();

          if (Math.random() > 0.95) context.fillStyle = `rgba(${color},.7)`;

          const a = X - mouse.current.x;
          const b = Y - mouse.current.y;
          const c = Math.sqrt(a * a + b * b);
          const SIZE = isClicking.current ? 120 : 100;

          if (c < SIZE) context.fillStyle = `rgba(${color},0)`;

          context.fill();
        }
      }

      timer = setTimeout(() => {
        requestAnimationFrame(() => render(context));
      }, 1000 / 24);
    }

    render(context);

    return () => {
      clearTimeout(timer);
    };
  }, [color]);

  useEffect(() => {
    window.addEventListener("pointerdown", () => (isClicking.current = true));
    window.addEventListener("pointerup", () => (isClicking.current = false));

    window.addEventListener("pointermove", (event) => {
      mouse.current = { x: event.clientX, y: event.clientY };
    });

    return () => {
      window.removeEventListener(
        "pointerdown",
        () => (isClicking.current = true)
      );
      window.removeEventListener(
        "pointerup",
        () => (isClicking.current = false)
      );

      window.removeEventListener("pointermove", (event) => {
        mouse.current = { x: event.clientX, y: event.clientY };
      });
    };
  });

  return <canvas ref={canvas} className="w-dvw h-dvh overscroll-none" />;
}

export { Canvas };
