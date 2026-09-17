"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Calendar,
  CheckCircle2,
  Award,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Lock,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface Project {
  title: string;
  subtitle: string;
  category: "fullstack" | "web" | "iot";
  date: string;
  badge?: string;
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  mockupUrl?: string;
}

export default function Projects() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects: Project[] = [
    {
      title: "HR MATE",
      subtitle: "Human Resource Management System",
      category: "fullstack",
      date: "2026",
      badge: "Group Project",
      description:
        "Comprehensive enterprise HR platform engineered to streamline corporate workforce operations and employee development lifecycle.",
      highlights: [
        "Architected the complete Training & Development module with Next.js frontend and Spring Boot microservices.",
        "Implemented multi-level approval workflows for employee training applications with granular RBAC permissions.",
        "Engineered attendance tracking, post-training feedback collection, and dynamic feedback report generation.",
        "Ensured robust database consistency and relationship modeling in PostgreSQL.",
      ],
      techStack: ["Next.js", "Spring Boot", "PostgreSQL", "RBAC", "REST API"],
      githubUrl: "https://github.com/Ruhini-Udara/HR-MATE",
      liveUrl: "https://github.com/Ruhini-Udara",
      image: "/projects/HRMATE.png",
      mockupUrl: "hrmate.internal/training",
    },
    {
      title: "Personal Developer Portfolio",
      subtitle: "Modern Editorial Portfolio & Design System",
      category: "web",
      date: "2026",
      badge: "Individual Project",
      description:
        "High-performance developer portfolio built with Next.js and TypeScript, featuring custom dark/light theming and interactive galleries.",
      highlights: [
        "Architected with Next.js App Router and strict TypeScript for type safety and fast static generation.",
        "Built a custom theme provider with persistent dark/light mode using CSS custom properties.",
        "Engineered responsive interactive components including an animated tech marquee and modal certificate preview.",
        "Optimized for fast load times, accessible semantic structure, and responsive mobile viewports.",
      ],
      techStack: ["Next.js", "React", "TypeScript", "CSS3", "Responsive UI"],
      githubUrl: "https://github.com/Ruhini-Udara/Portfolio",
      liveUrl: "#",
      image: "/projects/portfolio.png",
      mockupUrl: "ruhiniudara.me",
    },
    {
      title: "ToDo App",
      subtitle: "Secure Task Management & Attachment Application",
      category: "fullstack",
      date: "2025",
      badge: "Individual Project",
      description:
        "Full-stack productivity web application featuring stateless JWT authentication and cloud document handling.",
      highlights: [
        "Constructed end-to-end full-stack architecture using Next.js for interactive UI and Spring Boot for backend services.",
        "Integrated JSON Web Tokens (JWT) for secure user authentication and session management.",
        "Designed task status pipelines with document & PDF file upload capabilities.",
        "Created responsive dashboard with real-time task categorization and completion metrics.",
      ],
      techStack: ["Next.js", "Spring Boot", "JWT", "PostgreSQL", "Supabase", "REST API"],
      githubUrl: "https://github.com/Ruhini-Udara/ToDo-App",
      liveUrl: "https://github.com/Ruhini-Udara",
      image: "/projects/todo.png",
      mockupUrl: "todoapp.live/dashboard",
    },
    {
      title: "Lilium",
      subtitle: "Dynamic Content Management & Blog Platform",
      category: "web",
      date: "2025",
      badge: "Individual Project",
      description:
        "Full-featured blogging web application with rich author content authoring and reader engagement tools.",
      highlights: [
        "Built server-side web platform utilizing PHP and MySQL relational schemas.",
        "Implemented intuitive content management system (CMS) for creating, editing, and categorizing articles.",
        "Crafted responsive frontend with HTML, CSS, and JavaScript.",
        "Engineered secure user session management and relational database querying for author workflows.",
      ],
      techStack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Apache"],
      githubUrl: "https://github.com/Ruhini-Udara/Lilium-Blog",
      liveUrl: "https://github.com/Ruhini-Udara",
      image: "/projects/Lilium.jpeg",
      mockupUrl: "lilium.dev/articles",
    },
    {
      title: "Green Tag",
      subtitle: "Automated Barcode Sticker Removal System",
      category: "iot",
      date: "2025",
      badge: "Group Project",
      description:
        "Innovative hardware-software automated barcode sticker removal system designed to streamline checkout processes in supermarkets.",
      highlights: [
        "Integrated Arduino Mega and Arduino Nano microcontrollers for electromechanical control.",
        "Implemented RC522 RFID reader for fast wireless product identification.",
        "Incorporated HC-12 wireless transceivers and HX711 24-bit ADC for precision weight sensing.",
        "Awarded Grade: A and recognized with the Green Tag Project Exhibition Certificate.",
      ],
      techStack: ["Arduino Mega", "RFID RC522", "HC-12", "HX711 ADC", "C++"],
      githubUrl: "https://github.com/Ruhini-Udara/Green-Tag-System",
      liveUrl: "https://github.com/Ruhini-Udara",
      image: "/projects/GreenTag.jpeg",
      mockupUrl: "greentag.iot/hardware",
    },
  ];

  const updateScrollState = useCallback(() => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      const firstChild = sliderRef.current.firstElementChild as HTMLElement;
      if (firstChild) {
        const cardWidth = firstChild.offsetWidth + 28; // gap 1.75rem = 28px
        const index = Math.round(scrollLeft / cardWidth);
        setCurrentIndex(Math.min(projects.length - 1, Math.max(0, index)));
      }
    }
  }, [projects.length]);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const firstChild = sliderRef.current.firstElementChild as HTMLElement;
      const cardWidth = firstChild ? firstChild.offsetWidth + 28 : 450;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollToIndex = (index: number) => {
    if (sliderRef.current) {
      const firstChild = sliderRef.current.firstElementChild as HTMLElement;
      const cardWidth = firstChild ? firstChild.offsetWidth + 28 : 450;
      sliderRef.current.scrollTo({ left: index * cardWidth, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", updateScrollState, { passive: true });
      window.addEventListener("resize", updateScrollState);
      updateScrollState();
      return () => {
        slider.removeEventListener("scroll", updateScrollState);
        window.removeEventListener("resize", updateScrollState);
      };
    }
  }, [updateScrollState]);

  return (
    <section id="projects" className="section-wrapper">
      <div className="page-container">

        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">
            Engineering <span className="gradient-title">Projects</span>
          </h2>
          <p className="section-subtitle">
            From multi-module enterprise systems with Next.js and Spring Boot to award-winning IoT supermarket automation.
          </p>
        </div>

        {/* Navigation Controls Bar */}
        <div className="projects-controls-header">
          <div className="projects-count-indicator">
            <span className="projects-count-current">0{currentIndex + 1}</span>
            <span className="projects-count-sep">/</span>
            <span className="projects-count-total">0{projects.length}</span>
          </div>

          <div className="projects-nav-arrows">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`project-arrow-btn ${!canScrollLeft ? "arrow-disabled" : ""}`}
              aria-label="Previous project"
              title="Previous project"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`project-arrow-btn ${!canScrollRight ? "arrow-disabled" : ""}`}
              aria-label="Next project"
              title="Next project"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Projects Carousel Track */}
        <div className="projects-carousel-wrapper">
          <div ref={sliderRef} className="projects-carousel-track">
            {projects.map((project, idx) => (
              <div key={idx} className="cute-card project-card project-carousel-card">
                <div className="project-top-stripe"></div>

                {/* Modern Browser Mockup */}
                {project.image && (
                  <div className="browser-mockup">
                    {/* Browser Header Bar */}
                    <div className="browser-mockup-bar">
                      <div className="browser-mockup-dots">
                        <span className="dot dot-red" />
                        <span className="dot dot-yellow" />
                        <span className="dot dot-green" />
                      </div>
                      <div className="browser-mockup-address">
                        <Lock size={10} className="browser-lock-icon" />
                        <span className="browser-domain">{project.mockupUrl || "localhost:3000"}</span>
                      </div>
                      <div className="browser-mockup-actions"></div>
                    </div>

                    {/* Browser Screen */}
                    <div className="browser-mockup-viewport">
                      <Image
                        src={project.image}
                        alt={`${project.title} Preview`}
                        width={900}
                        height={560}
                        className="browser-mockup-image"
                        priority={idx < 2}
                      />
                    </div>
                  </div>
                )}

                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {/* Meta */}
                  <div className="project-meta-row">
                    <div className="project-date">
                      <Calendar size={14} />
                      <span>{project.date}</span>
                    </div>
                    {project.badge && (
                      <span className="cute-badge" style={{ padding: "0.25rem 0.75rem", fontSize: "0.72rem" }}>
                        {project.badge.includes("Grade: A") && <Award size={13} style={{ color: "#F59E0B" }} />}
                        <span>{project.badge}</span>
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="project-title">
                      <span>{project.title}</span>
                    </h3>
                    <div className="project-subtitle">{project.subtitle}</div>
                  </div>

                  {/* Description */}
                  <p className="project-summary">{project.description}</p>

                  {/* Highlights */}
                  <div className="project-highlights-box">
                    <div className="highlights-label">Key Highlights:</div>
                    <ul className="highlights-list">
                      {project.highlights.map((point, hIdx) => (
                        <li key={hIdx} className="highlight-item">
                          <CheckCircle2 size={14} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer */}
                <div className="project-footer">
                  <div className="tech-tags-wrap">
                    {project.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-links-row">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-repo-link"
                    >
                      <GithubIcon className="project-link-icon" />
                      <span>Repository</span>
                      <ArrowUpRight size={12} />
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-repo-link"
                        style={{ color: "var(--pink-deep)" }}
                      >
                        <span>Explore</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="projects-dots-row">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`project-dot ${currentIndex === idx ? "project-dot-active" : ""}`}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
