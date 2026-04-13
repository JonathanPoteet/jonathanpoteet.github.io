"use client"
import React, { useRef, useEffect } from 'react';
import s from './noiseWalker.module.scss'
const NoiseWalker = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const walker = useRef({ x: 0, y: 0, angle: Math.random() * Math.PI * 2 });

 useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    let animationFrameId = NaN;
    if (!canvas || !ctx || !containerRef.current) return;

    const setup = () => {
      canvas.style.width = '100%';
      canvas.style.height = '100%';

      const { clientWidth, clientHeight } = containerRef.current!;
      // guard against transient zero sizes during resize
      if (clientWidth === 0 || clientHeight === 0) return;

      canvas.width = clientWidth;
      canvas.height = clientHeight;

      // initialize at center and then nudge out of the card if it overlaps
      walker.current.x = canvas.width / 2;
      walker.current.y = canvas.height / 2;
      if (h1Ref.current && containerRef.current) {
        const h1Rect = h1Ref.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const obstacle = {
          left: h1Rect.left - containerRect.left,
          right: h1Rect.right - containerRect.left,
          top: h1Rect.top - containerRect.top,
          bottom: h1Rect.bottom - containerRect.top,
        };
        // if the walker is inside the obstacle, move it to the nearest edge
        if (
          walker.current.x > obstacle.left &&
          walker.current.x < obstacle.right &&
          walker.current.y > obstacle.top &&
          walker.current.y < obstacle.bottom
        ) {
          // push horizontally to the right edge
          walker.current.x = obstacle.right + 20;
          // clamp within canvas
          walker.current.x = Math.min(walker.current.x, canvas.width - 5);
        }
      }

      ctx.fillStyle = '#c8ff00';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // debounce resize so we don't thrash canvas sizing on continuous resize
    let resizeTimeout: number | undefined;
    const onResize = () => {
      window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        setup();
        // ensure animation is running after resize
        if (typeof animationFrameId !== 'number' || animationFrameId === -1) {
          animationFrameId = requestAnimationFrame(draw);
        }
      }, 80);
    };

    const draw = () => {
      // If essential refs are missing, continue the loop until they exist
      if (!containerRef.current) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      // allow h1 to be temporarily absent without stopping the loop
      const hasH1 = !!h1Ref.current;
      
      // Trail (slightly fade previous frame)
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (hasH1) {
        const h1Rect = h1Ref.current!.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();

        const obstacle = {
          left: h1Rect.left - containerRect.left,
          right: h1Rect.right - containerRect.left,
          top: h1Rect.top - containerRect.top,
          bottom: h1Rect.bottom - containerRect.top,
        };

        walker.current.angle += (Math.random() - 0.5) * 0.5;
        const speed = .75; // faster movement
        let nextX = walker.current.x + Math.cos(walker.current.angle) * speed;
        let nextY = walker.current.y + Math.sin(walker.current.angle) * speed;

        if (
          nextX > obstacle.left &&
          nextX < obstacle.right &&
          nextY > obstacle.top &&
          nextY < obstacle.bottom
        ) {
          // bounce and move outward so we don't get stuck inside
          walker.current.angle += Math.PI;
          nextX = walker.current.x + Math.cos(walker.current.angle) * speed * 1.5;
          nextY = walker.current.y + Math.sin(walker.current.angle) * speed * 1.5;
        }

        // draw glowing ball at the new position
        const ballRadius = Math.max(6, Math.min(30, canvas.width * 0.2));
        ctx.save();
        ctx.fillStyle = '#05eeff';
        ctx.beginPath();
        ctx.arc(nextX, nextY, ballRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        walker.current.x = nextX;
        walker.current.y = nextY;
      } else {
        walker.current.angle += (Math.random() - 0.5) * 0.5;
        walker.current.x += Math.cos(walker.current.angle) * 1.5;
        walker.current.y += Math.sin(walker.current.angle) * 1.5;
      }

      // Screen wrap
      if (walker.current.x < 0) walker.current.x = canvas.width;
      if (walker.current.x > canvas.width) walker.current.x = 0;
      if (walker.current.y < 0) walker.current.y = canvas.height;
      if (walker.current.y > canvas.height) walker.current.y = 0;

      animationFrameId = requestAnimationFrame(draw);
    };

    setup();
    // start animation
    animationFrameId = requestAnimationFrame(draw);
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onResize);
      window.clearTimeout(resizeTimeout);
    };
  }, []);

  return (<div ref={containerRef} className={s.container}>
      <canvas ref={canvasRef} className={s.canvas} />
      
      {/* The Central Card */}
      <h1 
        ref={h1Ref}
        className={s.heading}
      >
        Jonathan Poteet
      </h1>
    </div>
  );
};

export default NoiseWalker;