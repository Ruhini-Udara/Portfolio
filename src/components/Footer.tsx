"use client";

import React from "react";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-bottom">
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
            Crafted with <Heart size={14} style={{ color: "var(--pink-primary)", fill: "var(--pink-primary)" }} />
          </span>
          <span>•</span>
          <span>&copy; {new Date().getFullYear()} Ruhini Udara</span>
          <span>•</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}

