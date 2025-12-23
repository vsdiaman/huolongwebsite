import React from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { PixelCard } from "../components/PixelCard";
import { PROJECTS } from "../data/projects";

function getProjectBySlug(projectSlug) {
  return PROJECTS.find((project) => project.slug === projectSlug);
}

export default function Project() {
  const { projectSlug } = useParams();
  const project = getProjectBySlug(projectSlug);

  if (!project) {
    return (
      <PixelCard className="pixel-grid mt-8">
        <h2 className="font-pixel text-[12px] text-brandMagenta">NOT FOUND</h2>
        <p className="mt-4">Project not found.</p>
        <div className="mt-6">
          <Link
            to="/projects"
            className="border-2 border-brandBlack shadow-pixel px-3 py-2 font-pixel text-[10px]"
          >
            BACK TO PROJECTS
          </Link>
        </div>
      </PixelCard>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Huolong Apps</title>
        <meta name="description" content={project.desc} />
      </Helmet>

      <h1 className="font-pixel text-[16px] text-brandMagenta">
        {project.title.toUpperCase()}
      </h1>

      <div className="mt-8">
        <PixelCard className="pixel-grid">
          <p>{project.desc}</p>

          <div className="mt-6 flex gap-3">
            <Link
              to={`/projects/${project.slug}/privacy-policy`}
              className="border-2 border-brandBlack shadow-pixel px-3 py-2 font-pixel text-[10px]"
            >
              PRIVACY POLICY
            </Link>

            <Link
              to="/projects"
              className="border-2 border-brandBlack shadow-pixel px-3 py-2 font-pixel text-[10px]"
            >
              BACK
            </Link>
          </div>
        </PixelCard>
      </div>
    </>
  );
}
