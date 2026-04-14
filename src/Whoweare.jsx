import { useEffect, useRef, useState } from "react";
import "./whoWeAre.css";
import imagem1 from "/willian.jpeg";
import imagem6 from "/aninha.jpeg";
import imagem10 from "/prof.jpeg";
import imagem11 from "/leti.jpeg";


const people = [
  {
    src: imagem10,
    name: "Fabricio Bizotto",
  },
  {
    src: imagem1,
    name: "Willian Moreira",
  },
  { src: imagem6, name: "Ana Paula Deon" },
  { src: imagem11, name: " Leticia Macalina" },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="about">
      <div className="about-container">
        <div className="about-grid">
          {/* TEXTO */}
          <div className={`about-text ${visible ? "show" : ""}`}>
            <h1>SOBRE NÓS</h1>
            <p className="desc">
              Somos apaixonados por tecnologia e educação. Nosso objetivo é
              levar o conhecimento de programação para todos, transformando
              vidas através do código e da criatividade.
            </p>
            <button className="btn-glow">Saiba mais</button>
          </div>

          {/* IMAGENS */}
          <div className="about-images">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`circle ${visible ? "show" : ""}`}
                style={{ transitionDelay: `${0.3 + i * 0.15}s` }}
              >
                <img
                  src={people[i].src}
                  alt={people[i].name}
                  referrerPolicy="no-referrer"
                />
                <div className="overlay">
                  <span>{people[i].name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
