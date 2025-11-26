import React from "react";
import "../../styles/gramatica.css";

export default function Verbos({ cambiarPantalla }) {
  return (
    <div className="gram-container">

      <h1 className="gram-title">Verbos</h1>
      <p className="gram-subtitle">Aprende a usar los verbos</p>

      <div className="gram-content">
        <p>🔵 <b>Presente:</b> Yo hablo, tú comes, él vive</p>
        <p>🟢 <b>Pasado:</b> Yo hablé, tú comiste, él vivió</p>
        <p>🟣 <b>Futuro:</b> Yo hablaré, tú comerás, él vivirá</p>
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
