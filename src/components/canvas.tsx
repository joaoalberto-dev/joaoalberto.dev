"use client";

import { useEffect, useRef } from "react";

function Canvas() {
  const mouse = useRef<{ x: number; y: number }>({ x: -100, y: -100 });
  const canvas = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
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
          context.fillStyle = "rgba(255,255,255,.1)";
          context.moveTo(col * 10 + 2.5, row * 10 + 2.5);
          context.arc(X, Y, 1, 0, Math.PI * 2);
          context.closePath();

          if (Math.random() > 0.95) context.fillStyle = "rgba(255,255,255,.7)";

          const a = X - mouse.current.x;
          const b = Y - mouse.current.y;
          const c = Math.sqrt(a * a + b * b);

          if (c < 100) {
            context.fillStyle = "rgba(255,255,255,0)";
          }

          context.fill();
        }
      }

      setTimeout(() => {
        requestAnimationFrame(() => render(context));
      }, 1000 / 24);
    }

    render(context);
  }, []);

  useEffect(() => {
    window.addEventListener("pointermove", (event) => {
      mouse.current = { x: event.clientX, y: event.clientY };
    });

    return () => {
      window.removeEventListener("pointermove", (event) => {
        mouse.current = { x: event.clientX, y: event.clientY };
      });
    };
  });

  return <canvas ref={canvas} className="w-dvw h-dvh overscroll-none" />;
}

export { Canvas };
