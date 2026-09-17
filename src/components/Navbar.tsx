"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`nav-header ${scrolled ? "scrolled" : ""}`}>
      <div className="page-container">
        <div className="nav-inner nav-right-aligned">
          {/* Right-aligned Navigation Links */}
          <nav className="nav-links-desktop">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="nav-link-item">
                <span>{l.label}</span>
              </a>
            ))}
          </nav>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="theme-toggle-btn"
            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="nav-mobile-toggle"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileOpen && (
          <div className="nav-mobile-menu">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="nav-link-item"
                style={{ padding: "0.6rem 1rem", fontSize: "0.95rem" }}
              >
                <span>{l.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
