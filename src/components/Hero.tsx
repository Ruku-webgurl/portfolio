"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HiArrowDown } from "react-icons/hi";
import { GiSpiderWeb } from "react-icons/gi";

const skills = [
  { name: "React" },
  { name: "Next.js" },
  { name: "Node.js" },
  { name: "TypeScript" },
  { name: "MongoDB" },
  { name: "Python" },
  { name: "Tailwind CSS" },
];

const roles = [
  "Full Stack Developer",
  "Next.js & React Specialist",
  "Backend & API Architect",
  "Creative Problem Solver",
];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [isCenterHovered, setIsCenterHovered] = useState(false);

  // Typewriter Typography for the Subtitle Role
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (typedRole.length < fullText.length) {
          setTypedRole(fullText.slice(0, typedRole.length + 1));
        } else {
          // Pause at full word before deleting
          setTimeout(() => setIsDeleting(true), 2400);
        }
      } else {
        if (typedRole.length > 0) {
          setTypedRole(fullText.slice(0, typedRole.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedRole, isDeleting, roleIndex]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsCenterHovered(false);
      }}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050508] pt-24 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* 1. BRIGHT SPIDERWEB BACKGROUND WITH CINEMATIC MOTION & 3D PARALLAX */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Dynamic Breathing, Drifting & Interactive Mouse Parallax */}
        <div
          className="relative w-full h-full animate-bg-hero-drift transition-transform duration-700 ease-out"
          style={{
            transform: isHovered
              ? `scale(1.06) translate(${(mousePos.x - 50) * -0.15}px, ${(mousePos.y - 50) * -0.15}px)`
              : undefined,
          }}
        >
          <Image
            src="/redspider-removebghero.jpg"
            alt="Spiderweb Background"
            fill
            priority
            className={`object-cover object-center transition-all duration-700 ${
              isCenterHovered
                ? "opacity-95 contrast-135 saturate-135 brightness-110"
                : "opacity-90 contrast-125 saturate-125"
            }`}
          />
        </div>

        {/* Central Core Radiance with Interactive Hover Color Shift & Diamond Flare */}
        <div
          className={`absolute top-1/2 left-1/2 w-[550px] sm:w-[800px] md:w-[950px] h-[550px] sm:h-[800px] md:h-[950px] rounded-full blur-[85px] transition-all duration-700 pointer-events-none ${
            isCenterHovered
              ? "bg-[radial-gradient(circle,_rgba(255,255,255,0.85)_0%,_rgba(255,30,85,0.7)_25%,_rgba(210,0,50,0.45)_50%,_transparent_75%)] scale-110 opacity-100"
              : "bg-[radial-gradient(circle,_rgba(255,0,51,0.5)_0%,_rgba(200,10,35,0.25)_40%,_transparent_75%)] animate-crimson-center opacity-85"
          }`}
        />

        {/* Interactive Mouse-Tracking Spiderweb Spotlight */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-500 mix-blend-screen ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: `radial-gradient(circle 380px at ${mousePos.x}% ${mousePos.y}%, rgba(255, 30, 85, 0.45) 0%, rgba(220, 0, 50, 0.18) 40%, transparent 75%)`,
          }}
        />

        {/* Lightweight Edge Vignette only (Keeps center and web fully bright) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/50 via-transparent to-[#050508]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_#050508_95%)]" />
      </div>

      {/* 2. HANGING SPIDER IN TOP-RIGHT CORNER WITH GLOWING SILK & MOTION */}
      <div className="absolute top-0 right-4 sm:right-10 md:right-16 lg:right-28 z-20 pointer-events-none select-none">
        {/* Glowing Silk Web Strand from top edge */}
        <div className="w-[1.5px] h-16 sm:h-24 md:h-32 bg-gradient-to-b from-red-600 via-red-500/80 to-red-400 mx-auto shadow-[0_0_12px_#ff0033]" />

        {/* Hanging Spider Container with Natural Pendulum & Bobbing Motion */}
        <div className="animate-spider-hang relative w-24 sm:w-36 md:w-44 lg:w-48 -mt-2">
          <Image
            src="/climb_spideyhero.jpg"
            alt="Hanging Black Widow Spider"
            width={200}
            height={340}
            priority
            className="w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(255,0,51,0.7)] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_92%)]"
          />
        </div>
      </div>

      {/* 3. MAIN HERO CONTENT WITH INTERACTIVE CENTER HOVER */}
      <div
        onMouseEnter={() => setIsCenterHovered(true)}
        onMouseLeave={() => setIsCenterHovered(false)}
        className="relative z-20 max-w-4xl mx-auto flex flex-col items-center text-center mt-6 transition-transform duration-500 px-6 sm:px-12 py-8 sm:py-10 rounded-3xl bg-[#050508]/75 backdrop-blur-md border border-red-500/25 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(255,0,51,0.18)]"
      >
        {/* Main Glowing Heading with High-Contrast Red Theme & Interactive Flare */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 drop-shadow-[0_0_40px_rgba(0,0,0,0.9)] cursor-default">
          Hi, I&apos;m{" "}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-red-500 drop-shadow-[0_0_35px_rgba(255,0,51,0.85)] group">
            Rukayya Khan
            {/* Interactive Glowing Web Thread Underline */}
            <span
              className={`absolute -bottom-1 left-0 right-0 h-[2px] transition-all duration-500 ${
                isCenterHovered
                  ? "bg-gradient-to-r from-white via-red-400 to-white shadow-[0_0_20px_#ffffff,0_0_35px_#ff0033] h-[3px]"
                  : "bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_14px_#ff0033]"
              }`}
            />
          </span>
        </h1>

        {/* Dynamic Animated Typewriter Role Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-200 max-w-2xl mb-8 flex items-center justify-center gap-2 drop-shadow-[0_0_20px_rgba(0,0,0,0.9)] min-h-[36px]">
          <span className="text-red-400 font-semibold">{typedRole}</span>
          <span className="inline-block w-[2.5px] sm:w-[3px] h-5 sm:h-6 bg-red-500 animate-pulse shadow-[0_0_8px_#ff0033]" />
          <span className="inline-block transform hover:rotate-12 transition-transform ml-1">
            🚀
          </span>
        </p>

        {/* Skill Pills (Clean, Translucent Glass Badges) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-2xl mb-10">
          {skills.map((skill) => {
            return (
              <div
                key={skill.name}
                className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#08080d]/85 backdrop-blur-md border border-red-500/30 hover:border-red-500/90 hover:bg-red-950/30 shadow-[0_4px_16px_rgba(0,0,0,0.6)] hover:shadow-[0_0_22px_rgba(255,0,51,0.5)] hover:scale-105 transition-all duration-300 cursor-default"
              >
                <span className="text-xs sm:text-sm font-medium text-zinc-200 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, "projects")}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white font-semibold text-sm sm:text-base tracking-wide shadow-[0_0_25px_rgba(255,0,51,0.5)] hover:shadow-[0_0_40px_rgba(255,0,51,0.85)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <GiSpiderWeb className="text-lg group-hover:rotate-90 transition-transform duration-500" />
            <span>View My Work</span>
          </a>
        </div>
      </div>

      {/* 4. Animated Downward Scroll Arrow */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <a
          href="#about"
          onClick={(e) => handleScrollTo(e, "about")}
          aria-label="Scroll to About section"
          className="text-zinc-300 hover:text-red-400 transition-colors p-2 rounded-full focus:outline-none animate-bounce"
        >
          <HiArrowDown className="text-xl sm:text-2xl drop-shadow-[0_0_12px_rgba(255,0,51,0.7)]" />
        </a>
      </div>
    </section>
  );
}
