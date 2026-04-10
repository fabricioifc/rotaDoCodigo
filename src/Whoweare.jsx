import { useEffect, useRef, useState } from "react";
import "./whoWeAre.css";

const people = [
  {
    src: "https://picsum.photos/seed/fabricio/400/400",
    name: "Fabricio Bizotto",
  },
  {
    src: "https://picsum.photos/seed/willian/400/400",
    name: "Willian Moreira",
  },
  { src: "https://picsum.photos/seed/aninha/400/400", name: "Ana Paula Deon" },
  { src: "https://picsum.photos/seed/leti/400/400", name: " Leticia Macalina" },
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
