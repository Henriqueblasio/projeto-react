import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./Home.css";

function Home() {
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="content">
          <h2>Bem-vindo ao Meu Site!</h2>
          <p>
            Este é um site de exemplo criado com React e React Router. Navegue entre as páginas para ver como funciona!
          </p>
          <Link to="/contato" className="btn">Entre em Contato</Link>
        </div>
        <div className="image">
          <img src="https://source.unsplash.com/400x300/?technology" alt="Imagem" />
        </div>
      </div>
    </>
  );
}

export default Home;
