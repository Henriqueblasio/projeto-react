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

  const [status, setStatus] = useState(""); // Estado para feedback

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/mensagens", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Mensagem enviada com sucesso!");
        setFormData({ nome: "", email: "", mensagem: "" });
      } else {
        setStatus(data.error || "Erro ao enviar mensagem.");
      }
    } catch (error) {
      setStatus("Erro ao conectar com o servidor.");
    }
  };

  return (
    <>
      <Header />
      <section className="contato-container">
        <div className="contato-box">
          <h2>Entre em Contato</h2>
          <p>Tem alguma dúvida? Preencha o formulário abaixo e entraremos em contato.</p>
          
          {status && <p className="status-message">{status}</p>}

          <form onSubmit={handleSubmit}>
            <label>Nome:</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              placeholder="Digite seu nome"
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Digite seu e-mail"
            />

            <label>Mensagem:</label>
            <textarea
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
              placeholder="Digite sua mensagem"
            ></textarea>

            <button type="submit" className="btn">Enviar Mensagem</button>
          </form>

          <Link to="/" className="btn-voltar">Voltar para Home</Link>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <p>&copy; 2025 HB - Todos os direitos reservados</p>
      </footer>
    </>
  );
}

export default Contato;
