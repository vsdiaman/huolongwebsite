import React from "react";
import { PixelCard } from "./PixelCard";

export function PrivacyPolicyView({
  appTitle,
  lastUpdated,
  contactEmail,
  sections,
}) {
  return (
    <PixelCard className="pixel-grid">
      <h2 className="font-pixel text-[12px]">{appTitle}</h2>
      <p className="mt-2 text-[12px]">Last updated: {lastUpdated}</p>

      <div className="mt-6 space-y-6 text-[14px] leading-6">
        {sections.map((section) => (
          <section key={section.title}>
            <h3 className="font-pixel text-[12px] text-brandMagenta">
              {section.title}
            </h3>

            {section.paragraphs?.map((text, index) => (
              <p key={`${section.title}-p-${index}`} className="mt-2">
                {text === contactEmail ? <b>{contactEmail}</b> : text}
              </p>
            ))}

            {section.list?.length ? (
              <ul className="list-disc pl-5 mt-2 space-y-2">
                {section.list.map((item) => (
                  <li key={`${section.title}-${item}`}>{item}</li>
                ))}
              </ul>
            ) : null}

            {section.footnote ? (
              <p className="mt-3 text-[12px]">{section.footnote}</p>
            ) : null}
          </section>
        ))}
      </div>
    </PixelCard>
  );
}
