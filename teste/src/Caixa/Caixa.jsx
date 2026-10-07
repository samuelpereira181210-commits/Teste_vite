import { useState } from "react";
import styles from './Caixa.module.css'
import FormularioContato from "../FormularioContato/FormularioContato.jsx";

export default function Caixa() {

  return (
    <div className={styles.pagina}>
      <div className={styles.caixa}>
        <h1 className={styles.titulo}>Seu Painel de Ideias</h1>
        <p className={styles.subtitulo}>
            Suas ideias de projeto ali em baixo
            </p>
            
        <FormularioContato />
        </div>
      </div>

  );
}