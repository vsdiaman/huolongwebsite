import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { PixelCard } from "../components/PixelCard";
import { PROJECTS } from "../data/projects";
import { StoreBadges } from "../components/StoreBadges";

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
            <PixelCard key={project.slug}>
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-pixel text-[12px]">{project.title}</h2>
                <StoreBadges storeLinks={project.storeLinks} />
              </div>

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

              <div className="mt-6 flex gap-3">
                <a
                  href={
                    project.storeLinks.googlePlay ||
                    project.storeLinks.appStore ||
                    "#"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-brandBlack shadow-pixel px-3 py-2 font-pixel text-[10px]"
                  onClick={(e) => {
                    const url =
                      project.storeLinks.googlePlay ||
                      project.storeLinks.appStore;
                    if (!url) e.preventDefault();
                  }}
                >
                  VIEW
                </a>

                <Link
                  to={`/projects/${project.slug}/privacy-policy`}
                  className="border-2 border-brandBlack shadow-pixel px-3 py-2 font-pixel text-[10px]"
                >
                  PRIVACY POLICY
                </Link>
              </div>
            </PixelCard>
          ))}
        </div>
      )}
    </>
  );
}
