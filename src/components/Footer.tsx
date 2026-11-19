"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowUp, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const services = [
    { name: "Web Development", href: "#projects" },
    { name: "App Development", href: "#projects" },
    { name: "AI Development", href: "#projects" },
    { name: "Software Development", href: "#projects" },
  ];

  const myProjects = [
    { name: "AuraSEO", href: "#projects" },
    { name: "RukStore", href: "#projects" },
    { name: "Animeverse", href: "#projects" },
    { name: "Coffiera", href: "#projects" },
    { name: "Nexus E-Commerce", href: "#projects" },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com", label: "GitHub" },
    { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaWhatsapp, href: "https://wa.me/919876543210", label: "WhatsApp" },
  ];

  return (
    <footer className="relative w-full bg-[#030306] text-zinc-400 overflow-hidden border-t border-red-500/15">
      {/* Laser-Red Web Thread Accent on Top Edge */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-red-500/70 to-transparent shadow-[0_0_12px_#ff0033]" />

      {/* Subtle Ambient Red Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-red-950/40">
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Logo & Name */}
            <Link
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-flex items-center gap-3.5 group focus:outline-none"
            >
              <div className="relative w-11 h-11 rounded-full p-[1.5px] bg-gradient-to-tr from-red-600 via-red-950 to-red-500/40 shadow-[0_0_15px_rgba(255,0,51,0.35)] group-hover:shadow-[0_0_25px_rgba(255,0,51,0.6)] transition-all duration-300">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center">
                  <Image
                    src="/logo.webp"
                    alt="Logo"
                    width={44}
                    height={44}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-red-300 transition-colors">
                  Rukayya Khan
                </span>
                <span className="block text-xs font-mono uppercase tracking-widest text-red-400">
                  Full Stack Developer
                </span>
              </div>
            </Link>

            <p className="text-zinc-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Crafting high-performance, conversion-engineered digital platforms, full-stack
              applications, and modern web experiences with clean code and modern design.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <HiOutlineLocationMarker className="text-red-400 text-base" />
                <span>Mumbai, India</span>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineMail className="text-red-400 text-base" />
                <a
                  href="mailto:rukayyakhan@example.com"
                  className="hover:text-white transition-colors"
                >
                  rukayyakhan@example.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-red-500 font-bold">
              SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-zinc-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: My Projects (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-red-500 font-bold">
              PROJECTS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              {myProjects.map((project) => (
                <li key={project.name}>
                  <a
                    href={project.href}
                    className="text-zinc-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Connect & Availability (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              Connect
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Have an interesting project or inquiry? Follow or message me across platforms.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-2.5 pt-1">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-9 h-9 rounded-full border border-red-500/25 bg-[#08080d] text-zinc-400 hover:text-white hover:border-red-500 hover:bg-red-950/40 hover:shadow-[0_0_12px_rgba(255,0,51,0.4)] flex items-center justify-center transition-all duration-300"
                >
                  <item.icon className="text-xs" />
                </a>
              ))}
            </div>

            {/* Status Pill */}
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/20 border border-red-500/30 text-[11px] font-mono text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for New Projects
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} Rukayya Khan. All rights reserved.
          </div>

          {/* Back To Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08080d] border border-red-500/30 text-zinc-400 hover:text-white hover:border-red-500 hover:shadow-[0_0_15px_rgba(255,0,51,0.3)] transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <HiArrowUp className="text-xs group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
