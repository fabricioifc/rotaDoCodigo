import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./slider.css";

const slides = [
  {
    title: "Transformando o futuro com a Rota do Código",
    description:
      "Levamos o ensino de programação para escolas de ensino fundamental e médio de forma lúdica.",
    button: "Conheça o projeto",
  },
  {
    title: "Programação lúdica para todos",
    description:
      "Capacitamos jovens com lógica, desenvolvimento e pensamento computacional criativo.",
    button: "Ver atividades",
  },
];

function Cube({ color }) {
  return (
    <div className={`cube cube-${color}`}>
      <div className="top" />
      <div className="left" />
      <div className="right" />
    </div>
  );
}

export default function Slider() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 500);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className="hero">
      {/* BACKGROUND DECORATIONS */}
      <div className="glow glow-1" />
      <div className="glow glow-2" />
      <div className="hero-grid" />

      {/* BLUR OVERLAY */}
      <div className={`blur-overlay ${isTransitioning ? "active" : ""}`} />

      <div className="hero-container">
        {/* TEXTO */}
        <div className="hero-text">
          <div
            className={`slide-content ${isTransitioning ? "slide-entering" : "slide-visible"
              }`}
          >
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
            <div className="hero-actions">
              <button className="btn-primary">{slide.button}</button>
              <Link to="/">
                <button className="btn-secondary">Saiba mais</button>
              </Link>
            </div>
          </div>

          <div className="hero-footer-stats">
            <div className="stat-item">
              <span className="stat-value">+200</span>
              <span className="stat-label">Alunos Impactados</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value">6+</span>
              <span className="stat-label">Escolas Parceiras</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Prático</span>
            </div>
          </div>
        </div>

        {/* CUBOS */}
        <div className="hero-image">
          <div className="cube-wrapper pos-top-cyan">
            <Cube color="cyan" />
          </div>
          <div className="cube-wrapper pos-mid-orange">
            <Cube color="orange" />
          </div>
          <div className="cube-wrapper pos-bot-cyan">
            <Cube color="cyan" />
          </div>
          <div className="cube-wrapper pos-bot-pink">
            <Cube color="pink" />
          </div>

          {/* NEW CUBES FOR FILLING */}
          <div className="cube-wrapper pos-extra-1 scale-50">
            <Cube color="orange" />
          </div>
          <div className="cube-wrapper pos-extra-2 scale-75">
            <Cube color="pink" />
          </div>
          <div className="cube-wrapper pos-extra-3 scale-50">
            <Cube color="cyan" />
          </div>
        </div>
      </div>
    </section>
  );
}
