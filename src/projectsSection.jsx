import "./projectsSection.css";

const projects = [
  {
    title: "Traditional",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
  },
  {
    title: "Modern",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
  },
  {
    title: "Minimalism",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
  },
];

export default function ProjectsSection() {
  return (
    <section className="projects-section">
      <div className="container">
        {/* HEADER */}
        <div className="projects-header">
          <h2>Nosso projetos</h2>
        </div>

        {/* GRID */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="card" key={index}>
              <div
                className="card-image"
                style={{ backgroundImage: `url(${project.img})` }}
              />

              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
