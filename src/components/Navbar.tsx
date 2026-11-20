"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { GiSpiderWeb } from "react-icons/gi";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll detection for background glass effect & active section spying
  useEffect(() => {
    const handleScroll = () => {
      // Toggle compact/enhanced glass navbar when scrolled past 20px
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section spy
      const sections = ["home", "about", "skills", "projects", "pricing", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(targetId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-[#050508]/85 backdrop-blur-xl border-b border-red-500/15 shadow-[0_10px_35px_-10px_rgba(255,0,51,0.18)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo with Spiderweb Red Crystal Aesthetic */}
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-3 relative focus:outline-none"
            aria-label="Home"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-[1.5px] bg-gradient-to-tr from-red-600 via-red-950 to-red-500/30 shadow-[0_0_15px_rgba(255,0,51,0.3)] group-hover:shadow-[0_0_25px_rgba(255,0,51,0.6)] transition-all duration-300">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-black/90 flex items-center justify-center">
                <Image
                  src="/logo.webp"
                  alt="Portfolio Logo"
                  width={44}
                  height={44}
                  priority
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Glowing Accent Indicator */}
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase text-zinc-400 group-hover:text-red-400 transition-colors">
             
              Dev-Rukayya
            </span>
          </Link>

          {/* Desktop Navigation - Glassmorphic Pill */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#0a0a0f]/60 backdrop-blur-md border border-red-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-300 rounded-full group ${
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {/* Subtle Spiderweb Strand Glow on Hover or Active */}
                  <span className="relative z-10 flex items-center gap-1">
                    {item.name}
                  </span>

                  {/* Active Pill Glow */}
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600/25 via-red-500/15 to-red-600/25 border border-red-500/40 shadow-[0_0_15px_rgba(255,0,51,0.25)]" />
                  )}

                  {/* Hover Web-Strand Underline */}
                  {!isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent group-hover:w-3/4 transition-all duration-300" />
                  )}
                </a>
              );
            })}
          </nav>

        
          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative p-2.5 rounded-lg border border-red-500/20 bg-black/60 text-zinc-300 hover:text-white hover:border-red-500/50 hover:bg-red-950/20 focus:outline-none transition-all"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <HiOutlineX className="w-6 h-6 text-red-400" />
            ) : (
              <HiOutlineMenuAlt3 className="w-6 h-6 text-zinc-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`md:hidden fixed inset-x-4 top-20 transition-all duration-300 ease-out origin-top ${
          mobileMenuOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="p-5 rounded-2xl bg-[#08080c]/95 backdrop-blur-2xl border border-red-500/25 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(255,0,51,0.15)] flex flex-col gap-2">
          {/* Header indicator */}
          <div className="flex items-center justify-between pb-3 mb-1 border-b border-red-950/40 text-[10px] tracking-widest uppercase font-mono text-zinc-500">
            <span>Navigation Menu</span>
            <GiSpiderWeb className="text-red-500/60 text-base" />
          </div>

          {/* Mobile Navigation Links */}
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? "bg-red-600/20 text-white border border-red-500/40 shadow-[0_0_15px_rgba(255,0,51,0.2)]"
                    : "text-zinc-300 hover:bg-red-950/20 hover:text-white"
                }`}
              >
                <span>{item.name}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ff0033]" />
                )}
              </a>
            );
          })}

          {/* Mobile CTA */}
          <div className="pt-3 mt-1 border-t border-red-950/40">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(255,0,51,0.35)]"
            >
              <GiSpiderWeb className="text-base" />
              <span>Let&apos;s Connect</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
