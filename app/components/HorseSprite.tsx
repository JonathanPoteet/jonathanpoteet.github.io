"use client";

import { useEffect, useRef } from "react";

const FRAME_SIZE = 100;
const FRAME_COUNT = 2;
const FRAME_TICKS = 50;

const HorseSprite = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const sprite = new Image();
    sprite.src = "/horse-spritesheet.png";

    let animationFrameId = 0;
    let frameIndex = 0;
    let tickCounter = 0;

    const draw = () => {
      if (sprite.complete && sprite.naturalWidth >= FRAME_SIZE * FRAME_COUNT) {
        context.clearRect(0, 0, FRAME_SIZE, FRAME_SIZE);
        context.imageSmoothingEnabled = false;
        context.drawImage(
          sprite,
          frameIndex * FRAME_SIZE,
          0,
          FRAME_SIZE,
          FRAME_SIZE,
          0,
          0,
          FRAME_SIZE,
          FRAME_SIZE,
        );

        tickCounter += 1;
        if (tickCounter >= FRAME_TICKS) {
          frameIndex = (frameIndex + 1) % FRAME_COUNT;
          tickCounter = 0;
        }
      }

      animationFrameId = window.requestAnimationFrame(draw);
    };

    animationFrameId = window.requestAnimationFrame(draw);

    return () => window.cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pixelatedHorse"
      width={FRAME_SIZE}
      height={FRAME_SIZE}
      aria-hidden="true"
    />
  );
};

export default HorseSprite;
