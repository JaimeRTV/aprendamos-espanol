import React from "react";

const VocabColores = ({ onBack }) => {
    const palabras = [
        { palabra: "Rojo" },
        { palabra: "Azul" },
        { palabra: "Amarillo" },
        { palabra: "Verde" },
    ];

    return (
        <div className="categoria">
            <h2>Colores</h2>

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

export default VocabColores;
