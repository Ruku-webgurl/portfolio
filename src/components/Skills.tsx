"use client";

import { useState } from "react";
import Image from "next/image";
import { GiSpiderWeb } from "react-icons/gi";
import SpiderGraphic from "@/components/ui/SpiderGraphic";
import {
  HiOutlineCode,
  HiOutlineServer,
  HiOutlineShieldCheck,
  HiOutlineTerminal,
} from "react-icons/hi";

interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "typesafety" | "tools";
  categoryLabel: string;
  icon: string;
  level: string;
}

const skillsData: SkillItem[] = [
  // FRONTEND
  {
    name: "HTML5",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: "/skill/html.png",
    level: "Core Markup",
  },
  {
    name: "CSS3",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: "/skill/css.png",
    level: "Styling & Responsive",
  },
  {
    name: "JavaScript",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: "/skill/js.png",
    level: "ES6+ Logic",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: "/skill/tailwindcss.png",
    level: "Utility-First UI",
  },
  {
    name: "React.js",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: "/skill/react.png",
    level: "Component Systems",
  },
  {
    name: "Next.js",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: "/skill/Next_js.png",
    level: "Full-Stack App Router",
  },

  // BACKEND
  {
    name: "Node.js",
    category: "backend",
    categoryLabel: "Backend",
    icon: "/skill/nodejs.jpg",
    level: "Event-Driven Runtime",
  },
  {
    name: "Express.js",
    category: "backend",
    categoryLabel: "Backend",
    icon: "/skill/Express%20Js.png",
    level: "RESTful Web APIs",
  },
  {
    name: "MongoDB",
    category: "backend",
    categoryLabel: "Backend",
    icon: "/skill/mongodb.png",
    level: "NoSQL Database",
  },
  {
    name: "Python",
    category: "backend",
    categoryLabel: "Backend",
    icon: "/skill/python.png",
    level: "Backend & Automation",
  },

  // PROGRAMMING & TYPE SAFETY
  {
    name: "TypeScript",
    category: "typesafety",
    categoryLabel: "Type Safety",
    icon: "/skill/TypeScript.png",
    level: "Strict Static Typing",
  },

  // TOOLS
  {
    name: "GitHub",
    category: "tools",
    categoryLabel: "Tools",
    icon: "/skill/github,png.jpg",
    level: "Version Control & CI/CD",
  },
];

const categories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend", icon: HiOutlineCode },
  { id: "backend", label: "Backend", icon: HiOutlineServer },
  { id: "typesafety", label: "Type Safety", icon: HiOutlineShieldCheck },
  { id: "tools", label: "Tools", icon: HiOutlineTerminal },
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const filteredSkills =
    activeFilter === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeFilter);

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#050508] overflow-hidden border-t border-red-500/10"
    >
      {/* 1. Atmospheric Spiderweb Background with Enhanced Mobile Brightness */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <Image
          src="/web.jpg"
          alt="Spiderweb Background"
          fill
          className="object-cover object-center opacity-70 sm:opacity-45 mix-blend-screen scale-105"
        />
        {/* Vignette Overlays tuned for mobile radiance */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/60 via-[#050508]/30 to-[#050508]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_25%,_#050508_85%)]" />

        {/* Ambient Crimson Glow Accents (Bright & Radiant on Mobile) */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[650px] h-[380px] sm:h-[650px] bg-red-600/25 sm:bg-red-600/15 rounded-full blur-[80px] sm:blur-[140px] pointer-events-none" />
      </div>

      {/* Crawling Spider (Radiant crimson glow, now visible on both mobile & desktop) */}
      <div className="absolute top-12 left-4 sm:top-1/3 sm:left-4 lg:left-8 xl:left-14 z-20 pointer-events-none select-none">
        <SpiderGraphic
          className="w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20"
          rotation={-25}
          glow={true}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Mastered{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-200 to-white">
              Skills &amp; Technologies
            </span>
          </h2>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`group relative px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 focus:outline-none flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? "text-white bg-gradient-to-r from-red-600 to-red-800 border border-red-500/50 shadow-[0_0_20px_rgba(255,0,51,0.4)]"
                    : "text-zinc-400 hover:text-white bg-[#08080d]/80 border border-red-500/20 hover:border-red-500/50"
                }`}
              >
                <span>{cat.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#ffffff]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Skills Grid (Optimized for Mobile Touch & Windows Hover) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
          {filteredSkills.map((skill) => {
            const isSelected = activeSkill === skill.name;
            return (
              <div
                key={skill.name}
                onClick={() => setActiveSkill(isSelected ? null : skill.name)}
                className={`group relative p-4 sm:p-5 rounded-2xl bg-[#08080d]/85 backdrop-blur-xl transition-all duration-300 flex flex-col items-center text-center cursor-pointer overflow-hidden touch-manipulation active:scale-95 ${
                  isSelected
                    ? "border-2 border-red-500 shadow-[0_0_30px_rgba(255,0,51,0.6)] -translate-y-2 bg-[#0e0914]"
                    : "border border-red-500/35 sm:border-red-500/20 hover:border-red-500/80 shadow-[0_10px_25px_rgba(0,0,0,0.7)] hover:shadow-[0_0_30px_rgba(255,0,51,0.4)] hover:-translate-y-2"
                }`}
              >
                {/* Corner Spiderweb Accent */}
                <div
                  className={`absolute top-2 right-2 transition-colors duration-300 text-lg ${
                    isSelected
                      ? "text-red-500/70"
                      : "text-red-500/30 sm:text-red-500/10 group-hover:text-red-500/50"
                  }`}
                >
                  <GiSpiderWeb />
                </div>

                {/* Glowing Silk Web Strand on Bottom of Card */}
                <div
                  className={`absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent transition-opacity duration-300 shadow-[0_0_12px_#ff0033] ${
                    isSelected
                      ? "opacity-100"
                      : "opacity-65 sm:opacity-0 group-hover:opacity-100 group-active:opacity-100"
                  }`}
                />

                {/* Icon Container with Glass Shield */}
                <div
                  className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl p-2.5 bg-black/80 flex items-center justify-center mb-3 transition-transform duration-300 ${
                    isSelected
                      ? "scale-110 border border-red-500/70 shadow-[0_0_15px_rgba(255,0,51,0.4)]"
                      : "border border-red-500/30 sm:border-red-500/20 group-hover:border-red-500/60 group-active:scale-110 group-hover:scale-110 shadow-[0_0_12px_rgba(255,0,51,0.2)]"
                  }`}
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(255,0,51,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(255,0,51,0.6)] transition-all"
                  />
                </div>

                {/* Skill Title */}
                <h3
                  className={`text-sm sm:text-base font-bold transition-colors mb-1 ${
                    isSelected ? "text-red-300" : "text-white group-hover:text-red-300"
                  }`}
                >
                  {skill.name}
                </h3>

                {/* Category Subtext */}
                <span
                  className={`text-[10px] sm:text-[11px] font-mono uppercase tracking-wider transition-colors ${
                    isSelected
                      ? "text-red-200"
                      : "text-zinc-400 group-hover:text-zinc-200"
                  }`}
                >
                  {skill.level}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
