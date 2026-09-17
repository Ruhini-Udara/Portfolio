"use client";

import React from "react";
import { Award, Calendar, GraduationCap, Languages } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "BSc (Hons) in Information Technology and Management",
      institution: "University of Moratuwa",
      period: "2024 – Present",
      grade: "GPA: 3.56 / 4.00",
      highlight: true,
    },
    {
      degree: "G.C.E. Advanced Level",
      institution: "Commerce Stream",
      period: "2022 – 2023",
      grade: "2 A Passes, 1 B Pass",
      highlight: false,
    },
    {
      degree: "G.C.E. Ordinary Level",
      period: "2019",
      grade: "6 A Passes, 2 B Passes, 1 C Pass",
      highlight: false,
    },
  ];

  const diplomas = [
    {
      title: "Pearson DiTEC in Information Technology",
      institution: "ESOFT Metro Campus",
      period: "Mar 2023 – Feb 2024",
      grade: "Distinction",
      badge: "IT & Computing",
      icon: <GraduationCap size={20} />,
      highlight: true,
    },
    {
      title: "Diploma in English",
      institution: "British Way English Academy",
      period: "Jan 2020 – Mar 2020",
      badge: "Communication Skills",
      icon: <Languages size={20} />,
      highlight: false,
    },
  ];

  return (
    <section id="education" className="section-wrapper">
      <div className="page-container">
        
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">
            Academic Milestones &amp; <span className="gradient-title">Education</span>
          </h2>
          <p className="section-subtitle">
            My formal academic journey and qualifications at University of Moratuwa.
          </p>
        </div>

        {/* Diamond Node Timeline matching reference */}
        <div className="diamond-timeline-wrap">
          {education.map((item, idx) => (
            <div key={idx} className="diamond-timeline-row">
              {/* Left Column: Date / Period */}
              <div className="diamond-timeline-date">
                <span className="diamond-date-text">{item.period}</span>
              </div>

              {/* Center Axis: Diamond Marker & Connecting Line */}
              <div className="diamond-timeline-axis">
                <div className={`diamond-node ${item.highlight ? "highlight" : ""}`} />
                <div className={`diamond-line ${idx === education.length - 1 ? "diamond-line-last" : ""}`} />
              </div>

              {/* Right Column: Milestone Card */}
              <div className="diamond-timeline-content">
                <div
                  className={`cute-card edu-item ${item.highlight ? "highlight-card" : ""}`}
                >
                  <h4 className="edu-degree">{item.degree}</h4>
                  <div className="edu-institution">{item.institution}</div>
                  <div className="edu-grade-pill">{item.grade}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Qualifications Subsection */}
        <div className="diplomas-section-wrap">
          <div className="diplomas-header">
            <h3 className="diplomas-title">
              Professional <span className="gradient-title">Qualifications</span>
            </h3>
            <p className="diplomas-subtitle">
              Vocational accreditations in Information Technology and Professional English.
            </p>
          </div>

          <div className="diplomas-grid">
            {diplomas.map((diploma, idx) => (
              <div
                key={idx}
                className={`cute-card diploma-card ${diploma.highlight ? "highlight-card" : ""}`}
              >
                <div className="diploma-card-stripe"></div>
                <div className="diploma-card-header">
                  <div className="diploma-icon-wrap">
                    {diploma.icon}
                  </div>
                  <div className="diploma-date-badge">
                    <Calendar size={13} />
                    <span>{diploma.period}</span>
                  </div>
                </div>

                <div className="diploma-card-body">
                  <h4 className="diploma-degree">{diploma.title}</h4>
                  <div className="diploma-institution">{diploma.institution}</div>
                </div>

                <div className="diploma-card-footer">
                  {diploma.grade ? (
                    <div className="diploma-grade-pill">
                      <Award size={13} />
                      <span>{diploma.grade}</span>
                    </div>
                  ) : <div />}
                  <span className="cute-badge diploma-badge-tag">{diploma.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
