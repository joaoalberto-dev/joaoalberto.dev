"use client";

import { useEffect, useRef } from "react";
import styles from "./canvas-background.module.css";

type CanvasBackgroundProps = {
  parentRef: React.RefObject<HTMLDivElement | null>;
};

function CanvasBackground({ parentRef }: CanvasBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePositionRef = useRef({ x: 1000, y: 1000 });
  const isMouseOverRef = useRef(false);

  useEffect(() => {
    const parent = parentRef.current;
    const canvas = canvasRef.current;

    if (!parent || !canvas) return;

    const { width, height } = parent.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;

    mousePositionRef.current = { x: width / 2, y: height / 2 };

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleMouseLeave = () => {
      isMouseOverRef.current = false;
      mousePositionRef.current = { x: canvas.width / 2, y: canvas.height / 2 };
    };

    const handleMouseEnter = () => {
      isMouseOverRef.current = true;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseOverRef.current) return;

      const rect = canvas.getBoundingClientRect();
      mousePositionRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    parentRef.current?.addEventListener("mousemove", handleMouseMove);
    parentRef.current?.addEventListener("mouseenter", handleMouseEnter);
    parentRef.current?.addEventListener("mouseleave", handleMouseLeave);

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
      const radiusIncrement = 60;
      const animationSpeed = 0.001;

      for (let i = 0; i < numCircles; i++) {
        const radius =
          baseRadius +
          i * radiusIncrement +
          Math.sin(time * animationSpeed) * 20;

        const influence = 0.3;
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
      parentRef.current?.removeEventListener("mouseenter", handleMouseEnter);
      parentRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <canvas className={styles.container} ref={canvasRef}></canvas>;
}

export { CanvasBackground };
