import React from "react";

const VocabEscuela = ({ onBack }) => {
    const palabras = [
        { palabra: "Libro" },
        { palabra: "Lápiz" },
        { palabra: "Maestro" },
        { palabra: "Escritorio" },
    ];

    return (
        <div className="categoria">
            <h2>Escuela</h2>

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

export default VocabEscuela;
