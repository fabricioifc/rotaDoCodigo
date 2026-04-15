import "./projectsSection.css";

const projects = [
  {
    title: "Ensino Médio",
    desc: "A Rota do Código prepara os alunos para o futuro com programação, desenvolvendo pensamento lógico, autonomia e habilidades para o mercado digital.",
    img: "https://plus.unsplash.com/premium_vector-1720549705152-1810209290fb?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Ensino Fundamental",
    desc: "Introduzimos a programação de forma criativa, estimulando raciocínio lógico, curiosidade e interesse pela tecnologia desde cedo.",
    img: "https://plus.unsplash.com/premium_vector-1721050873642-00c0eba9ca9b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Educação de Jovens e Adultos",
    desc: "Promovemos inclusão digital por meio da programação, abrindo novas oportunidades e mostrando que nunca é tarde para aprender.",
    img: "https://plus.unsplash.com/premium_vector-1720780253928-30e5874d41ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWRvc2xlY2VudGV8ZW58MHx8MHx8fDA%3D",
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
