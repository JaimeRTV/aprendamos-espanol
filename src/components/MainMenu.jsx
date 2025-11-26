import React from "react";
import "../styles/menu.css";

function MainMenu({ setPantalla }) {
    return (
        <div className="menu-container">

            {/* Mascota al centro */}
            <div className="mascota-container">
                <img
                    src={require("../assets/logo/mascota.png")}
                    alt="Mascota"
                    className="mascota-img"
                />
                <h1 className="titulo">¡Aprendamos Español!</h1>
            </div>

            {/* Botones del menú */}
            <div className="menu-botones">

                <button onClick={() => setPantalla("vocabulario")} className="menu-btn">
                    📚 Vocabulario
                </button>

                <button onClick={() => setPantalla("gramatica")} className="menu-btn">
                    📘 Gramática
                </button>

                <button onClick={() => setPantalla("juegos")} className="menu-btn">
                    🎮 Juegos Educativos
                </button>

                <button onClick={() => setPantalla("miProgreso")} className="menu-btn">
                    📊 Mi Progreso
                </button>

                <button onClick={() => setPantalla("configuracion")} className="menu-btn">
                    ⚙️ Configuración
                </button>

                <button onClick={() => setPantalla("salir")} className="menu-btn salir-btn">
                    🚪 Salir
                </button>

            </div>
        </div>
    );
}

export default MainMenu;
