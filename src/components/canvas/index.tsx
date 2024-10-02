"use client";

import { useDarkMode } from "@/hooks/use-dark-mode";
import { useEffect, useRef } from "react";
import {
  createDots,
  getElementBoundary,
  isIntersecting,
  targetFPS,
} from "./utils";
import { type Position } from "./types";

function Canvas() {
  const isDarkMode = useDarkMode();
  const hoveringElement = useRef<Element | null>(null);
  const mouse = useRef<{ x: number; y: number }>({ x: -100, y: -100 });
  const isClicking = useRef(false);
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const dots = useRef(createDots());

  useEffect(() => {
    const color = isDarkMode ? "rgb(255,255,255)" : "rgb(0,0,0)";
    let timer: NodeJS.Timeout;

    if (!canvas.current) return;

    canvas.current.width = window.innerWidth;
    canvas.current.height = window.innerHeight;

    const context = canvas.current.getContext("2d");

    if (!context) return;

    function render(context: CanvasRenderingContext2D) {
      if (!isClicking.current)
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      let pos: Position = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
      };

      if (hoveringElement.current !== null) {
        pos = getElementBoundary(hoveringElement.current);
      }

      for (let row = 0; row <= dots.current.length - 1; row++) {
        for (let col = 0; col <= dots.current[row].length - 1; col++) {
          const X = col * 10 + 2.5;
          const Y = row * 10 + 2.5;

          context.beginPath();
          context.moveTo(X, Y);
          context.closePath();

          const a = X - mouse.current.x;
          const b = Y - mouse.current.y;
          const c = Math.sqrt(a * a + b * b);
          const SIZE = 40;

          if (!hoveringElement.current && c < SIZE) {
            context.fillStyle = color;
            context.arc(X, Y, 1, 0, Math.PI * 2);
          }

          if (hoveringElement.current && isIntersecting(row, col, pos)) {
            context.fillStyle = color;
            context.arc(X, Y, 1, 0, Math.PI * 2);
          }

          context.fill();
        }
      }

      timer = setTimeout(() => {
        requestAnimationFrame(() => {
          render(context);
        });
      }, 1000 / targetFPS);
    }

    render(context);

    return () => {
      clearTimeout(timer);
    };
  }, [dots, isDarkMode]);

  useEffect(() => {
    window.addEventListener("pointerdown", () => (isClicking.current = true));
    window.addEventListener("pointerup", () => (isClicking.current = false));

    window.addEventListener("pointermove", (event) => {
      const target = document.elementFromPoint(event.clientX, event.clientY);

      if (target?.nodeName === "A") {
        hoveringElement.current = target;
      } else if (hoveringElement.current !== null) {
        hoveringElement.current = null;
      }

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
