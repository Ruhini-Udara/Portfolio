"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Eye, X, ExternalLink, FileText } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  badge: string;
  image: string;
  pdf?: string;
}

export default function Certifications() {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const certifications: Certificate[] = [
     {
      title: "Machine Learning for Beginners",
      issuer: "SoloLearn",
      badge: "AI & ML",
      image: "/certificates/Machine Learning for Beginners.jpg",
      pdf: "/certificates/Machine Learning for Beginners.pdf",
    },
    {
      title: "Job Roles in the Cloud",
      issuer: "AWS Training & Certification",
      badge: "Cloud Foundations",
      image: "/certificates/Job roles in the Cloud - AWS.png",
      pdf: "/certificates/Job Role in the Cloud - AWS.pdf",
    },
     {
      title: "SQL Intermediate",
      issuer: "SoloLearn",
      badge: "Database Engineering",
      image: "/certificates/SQL Intermediate.jpg",
      pdf: "/certificates/SQL Intermediate.pdf",
    },
    {
      title: "Angular",
      issuer: "SoloLearn",
      badge: "Frontend Framework",
      image: "/certificates/Angular.jpg",
      pdf: "/certificates/Angular.pdf",
    },
    {
      title: "Front-end for Beginners",
      issuer: "SoloLearn",
      badge: "Web Design",
      image: "/certificates/Front-end for Beginners.jpg",
      pdf: "/certificates/Front-end for Beginners.pdf",
    },
    {
      title: "Python for Beginners",
      issuer: "University of Moratuwa (CODL)",
      badge: "Programming",
      image: "/certificates/Python for Beginners.png",
      pdf: "/certificates/Python for Beginners.pdf",
    },
    {
      title: "Web Design for Beginners",
      issuer: "University of Moratuwa (CODL)",
      badge: "Web Development",
      image: "/certificates/Web Design for Beginners.png",
      pdf: "/certificates/Web Design for Beginners.pdf",
    },
    {
      title: "Introduction to C",
      issuer: "SoloLearn",
      badge: "Fundamentals",
      image: "/certificates/Introduction to C.jpg",
      pdf: "/certificates/Introduction to C.pdf",
    },
    {
      title: "Introduction to CSS",
      issuer: "SoloLearn",
      badge: "Styling & Responsive",
      image: "/certificates/Introduction to CSS.jpg",
      pdf: "/certificates/Introduction to CSS.pdf",
    },
  ];

  return (
    <section id="certifications" className="section-wrapper">
      <div className="page-container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Verified <span className="gradient-title">Certifications</span>
          </h2>
          <p className="section-subtitle">
            A showcase of completed certifications and courses across cloud architecture, web engineering, and programming.
          </p>
        </div>

        {/* 3-Column Showcase Grid */}
        <div className="certs-showcase-grid">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              onClick={() => setActiveCert(cert)}
              className="cert-showcase-card cute-card"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveCert(cert);
                }
              }}
              aria-label={`View ${cert.title} Certificate`}
            >
              {/* Top Certificate Thumbnail */}
              <div className="cert-showcase-thumb">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={600}
                  height={423}
                  className="cert-showcase-img"
                />
                <div className="cert-hover-overlay">
                  <Eye size={18} />
                  <span>Preview Certificate</span>
                </div>
              </div>

              {/* Bottom Details Box */}
              <div className="cert-showcase-info">
                <h3 className="cert-showcase-title">{cert.title}</h3>
                <div className="cert-showcase-issuer">{cert.issuer}</div>
                <div className="cert-badge-pill" style={{ marginTop: "0.5rem" }}>
                  {cert.badge}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Lightbox Modal */}
      {activeCert && (
        <div
          className="cert-modal-backdrop"
          onClick={() => setActiveCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeCert.title}
        >
          <div
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="cert-modal-header">
              <div>
                <div className="cert-issuer">{activeCert.issuer}</div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  {activeCert.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                className="theme-toggle-btn"
                aria-label="Close certificate preview"
                style={{ width: "2rem", height: "2rem" }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="cert-modal-body">
              <Image
                src={activeCert.image}
                alt={activeCert.title}
                width={850}
                height={550}
                className="cert-modal-img"
                priority
              />
            </div>

            {/* Modal Footer */}
            <div className="cert-modal-footer">
              <span className="cert-badge-pill">{activeCert.badge}</span>
              {activeCert.pdf && (
                <a
                  href={activeCert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cute-primary"
                  style={{ padding: "0.5rem 1.25rem", fontSize: "0.82rem" }}
                >
                  <FileText size={15} />
                  <span>Open Full PDF</span>
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
