export default function VocabAnimales({ onBack }) {
    return (
        <div className="vocab-container">
            <h2 className="vocab-title">Animales</h2>

            <div className="vocab-list">
                <div className="vocab-item">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
                        className="vocab-img"
                        alt="Perro"
                    />
                    <p>Perro</p>
                </div>

                <div className="vocab-item">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/616/616430.png"
                        className="vocab-img"
                        alt="Gato"
                    />
                    <p>Gato</p>
                </div>

                {/* Añadir más aquí */}
            </div>

            <button className="back-btn" onClick={onBack}>
                Regresar
            </button>
        </div>
    );
}
