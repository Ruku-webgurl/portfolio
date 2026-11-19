"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedinIn,
  FaDiscord,
  FaInstagram,
  FaMapMarkerAlt,
  FaCoffee,
} from "react-icons/fa";
import { HiOutlineArrowRight, HiOutlineDownload } from "react-icons/hi";
import { GiSpiderWeb } from "react-icons/gi";



const dynamicRoles = [
  "Full Stack Developer",
  "Next.js & React Specialist",
  "API & Backend Engineer",
  "UI / UX Web Architect",
];

export default function About() {
  // Dynamic Typewriter Typography Effect
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = dynamicRoles[roleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        } else {
          // Pause at full word before deleting
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % dynamicRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

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
      id="about"
      className="relative min-h-screen w-full py-28 px-4 sm:px-6 lg:px-8 bg-[#050508] overflow-hidden border-t border-red-500/10 flex items-center justify-center"
    >
      {/* Background Ambient Spider Atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {/* Soft Left Crimson Bloom */}
        <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] bg-red-600/10 rounded-full blur-[140px]" />
        {/* Soft Right Crimson Bloom */}
        <div className="absolute bottom-1/4 -right-32 w-[550px] h-[550px] bg-red-600/10 rounded-full blur-[150px]" />

        {/* Decorative Spiderweb SVGs */}
        <div className="absolute top-10 right-10 text-red-500/10 text-8xl">
          <GiSpiderWeb />
        </div>
        <div className="absolute bottom-10 left-10 text-red-500/10 text-8xl">
          <GiSpiderWeb />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Open Editorial Layout: NO BOXES, Clean Fluid Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT COLUMN: Developer Illustration Floating Freely */}
          <div className="lg:col-span-5 flex justify-center items-center relative order-2 lg:order-1">
            {/* Radiant Ambient Crimson Aura */}
            <div className="absolute w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] bg-red-600/20 rounded-full blur-[90px] pointer-events-none" />

            {/* Illustration with Floating Animation */}
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] animate-float-slow">
              <Image
                src="/spiderpfp.png"
                alt="Rukayya Khan - Developer Illustration"
                width={600}
                height={600}
                priority
                className="w-full h-auto object-contain filter drop-shadow-[0_15px_30px_rgba(255,0,51,0.4)]"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Clean Typography & Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-1 lg:order-2">
            {/* 1. Status Indicator (No Box) */}
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-400 mb-4">
             
              <span className="uppercase text-zinc-300">
                Available for freelance work
              </span>
            </div>

            {/* 2. Bold Main Title */}
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-2 drop-shadow-[0_0_40px_rgba(0,0,0,0.9)]">
              Hi, I&apos;m{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-red-500">
                Rukayya Khan
              </span>
            </h2>

            {/* 3. Dynamic Animated Typewriter Role */}
            <div className="flex items-center gap-1.5 text-2xl sm:text-3xl md:text-4xl font-bold text-red-400 mb-6 min-h-[44px]">
              <span>{displayedText}</span>
              <span className="inline-block w-[3px] h-7 sm:h-9 bg-red-500 animate-pulse shadow-[0_0_10px_#ff0033]" />
            </div>

            {/* 4. Bio Paragraph */}
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
              I create beautiful, functional, and user-centered digital
              experiences. With 2+ years of experience in web development, I
              bring ideas to life through clean code, scalable architecture,
              and thoughtful design.
            </p>

            {/* 5. Clean Meta Details (No Boxes, Pure Typography & Icons) */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-300 font-medium mb-8">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500 text-sm" />
                <span>Based in Mumbai, India</span>
              </div>

              <div className="flex items-center gap-2">
                <FaCoffee className="text-red-400 text-sm" />
                <span>Available Now</span>
              </div>
            </div>

            {/* 6. Action Buttons: Hire Me & Download CV */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {/* Hire Me Button */}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white font-semibold text-sm tracking-wide shadow-[0_0_25px_rgba(255,0,51,0.5)] hover:shadow-[0_0_40px_rgba(255,0,51,0.85)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Hire Me</span>
                <HiOutlineArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Download CV Button */}
              <a
                href="/resume.pdf"
                download="Rukayya_Khan_Resume.pdf"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-red-500/40 text-zinc-200 hover:text-white hover:border-red-500 hover:bg-red-950/20 font-medium text-sm tracking-wide transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.6)] hover:shadow-[0_0_20px_rgba(255,0,51,0.3)]"
              >
                <HiOutlineDownload className="text-base text-red-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* 7. Subtle Horizontal Divider */}
            <div className="w-full max-w-xl h-[1px] bg-gradient-to-r from-red-500/40 via-red-500/10 to-transparent mb-6" />

            {/* 8. Follow Me Socials Row */}
            <div className="flex items-center gap-4">
              <span className="text-xs sm:text-sm font-medium text-zinc-400">
                Follow me:
              </span>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-zinc-400 hover:text-white transition-colors duration-300 hover:scale-125 transform"
                >
                  <FaGithub className="text-lg" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-zinc-400 hover:text-[#0077b5] transition-colors duration-300 hover:scale-125 transform"
                >
                  <FaLinkedinIn className="text-lg" />
                </a>

                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord"
                  className="text-zinc-400 hover:text-[#5865F2] transition-colors duration-300 hover:scale-125 transform"
                >
                  <FaDiscord className="text-lg" />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-zinc-400 hover:text-[#E4405F] transition-colors duration-300 hover:scale-125 transform"
                >
                  <FaInstagram className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
