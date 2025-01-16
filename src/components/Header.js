import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Meu Site</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
