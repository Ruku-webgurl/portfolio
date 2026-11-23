"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMongodb } from "react-icons/si";
import { HiArrowRight, HiOutlineMail } from "react-icons/hi";

const techStack = [
  { name: "React", icon: FaReact, color: "text-[#61dafb]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Node.js", icon: FaNodeJs, color: "text-[#68a063]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178c6]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47a248]" },
];

const roles = [
  "Full Stack Developer",
  "Next.js & React Specialist",
  "Backend & API Architect",
  "Software Engineer",
];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  // Typewriter Typography for the Subtitle Role
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("Full Stack Developer");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (typedRole.length < fullText.length) {
          setTypedRole(fullText.slice(0, typedRole.length + 1));
        } else {
          // Pause at full word before deleting
          setTimeout(() => setIsDeleting(true), 2800);
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
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-screen w-full flex items-center justify-start overflow-hidden bg-[#050508] pt-24 pb-16"
    >
      {/* 1. HERO BACKGROUND: Blood Moon Cosmic Spiderweb */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div
          className="relative w-full h-full transition-transform duration-700 ease-out"
          style={{
            transform: isHovered
              ? `scale(1.025) translate(${(mousePos.x - 50) * -0.08}px, ${(mousePos.y - 50) * -0.08}px)`
              : undefined,
          }}
        >
          <Image
            src="/hero-cosmic-bloodmoon.webp"
            alt="Cosmic Blood Moon Spiderweb Background"
            fill
            priority
            quality={100}
            className="object-cover object-[75%_center] lg:object-center brightness-105 contrast-115 saturate-110"
          />
        </div>

        {/* Ambient Mouse Radial Glow */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-700 mix-blend-screen ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: `radial-gradient(circle 420px at ${mousePos.x}% ${mousePos.y}%, rgba(255, 0, 51, 0.22) 0%, rgba(180, 0, 30, 0.08) 45%, transparent 75%)`,
          }}
        />

        {/* Smooth Vignette and Bottom Blend into Obsidian Black */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050508] via-[#050508]/60 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#050508]/60 to-transparent" />
      </div>

      {/* 2. HANGING SPIDER ON THE RIGHT SIDE WEB (Animated Pendulum) */}
      <div className="absolute top-0 right-4 sm:right-10 md:right-16 lg:right-24 xl:right-36 z-20 pointer-events-none select-none">
        {/* Seamless Silk Web Strand Extension for desktop viewports */}
        <div className="w-[1.5px] h-0 sm:h-4 md:h-8 lg:h-12 bg-gradient-to-b from-red-600 via-red-500 to-red-400 mx-auto shadow-[0_0_10px_#ff0033]" />

        {/* Hanging Spider Container with Natural Pendulum Swing from Top */}
        <div className="animate-spider-hang origin-top relative w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 -mt-[1px]">
          <Image
            src="/spider-hanging-hero.webp"
            alt="Hanging Crimson Cyber Spider"
            width={954}
            height={1024}
            priority
            className="w-full h-auto object-contain filter drop-shadow-[0_0_18px_rgba(255,0,51,0.85)] drop-shadow-[0_0_35px_rgba(255,0,51,0.4)]"
          />
        </div>
      </div>

      {/* 3. MAIN HERO CONTENT: Left Aligned to match reference */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full flex flex-col items-start text-left">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Kicker / Welcome Line with Horizontal Crimson Divider */}
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <span className="text-red-500 font-mono text-xs sm:text-sm tracking-[0.25em] font-semibold uppercase">
              WELCOME TO MY PORTFOLIO
            </span>
            <span className="w-12 sm:w-24 h-[1.5px] bg-gradient-to-r from-red-500 to-transparent shadow-[0_0_10px_#ff0033]" />
          </div>

          {/* Main Large Typography Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 sm:mb-5 leading-[1.08] cursor-default">
            Hi, I&apos;m <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-rose-500 drop-shadow-[0_0_35px_rgba(255,0,51,0.75)]">
              Rukayya
            </span>{" "}
            <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">
              Khan
            </span>
          </h1>

          {/* Subtitle / Role Tagline: < Full Stack Developer /> 🚀 */}
          <div className="flex items-center gap-2 text-base sm:text-xl md:text-2xl font-mono text-zinc-200 mb-6 sm:mb-8 font-medium min-h-[36px]">
            <span className="text-red-500 font-bold">&lt;</span>
            <span suppressHydrationWarning className="text-zinc-100">
              {typedRole}
            </span>
            <span className="inline-block w-[2.5px] h-5 sm:h-6 bg-red-500 animate-pulse shadow-[0_0_8px_#ff0033]" />
            <span className="text-red-500 font-bold">/&gt;</span>
            <span className="inline-block transform hover:rotate-12 transition-transform ml-1">
              🚀
            </span>
          </div>

          {/* Tech Stack Pills (React, Next.js, Node.js, TypeScript, MongoDB) */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-8 sm:mb-10">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#0a0a12]/80 backdrop-blur-md border border-zinc-800/80 hover:border-red-500/60 hover:bg-red-950/20 shadow-[0_4px_16px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,0,51,0.4)] hover:scale-105 transition-all duration-300 cursor-default"
              >
                <tech.icon
                  className={`text-base sm:text-lg ${tech.color} drop-shadow-[0_0_6px_currentColor]`}
                />
                <span className="text-xs sm:text-sm font-medium text-zinc-200 group-hover:text-white transition-colors duration-200">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex items-center gap-6 sm:gap-8">
            {/* View My Work Button */}
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, "projects")}
              className="group relative inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-red-600 via-red-600 to-red-700 text-white font-semibold text-sm sm:text-base tracking-wide shadow-[0_0_25px_rgba(255,0,51,0.65)] hover:shadow-[0_0_40px_rgba(255,0,51,0.95)] hover:scale-105 active:scale-95 border border-red-400/40 transition-all duration-300"
            >
              <span>View My Work</span>
              <HiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Contact Me Link with Glowing Red Underline */}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="group relative inline-flex items-center gap-2 text-zinc-200 hover:text-white font-medium text-sm sm:text-base py-1 transition-colors"
            >
              <span>Contact Me</span>
              <HiOutlineMail className="text-lg text-zinc-300 group-hover:text-red-400 transition-colors" />
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-red-500 shadow-[0_0_10px_#ff0033] group-hover:h-[2.5px] group-hover:shadow-[0_0_16px_#ff0033] transition-all" />
            </a>
          </div>
        </div>
      </div>

      {/* 4. MOUSE SCROLL DOWN INDICATOR (Bottom Center) */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <a
          href="#about"
          onClick={(e) => handleScrollTo(e, "about")}
          aria-label="Scroll down to About section"
          className="group flex flex-col items-center focus:outline-none"
        >
          <div className="w-5 h-9 rounded-full border-2 border-red-500/60 group-hover:border-red-400 p-1 flex justify-center shadow-[0_0_14px_rgba(255,0,51,0.45)] group-hover:shadow-[0_0_22px_rgba(255,0,51,0.8)] transition-all">
            <div className="w-1.5 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ff0033] animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
