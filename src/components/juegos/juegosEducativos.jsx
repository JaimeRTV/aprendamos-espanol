import "../../styles/juegos.css";

export default function JuegosEducativos({ onBack, seleccionarJuego }) {
    return (
        <div className="juegos-container">

            <button className="back-btn" onClick={onBack}>
                ⬅ Regresar
            </button>

            <h1 className="juegos-title">Juegos Educativos</h1>

            <p className="juegos-subtitle">
                Aprende español jugando. ¡Selecciona un juego para comenzar!
            </p>

            <div className="juegos-grid">

                <button
                    className="juego-card"
                    onClick={() => seleccionarJuego("memorama")}
                >
                    🧠 Memorama
                </button>

                <button
                    className="juego-card"
                    onClick={() => seleccionarJuego("adivina")}
                >
                    ❓ Adivina la Palabra
                </button>

                <button
                    className="juego-card"
                    onClick={() => seleccionarJuego("imagen-correcta")}
                >
                    🖼 Selecciona la Imagen Correcta
                </button>

            </div>
        </div>
    );
}
