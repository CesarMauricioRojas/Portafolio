import React, { useState } from "react";
import "../Styles/ComponentStyles/NavbarStyle.css";
import logo from "../Images/CMR.png";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-bar">
      <img src={logo} alt="Logo" />
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li>Inicio</li>
        <li>Proyectos</li>
        <li>Contacto</li>
        <li>Sobre mi</li>
      </ul>
      <div>
        <button>Idioma</button>
        <button>Modo</button>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
