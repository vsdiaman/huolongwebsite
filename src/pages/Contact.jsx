import React from "react";
import { Helmet } from "react-helmet";
import { PixelButton } from "../components/PixelButton";
import { PixelCard } from "../components/PixelCard";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Huolong Apps</title>
        <meta
          name="description"
          content="Contact Huolong Apps for quotes and mobile app projects."
        />
      </Helmet>

      <h1 className="font-pixel text-[16px] text-brandMagenta">CONTACT</h1>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <PixelCard>
          <h2 className="font-pixel text-[12px]">MESSAGE</h2>

          <form
            action="https://formspree.io/f/xvgaarze"
            method="POST"
            className="mt-6 flex flex-col gap-4"
          >
            <input
              name="name"
              placeholder="Your name"
              className="border-2 border-brandBlack shadow-pixel p-3 bg-brandCream focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="border-2 border-brandBlack shadow-pixel p-3 bg-brandCream focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Describe your app (goal, screens, timeline)"
              className="border-2 border-brandBlack shadow-pixel p-3 bg-brandCream h-36 resize-none focus:outline-none"
              required
            />

            <PixelButton type="submit" variant="primary">
              SEND
            </PixelButton>
          </form>
        </PixelCard>

        <PixelCard>
          <h2 className="font-pixel text-[12px]">SHORTCUTS</h2>

          <div className="mt-6 grid gap-3">
            <PixelButton
              as="a"
              href="https://wa.me/5538988645180"
              target="_blank"
              rel="noreferrer"
              variant="primary"
            >
              WHATSAPP
            </PixelButton>

            <PixelButton
              as="a"
              href="https://www.linkedin.com/in/vitordiamantino/"
              target="_blank"
              rel="noreferrer"
              variant="ghost"
            >
              LINKEDIN
            </PixelButton>

            <PixelButton
              as="a"
              href="https://www.instagram.com/diamantino.gg"
              target="_blank"
              rel="noreferrer"
              variant="ghost"
            >
              INSTAGRAM
            </PixelButton>
          </div>
        </PixelCard>
      </div>
    </>
  );
}
