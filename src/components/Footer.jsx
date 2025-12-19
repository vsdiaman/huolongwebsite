import React from "react";

const linkClass =
  "font-pixel text-[10px] underline decoration-brandMagenta underline-offset-4 px-2 py-1 hover:bg-brandMagenta border-2 border-brandBlack shadow-pixel active:translate-x-[2px] active:translate-y-[2px] active:shadow-none";

export default function Footer() {
  return (
    <footer className="border-t-2 border-brandBlack bg-brandCream">
      <div className="max-w-5xl mx-auto px-4 py-8 text-center">
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <a
            className={linkClass}
            href="https://www.instagram.com/diamantino.gg"
            target="_blank"
            rel="noreferrer"
          >
            INSTAGRAM
          </a>
          <a
            className={linkClass}
            href="https://www.linkedin.com/in/vitordiamantino/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>
          <a
            className={linkClass}
            href="https://wa.me/5538988645180"
            target="_blank"
            rel="noreferrer"
          >
            WHATSAPP
          </a>
        </div>

        <p className="font-pixel text-[10px]">
          ©2025 HUOLONG APPS — BRAZIL. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
