"use client";

import { useState } from "react";
import { HiCheck, HiOutlineSparkles, HiArrowRight } from "react-icons/hi";
import { GiSpiderWeb } from "react-icons/gi";
// import SpiderGraphic from "@/components/ui/SpiderGraphic";

interface PricingTier {
  id: string;
  name: string;
  subtitle: string;
  popular?: boolean;
  projectPrice: string;
  projectNote: string;
  retainerPrice: string;
  retainerNote: string;
  description: string;
  features: string[];
  ctaText: string;
  badge?: string;
}

const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter Launchpad",
    subtitle: "Frontend & Landing Page",
    projectPrice: "$499",
    projectNote: "Starts at • Fixed project estimate",
    retainerPrice: "$799",
    retainerNote: "Starts at • /month (15-20 hrs maintenance)",
    description:
      "Ideal for founders, creators, and small businesses needing a lightning-fast, high-converting web presence.",
    features: [
      "Modern Next.js & Tailwind CSS Architecture",
      "High-Converting Responsive Mobile Design",
      "SEO & Core Web Vitals Optimization",
      "Interactive Micro-Interactions & Animations",
      "Contact Form & Social Integrations",
      "14 Days Post-Launch Warranty & Support",
    ],
    ctaText: "Request Starter Quote",
  },
  {
    id: "fullstack",
    name: "Full Stack MVP",
    subtitle: "Web App & E-Commerce",
    popular: true,
    badge: "Most Popular",
    projectPrice: "$1,299",
    projectNote: "Starts at • Complete MVP scope",
    retainerPrice: "$1,899",
    retainerNote: "Starts at • /month (35-40 hrs dedicated dev)",
    description:
      "Comprehensive full-stack web applications, SaaS platforms, and custom online storefronts engineered to scale.",
    features: [
      "Full Stack App (Next.js, Node.js, MongoDB)",
      "Secure User Authentication & Session Handling",
      "Custom RESTful APIs & Database Modeling",
      "Payment Gateway Integration (Stripe / Razorpay)",
      "Admin Dashboard & Data Management Tools",
      "Production Cloud Deployment (Vercel / AWS)",
      "30 Days Priority Technical Support",
    ],
    ctaText: "Request MVP Estimate",
  },
  {
    id: "enterprise",
    name: "Custom Enterprise",
    subtitle: "Dedicated Architecture & Scale",
    projectPrice: "$2,499",
    projectNote: "Starts at • Tailored project roadmap",
    retainerPrice: "$3,499",
    retainerNote: "Starts at • /month (Dedicated capacity)",
    description:
      "Tailored end-to-end engineering for high-traffic platforms, multi-tenant SaaS, and continuous development.",
    features: [
      "Custom Scalable Full-Stack Architecture",
      "Database Indexing, Caching & Performance Tuning",
      "Automated CI/CD Deployment Pipelines",
      "Legacy Code Refactoring & Migrations",
      "Direct Slack / WhatsApp Priority Channel",
      "Weekly Sprint Progress & Code Reviews",
      "24/7 Critical Bug Fixes & Architecture Consulting",
    ],
    ctaText: "Request Custom Quote",
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"project" | "retainer">("project");

  return (
    <section
      id="pricing"
      className="relative min-h-screen w-full py-28 px-4 sm:px-6 lg:px-8 bg-[#050508] overflow-hidden border-t border-red-500/10"
    >
      {/* Background Ambient Spiderweb Atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {/* Soft Left Crimson Bloom */}
        <div className="absolute top-1/4 -left-36 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px]" />
        {/* Soft Right Crimson Bloom */}
        <div className="absolute bottom-1/3 -right-36 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px]" />

        {/* Ambient Corner Spiderweb Accents */}
        <div className="absolute top-12 left-10 text-red-500/10 text-8xl">
          <GiSpiderWeb />
        </div>
        <div className="absolute bottom-12 right-10 text-red-500/10 text-8xl">
          <GiSpiderWeb />
        </div>
      </div>

   

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-500/30 bg-red-950/20 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(255,0,51,0.15)]">
            <GiSpiderWeb className="text-red-400 text-sm" />
            <span className="text-xs font-mono uppercase tracking-widest text-red-200">
              Pricing &amp; Investment
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            Transparent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-200 to-white">
              Tiers &amp; Estimates
            </span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            Clear, predictable baseline estimates for full-stack engineering, custom UI builds,
            and dedicated development retainers.
          </p>

          {/* Interactive Billing Toggle (Project vs Retainer) */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-[#08080d]/90 border border-red-500/30 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.6)]">
            <button
              type="button"
              onClick={() => setBillingCycle("project")}
              className={`px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 cursor-pointer ${
                billingCycle === "project"
                  ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-[0_0_18px_rgba(255,0,51,0.4)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Fixed Project Scope
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("retainer")}
              className={`px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                billingCycle === "retainer"
                  ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-[0_0_18px_rgba(255,0,51,0.4)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <span>Monthly Retainer</span>
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/40">
                Ongoing
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {pricingTiers.map((tier) => {
            const price =
              billingCycle === "project" ? tier.projectPrice : tier.retainerPrice;
            const note =
              billingCycle === "project" ? tier.projectNote : tier.retainerNote;

            return (
              <div
                key={tier.id}
                className={`group relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 transition-all duration-500 ${
                  tier.popular
                    ? "bg-[#090912]/95 border-2 border-red-500/80 shadow-[0_0_35px_rgba(255,0,51,0.25)] md:-translate-y-3"
                    : "bg-[#08080d]/80 border border-red-500/20 hover:border-red-500/50 hover:shadow-[0_0_25px_rgba(255,0,51,0.15)]"
                } backdrop-blur-xl`}
              >
                {/* Popular Badge on Top for Middle Card */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-800 border border-red-400/50 shadow-[0_0_15px_rgba(255,0,51,0.5)]">
                      <HiOutlineSparkles className="text-xs" />
                      {tier.badge}
                    </span>
                  </div>
                )}

                {/* Card Header & Price */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-200 transition-colors">
                      {tier.name}
                    </h3>
                  </div>

                  <p className="text-xs font-mono uppercase tracking-wider text-red-400 mb-4">
                    {tier.subtitle}
                  </p>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {tier.description}
                  </p>

                  {/* Price Block */}
                  <div className="pb-6 mb-6 border-b border-red-950/40">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                        {price}
                      </span>
                      {billingCycle === "retainer" && (
                        <span className="text-xs sm:text-sm text-zinc-400 font-mono">
                          /month
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400 mt-1.5">
                      {note}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                      Included Deliverables:
                    </div>
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <span className="mt-0.5 flex-shrink-0 text-red-400">
                          <HiCheck className="text-base" />
                        </span>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call To Action Button */}
                <div className="pt-4 border-t border-red-950/40">
                  <a
                    href="#contact"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 cursor-pointer ${
                      tier.popular
                        ? "bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white shadow-[0_0_20px_rgba(255,0,51,0.35)] hover:shadow-[0_0_30px_rgba(255,0,51,0.6)] hover:scale-[1.02]"
                        : "bg-black/60 border border-red-500/30 text-zinc-300 hover:text-white hover:border-red-500 hover:bg-red-950/30"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <HiArrowRight className="text-sm" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
}
