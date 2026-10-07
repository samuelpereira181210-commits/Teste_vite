import { useState } from "react";
import styles from './FormularioContato.module.css'

export default function FormularioContato() {
  const [ideia, setideia] = useState("");
  const [erro, setErro] = useState("");

  function aoEnviar(event) {
    event.preventDefault();
    if (ideia.trim() === "") {
      setErro("Esse campo precisa ser prenchido");
      return;
    }
    setErro("");
    console.log("Enviado:", ideia);
  }

  return (
    <form onSubmit={aoEnviar} className={styles.meuFormulario}>
      <input
      className={styles.meuInput}
        type="text"
        value={ideia}
        onChange={event => setideia(event.target.value)}
        placeholder="Suas ideias"
      />
      {erro && <p style={{ color: "red" }}>{erro}</p>}
      <button type="submit" className={styles.Botao}>Enviar</button>

    </form>
  );
}