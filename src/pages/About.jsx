import React from "react";
import { Helmet } from "react-helmet";
import { PixelCard } from "../components/PixelCard";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Huolong Apps</title>
        <meta
          name="description"
          content="About Huolong Apps and our approach to building mobile products."
        />
      </Helmet>

      <h1 className="font-pixel text-[16px] text-brandMagenta">ABOUT</h1>

      <div className="mt-8 grid gap-6">
        <PixelCard>
          <h2 className="font-pixel text-[12px]">FOCUS</h2>
          <p className="mt-4">
            Huolong Apps is focused on Android and iOS mobile development. Less
            noise, more delivery: clean code, performance, and long-term
            maintainability.
          </p>
        </PixelCard>

        <PixelCard>
          <h2 className="font-pixel text-[12px]">HOW WE WORK</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2">
            <li>Clear scope definition (MVP first)</li>
            <li>Simple, scalable architecture</li>
            <li>Iterative delivery with fast adjustments</li>
            <li>Release and maintenance</li>
          </ul>
        </PixelCard>
      </div>
    </>
  );
}
