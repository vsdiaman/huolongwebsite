import React from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import { PRIVACY_POLICIES } from "../data/privacyPolicies";
import { PixelCard } from "../components/PixelCard";
import { PrivacyPolicyView } from "../components/PrivacyPolicyView";

function getProjectBySlug(projectSlug) {
  return PROJECTS.find((project) => project.slug === projectSlug);
}

export default function ProjectPrivacyPolicy() {
  const { projectSlug } = useParams();

  const project = getProjectBySlug(projectSlug);
  const privacyPolicy = PRIVACY_POLICIES[projectSlug];

  if (!project || !privacyPolicy) {
    return (
      <PixelCard className="pixel-grid mt-8">
        <h2 className="font-pixel text-[12px] text-brandMagenta">NOT FOUND</h2>
        <p className="mt-4">Privacy policy not found.</p>
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
        <title>{project.title} Privacy Policy | Huolong Apps</title>
        <meta name="description" content={`Privacy Policy for ${project.title}.`} />
      </Helmet>

      <h1 className="font-pixel text-[16px] text-brandMagenta">PRIVACY POLICY</h1>

      <div className="mt-8">
        <PrivacyPolicyView
          appTitle={project.title}
          lastUpdated={privacyPolicy.lastUpdated}
          contactEmail="vitor.diamantino@icloud.com"
          sections={privacyPolicy.sections}
        />

        <div className="mt-8 flex gap-3">
          <Link
            to={`/projects/${project.slug}`}
            className="border-2 border-brandBlack shadow-pixel px-3 py-2 font-pixel text-[10px]"
          >
            BACK TO PROJECT
          </Link>
          <Link
            to="/projects"
            className="border-2 border-brandBlack shadow-pixel px-3 py-2 font-pixel text-[10px]"
          >
            BACK TO PROJECTS
          </Link>
        </div>
      </div>
    </>
  );
}
