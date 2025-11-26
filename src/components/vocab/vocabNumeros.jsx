import React from "react";

const VocabNumeros = ({ onBack }) => {
  const palabras = [
    { palabra: "Uno" },
    { palabra: "Dos" },
    { palabra: "Tres" },
    { palabra: "Cuatro" },
  ];

  return (
    <div className="categoria">
      <h2>Números</h2>

      <div className="lista-palabras">
        {palabras.map((p, i) => (
          <div key={i} className="tarjeta">
            <p>{p.palabra}</p>
          </div>
        ))}
      </div>

      <button onClick={onBack} className="btn-regresar">Regresar</button>
    </div>
  );
};

export default VocabNumeros;
