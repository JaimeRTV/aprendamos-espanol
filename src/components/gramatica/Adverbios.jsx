import React from "react";
import "../../styles/gramatica.css";

export default function Adverbios({ cambiarPantalla }) {
  return (
    <div className="gram-container">

      <h1 className="gram-title">Adverbios de Frecuencia</h1>
      <p className="gram-subtitle">Expresan cada cuánto pasa algo</p>

      <div className="gram-content">
        <p>🌞 <b>Siempre</b> – 100%</p>
        <p>🙂 <b>Casi siempre</b> – 80%</p>
        <p>😐 <b>A veces</b> – 50%</p>
        <p>😕 <b>Casi nunca</b> – 10%</p>
        <p>🚫 <b>Nunca</b> – 0%</p>
      </div>

      <button className="back-btn" onClick={() => cambiarPantalla("gramatica")}>
        ⬅ Regresar
      </button>

      <button className="exit-btn" onClick={() => cambiarPantalla("inicio")}>
        🚪 Salir
      </button>

    </div>
  );
}
