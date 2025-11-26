import React from "react";
import "../../styles/gramatica.css";

export default function Oraciones({ cambiarPantalla }) {
  return (
    <div className="gram-container">

      <h1 className="gram-title">Tipos de Oraciones</h1>
      <p className="gram-subtitle">Aprende las formas básicas</p>

      <div className="gram-content">
        <p>🟢 <b>Afirmativa:</b> "Yo estudio español."</p>
        <p>🔴 <b>Negativa:</b> "Yo no estudio español."</p>
        <p>🔵 <b>Interrogativa:</b> "¿Estudias español?"</p>
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
