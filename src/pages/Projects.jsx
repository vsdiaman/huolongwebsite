import React from "react";
import { Helmet } from "react-helmet";
import { PixelCard } from "../components/PixelCard";

const PROJECTS = [];

export default function Projects() {
  const hasProjects = PROJECTS.length > 0;

  return (
    <>
      <Helmet>
        <title>Projects | Huolong Apps</title>
        <meta
          name="description"
          content="Selected projects and case studies in mobile app development."
        />
      </Helmet>

      <h1 className="font-pixel text-[16px] text-brandMagenta">PROJECTS</h1>

      {!hasProjects ? (
        <div className="mt-8">
          <PixelCard className="pixel-grid">
            <h2 className="font-pixel text-[12px] text-brandMagenta">
              UPDATE IN PROGRESS
            </h2>
            <p className="mt-4">
              We’re currently updating this page with new projects and case
              studies. Please check back soon.
            </p>
          </PixelCard>
        </div>
      ) : (
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <PixelCard key={project.title}>
              <h2 className="font-pixel text-[12px]">{project.title}</h2>
              <p className="mt-4">{project.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border-2 border-brandBlack shadow-pixel px-2 py-1 font-pixel text-[10px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </PixelCard>
          ))}
        </div>
      )}
    </>
  );
}
