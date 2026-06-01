import styles from "@/components/DesafioTema/DesafioTema.module.css";

import { useState } from "react";

const DesafioTema = () => {
  const [tema, setTema] = useState("claro");

  return (
    <>
      <div className={`${styles.divFundo} ${tema == "escuro" ? styles.escuro : styles.claro}`}>
        <h1 className={styles.texto}>Desafio Tema Classe</h1>

        <button className="button" onClick={() => setTema("escuro")} >
          Escuro
        </button>

        <button className="button" onClick={() => setTema("claro")} >
          
        </button>
      </div>
    </>
  );
};

export default DesafioTema;
