import "../../styles/vocab.css";


export default function VocabPaises({ onBack }) {
    return (
        <div className="vocab-container">
            <h2 className="vocab-title">Países</h2>

            <div className="vocab-list">

                <div className="vocab-item">
                    <img
                        src="https://flagcdn.com/w320/mx.png"
                        className="vocab-img"
                        alt="México"
                    />
                    <p>México</p>
                </div>

                <div className="vocab-item">
                    <img
                        src="https://flagcdn.com/w320/us.png"
                        className="vocab-img"
                        alt="Estados Unidos"
                    />
                    <p>Estados Unidos</p>
                </div>

                <div className="vocab-item">
                    <img
                        src="https://flagcdn.com/w320/es.png"
                        className="vocab-img"
                        alt="España"
                    />
                    <p>España</p>
                </div>

                <div className="vocab-item">
                    <img
                        src="https://flagcdn.com/w320/fr.png"
                        className="vocab-img"
                        alt="Francia"
                    />
                    <p>Francia</p>
                </div>

                <div className="vocab-item">
                    <img
                        src="https://flagcdn.com/w320/ca.png"
                        className="vocab-img"
                        alt="Canadá"
                    />
                    <p>Canadá</p>
                </div>

                <div className="vocab-item">
                    <img
                        src="https://flagcdn.com/w320/br.png"
                        className="vocab-img"
                        alt="Brasil"
                    />
                    <p>Brasil</p>
                </div>

                <div className="vocab-item">
                    <img
                        src="https://flagcdn.com/w320/ar.png"
                        className="vocab-img"
                        alt="Argentina"
                    />
                    <p>Argentina</p>
                </div>

                <div className="vocab-item">
                    <img
                        src="https://flagcdn.com/w320/de.png"
                        className="vocab-img"
                        alt="Alemania"
                    />
                    <p>Alemania</p>
                </div>

            </div>

            <button className="back-btn" onClick={onBack}>Regresar</button>
        </div>
    );
}
