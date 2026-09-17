"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Mail, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, MediumIcon, WhatsappIcon } from "@/components/Icons";
import confetti from "canvas-confetti";

export default function Hero() {
  const handleDownloadResume = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.5 },
      colors: ["#FFCCD7", "#FFB3C3", "#FF85A2", "#FB5B86"],
    });
    const link = document.createElement("a");
    link.href = "/ruhini-udara.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.download = "Ruhini-Udara-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero-editorial-section">
      <div className="page-container">
        <div className="hero-editorial-grid">
          
          {/* Left Column: Typography & CTAs */}
          <div className="hero-editorial-left">
            

            {/* Greeting */}
            <div className="hero-greeting-text">Hello, I&apos;m</div>

            {/* Medium-style Editorial Serif Name */}
            <h1 className="hero-serif-name">
              Ruhini<br />
              Udara.
            </h1>

            {/* Her Bio (Replacing the placeholder) */}
            <p className="hero-editorial-desc">
              Full-stack software developer specializing in{" "}
              <strong>Next.js</strong> and <strong>Spring Boot</strong>.
              Passionate about engineering reliable enterprise applications with clean architecture and modern UX.
            </p>

            {/* Primary Action Button */}
            <div>
              <a href="#projects" className="btn-editorial-primary">
                <span>Explore My Work</span>
                <ArrowUpRight size={18} />
              </a>
            </div>

            {/* Secondary Buttons Row */}
            <div className="hero-actions-row">
              <a href="#contact" className="btn-editorial-secondary">
                <span>Let&apos;s Connect</span>
                <Mail size={16} />
              </a>

              <button onClick={handleDownloadResume} className="btn-editorial-secondary">
                <span>Download CV</span>
                <FileDown size={16} />
              </button>
            </div>

            {/* Social Icons Row */}
            <div className="hero-social-row">
              <a
                href="https://github.com/Ruhini-Udara"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill-btn"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/ruhini-udara-1215b22b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill-btn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href="https://medium.com/@ruhiniudara"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill-btn"
                aria-label="Medium Profile & Articles"
                title="Medium Profile & Articles"
              >
                <MediumIcon className="w-5 h-5" />
              </a>

              <a
                href="mailto:ruhiniudara2@gmail.com"
                className="social-pill-btn"
                aria-label="Send Email"
                title="Send Email"
              >
                <Mail size={20} strokeWidth={2} />
              </a>

              <a
                href="https://wa.me/94704123131"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill-btn"
                aria-label="WhatsApp"
                title="Chat on WhatsApp"
              >
                <WhatsappIcon className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Photo Arch Frame with Tightly Framed Twinkling Stars */}
          <div className="hero-editorial-right">
            
            <div className="hero-photo-wrapper">
              
              {/* Soft Ambient Glow Halo */}
              <div className="hero-photo-glow" />

              {/* Organic Asymmetrical Celestial Constellation */}
              {/* Top-Right Natural Cluster: 1 focal sparkle + 2 micro companions */}
              <div className="hero-star-pin star-cluster-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 0 C12 6.6 6.6 12 0 12 C6.6 12 12 17.4 12 24 C12 17.4 17.4 12 24 12 C17.4 12 12 6.6 12 0 Z"
                    fill="url(#starGradPink)"
                  />
                  <defs>
                    <linearGradient id="starGradPink" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--hero-star-stop1)" />
                      <stop offset="50%" stopColor="var(--hero-star-stop2)" />
                      <stop offset="100%" stopColor="var(--hero-star-stop3)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="hero-star-pin star-cluster-mini-1">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 0 C12 6.6 6.6 12 0 12 C6.6 12 12 17.4 12 24 C12 17.4 17.4 12 24 12 C17.4 12 12 6.6 12 0 Z"
                    fill="var(--hero-star-fill-1)"
                  />
                </svg>
              </div>

              <div className="hero-star-pin star-cluster-mini-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 0 C12 6.6 6.6 12 0 12 C6.6 12 12 17.4 12 24 C12 17.4 17.4 12 24 12 C17.4 12 12 6.6 12 0 Z"
                    fill="var(--hero-star-fill-2)"
                  />
                </svg>
              </div>

              {/* Solitary Mid-Left Accent Sparkle (alone, no right counterpart) */}
              <div className="hero-star-pin star-accent-left">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 0 C12 6.6 6.6 12 0 12 C6.6 12 12 17.4 12 24 C12 17.4 17.4 12 24 12 C17.4 12 12 6.6 12 0 Z"
                    fill="url(#starGradPurple)"
                  />
                  <defs>
                    <linearGradient id="starGradPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--hero-star-p-stop1)" />
                      <stop offset="60%" stopColor="var(--hero-star-p-stop2)" />
                      <stop offset="100%" stopColor="var(--hero-star-p-stop3)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Solitary Lower-Right Accent Sparkle (alone, no left counterpart) */}
              <div className="hero-star-pin star-accent-lower-right">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 0 C12 6.6 6.6 12 0 12 C6.6 12 12 17.4 12 24 C12 17.4 17.4 12 24 12 C17.4 12 12 6.6 12 0 Z"
                    fill="var(--hero-star-fill-3)"
                  />
                </svg>
              </div>

              {/* Subtle organic stardust specks */}
              <div className="hero-stardust speck-1" />
              <div className="hero-stardust speck-2" />
              <div className="hero-stardust speck-3" />

              {/* Photo Arch Frame with Cutout Portrait & Radiant Backdrop */}
              <div className="hero-arch-container">
                <div className="hero-arch-backdrop" />
                <Image
                  src="/profile_cutout.png"
                  alt="Ruhini Udara"
                  width={340}
                  height={460}
                  priority
                  className="hero-arch-image"
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
