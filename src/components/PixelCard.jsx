// src/components/PixelCard.jsx
import React from "react";

export function PixelCard({ title, className = "", children }) {
  return (
    <div className={`pixel-surface p-6 ${className}`.trim()}>
      {title ? (
        <h2 className="font-pixel text-[12px] text-brandMagenta">{title}</h2>
      ) : null}

      <div className={title ? "mt-4" : ""}>{children}</div>
    </div>
  );
}
