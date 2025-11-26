import React from "react";
import "./Inicio.css";
import mascota from "../assets/logo/mascota.png";

function Inicio({ onComenzar }) {
    return (
        <div className="inicio-container">
            <div className="inicio-card">
                {/* Mascota */}
                <img src={mascota} alt="Mascota" className="mascota-img" />

                {/* Texto de bienvenida */}
                <h1 className="titulo-bienvenida">¡Bienvenido a Aprendamos Español!</h1>

                {/* Botón */}
                <button className="btn-comenzar" onClick={onComenzar}>
                    Comenzar
                </button>
            </div>
        </div>
    );
}

export default Inicio;
