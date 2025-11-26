import React, { useState, useEffect } from "react";
import "../../styles/gramatica.css";

import dragon1 from "../../assets/images/dragon.png";
import dragon2 from "../../assets/images/dragon2.png";

export default function Gramatica({ cambiarPantalla }) {

  const [frame, setFrame] = useState(0);

  // Animación: alternar imágenes cada X ms
  useEffect(() => {
    const intervalo = setInterval(() => {
      setFrame((prev) => (prev === 0 ? 1 : 0));
    }, 800); // velocidad del parpadeo / aleteo

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="gram-container">

      <button className="back-btn" onClick={() => cambiarPantalla("menu")}>
        ⬅ Regresar
      </button>

      {/* Imagen animada */}
      <img
        src={frame === 0 ? dragon1 : dragon2}
        alt="Dragon animado"
        className="gram-img"
      />

      <h1 className="gram-title">Gramática</h1>
      <p className="gram-subtitle">Aprende jugando 📚✨</p>

      <div className="gram-grid">
        <button className="gram-card" onClick={() => cambiarPantalla("articulos")}>📘 Artículos</button>
        <button className="gram-card" onClick={() => cambiarPantalla("verbos")}>🔤 Verbos</button>
        <button className="gram-card" onClick={() => cambiarPantalla("pronombres")}>👧❓ Pronombres</button>
        <button className="gram-card" onClick={() => cambiarPantalla("adverbios")}>⏰ Adverbios</button>
        <button className="gram-card" onClick={() => cambiarPantalla("oraciones")}>📝 Oraciones</button>
      </div>

    </div>
  );
}
