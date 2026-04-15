import "./navbar.css";
import { Link } from "react-router-dom";
import ana from "./assets/img/ana.png";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="logo">
        <div className="logo-icon">
          <img src={ana} alt="Logo " />
        </div>
        <span className="center"></span>
      </a>

      <div className="nav-links">
        <Link to="/galeria">Galeria</Link>
        <Link to="/contato">Contato</Link>
      </div>
    </nav>
  );
}

export default Navbar;


