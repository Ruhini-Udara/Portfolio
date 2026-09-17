"use client";

import React from "react";

interface MarqueeSkill {
  name: string;
  category: string;
  highlight?: boolean;
}

export default function Skills() {
  const row1: MarqueeSkill[] = [
    { name: "Java", category: "Backend Core", highlight: true },
    { name: "Spring Boot", category: "Enterprise APIs", highlight: true },
    { name: "Next.js", category: "Full-Stack React", highlight: true },
    { name: "TypeScript", category: "Type-Safe Web", highlight: true },
    { name: "React", category: "Frontend UI", highlight: true },
    { name: "PostgreSQL", category: "Relational DB", highlight: true },
    { name: "Tailwind CSS", category: "Modern UI", highlight: true },
    { name: "JWT Auth", category: "Security", highlight: true },
    { name: "Angular", category: "Frontend" },
    { name: "JavaScript (ES6+)", category: "Language", highlight: true },
  ];

  const row2: MarqueeSkill[] = [
    { name: "AWS (EC2 & Amplify)", category: "Cloud Infra", highlight: true },
    { name: "MySQL", category: "Database", highlight: true },
    { name: "Git & GitHub", category: "Version Control", highlight: true },
    { name: "Supabase", category: "Serverless Postgres" },
    { name: "MongoDB", category: "NoSQL DB" },
    { name: "Postman", category: "API Testing", highlight: true },
    { name: "Python", category: "Programming" },
    { name: "C Language", category: "Systems" },
    { name: "Role-Based Access (RBAC)", category: "Security" },
    { name: "HTML5 & CSS3", category: "Web Standards" },
  ];

  // Duplicate arrays once for seamless infinite loop
  const stream1 = [...row1, ...row1];
  const stream2 = [...row2, ...row2];

  const highlights = [
    { count: "5", label: "Programming Languages", isNum: true },
    { count: "Full-Stack", label: "Spring Boot & Next.js" },
    { count: "4", label: "Relational & NoSQL DBs", isNum: true },
    { count: "AWS & Git", label: "Cloud & DevOps" },
  ];

  return (
    <section id="skills" className="section-wrapper">
      <div className="page-container">

        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">
            Technologies &amp; <span className="gradient-title">Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            Modern web frameworks, enterprise microservices, databases, and cloud infrastructure wrapped in clean architecture.
          </p>
        </div>

        {/* Quick Domain Summary Cards */}
        <div className="skills-summary-bar">
          {highlights.map((h, idx) => (
            <div key={idx} className="cute-card skills-summary-item">
              <div className={`summary-count ${h.isNum ? "count-big-num" : ""}`}>
                {h.count}
              </div>
              <div className="summary-label">{h.label}</div>
            </div>
          ))}
        </div>

        {/* Marquee Streams with Gradient Edge Masks */}
        <div className="marquee-wrapper">
          {/* Row 1: Sliding Left */}
          <div className="marquee-track-container">
            <div className="marquee-track marquee-left">
              {stream1.map((skill, idx) => (
                <div
                  key={`r1-${idx}`}
                  className={`marquee-capsule cute-card ${skill.highlight ? "capsule-highlight" : ""}`}
                >
                  <span className="marquee-dot" />
                  <span className="marquee-skill-name">{skill.name}</span>
                  <span className="marquee-tag">{skill.category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Sliding Right */}
          <div className="marquee-track-container">
            <div className="marquee-track marquee-right">
              {stream2.map((skill, idx) => (
                <div
                  key={`r2-${idx}`}
                  className={`marquee-capsule cute-card ${skill.highlight ? "capsule-highlight" : ""}`}
                >
                  <span className="marquee-dot" />
                  <span className="marquee-skill-name">{skill.name}</span>
                  <span className="marquee-tag">{skill.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
