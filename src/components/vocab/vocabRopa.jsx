import React from "react";

const VocabRopa = ({ onBack }) => {
    const palabras = [
        { palabra: "Camisa" },
        { palabra: "Pantalón" },
        { palabra: "Zapatos" },
        { palabra: "Sombrero" },
    ];

    return (
        <div className="categoria">
            <h2>Ropa</h2>

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

export default VocabRopa;
