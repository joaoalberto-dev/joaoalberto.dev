"use client";

import { useEffect, useRef } from "react";
import styles from "./canvas-background.module.css";

type CanvasBackgroundProps = {
  parentRef: React.RefObject<HTMLDivElement | null>;
};

function CanvasBackground({ parentRef }: CanvasBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const parent = parentRef.current;
    const canvas = canvasRef.current;

    if (!parent || !canvas) return;

    const { width, height } = parent.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePositionRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    parentRef.current?.addEventListener("mousemove", handleMouseMove);

    function draw(
      canvas: HTMLCanvasElement,
      ctx: CanvasRenderingContext2D,
      time: number
    ) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "#edebeb";
      ctx.lineWidth = 2;

      const { x: mouseX, y: mouseY } = mousePositionRef.current;

      const numCircles = 30;
      const baseRadius = 20;
      const radiusIncrement = 30;
      const animationSpeed = 0.001;

      for (let i = 0; i < numCircles; i++) {
        const radius =
          baseRadius +
          i * radiusIncrement +
          Math.sin(time * animationSpeed) * 20;

        const influence = 0.5;
        const circleX = mouseX + (canvas.width / 2 - mouseX) * (1 - influence);
        const circleY = mouseY + (canvas.height / 2 - mouseY) * (1 - influence);

        ctx.beginPath();
        ctx.arc(circleX, circleY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      requestAnimationFrame((timestamp) => draw(canvas, ctx, timestamp));
    }

    draw(canvas, ctx, 0);

    return () => {
      parentRef.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas className={styles.container} ref={canvasRef}></canvas>;
}

export { CanvasBackground };
