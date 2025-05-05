import { Helmet } from "react-helmet";

import React from "react";

function Home() {
  return (
    <>
      <Helmet>
        <title>Huolong Studios | Indie Game Studio</title>
        <meta
          name="description"
          content="Huolong Studios is an indie game studio focused on emotional mobile games. Discover our upcoming project Bedbound."
        />
        <meta
          name="keywords"
          content="indie game studio, Huolong, Bedbound, mobile games, Unity games, PlayStore games"
        />
        <meta name="author" content="Vitor Diamantino" />
        <meta property="og:title" content="Huolong Studios" />
        <meta
          property="og:description"
          content="Discover Bedbound, our emotional game about two elderly sisters trapped in a mysterious hospital."
        />
        <meta property="og:image" content="/assets/huolong-logo.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="max-w-4xl mx-auto text-center px-4 my-12">
        {/* Welcome Section */}
        <section className="mb-16">
          <h2 className="text-2xl text-huolongRed font-pixel mb-4">
            Welcome to Huolong
          </h2>
          <p className="text-base">
            I'm Vitor Diamantino, a passionate gamer since the age of 7, when I
            got my first Super Nintendo. That moment sparked a lifelong love for
            the art of games and their ability to tell unforgettable stories.
            Huolong Studios was born from this passion — a dream turned into a
            mission to create unique and engaging experiences.
          </p>
        </section>
      </div>
    </>
  );
}

export default Home;
