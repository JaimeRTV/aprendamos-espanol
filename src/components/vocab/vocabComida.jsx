import "../../styles/vocab.css";


export default function VocabAlimentos({ onBack }) {
    return (
        <div className="vocab-container">
            <h2 className="vocab-title">Alimentos</h2>

            <div className="vocab-list">

                <div className="vocab-item">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/135/135700.png"
                        className="vocab-img"
                        alt="Berenjena"
                    />
                    <p>Berenjena</p>
                </div>

                <div className="vocab-item">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/415/415733.png"
                        className="vocab-img"
                        alt="Manzana"
                    />
                    <p>Manzana</p>
                </div>

                <div className="vocab-item">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/766/766378.png"
                        className="vocab-img"
                        alt="Leche"
                    />
                    <p>Leche</p>
                </div>

                <div className="vocab-item">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                        className="vocab-img"
                        alt="Hamburguesa"
                    />
                    <p>Hamburguesa</p>
                </div>

                <div className="vocab-item">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/590/590836.png"
                        className="vocab-img"
                        alt="Taza de Café"
                    />
                    <p>Taza de Café</p>
                </div>

                <div className="vocab-item">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png"
                        className="vocab-img"
                        alt="Pizza"
                    />
                    <p>Pizza</p>
                </div>

                <div className="vocab-item">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/415/415744.png"
                        className="vocab-img"
                        alt="Coctel de Frutas"
                    />
                    <p>Coctel de Frutas</p>
                </div>

                <div className="vocab-item">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/877/877951.png"
                        className="vocab-img"
                        alt="Hamburguesa"
                    />
                    <p>Hamburguesa</p>
                </div>

            </div>

            <button className="back-btn" onClick={onBack}>Regresar</button>
        </div>
    );
}
