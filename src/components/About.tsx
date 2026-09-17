"use client";

import React from "react";
import {
  Users,
  Zap,
  Award,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <div className="page-container">

        {/* Section Header */}
        <div className="section-header">

          <h2 className="section-title">
            Engineering Mindset &amp; <span className="gradient-title">Technical Craft</span>
          </h2>
        </div>

        {/* Narrative & Stats Bento */}
        <div className="about-bento">

          {/* Main Story */}
          <div className="cute-card about-main-card">
            <div className="about-story">
              <h3>
                Passionate about building scalable enterprise systems and thoughtful user experiences.
              </h3>
              <p>
                I specialize in full-stack development with a strong focus on backend resilience and responsive interfaces. My work spans designing normalized relational schemas in PostgreSQL, writing robust RESTful services in Spring Boot, and creating fast, interactive frontends with Next.js and TypeScript.
              </p>
              <p>
                Whether developing full-stack web applications, RESTful APIs, or intuitive user interfaces, I prioritize clean architecture, reliability, and maintainable code.
              </p>
            </div>

            <div className="about-traits">
              <div className="trait-item">
                <Users size={16} style={{ color: "var(--pink-primary)" }} />
                <span>Team Player</span>
              </div>
              <div className="trait-item">
                <Zap size={16} style={{ color: "var(--pink-primary)" }} />
                <span>Fast Learner</span>
              </div>
              <div className="trait-item">
                <Award size={16} style={{ color: "var(--pink-primary)" }} />
                <span>Problem Solver</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            <div className="cute-card stat-box">
              <div className="stat-val stat-val-gpa">3.56</div>
              <div className="stat-label">Academic GPA</div>
              <div className="stat-sub">Univ. of Moratuwa</div>
            </div>

            <div className="cute-card stat-box">
              <div className="stat-val stat-val-projects">5</div>
              <div className="stat-label">Core Projects</div>
              <div className="stat-sub">Enterprise, Web &amp; IoT</div>
            </div>

            <div className="cute-card stat-box">
              <div className="stat-val stat-val-certs">8+</div>
              <div className="stat-label">Certifications</div>
              <div className="stat-sub">AWS, Code &amp; Systems</div>
            </div>

            <div className="cute-card stat-box">
              <div className="stat-val stat-val-tech">15+</div>
              <div className="stat-label">Technologies</div>
              <div className="stat-sub">Full-Stack &amp; Cloud</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
