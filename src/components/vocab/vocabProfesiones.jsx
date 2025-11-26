import React from "react";

const VocabProfesiones = ({ onBack }) => {
    const palabras = [
        { palabra: "Doctor" },
        { palabra: "Maestro" },
        { palabra: "Bombero" },
        { palabra: "Ingeniero" },
    ];

    return (
        <div className="categoria">
            <h2>Profesiones</h2>

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

export default VocabProfesiones;
