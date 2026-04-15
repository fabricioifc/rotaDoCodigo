import "./aboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-page-container">
        <h1 className="about-page-title">Sobre nós</h1>

        <div className="about-page-intro">
          <p>
            A Rota do Código nasceu da vontade de transformar a educação através
            da tecnologia. Acreditamos que a programação não é apenas uma
            habilidade técnica, mas uma nova forma de alfabetização que
            desenvolve o raciocínio lógico, a criatividade e a capacidade de
            resolver problemas complexos.
          </p>
          <p>
            Nosso compromisso é levar esse conhecimento de forma lúdica e
            acessível para escolas em todo o Brasil, preparando os jovens para
            serem não apenas consumidores, mas criadores de tecnologia no mundo
            digital.
          </p>
        </div>

        {/* COLABORADOR 1 (NORMAL) */}
        <div className="about-page-team-section">
          <div className="team-image-container">
            <div className="team-circle">
              <img
                src="https://picsum.photos/seed/fabricio/600/600"
                alt="Fabricio Bizotto"
              />
            </div>
          </div>

          <div className="team-info">
            <h2 className="team-name">Fabricio Bizotto - Fundador & Diretor</h2>
            <div className="team-description">
              <p>
                Especialista em tecnologia educacional com mais de 10 anos de
                experiência no setor. Fabricio lidera a visão estratégica da
                Rota do Código.
              </p>
              <p>Sua paixão por ensinar e inovar é o que move nossa equipe.</p>
            </div>
          </div>
        </div>

        {/* COLABORADOR 2 (INVERTIDO) */}
        <div className="about-page-team-section">
          <div className="team-info">
            <h2 className="team-name">Willian Moreira - Desenvolvedor</h2>
            <div className="team-description">
              <p>Apaixonado por desenvolvimento web e interfaces modernas.</p>
              <p>
                Trabalha para tornar a tecnologia mais acessível e intuitiva.
              </p>
            </div>
          </div>

          <div className="team-image-container">
            <div className="team-circle">
              <img
                src="https://picsum.photos/seed/willian/600/600"
                alt="Willian Moreira"
              />
            </div>
          </div>
        </div>

        {/* COLABORADOR 3 (NORMAL) */}
        <div className="about-page-team-section">
          <div className="team-image-container">
            <div className="team-circle">
              <img
                src="https://picsum.photos/seed/ana/600/600"
                alt="Ana Deon"
              />
            </div>
          </div>

          <div className="team-info">
            <h2 className="team-name">Ana Deon - Educadora & Designer</h2>
            <div className="team-description">
              <p>
                Une criatividade e tecnologia para criar experiências de ensino.
              </p>
              <p>
                Transforma conceitos complexos em atividades visuais e
                interativas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
