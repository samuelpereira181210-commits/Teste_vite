import { useState } from "react";
import styles from './Caixa.module.css'
import FormularioContato from "../FormularioContato/FormularioContato.jsx";

export default function Caixa() {

  return (
    <div className={styles.pagina}>
      <div className={styles.caixa}>
        <FormularioContato />
      </div>
    </div>

  );
}