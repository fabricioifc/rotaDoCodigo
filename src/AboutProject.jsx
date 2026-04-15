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
              <img
                src="https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
                alt="Rocket launching from laptop"
                className="main-img"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
