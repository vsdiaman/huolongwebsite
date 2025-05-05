import React from "react";

function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 text-center my-12">
      <section>
        <h2 className="text-2xl text-huolongRed font-pixel mb-4">About Us</h2>
        <p className="text-base mb-6">
          Huolong Studios is an indie game studio with big dreams and bold
          ideas. Our main engine is Unity, which we combine with tools like
          Trello, Photoshop, and web technologies to bring our visions to life.
          We focus on mobile games for the PlayStore, aiming to create titles
          that are both innovative and emotionally impactful.
        </p>
        <p className="text-base mb-6">
          Our current project, <strong>Bedbound</strong>, follows the haunting
          story of two elderly sisters — one bedridden, the other uncovering a
          sinister mystery within a hospital. With a rich narrative and
          atmospheric tension, it reflects our love for storytelling in the
          style of great studios like Playdead and Tarsier.
        </p>
        <p className="text-base">
          Though we're a small team with limited resources, our creativity,
          dedication, and admiration for meaningful storytelling push us
          forward. This is just the beginning of our journey — and we’re excited
          to take you with us.
        </p>
      </section>
    </div>
  );
}

export default About;
