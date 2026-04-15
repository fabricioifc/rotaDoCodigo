import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="about-project">
      <div className="ap-container">
        <div className="ap-grid">
          {/* LEFT CONTENT */}
          <div className="ap-content">
            <span className="ap-tag">O PROJETO</span>
            <h2 className="ap-title">
              Transformando o futuro através do código
            </h2>

            <div className="ap-text-group">
              <p className="ap-lead">
                Por trás de cada grande inovação tecnológica, existe uma mente
                curiosa e preparada.
              </p>
            
              <p>
                Nossa missão é democratizar o acesso ao ensino de tecnologia de
                alta qualidade, preparando a próxima geração para os desafios de
                um mundo cada vez mais digital e conectado.
              </p>
            </div>
          </div>

          {/* RIGHT ILLUSTRATION */}
          <div className="ap-illustration">
            <div className="illustration-wrapper">
              {/* We'll use a stylized image that matches the vibe of the request */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                alt="Equipe trabalhando"
                className="main-img"
                referrerPolicy="no-referrer"
              />
              {/* Decorative shapes to mimic the artistic style in the reference image */}
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
