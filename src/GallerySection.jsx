import { useState } from "react";
import "./gallerySection.css";

const categories = ["Tudo", "Oficinas", "Robótica", "Programação", "Eventos"];

const galleryItems = [
  {
    id: 1,
    category: "Oficinas",
    img: "https://picsum.photos/seed/workshop1/600/600",
    title: "Oficina Prática",
  },
  {
    id: 2,
    category: "Robótica",
    img: "https://picsum.photos/seed/robot1/600/600",
    title: "Montagem de Robôs",
  },
  {
    id: 3,
    category: "Programação",
    img: "https://picsum.photos/seed/code1/600/600",
    title: "Aula de Python",
  },
  {
    id: 4,
    category: "Eventos",
    img: "https://picsum.photos/seed/event1/600/600",
    title: "Hackathon Escolar",
  },
  {
    id: 5,
    category: "Oficinas",
    img: "https://picsum.photos/seed/workshop2/600/600",
    title: "Circuitos Eletrônicos",
  },
  {
    id: 6,
    category: "Robótica",
    img: "https://picsum.photos/seed/robot2/600/600",
    title: "Competição de Robôs",
  },
  {
    id: 7,
    category: "Programação",
    img: "https://picsum.photos/seed/code2/600/600",
    title: "Desenvolvimento Web",
  },
  {
    id: 8,
    category: "Eventos",
    img: "https://picsum.photos/seed/event2/600/600",
    title: "Feira de Ciências",
  },
];

export default function GallerySection() {
  const [filter, setFilter] = useState("Tudo");

  const filteredItems =
    filter === "Tudo"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <section className="gallery-section">
      <div className="container">
        <div className="gallery-header">
          <h2 className="gallery-title">Galeria</h2>
          <div className="gallery-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-img-wrapper">
                <img
                  src={item.img}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                />
                <div className="gallery-overlay">
                  <span>{item.title}</span>
                  <small>{item.category}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
