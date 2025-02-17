import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./UserTable.css";

const UserTable = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [editando, setEditando] = useState(null);
  const [editData, setEditData] = useState({ nome: "", email: "", mensagem: "" });

  // 📌 Buscar usuários do backend
  useEffect(() => {
    fetch("http://localhost:5000/api/mensagens")
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch((err) => console.error("Erro ao buscar mensagens:", err));
  }, []);

  // 📌 Função para excluir usuário
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/mensagens/${id}`, { method: "DELETE" })
      .then(() => setUsuarios(usuarios.filter((user) => user.id !== id)))
      .catch((err) => console.error("Erro ao excluir mensagem:", err));
  };

  // 📌 Função para ativar edição
  const handleEdit = (user) => {
    setEditando(user.id);
    setEditData({ nome: user.nome, email: user.email, mensagem: user.mensagem });
  };

  // 📌 Função para salvar edição
  const handleSave = (id) => {
    fetch(`http://localhost:5000/api/mensagens/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editData),
    })
      .then(() => {
        setUsuarios(
          usuarios.map((user) =>
            user.id === id ? { ...user, ...editData } : user
          )
        );
        setEditando(null);
      })
      .catch((err) => console.error("Erro ao atualizar mensagem:", err));
  };

  return (
    <div>
      <h2>Lista de Mensagens</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuário</th>
            <th>Email</th>
            <th>Mensagem</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {editando === user.id ? (
                  <input
                    type="text"
                    value={editData.nome}
                    onChange={(e) =>
                      setEditData({ ...editData, nome: e.target.value })
                    }
                  />
                ) : (
                  user.nome
                )}
              </td>
              <td>
                {editando === user.id ? (
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) =>
                      setEditData({ ...editData, email: e.target.value })
                    }
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editando === user.id ? (
                  <input
                    type="text"
                    value={editData.mensagem}
                    onChange={(e) =>
                      setEditData({ ...editData, mensagem: e.target.value })
                    }
                  />
                ) : (
                  user.mensagem
                )}
              </td>
              <td>
                {editando === user.id ? (
                  <button onClick={() => handleSave(user.id)}>Salvar</button>
                ) : (
                  <>
                    <button onClick={() => handleEdit(user)}>
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(user.id)}>
                      <FaTrash />
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
