"use client";

import { useEffect, useRef } from "react";

export default function SpiderCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const spiderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only run on desktop / mouse devices
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.innerWidth < 768;

    if (isTouchDevice) return;

    const canvas = canvasRef.current;
    const spider = spiderRef.current;
    if (!canvas || !spider) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let hasMoved = false;

    const targetPos = { x: -100, y: -100 };
    const spiderPos = { x: -100, y: -100 };
    let currentAngle = 0;
    let huePhase = 0;

    // Silk Physics Configuration
    const E = {
      friction: 0.44,
      trails: 16,
      size: 40,
      dampening: 0.25,
      tension: 0.98,
    };

    class Node {
      x = -100;
      y = -100;
      vx = 0;
      vy = 0;
    }

    class Line {
      spring: number;
      friction: number;
      nodes: Node[] = [];

      constructor(spring: number) {
        this.spring = spring + 0.08 * Math.random() - 0.04;
        this.friction = E.friction + 0.01 * Math.random() - 0.005;
        this.nodes = [];
        for (let i = 0; i < E.size; i++) {
          const t = new Node();
          t.x = spiderPos.x;
          t.y = spiderPos.y;
          this.nodes.push(t);
        }
      }

      update() {
        let spring = this.spring;
        let t = this.nodes[0];
        t.vx += (spiderPos.x - t.x) * spring;
        t.vy += (spiderPos.y - t.y) * spring;

        for (let i = 0; i < this.nodes.length; i++) {
          t = this.nodes[i];
          if (i > 0) {
            const prev = this.nodes[i - 1];
            t.vx += (prev.x - t.x) * spring;
            t.vy += (prev.y - t.y) * spring;
            t.vx += prev.vx * E.dampening;
            t.vy += prev.vy * E.dampening;
          }
          t.vx *= this.friction;
          t.vy *= this.friction;
          t.x += t.vx;
          t.y += t.vy;
          spring *= E.tension;
        }
      }

      draw() {
        if (!ctx) return;
        let px = this.nodes[0].x;
        let py = this.nodes[0].y;

        ctx.beginPath();
        ctx.moveTo(px, py);

        for (let i = 1, len = this.nodes.length - 2; i < len; i++) {
          const x = this.nodes[i];
          const y = this.nodes[i + 1];
          px = 0.5 * (x.x + y.x);
          py = 0.5 * (x.y + y.y);
          ctx.quadraticCurveTo(x.x, x.y, px, py);
        }

        const lastPrev = this.nodes[this.nodes.length - 2];
        const last = this.nodes[this.nodes.length - 1];
        ctx.quadraticCurveTo(lastPrev.x, lastPrev.y, last.x, last.y);
        ctx.stroke();
        ctx.closePath();
      }
    }

    let lines: Line[] = [];
    const initLines = () => {
      lines = [];
      for (let i = 0; i < E.trails; i++) {
        lines.push(new Line(0.42 + (i / E.trails) * 0.025));
      }
    };
    initLines();

    const handleMouseMove = (e: MouseEvent) => {
      if (!hasMoved) {
        hasMoved = true;
        spiderPos.x = e.clientX;
        spiderPos.y = e.clientY;
        targetPos.x = e.clientX;
        targetPos.y = e.clientY;
        initLines();
        spider.style.opacity = "1";
      } else {
        targetPos.x = e.clientX;
        targetPos.y = e.clientY;
      }
    };

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    resizeCanvas();

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", resizeCanvas);

    // 60FPS Animation Loop
    const render = () => {
      if (hasMoved) {
        // 1. Smoothly interpolate spider toward mouse pointer
        const dx = targetPos.x - spiderPos.x;
        const dy = targetPos.y - spiderPos.y;
        spiderPos.x += dx * 0.24;
        spiderPos.y += dy * 0.24;

        // 2. Rotate spider towards movement direction
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 1.2) {
          const targetAngle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
          let diff = (targetAngle - currentAngle) % 360;
          if (diff < -180) diff += 360;
          if (diff > 180) diff -= 360;
          currentAngle += diff * 0.25;
        }

        // Direct 60FPS DOM transform update
        spider.style.transform = `translate3d(${spiderPos.x}px, ${spiderPos.y}px, 0) translate(-50%, -50%) rotate(${currentAngle}deg) scale(${
          dist > 2.5 ? 1.08 : 1
        })`;

        // 3. Clear canvas & draw glowing red silk ribbons
        ctx.globalCompositeOperation = "source-over";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "lighter";

        huePhase += 0.015;
        const redHue = 350 + Math.sin(huePhase) * 12;
        ctx.strokeStyle = `hsla(${redHue}, 100%, 55%, 0.28)`;
        ctx.lineWidth = 1;

        for (let i = 0; i < lines.length; i++) {
          lines[i].update();
          lines[i].draw();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="hidden md:block fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* 1. Fluid Crimson Silk Ribbon Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* 2. Tiny Advanced Glowing Spider Companion */}
      <div
        ref={spiderRef}
        style={{ opacity: 0 }}
        className="absolute top-0 left-0 w-8 h-8 pointer-events-none will-change-transform flex items-center justify-center filter drop-shadow-[0_0_10px_rgba(255,0,51,0.95)] transition-opacity duration-300"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Spider Legs with Arachnid Joint Curves */}
          {/* Left Legs */}
          <path
            d="M45 45 C25 28, 15 18, 8 8 M48 50 C28 42, 10 40, 2 45 M48 55 C28 58, 12 68, 5 80 M45 60 C28 72, 18 85, 12 95"
            stroke="#ff1a40"
            strokeWidth="3.2"
            strokeLinecap="round"
            className="opacity-95"
          />
          {/* Right Legs */}
          <path
            d="M55 45 C75 28, 85 18, 92 8 M52 50 C72 42, 90 40, 98 45 M52 55 C72 58, 88 68, 95 80 M55 60 C72 72, 82 85, 88 95"
            stroke="#ff1a40"
            strokeWidth="3.2"
            strokeLinecap="round"
            className="opacity-95"
          />

          {/* Front Cephalothorax */}
          <circle
            cx="50"
            cy="44"
            r="8"
            fill="#09090e"
            stroke="#ff0033"
            strokeWidth="1.6"
          />

          {/* Glowing Red Eyes */}
          <circle cx="47" cy="39" r="1.8" fill="#ff0033" />
          <circle cx="53" cy="39" r="1.8" fill="#ff0033" />

          {/* Abdomen */}
          <ellipse
            cx="50"
            cy="63"
            rx="10"
            ry="14"
            fill="#050508"
            stroke="#ff0033"
            strokeWidth="1.8"
          />

          {/* Glowing Crimson Hourglass Mark */}
          <polygon
            points="50,56 46,62 54,62"
            fill="#ff0033"
          />
          <polygon
            points="50,68 46,62 54,62"
            fill="#ff0033"
          />
        </svg>
      </div>
    </div>
  );
}
