import React from "react";
import { Helmet } from "react-helmet";
import { PixelButton } from "../components/PixelButton";
import { PixelCard } from "../components/PixelCard";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Huolong Apps | Android & iOS</title>
        <meta
          name="description"
          content="Android and iOS mobile app development with React Native — focused on performance, maintainability, and reliable delivery."
        />
        <meta
          name="keywords"
          content="mobile app development, android, ios, react native, typescript, firebase"
        />
        <meta name="author" content="Huolong Apps" />
        <meta property="og:title" content="Huolong Apps | Android & iOS" />
        <meta
          property="og:description"
          content="Custom Android & iOS apps. React Native, TypeScript, Firebase, and integrations."
        />
        <meta property="og:image" content="/assets/huolong-logo.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="pixel-surface p-8 pixel-grid">
        <h1 className="font-pixel text-[18px] leading-7">
          MOBILE APPS <span className="text-brandMagenta">ANDROID</span> &{" "}
          <span className="text-brandMagenta">IOS</span>
        </h1>

        <p className="mt-6 max-w-2xl">
          Huolong Apps builds React Native products with a focus on performance,
          clean code, and a smooth end-user experience — from authentication and
          APIs to payments, Firebase, and production releases.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <PixelButton as={Link} to="/services" variant="primary">
            VIEW SERVICES
          </PixelButton>
          <PixelButton as={Link} to="/projects" variant="ghost">
            VIEW PROJECTS
          </PixelButton>
          <PixelButton
            as="a"
            href="https://wa.me/5538988645180"
            target="_blank"
            rel="noreferrer"
            variant="ghost"
          >
            GET A QUOTE
          </PixelButton>
        </div>
      </section>

      <section className="mt-10 grid md:grid-cols-3 gap-6">
        <PixelCard>
          <h2 className="font-pixel text-[12px] text-brandMagenta">
            CUSTOM APPS
          </h2>
          <p className="mt-4">
            MVPs, full products, refactors, new features, and ongoing
            maintenance.
          </p>
        </PixelCard>

        <PixelCard>
          <h2 className="font-pixel text-[12px] text-brandMagenta">
            PERFORMANCE
          </h2>
          <p className="mt-4">
            Lean components, fast lists, fewer re-renders, responsive UI.
          </p>
        </PixelCard>

        <PixelCard>
          <h2 className="font-pixel text-[12px] text-brandMagenta">
            INTEGRATIONS
          </h2>
          <p className="mt-4">
            Firebase, APIs, authentication, analytics, crash reporting, and
            payments (Stripe).
          </p>
        </PixelCard>
      </section>

      <section className="mt-10 pixel-surface p-6">
        <h2 className="font-pixel text-[12px] text-brandMagenta">STACK</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "React Native",
            "TypeScript",
            "Firebase",
            "Node.js",
            "Jest",
            "CI/CD",
          ].map((item) => (
            <span
              key={item}
              className="border-2 border-brandBlack shadow-pixel px-3 py-2 font-pixel text-[10px]"
            >
              {item.toUpperCase()}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
