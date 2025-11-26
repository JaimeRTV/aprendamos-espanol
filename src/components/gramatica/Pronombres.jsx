import React from "react";
import "../../styles/gramatica.css";

export default function Pronombres({ cambiarPantalla }) {
  return (
    <div className="gram-container">

      <h1 className="gram-title">Pronombres Indefinidos</h1>
      <p className="gram-subtitle">Muy usados en conversaciones diarias</p>

      <div className="gram-content">
        <p>👤 <b>Alguien</b> – una persona no específica</p>
        <p>🔍 <b>Algo</b> – una cosa no específica</p>
        <p>❓ <b>Nadie</b> – ninguna persona</p>
        <p>⭕ <b>Nada</b> – ninguna cosa</p>
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
