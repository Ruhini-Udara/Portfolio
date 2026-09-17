"use client";

import React, { useState } from "react";
import {
  Check,
  Copy,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, MediumIcon } from "@/components/Icons";
import confetti from "canvas-confetti";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const emailAddress = "ruhiniudara2@gmail.com";
  const phoneNumber = "+94 70 412 3131";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#FFCCD7", "#FFB3C3", "#FF85A2", "#FB5B86"],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="page-container">

        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">
            Let&apos;s Build Something <span className="gradient-title">Great Together</span>
          </h2>
          <p className="section-subtitle">
            I am actively seeking a Software Engineer Internship. Feel free to reach out directly through any channel below!
          </p>
        </div>

        {/* 3 Balanced, Equal-Sized Contact Boxes */}
        <div className="contact-grid-3">

          {/* Box 1: Direct Email */}
          <div className="cute-card contact-card-box">
            <div className="contact-icon-circle">
              <Mail size={22} style={{ color: "var(--pink-primary)" }} />
            </div>
            <div className="contact-card-content">
              <span className="contact-card-tag">Direct Email</span>
              <h3 className="contact-card-val">
                <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
              </h3>
              <p className="contact-card-sub">Best for internship inquiries &amp; opportunities</p>
            </div>
            <button
              onClick={handleCopyEmail}
              className="btn-cute-secondary contact-action-btn"
            >
              {copied ? (
                <>
                  <Check size={14} style={{ color: "#10B981" }} />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Box 2: Mobile / WhatsApp */}
          <div className="cute-card contact-card-box">
            <div className="contact-icon-circle">
              <Phone size={22} style={{ color: "var(--pink-primary)" }} />
            </div>
            <div className="contact-card-content">
              <span className="contact-card-tag">Mobile / WhatsApp</span>
              <h3 className="contact-card-val">
                <a href={`tel:${phoneNumber.replace(/\s+/g, "")}`}>{phoneNumber}</a>
              </h3>
              <p className="contact-card-sub">Available for phone calls &amp; WhatsApp chats</p>
            </div>
            <a
              href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="btn-cute-secondary contact-action-btn"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Box 3: Location */}
          <div className="cute-card contact-card-box">
            <div className="contact-icon-circle">
              <MapPin size={22} style={{ color: "var(--pink-primary)" }} />
            </div>
            <div className="contact-card-content">
              <span className="contact-card-tag">Location</span>
              <h3 className="contact-card-val">Colombo, Sri Lanka</h3>
              <p className="contact-card-sub">Open to On-site, Hybrid &amp; Remote roles</p>
            </div>
            <div className="contact-status-badge">
              <span className="status-dot"></span>
              <span>GMT +5:30 (Sri Lanka)</span>
            </div>
          </div>

        </div>

        {/* Social Profiles Bar */}
        <div className="contact-socials-bar">
          <span className="socials-bar-label">Online Profiles &amp; Articles:</span>
          <div className="socials-bar-links">
            <a
              href="https://linkedin.com/in/ruhini-udara"
              target="_blank"
              rel="noreferrer"
              className="social-pill-link"
            >
              <LinkedinIcon className="w-4 h-4 text-sky-500" />
              <span>LinkedIn</span>
              <ArrowUpRight size={13} style={{ color: "var(--text-muted)" }} />
            </a>

            <a
              href="https://github.com/Ruhini-Udara"
              target="_blank"
              rel="noreferrer"
              className="social-pill-link"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight size={13} style={{ color: "var(--text-muted)" }} />
            </a>

            <a
              href="https://medium.com/@ruhiniudara"
              target="_blank"
              rel="noreferrer"
              className="social-pill-link"
            >
              <MediumIcon className="w-4 h-4 text-emerald-500" />
              <span>Medium</span>
              <ArrowUpRight size={13} style={{ color: "var(--text-muted)" }} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

