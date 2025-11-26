import React from "react";

const VocabSaludos = ({ onBack }) => {
    const palabras = [
        { palabra: "Hola" },
        { palabra: "Adiós" },
        { palabra: "Buenos días" },
        { palabra: "Buenas noches" },
    ];

    return (
        <div className="categoria">
            <h2>Saludos</h2>

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

export default VocabSaludos;
