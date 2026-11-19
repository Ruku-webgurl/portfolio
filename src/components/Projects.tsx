"use client";

import { useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { GiSpiderWeb } from "react-icons/gi";
// import SpiderGraphic from "@/components/ui/SpiderGraphic";

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "all" | "fullstack" | "frontend" | "ecommerce";
  categoryLabel: string;
  image: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projectsData: ProjectItem[] = [
  {
    id: "auraseo",
    title: "AuraSEO",
    subtitle: "SEO & Performance Analyzer",
    category: "fullstack",
    categoryLabel: "Full Stack",
    image: "/project/auraseo.png",
    description:
      "A next-generation SEO, AEO & Core Web Vitals audit platform. Crawls web architectures, captures multi-device diagnostics, and calculates comprehensive site health scores.",
    tags: ["React", "Node.js", "Lighthouse", "Puppeter", "Tanstack", "Tailwind-css"],
    liveUrl: "https://auraseo.onrender.com",

  },
  {
    id: "rukstore",
    title: "RukStore",
    subtitle: "Modern E-Commerce Store",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    image: "/project/rukstore.png",
    description:
      "A full-stack, conversion-focused online retail store featuring dynamic product search, category filtering, persistent cart state, and seamless checkout architecture.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Stripe"],
    liveUrl: "https://mern-ruku-store-i31i.vercel.app/",

  },
  {
    id: "animeverse",
    title: "Animeverse",
    subtitle: "Anime Discovery & Streaming UI",
    category: "frontend",
    categoryLabel: "Frontend",
    image: "/project/animeverse.png",
    description:
      "An immersive anime portal featuring rich anime directory exploration, character spotlights, seasonal release calendars, and a fast, responsive streaming UI.",
    tags: ["React", "Typescript", "Tailwindcss", "Framer Motion"],
    liveUrl: "https://anime-verse-arbi.vercel.app/",

  },
  {
    id: "coffiera",
    title: "Coffiera",
    subtitle: "Artisanal Coffee Café Web App",
    category: "frontend",
    categoryLabel: "Frontend",
    image: "/project/coffiera.png",
    description:
      "A warm, atmospheric artisanal café web app with interactive seasonal beverage menus, online ordering workflows, and mobile-first responsive interactions.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Responsive Design"],
    liveUrl: "https://coffiera.vercel.app/",

  },
  {
    id: "ecommerce",
    title: "Nexus E-Commerce",
    subtitle: "Multi-Category Retail Platform",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    image: "/project/ecommerce.png",
    description:
      "A modern, responsive e-commerce application engineered for rapid catalog browsing, multi-category cart management, and seamless mobile purchasing experience.",
    tags: ["Html", " Tailwind css", "Javascript"],
    liveUrl: "https://e-commerce-website-sigma-orcin.vercel.app/",

  },
];

const filterTabs = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "ecommerce", label: "E-Commerce" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full py-28 px-4 sm:px-6 lg:px-8 bg-[#050508] overflow-hidden border-t border-red-500/10"
    >
      {/* Background Ambient Spiderweb Atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {/* Glowing Crimson Spider & Laser Web Backdrop */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-screen scale-100 sm:scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url('/projectsbg.jpg')` }}
        />
        {/* Ambient Overlay Gradients to protect card readability and provide smooth transitions */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-transparent to-[#050508]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#050508_85%)]" />

        {/* Soft Left Crimson Bloom */}
        <div className="absolute top-1/4 -left-36 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[150px]" />
        {/* Soft Right Crimson Bloom */}
        <div className="absolute bottom-1/3 -right-36 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[150px]" />
      </div>

      {/* Hanging Spidey on Left Side with Glowing Silk Strand & Pendulum Motion */}
      <div className="absolute top-0 left-4 sm:left-8 md:left-14 lg:left-24 z-30 pointer-events-none select-none">
        {/* Glowing Silk Web Strand from top edge */}
        <div className="w-[1.5px] h-20 sm:h-28 md:h-36 bg-gradient-to-b from-red-600 via-red-500/80 to-red-400 mx-auto shadow-[0_0_15px_#ff0033]" />

        {/* Ambient Crimson Glow behind Spider for Extra Brightness */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-40 h-40 bg-red-600/40 rounded-full blur-2xl pointer-events-none" />

        {/* Hanging Spider Container with Natural Pendulum & Bobbing Motion */}
        <div className="animate-spider-hang relative w-24 sm:w-32 md:w-40 lg:w-48 -mt-2">
          <Image
            src="/climb_spideyhero.jpg"
            alt="Hanging Black Widow Spider"
            width={200}
            height={340}
            priority
            className="w-full h-auto object-contain brightness-125 contrast-125 saturate-125 drop-shadow-[0_15px_35px_rgba(255,0,51,0.95)] drop-shadow-[0_0_25px_rgba(255,30,85,0.75)] [mask-image:radial-gradient(ellipse_at_center,black_65%,transparent_92%)]"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-500/30 bg-red-950/20 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(255,0,51,0.15)]">
            <GiSpiderWeb className="text-red-400 text-sm" />
            <span className="text-xs font-mono uppercase tracking-widest text-red-200">
              Spidey Projects
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-2">
            Recent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-200 to-white">
              Projects &amp; Case Studies
            </span>
          </h2>


        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`group relative px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 focus:outline-none flex items-center gap-1.5 cursor-pointer ${isActive
                  ? "text-white bg-gradient-to-r from-red-600 to-red-800 border border-red-500/50 shadow-[0_0_20px_rgba(255,0,51,0.4)]"
                  : "text-zinc-400 hover:text-white bg-[#08080d]/80 border border-red-500/20 hover:border-red-500/50"
                  }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#ffffff]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Projects Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col rounded-3xl bg-[#08080d]/85 backdrop-blur-xl border border-red-500/20 hover:border-red-500/70 shadow-[0_20px_45px_rgba(0,0,0,0.7)] hover:shadow-[0_0_35px_rgba(255,0,51,0.3)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Corner Spiderweb Accent on Hover */}
              <div className="absolute top-3 right-3 z-20 text-red-500/20 group-hover:text-red-500/60 transition-colors duration-300 text-xl pointer-events-none">
                <GiSpiderWeb />
              </div>

              {/* Glowing Silk Web Strand on Bottom of Card */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_#ff0033]" />

              {/* Project Screenshot Showcase */}
              <div className="relative w-full h-48 sm:h-56 bg-black/60 overflow-hidden border-b border-red-500/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={640}
                  height={380}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080d] via-transparent to-transparent opacity-60" />

                {/* Category Badge Pill on top-left of image */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider text-red-200 bg-red-950/80 border border-red-500/30 backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                    {project.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Card Body & Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Subtitle */}
                  <div className="text-xs font-mono uppercase tracking-wider text-red-400 mb-1">
                    {project.subtitle}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-300 transition-colors mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-medium text-zinc-300 bg-black/50 border border-red-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-red-950/40">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white font-semibold text-xs tracking-wide shadow-[0_0_15px_rgba(255,0,51,0.3)] hover:shadow-[0_0_25px_rgba(255,0,51,0.6)] transition-all duration-300"
                      >
                        <span>Live Demo</span>
                        <HiOutlineExternalLink className="text-sm" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub Source`}
                        className="p-2.5 rounded-xl bg-black/60 border border-red-500/30 text-zinc-400 hover:text-white hover:border-red-500 hover:bg-red-950/30 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
                      >
                        <FaGithub className="text-base" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
