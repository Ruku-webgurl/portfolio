"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Check if page is already loaded or set a smooth initial splash duration
    const timer = setTimeout(() => {
      setLoading(false);
      // Remove from DOM after fade-out transition completes
      setTimeout(() => {
        setHidden(true);
      }, 700);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050508] transition-opacity duration-700 ease-out ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden="true"
    >
      {/* Background radial crimson ambiance */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-red-600/10 blur-[120px] pointer-events-none animate-pulse" />

      {/* Center content container */}
      <div className="relative z-10 flex flex-col items-center select-none">
        {/* Complete R Spider Logo (No round circle, pure transparent cut) */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-6 flex items-center justify-center animate-pulse">
          <Image
            src="/logo-spider-r.webp"
            alt="DEV-RUKAYYA"
            width={128}
            height={128}
            priority
            className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(255,0,51,0.85)] drop-shadow-[0_0_50px_rgba(255,0,51,0.4)]"
          />
        </div>

        {/* Brand Text */}
        <div className="text-sm sm:text-base font-mono tracking-[0.35em] uppercase font-bold text-white mb-3 flex items-center gap-2">
          <span className="text-red-500">&lt;</span>
          <span>DEV-RUKAYYA</span>
          <span className="text-red-500">/&gt;</span>
        </div>

        {/* Glowing Red Silk Thread Loading Bar */}
        <div className="relative w-44 sm:w-52 h-[2px] bg-red-950/40 rounded-full overflow-hidden shadow-[0_0_10px_rgba(255,0,51,0.3)]">
          <div className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-shimmer" />
        </div>
      </div>
    </div>
  );
}
