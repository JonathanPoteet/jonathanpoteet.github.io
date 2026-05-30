"use client"
import React, { useRef, useEffect } from 'react';
import s from './noiseWalker.module.scss'
const NoiseWalker = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const walker = useRef({ x: 0, y: 0, angle: Math.random() * Math.PI * 2 });
  const animFrame = useRef(0);
  const tickCounter = useRef(0);
  const spriteRef = useRef<HTMLImageElement | null>(null);

 useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    let animationFrameId = NaN;
    if (!canvas || !ctx || !containerRef.current) return;

    if (!spriteRef.current) {
    const img = new Image();
    img.src = '/cat-sprite-spritesheet.png';
    spriteRef.current = img;
  }

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

      const hasH1 = !!h1Ref.current;
      
      ctx.fillStyle = '#c8ff00';
      ctx.fillRect(-1, -1, canvas.width + 2, canvas.height + 2);

      // 2. Base Vector Movement
      walker.current.angle += (Math.random() - 0.5) * 0.5;
      const speed = hasH1 ? 0.75 : 1.5; 
      let nextX = walker.current.x + Math.cos(walker.current.angle) * speed;
      let nextY = walker.current.y + Math.sin(walker.current.angle) * speed;

      // 3. Global Canvas Wall Collisions (Always run this so it never glitters or breaks)
      const spritePadding = 25; // Raised slightly to safely buffer the horse dimensions

      // Left & Right Walls
      if (nextX < spritePadding) {
        nextX = spritePadding;
        walker.current.angle = Math.PI - walker.current.angle;
      } else if (nextX > canvas.width - spritePadding) {
        nextX = canvas.width - spritePadding;
        walker.current.angle = Math.PI - walker.current.angle;
      }

      // Top & Bottom Walls
      if (nextY < spritePadding) {
        nextY = spritePadding;
        walker.current.angle = -walker.current.angle;
      } else if (nextY > canvas.height - spritePadding) {
        nextY = canvas.height - spritePadding;
        walker.current.angle = -walker.current.angle;
      }

      // 4. Central H1 Card Obstacle Collision
      if (hasH1) {
        const h1Rect = h1Ref.current!.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();

        const obstacle = {
          left: h1Rect.left - containerRect.left,
          right: h1Rect.right - containerRect.left,
          top: h1Rect.top - containerRect.top,
          bottom: h1Rect.bottom - containerRect.top,
        };

        if (
          nextX > obstacle.left &&
          nextX < obstacle.right &&
          nextY > obstacle.top &&
          nextY < obstacle.bottom
        ) {
          // Bounce turning completely around away from collision point
          walker.current.angle += Math.PI;
          nextX = walker.current.x + Math.cos(walker.current.angle) * speed * 1.5;
          nextY = walker.current.y + Math.sin(walker.current.angle) * speed * 1.5;
        }

        // 5. Sprite Sheet Metrics & Slicing
        const frameWidth = 100;   
        const frameHeight = 100;  
        const renderSize = 100; 
        const sourceY = 0; // Row 0: Facing Right Idle Loop  
        // let sourceY = 1 * frameHeight; // Row 1: Facing Right Running Loop

        const totalColumns = 4; // Total frames in the running animation
        tickCounter.current += 1;
        if (tickCounter.current % 25 === 0) { 
          animFrame.current = (animFrame.current + 1) % totalColumns;
        }
        const sourceX = animFrame.current * frameWidth;
        
        // 6. Final Execution Render
        ctx.save();

      const isMovingLeft = nextX < walker.current.x;

        if (spriteRef.current) {
          if (!isMovingLeft) {
            ctx.translate(nextX, nextY);
            ctx.scale(-1, 1); // Mirror horizontally
            ctx.drawImage(
              spriteRef.current,
              sourceX, sourceY,
              frameWidth, frameHeight,
              -renderSize / 2, -renderSize / 2,
              renderSize, renderSize
            );
          } else {
            ctx.drawImage(
              spriteRef.current,
              sourceX, sourceY,
              frameWidth, frameHeight,
              nextX - renderSize / 2,
              nextY - renderSize / 2,
              renderSize, renderSize
            );
          }
        }
        ctx.restore();
      }

      // 7. Commit calculated positions to persistent ref state
      walker.current.x = nextX;
      walker.current.y = nextY;

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