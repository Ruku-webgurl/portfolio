"use client";

import { useState } from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "3caedd53-3402-4320-848f-196634f5348d",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: formData.name,
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch {
      setErrorMessage("Network error occurred. Please try again or reach out directly via email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full py-28 px-4 sm:px-6 lg:px-8 bg-[#050508] overflow-hidden border-t border-red-500/10 flex flex-col justify-center"
    >
      {/* Subtle Ambient Crimson Glows (Clean, No Spiders) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <div className="absolute top-1/4 -left-36 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 -right-36 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-red-500 font-semibold block mb-3">
            CONTACT ME
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Get in Touch
          </h2>
        </div>

        {/* Two-Column Open Layout (Matching Reference) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Feel Free to Reach Out */}
          <div className="lg:col-span-5 space-y-7">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-red-400 mb-4 tracking-tight">
                Feel Free to Reach Out
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                I am excited to connect! Whether you have a project idea, need assistance,
                or just want to chat about tech, feel free to reach out.
              </p>
            </div>

            {/* Direct Contact Items */}
            <div className="space-y-4 pt-2">
              <a
                href="mailto:krukayya37@gmail.com"
                className="flex items-center gap-3.5 text-zinc-300 hover:text-white group transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-red-950/30 border border-red-500/20 text-red-400 flex items-center justify-center group-hover:border-red-500 group-hover:bg-red-900/40 transition-all flex-shrink-0">
                  <HiOutlineMail className="text-lg" />
                </div>
                <span className="text-sm sm:text-base tracking-wide font-mono">
                  krukayya37@gmail.com
                </span>
              </a>

             

              <a
                href="https://github.com/Ruku-webgurl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 text-zinc-300 hover:text-white group transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-red-950/30 border border-red-500/20 text-red-400 flex items-center justify-center group-hover:border-red-500 group-hover:bg-red-900/40 transition-all flex-shrink-0">
                  <FaGithub className="text-lg" />
                </div>
                <span className="text-sm sm:text-base tracking-wide font-mono">
                  @rukayyakhan
                </span>
              </a>

              <div className="flex items-center gap-3.5 text-zinc-400">
                <div className="w-9 h-9 rounded-full bg-red-950/30 border border-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0">
                  <HiOutlineLocationMarker className="text-lg" />
                </div>
                <span className="text-sm sm:text-base tracking-wide">
                  Mumbai, India
                </span>
              </div>
            </div>

            {/* Circular Social Icons Row */}
            <div className="flex items-center gap-3 pt-3">
              {[
                { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
                { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
               { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-10 h-10 rounded-full border border-red-500/30 bg-[#08080d] text-zinc-400 hover:text-white hover:border-red-500 hover:bg-red-950/40 hover:shadow-[0_0_15px_rgba(255,0,51,0.4)] flex items-center justify-center transition-all duration-300"
                >
                  <item.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Clean Minimalist Form */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="py-12 sm:py-16 text-center space-y-4 rounded-2xl bg-[#08080d]/50 border border-red-500/20 p-8">
                <div className="w-14 h-14 rounded-full bg-red-600/20 border border-red-500 text-red-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(255,0,51,0.4)]">
                  ✓
                </div>
                <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
                <p className="text-zinc-400 text-sm max-w-sm mx-auto">
                  Thank you for reaching out. I will get back to you as soon as possible!
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-lg bg-red-950/40 border border-red-500/40 text-white text-xs font-semibold hover:border-red-500 transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot Bot Protection */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-3.5 rounded-lg bg-red-950/60 border border-red-500/50 text-red-300 text-xs sm:text-sm">
                    {errorMessage}
                  </div>
                )}

                {/* Your Name */}
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-lg bg-[#08080d]/80 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-red-500 focus:shadow-[0_0_12px_rgba(255,0,51,0.25)] transition-all"
                  />
                </div>

                {/* Your Email */}
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-lg bg-[#08080d]/80 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-red-500 focus:shadow-[0_0_12px_rgba(255,0,51,0.25)] transition-all"
                  />
                </div>

                {/* Your Message */}
                <div>
                  <textarea
                    required
                    rows={6}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-lg bg-[#08080d]/80 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-red-500 focus:shadow-[0_0_12px_rgba(255,0,51,0.25)] transition-all resize-none"
                  />
                </div>

                {/* Full-Width Send Message Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white font-semibold text-sm tracking-wide shadow-[0_0_20px_rgba(255,0,51,0.35)] hover:shadow-[0_0_30px_rgba(255,0,51,0.6)] hover:brightness-110 active:scale-[0.99] transition-all duration-300 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
