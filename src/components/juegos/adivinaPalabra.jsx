import React, { useState } from "react";

function AdivinaPalabra({ onBack }) {
    const palabras = [
        { palabra: "gato", pista: "Animal que dice 'miau'." },
        { palabra: "casa", pista: "Lugar donde vives." },
        { palabra: "manzana", pista: "Fruta roja o verde." },
        { palabra: "sol", pista: "Da luz durante el día." },
    ];

    const [actual] = useState(
        palabras[Math.floor(Math.random() * palabras.length)]
    );

    const [respuesta, setRespuesta] = useState("");
    const [mensaje, setMensaje] = useState("");

    const verificar = () => {
        if (respuesta.toLowerCase() === actual.palabra.toLowerCase()) {
            setMensaje("¡Correcto! 🎉");
        } else {
            setMensaje("Incorrecto, intenta de nuevo ❌");
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <button onClick={onBack} style={{ marginBottom: "20px" }}>← Regresar</button>
            <h1>Adivina la palabra</h1>
            <p><strong>Pista:</strong> {actual.pista}</p>

            <input
                type="text"
                value={respuesta}
                onChange={(e) => setRespuesta(e.target.value)}
                placeholder="Escribe la palabra"
                style={{ padding: "10px", fontSize: "18px", marginTop: "15px" }}
            />

            <br /><br />

            <button
                onClick={verificar}
                style={{ padding: "10px 20px", fontSize: "18px" }}
            >
                Verificar
            </button>

            <p style={{ fontSize: "20px", marginTop: "20px" }}>{mensaje}</p>
        </div>
    );
}

export default AdivinaPalabra;
