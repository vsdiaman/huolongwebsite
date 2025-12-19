import React from "react";
import { NavLink } from "react-router-dom";
import { PixelButton } from "./PixelButton";

const navLinkClass = ({ isActive }) =>
  [
    "font-pixel text-[10px] px-3 py-2 border-2 border-brandBlack shadow-pixel",
    "active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
    isActive ? "bg-brandMagenta" : "bg-brandCream hover:bg-brandMagenta",
  ].join(" ");

export function Header() {
  return (
    <header className="border-b-2 border-brandBlack bg-brandCream pixel-grid">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <NavLink to="/" className="font-pixel text-[12px] tracking-wide">
          HUOLONG APPS
        </NavLink>

        <nav className="flex items-center gap-2 flex-wrap justify-end">
          <NavLink to="/services" className={navLinkClass}>
            SERVICES
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            PROJECTS
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            ABOUT
          </NavLink>
          <PixelButton
            as={NavLink}
            to="/contact"
            variant="primary"
            className="text-[10px] py-2 px-3"
          >
            CONTACT
          </PixelButton>
        </nav>
      </div>
    </header>
  );
}
