import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* BRAND SECTION */}
          <div className="footer-brand">
            <h2 className="footer-logo">
              Rota do <span>Código</span>
            </h2>
            <p className="footer-desc">
              Transformando o futuro através do ensino de programação lúdica e
              criativa para jovens de todo o Brasil.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="#" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-links">
            <h3>Navegação</h3>
            <ul>
              <li>
                <a href="#home">Início</a>
              </li>
              <li>
                <a href="#about">Sobre Nós</a>
              </li>
              <li>
                <a href="#projects">Nossos Trabalhos</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="footer-contact">
            <h3>Contato</h3>
            <ul>
              <li>
                <FaMapMarkerAlt size={18} className="icon" />
                <span>São Paulo, SP - Brasil</span>
              </li>
              <li>
                <FaPhoneAlt size={18} className="icon" />
                <span>+55 (11) 99999-9999</span>
              </li>
              <li>
                <FaEnvelope size={18} className="icon" />
                <span>contato@rotadocodigo.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Rota do Código. Todos os direitos reservados.
          </p>
          <div className="footer-legal">
            <a href="#">Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
