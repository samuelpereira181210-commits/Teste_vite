import { useState } from "react";
import styles from './FormularioContato.module.css'

export default function FormularioContato() {
  const [nome, setNome] = useState("");
  const [erro, setErro] = useState("");

  function aoEnviar(event) {
    event.preventDefault();
    if (nome.trim() === "") {
      setErro("Nome é obrigatório.");
      return;
    }
    setErro("");
    console.log("Enviado:", nome);
  }

  return (
    <form onSubmit={aoEnviar} className={styles.meuFormulario}>
      <input
      className={styles.meuInput}
        type="text"
        value={nome}
        onChange={event => setNome(event.target.value)}
        placeholder="Seu nome"
      />
      <input type="checkbox" />
      {erro && <p style={{ color: "red" }}>{erro}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
}