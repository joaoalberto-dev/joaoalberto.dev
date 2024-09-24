"use client";

import { useDarkMode } from "@/hooks/use-dark-mode";
import { useEffect, useRef } from "react";

const targetFPS = 12;
const lightColor = `255,255,255`;
const darkColor = `0,0,0`;
const opacities = [`.1`, `.2`, `.3`, `.4`, `.5`, `.6`, `.7`];

function createDots() {
  const SCREEN_WIDTH = typeof window !== "undefined" ? window.innerWidth : 0;
  const SCREEN_HEIGHT = typeof window !== "undefined" ? window.innerHeight : 0;
  const dots: number[][] = [];

  for (let row = 0; row <= SCREEN_HEIGHT / 10; row++) {
    if (!dots[row]) dots[row] = [];

    for (let col = 0; col <= SCREEN_WIDTH / 10; col++) {
      dots[row][col] = Math.random() > 0.95 ? 1 : 0;
    }
  }

  return dots;
}

function Canvas() {
  let isForward = useRef(true);
  const frame = useRef(0);
  const hoveringElement = useRef<Element | null>(null);
  const isDarkMode = useDarkMode();
  const color = isDarkMode ? lightColor : darkColor;
  const mouse = useRef<{ x: number; y: number }>({ x: -100, y: -100 });
  const isClicking = useRef(false);
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const dots = useRef(createDots());

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!canvas.current) return;

    canvas.current.width = window.innerWidth;
    canvas.current.height = window.innerHeight;

    const context = canvas.current.getContext("2d");

    if (!context) return;

    function render(context: CanvasRenderingContext2D) {
      const cycle = frame.current % opacities.length;

      if (cycle === 0 && frame.current > 0) {
        isForward.current = !isForward.current;
      }

      if (frame.current % (opacities.length * 2) === 0) {
        dots.current = createDots();
      }

      context.fillStyle = `rgba(11, 11, 11, 1)`;
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      const opacity =
        opacities[isForward.current ? cycle : opacities.length - 1 - cycle];

      let pos = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
      };

      if (hoveringElement.current !== null) {
        const box = hoveringElement.current.getBoundingClientRect();
        const x1 = Math.round(box.x / 10) - 1;
        const y1 = Math.round(box.y / 10) - 1;
        const x2 = Math.round(box.x / 10 + box.width / 10) + 1;
        const y2 = Math.round(box.y / 10 + box.height / 10) + 1;

        pos = {
          x1,
          y1,
          x2,
          y2,
        };
      }

      for (let row = 0; row <= dots.current.length - 1; row++) {
        for (let col = 0; col <= dots.current[row].length - 1; col++) {
          const X = col * 10 + 2.5;
          const Y = row * 10 + 2.5;

          context.beginPath();
          context.fillStyle = `rgba(${color},.1)`;
          context.moveTo(col * 10 + 2.5, row * 10 + 2.5);
          context.arc(X, Y, 1, 0, Math.PI * 2);
          context.closePath();

          if (dots.current[row][col])
            context.fillStyle = `rgba(${color},${opacity})`;

          const a = X - mouse.current.x;
          const b = Y - mouse.current.y;
          const c = Math.sqrt(a * a + b * b);
          const SIZE = isClicking.current ? 60 : 40;

          if (hoveringElement.current === null && c < SIZE)
            context.fillStyle = `rgba(255,0,0,1)`;

          if (hoveringElement.current !== null) {
            if (
              row >= pos.y1 &&
              row <= pos.y2 &&
              col >= pos.x1 &&
              col <= pos.x2
            ) {
              context.fillStyle = `rgba(255,0,0,1)`;
            }
          }

          context.fill();
        }
      }

      timer = setTimeout(() => {
        requestAnimationFrame(() => {
          render(context);
        });
      }, 1000 / targetFPS);

      frame.current += 1;
    }

    render(context);

    return () => {
      clearTimeout(timer);
    };
  }, [dots, color]);

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
