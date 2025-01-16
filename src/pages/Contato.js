import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./Contato.css";

function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <>
      <Header />
      <div className="contato-container">
        <h2>Entre em Contato</h2>
        <p>Tem alguma dúvida? Preencha o formulário abaixo e entraremos em contato.</p>
        
        <form onSubmit={handleSubmit}>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Mensagem:</label>
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="btn">Enviar Mensagem</button>
        </form>

        <Link to="/" className="btn-voltar">Voltar para Home</Link>
      </div>
    </>
  );
}

export default Contato;
