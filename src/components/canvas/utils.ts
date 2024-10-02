import { Position } from "./types";

const targetFPS = 60;

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

function getElementBoundary(target: Element) {
  const box = target.getBoundingClientRect();
  const x1 = Math.round(box.x / 10) - 1;
  const y1 = Math.round(box.y / 10) - 1;
  const x2 = Math.round(box.x / 10 + box.width / 10) + 1;
  const y2 = Math.round(box.y / 10 + box.height / 10) + 1;

  return {
    x1,
    y1,
    x2,
    y2,
  };
}

function isIntersecting(x: number, y: number, pos: Position) {
  return x >= pos.y1 && x <= pos.y2 && y >= pos.x1 && y <= pos.x2;
}

export { createDots, getElementBoundary, targetFPS, isIntersecting };
