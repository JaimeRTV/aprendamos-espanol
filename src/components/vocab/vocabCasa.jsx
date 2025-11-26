import "../../styles/vocab.css";


export default function VocabCasa({ onBack }) {
    return (
        <div className="vocab-container">
            <h2 className="vocab-title">Hogar / Casa</h2>

            <div className="vocab-list">

                <div className="vocab-item">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/69/69524.png"
                        className="vocab-img"
                        alt="Casa"
                    />
                    <p>Casa</p>
                </div>

                <div className="vocab-item">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
                        className="vocab-img"
                        alt="Cubiertos"
                    />
                    <p>Cubiertos</p>
                </div>

                <div className="vocab-item">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3643/3643028.png"
                        className="vocab-img"
                        alt="Decoracion"
                    />
                    <p>Decoración</p>
                </div>

                <div className="vocab-item">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1046/1046853.png"
                        className="vocab-img"
                        alt="Puerta"
                    />
                    <p>estek</p>
                </div>

                <div className="vocab-item">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/628/628283.png"
                        className="vocab-img"
                        alt="Maceta"
                    />
                    <p>Maceta</p>
                </div>

                <div className="vocab-item">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1048/1048319.png"
                        className="vocab-img"
                        alt="auto"
                    />
                    <p>Auto?</p>
                </div>

                <div className="vocab-item">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1048/1048273.png"
                        className="vocab-img"
                        alt="wtf"
                    />
                    <p>wtf</p>
                </div>

                <div className="vocab-item">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/878/878052.png"
                        className="vocab-img"
                        alt="ora"
                    />
                    <p>ora</p>
                </div>

            </div>

            <button className="back-btn" onClick={onBack}>Regresar</button>
        </div>
    );
}
