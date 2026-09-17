"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
  rotation: number;
  vRot: number;
  type: "star" | "sparkle" | "circle";
}

const COLORS = [
  "#FF85A2", // Pink primary
  "#FFB3C3", // Pink soft
  "#FB5B86", // Pink deep
  "#E9D5FF", // Soft lavender
  "#C084FC", // Lavender violet
  "#FDE047", // Warm gold shimmer
  "#FFFFFF", // Pure star white
];

export default function SparkleCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop mouse/trackpad) and if reduced motion is not preferred
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Add CSS rule to hide default cursor on fine pointer devices
    document.documentElement.classList.add("custom-cursor-active");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particles: Particle[] = [];
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let lastX = -100;
    let lastY = -100;
    let isVisible = false;
    let isClicking = false;
    let isHovering = false;
    let animId: number;

    const addParticle = (x: number, y: number, count = 1, isBurst = false) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = isBurst
          ? Math.random() * 3.8 + 1.2
          : Math.random() * 1.4 + 0.3;

        const types: ("star" | "sparkle" | "circle")[] = ["star", "sparkle", "circle"];
        const chosenType = types[Math.floor(Math.random() * types.length)];

        particles.push({
          x: x + (Math.random() - 0.5) * 6,
          y: y + (Math.random() - 0.5) * 6,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed + (isBurst ? -0.4 : 0.35),
          size: isBurst ? Math.random() * 5 + 3 : Math.random() * 3.5 + 2,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          alpha: 1,
          life: 0,
          maxLife: isBurst ? Math.floor(Math.random() * 25 + 35) : Math.floor(Math.random() * 20 + 20),
          rotation: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 0.15,
          type: chosenType,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      isVisible = true;
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Initialize ring on first move
      if (ringX === -100) {
        ringX = mouseX;
        ringY = mouseY;
      }

      // Check if hovering over clickable element
      const target = e.target as HTMLElement | null;
      if (target) {
        const clickable = target.closest("a, button, input, select, textarea, [role='button'], .cute-card");
        isHovering = !!clickable;
      }

      const dx = mouseX - lastX;
      const dy = mouseY - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 9) {
        addParticle(mouseX, mouseY, Math.min(Math.floor(dist / 12), 3), false);
        lastX = mouseX;
        lastY = mouseY;
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      isClicking = true;
      addParticle(e.clientX, e.clientY, 16, true);
    };

    const handleMouseUp = () => {
      isClicking = false;
    };

    const handleMouseLeave = () => {
      isVisible = false;
    };

    const handleMouseEnter = () => {
      isVisible = true;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Drawing helper for 4-point star
    const drawStar = (
      context: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      spikes: number,
      outerRadius: number,
      innerRadius: number
    ) => {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      context.beginPath();
      context.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        context.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        context.lineTo(x, y);
        rot += step;
      }
      context.lineTo(cx, cy - outerRadius);
      context.closePath();
      context.fill();
    };

    let targetRingSize = 22;
    let currentRingSize = 22;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Update and draw trailing particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vRot;
        p.vx *= 0.97;
        p.vy *= 0.97;

        const progress = p.life / p.maxLife;
        p.alpha = Math.max(0, 1 - progress);
        const currentSize = Math.max(0.2, p.size * (1 - progress * 0.7));

        if (p.life >= p.maxLife || p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.type === "star") {
          drawStar(ctx, 0, 0, 4, currentSize * 1.5, currentSize * 0.38);
        } else if (p.type === "sparkle") {
          drawStar(ctx, 0, 0, 4, currentSize * 1.2, currentSize * 0.22);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, currentSize * 0.7, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      // 2. Draw custom main pointer head if mouse is inside window
      if (isVisible && mouseX >= 0 && mouseY >= 0) {
        // Smooth lerp trailing ring
        ringX += (mouseX - ringX) * 0.22;
        ringY += (mouseY - ringY) * 0.22;

        targetRingSize = isClicking ? 14 : isHovering ? 34 : 22;
        currentRingSize += (targetRingSize - currentRingSize) * 0.2;

        // Outer smooth halo / ring
        ctx.save();
        ctx.beginPath();
        ctx.arc(ringX, ringY, currentRingSize / 2, 0, Math.PI * 2);
        ctx.strokeStyle = isHovering ? "rgba(251, 91, 134, 0.7)" : "rgba(255, 133, 162, 0.4)";
        ctx.lineWidth = isHovering ? 2 : 1.5;
        if (isHovering) {
          ctx.fillStyle = "rgba(255, 133, 162, 0.12)";
          ctx.fill();
        }
        ctx.stroke();
        ctx.restore();

        // Main center cursor: Magic Star Pointer ✨
        ctx.save();
        ctx.translate(mouseX, mouseY);
        ctx.shadowColor = "#FB5B86";
        ctx.shadowBlur = isHovering ? 12 : 8;
        ctx.fillStyle = "#FFFFFF";

        // Draw 4-point star core at mouse pointer
        const coreSize = isHovering ? 6.5 : isClicking ? 4 : 5.5;
        drawStar(ctx, 0, 0, 4, coreSize, coreSize * 0.32);

        // Center jewel dot
        ctx.beginPath();
        ctx.arc(0, 0, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "#FB5B86";
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 99999,
      }}
    />
  );
}
