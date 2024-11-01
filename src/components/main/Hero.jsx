import React from "react";
import "../main/Main.css";


const Hero = () => {
  return (
    <>
      <section className="hero-container">

        <article>
          <h3>Welkom bij PawPal</h3>
          <p>
            <b>Pawpal</b> helpt je zoeken naar jouw juiste huisdier. Van
            ondersteuning tot lid van de familie, bezitten we talloze soorten en
            maten dieren die opzoek zijn naar nieuw baasje
          </p>
          <a href="/">
          <i className="fa-solid fa-paw"></i>  vind een pal
          </a>
        </article>
        <section className="cat-container absolute-container">
          <img src="/images/cat.png" alt="" />
        </section>
        <section className="text-cloud absolute-container">
            <h1>Gun een</h1>
            <h1>nieuw huis</h1>
            <h1>aan een lief dier</h1>
        </section>
      </section>
    </>
  );
};

export default Hero;
