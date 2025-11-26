import React from "react";
import "../styles/vocabulario.css";

function Vocabulario({ cambiarPantalla, onSelectCategoria }) {
    return (
        <div className="vocab-container">

            {/* Botón de regreso */}
            <button className="back-btn" onClick={() => cambiarPantalla("menu")}>
                ⬅ Regresar
            </button>

            <h1 className="vocab-title">Vocabulario</h1>

            <p className="vocab-text">
                Selecciona una categoría para comenzar a aprender nuevas palabras.
            </p>

            <div className="vocab-grid">

                <button className="vocab-card"
                    onClick={() => onSelectCategoria("paises")}
                >
                    🌎 Países
                </button>

                <button className="vocab-card"
                    onClick={() => onSelectCategoria("comida")}
                >
                    🍎 Alimentos
                </button>

                <button className="vocab-card"
                    onClick={() => onSelectCategoria("animales")}
                >
                    🐾 Animales
                </button>

                <button className="vocab-card"
                    onClick={() => onSelectCategoria("casa")}
                >
                    🏠 Hogar
                </button>

                <button className="vocab-card"
                    onClick={() => onSelectCategoria("escuela")}
                >
                    🎒 Escuela
                </button>

                <button className="vocab-card"
                    onClick={() => onSelectCategoria("familia")}
                >
                    👨‍👩‍👧‍👦 Familia
                </button>

                <button className="vocab-card"
                    onClick={() => onSelectCategoria("ropa")}
                >
                    👕 Ropa
                </button>

                <button className="vocab-card"
                    onClick={() => onSelectCategoria("profesiones")}
                >
                    👩‍🏫 Profesiones
                </button>

                <button className="vocab-card"
                    onClick={() => onSelectCategoria("colores")}
                >
                    🎨 Colores
                </button>

                <button className="vocab-card"
                    onClick={() => onSelectCategoria("numeros")}
                >
                    🔢 Números
                </button>

            </div>

        </div>
    );
}

export default Vocabulario;
