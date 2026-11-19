import React from "react";

interface SpiderGraphicProps {
  className?: string;
  glow?: boolean;
  rotation?: number;
}

export default function SpiderGraphic({
  className = "w-16 h-16",
  glow = true,
  rotation = 0,
}: SpiderGraphicProps) {
  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`relative inline-block transition-transform duration-500 ease-out ${
        glow
          ? "filter drop-shadow-[0_0_15px_rgba(255,0,51,0.95)] drop-shadow-[0_0_30px_rgba(255,26,64,0.6)] brightness-125"
          : ""
      } ${className}`}
    >
      {/* Subtle back ambient glow spot for crisp brightness */}
      <div className="absolute inset-0 -m-2 bg-red-600/30 rounded-full blur-lg pointer-events-none -z-10" />

      <svg
        viewBox="0 0 100 100"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Glow filter definition for SVG lines */}
        <defs>
          <filter id="spiderGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#ff0033" floodOpacity="0.9" />
          </filter>
        </defs>

        {/* Spider Legs with Arachnid Joint Curves */}
        {/* Left Legs */}
        <path
          d="M45 45 C25 28, 15 18, 8 8 M48 50 C28 42, 10 40, 2 45 M48 55 C28 58, 12 68, 5 80 M45 60 C28 72, 18 85, 12 95"
          stroke="#ff1a40"
          strokeWidth="3.2"
          strokeLinecap="round"
          filter="url(#spiderGlow)"
        />
        {/* Right Legs */}
        <path
          d="M55 45 C75 28, 85 18, 92 8 M52 50 C72 42, 90 40, 98 45 M52 55 C72 58, 88 68, 95 80 M55 60 C72 72, 82 85, 88 95"
          stroke="#ff1a40"
          strokeWidth="3.2"
          strokeLinecap="round"
          filter="url(#spiderGlow)"
        />

        {/* Front Cephalothorax */}
        <circle
          cx="50"
          cy="44"
          r="8"
          fill="#0a0a10"
          stroke="#ff1a40"
          strokeWidth="1.8"
        />

        {/* Glowing Red Eyes with extra radiant bloom */}
        <circle
          cx="47"
          cy="39"
          r="2.2"
          fill="#ff0033"
          className="filter drop-shadow-[0_0_6px_#ff0033]"
        />
        <circle
          cx="53"
          cy="39"
          r="2.2"
          fill="#ff0033"
          className="filter drop-shadow-[0_0_6px_#ff0033]"
        />

        {/* Abdomen */}
        <ellipse
          cx="50"
          cy="63"
          rx="10"
          ry="14"
          fill="#050508"
          stroke="#ff1a40"
          strokeWidth="2"
        />

        {/* Glowing Crimson Hourglass Mark */}
        <polygon
          points="50,56 46,62 54,62"
          fill="#ff0033"
          className="filter drop-shadow-[0_0_8px_#ff0033]"
        />
        <polygon
          points="50,68 46,62 54,62"
          fill="#ff0033"
          className="filter drop-shadow-[0_0_8px_#ff0033]"
        />
      </svg>
    </div>
  );
}
