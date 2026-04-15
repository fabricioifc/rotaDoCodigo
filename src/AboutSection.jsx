import React from "react";
import "./about.css";

export default function AboutSection() {
  return (
    <section className="about">
      <div className="about-container">

        <div className="about-text">
          <h1>SOBRE NÓS</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat.
          </p>

          <button>CONTACT NOW</button>
        </div>

        <div className="about-image">
          <img src="/OI.svg" alt="team illustration"/>
        </div>

      </div>
    </section>
  );
}
