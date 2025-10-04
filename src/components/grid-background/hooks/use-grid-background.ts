import { type RefObject, useEffect } from "react";

type Size = {
  width: number;
  height: number;
};

type Instruction = (ctx: CanvasRenderingContext2D, size: Size) => void;

const instructions: Instruction[] = [];

function draw(context: CanvasRenderingContext2D, size: Size) {
  if (!context || !size.width || !size.height) return;

  context.clearRect(0, 0, size.width, size.height);

  for (const instruction of instructions) {
    instruction(context, size);
  }

  requestAnimationFrame(() => draw(context, size));
}

const spacing = 60;
const speed = 0.1;

export function useGridBackground(
  canvas: RefObject<HTMLCanvasElement | null>,
  size: { width: number; height: number }
) {
  useEffect(() => {
    instructions.length = 0;

    const context = canvas.current?.getContext("2d");
    if (!context) return;

    let xOffset = 0;
    let yOffset = 0;

    const direction = { x: 0, y: 0 };

    function handleMouseMove(e: MouseEvent) {
      if (!canvas.current) return;
      const rect = canvas.current.getBoundingClientRect();

      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      const cx = size.width / 2;
      const cy = size.height / 2;

      let dx = mx - cx;
      let dy = my - cy;

      const len = Math.hypot(dx, dy);

      if (len > 0) {
        direction.x = dx / len;
        direction.y = dy / len;
      } else {
        direction.x = 0;
        direction.y = 0;
      }
    }

    window.addEventListener("mousemove", handleMouseMove);

    instructions.push((ctx, size) => {
      ctx.fillStyle = "rgb(255 255 255 / 1%)";

      const vCount = Math.ceil(size.width / spacing) + 2;
      const hCount = Math.ceil(size.height / spacing) + 2;

      for (let i = 0; i < vCount; i++) {
        const xPos = -xOffset + i * spacing;
        ctx.fillRect(xPos, 0, 2, size.height);
      }

      for (let i = 0; i < hCount; i++) {
        const yPos = -yOffset + i * spacing;
        ctx.fillRect(0, yPos, size.width, 2);
      }
    });

    instructions.push(() => {
      xOffset = (xOffset + direction.x * speed) % spacing;
      yOffset = (yOffset + direction.y * speed) % spacing;

      if (xOffset < 0) xOffset += spacing;
      if (yOffset < 0) yOffset += spacing;
    });

    draw(context, size);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [canvas.current, size]);
}
