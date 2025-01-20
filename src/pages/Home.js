import React from "react";
import { Link } from "react-router-dom";
import { FaMusic, FaGuitar, FaHeart } from "react-icons/fa"; // Ícones
import Header from "../components/Header";
import "./Home.css";

function Home() {
  return (
    <>
      <Header />

      {/* Seção Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>Bem-vindo!</h1>
          <p>Explore nossos serviços e descubra como podemos ajudar você.</p>
          <Link to="/contato" className="btn">Entre em Contato</Link>
        </div>
      </section>

      {/* Seção de Destaques */}
      <section className="features">
        <div className="feature">
          <FaMusic className="icon" />
          <h2>Ritmo</h2>
          <p>Meu repertório é pensado para criar o ritmo perfeito em cada apresentação.</p>
        </div>
        <div className="feature">
          <FaGuitar className="icon" />
          <h2>Versatilidade</h2>
          <p>Adapto o repertório ao estilo do evento, garantindo uma experiência única.</p>
        </div>
        <div className="feature">
          <FaHeart className="icon" />
          <h2>Emoção</h2>
          <p>Cada acorde é escolhido para transmitir emoção e tornar o evento inesquecível.</p>
        </div>
      </section>

      {/* Seção Sobre */}
      <section className="about">
        <h2>Sobre</h2>
        <p>
          Com um repertório variado e adaptado ao seu evento, trago um toque especial para casamentos, recepções, eventos corporativos ou qualquer ocasião que mereça uma trilha sonora única.
        </p>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <p>&copy; 2025 HB - Todos os direitos reservados</p>
      </footer>
    </>
  );
}

export default Home;
