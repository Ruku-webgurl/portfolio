"use client";

import { useState } from "react";
import { HiChevronDown, HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { GiSpiderWeb } from "react-icons/gi";
import SpiderGraphic from "@/components/ui/SpiderGraphic";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

const faqList: FAQItem[] = [
  {
    id: "turnaround",
    question: "What is your typical turnaround time for a project?",
    answer:
      "A standard landing page or high-converting frontend project typically takes 5 to 10 business days. For full-stack MVPs, e-commerce stores, or SaaS web applications with authentication and custom databases, development spans 2 to 4 weeks depending on the complexity of features and integrations.",
  },
  {
    id: "milestones",
    question: "How does your project development and payment process work?",
    answer:
      "Projects are structured around transparent milestone deliverables. Typically, we begin with a 50% upfront deposit to initiate architecture and design sprints, followed by 50% upon final testing, deployment, and code handover. For retainers, billing is handled at the start of each monthly sprint.",
  },
  {
    id: "stack",
    question: "What tech stack do you specialize in?",
    answer:
      "My core stack is built on Next.js, React, TypeScript, and Tailwind CSS on the frontend, paired with Node.js, Express, and MongoDB on the backend. I also have deep experience with REST APIs, cloud deployments (Vercel, Render, AWS), and payment gateways like Stripe.",
  },
  {
    id: "maintenance",
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Yes! Every custom project includes 14 to 30 days of complimentary post-launch bug fixing and warranty support. Beyond that, I offer flexible monthly retainers for ongoing feature additions, security patching, Core Web Vitals optimization, and server monitoring.",
  },
  {
    id: "existing-code",
    question: "Can you audit, refactor, or take over an existing codebase?",
    answer:
      "Absolutely. I regularly assist founders and teams in auditing legacy codebases, resolving performance bottlenecks, upgrading obsolete dependencies, or completing unfinished web platforms while maintaining clean architecture and type safety.",
  },
  {
    id: "communication",
    question: "How do we communicate throughout the project sprints?",
    answer:
      "We can communicate through your preferred channel—Slack, Discord, WhatsApp, or email—with scheduled weekly milestone check-ins and live staging previews so you can test features in real-time as they are coded.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative min-h-screen w-full py-28 px-4 sm:px-6 lg:px-8 bg-[#050508] overflow-hidden border-t border-red-500/10"
    >
      {/* Background Ambient Spiderweb Atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {/* Soft Left Crimson Bloom */}
        <div className="absolute top-1/3 -left-36 w-[550px] h-[550px] bg-red-600/10 rounded-full blur-[150px]" />
        {/* Soft Right Crimson Bloom */}
        <div className="absolute bottom-1/4 -right-36 w-[550px] h-[550px] bg-red-600/10 rounded-full blur-[150px]" />

        {/* Ambient Corner Spiderweb Accents */}
        <div className="absolute top-12 right-12 text-red-500/10 text-8xl">
          <GiSpiderWeb />
        </div>
        <div className="absolute bottom-12 left-12 text-red-500/10 text-8xl">
          <GiSpiderWeb />
        </div>
      </div>

      {/* Decorative Crawling Spider on Right Side */}
      <div className="hidden lg:block absolute right-4 xl:right-12 top-1/3 z-20 pointer-events-none select-none">
        <SpiderGraphic
          className="w-14 h-14 md:w-16 md:h-16"
          rotation={35}
          glow={true}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-500/30 bg-red-950/20 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(255,0,51,0.15)]">
            <HiOutlineQuestionMarkCircle className="text-red-400 text-sm" />
            <span className="text-xs font-mono uppercase tracking-widest text-red-200">
              Clear Answers
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-200 to-white">
              Questions
            </span>
          </h2>

        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-16">
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className={`group rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-xl ${
                  isOpen
                    ? "bg-[#090912]/95 border border-red-500/70 shadow-[0_0_25px_rgba(255,0,51,0.2)]"
                    : "bg-[#08080d]/80 border border-red-500/20 hover:border-red-500/50"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left cursor-pointer focus:outline-none transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <span
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-red-500 shadow-[0_0_10px_#ff0033]"
                          : "bg-red-500/40 group-hover:bg-red-400"
                      }`}
                    />
                    <span
                      className={`text-base sm:text-lg font-semibold tracking-wide transition-colors ${
                        isOpen
                          ? "text-white"
                          : "text-zinc-200 group-hover:text-white"
                      }`}
                    >
                      {item.question}
                    </span>
                  </div>

                  <span
                    className={`flex-shrink-0 p-2 rounded-full transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 text-red-400 bg-red-950/40"
                        : "text-zinc-400 group-hover:text-white"
                    }`}
                  >
                    <HiChevronDown className="text-lg" />
                  </span>
                </button>

                {/* Collapsible Answer Body */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 sm:px-8 pb-6 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-red-950/30">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
</div>
    </section>
  );
}
