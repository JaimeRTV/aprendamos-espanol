import React, { useEffect, useState } from "react";
import dragonImg from "../../assets/images/dragonGuardian.png";
import "../../styles/gramatica/articulo.css";

function Verbos({ cambiarPantalla }) {
  const oraciones = [
    { texto: "Yo ___ a la escuela.", correcta: "voy" },
    { texto: "Ella ___ una carta.", correcta: "escribe" },
    { texto: "Nosotros ___ futbol.", correcta: "jugamos" },
    { texto: "Ellos ___ una película.", correcta: "ven" },
    { texto: "Tú ___ muy rápido.", correcta: "corres" },
    { texto: "Mi mamá ___ la comida.", correcta: "cocina" },
    { texto: "Los niños ___ en el parque.", correcta: "juegan" },
    { texto: "Yo ___ un libro.", correcta: "leo" },
    { texto: "El perro ___ agua.", correcta: "bebe" },
    { texto: "Nosotros ___ música.", correcta: "escuchamos" },
  ];

  const opcionesBase = ["voy", "escribe", "jugamos", "ven", "corres", "cocina", "juegan", "leo", "bebe", "escuchamos"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(15);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [showFire, setShowFire] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  const totalSentences = oraciones.length;

  /* Mezclar opciones */
  useEffect(() => {
    const opcionesMezcladas = [...opcionesBase]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);

    const correcta = oraciones[currentIndex].correcta;

    // Asegurar que la correcta esté incluida
    if (!opcionesMezcladas.includes(correcta)) {
      opcionesMezcladas[Math.floor(Math.random() * opcionesMezcladas.length)] = correcta;
    }

    setShuffledOptions(opcionesMezcladas.sort(() => Math.random() - 0.5));
  }, [currentIndex]);

  /* Temporizador */
  useEffect(() => {
    if (gameOver || win || selected) return;

    if (timeLeft <= 0) {
      perderVida();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, selected, gameOver, win]);

  const perderVida = () => {
    setFeedback("¡Tiempo agotado! 🔥");
    setShowFire(true);

    setTimeout(() => {
      setShowFire(false);
      setLives((l) => {
        const nuevo = l - 1;
        if (nuevo <= 0) setGameOver(true);
        else nextSentence();
        return nuevo;
      });
    }, 1500);
  };

  const nextSentence = () => {
    const next = currentIndex + 1;
    if (next >= totalSentences) {
      setWin(true);
      return;
    }
    setCurrentIndex(next);
    setTimeLeft(15);
    setSelected(null);
    setFeedback("");
  };

  const handleAnswer = (option) => {
    if (selected || gameOver || win) return;
    setSelected(option);

    const correcta = oraciones[currentIndex].correcta;

    if (option === correcta) {
      const bonus = Math.floor(timeLeft * 2);
      setScore((s) => s + 50 + bonus);
      setFeedback("¡Perfecto! ✅");

      setTimeout(nextSentence, 1200);
    } else {
      setFeedback(`¡Incorrecto! Era: ${correcta}`);
      setShowFire(true);

      setTimeout(() => {
        setShowFire(false);
        setLives((l) => {
          const nuevo = l - 1;
          if (nuevo <= 0) setGameOver(true);
          else nextSentence();
          return nuevo;
        });
      }, 1500);
    }
  };

  const resetGame = () => {
    setCurrentIndex(0);
    setLives(3);
    setTimeLeft(15);
    setScore(0);
    setGameOver(false);
    setWin(false);
    setSelected(null);
    setFeedback("");
    setShowFire(false);
  };

  return (
    <div className="dragon-container">
      <div className="info-bar">
        <div className="game-title">Dragón Guardián de los Verbos</div>
        <div>
          Puntos: {score} ⭐ | Vidas: {Array(lives).fill("❤️").join(" ")} |{" "}
          {currentIndex + 1}/{totalSentences}
        </div>
      </div>

      <button className="exit-btn" onClick={() => cambiarPantalla("gramatica")}>
        ← Volver
      </button>

      {!gameOver && !win && (
        <div className="game-area">
          <div className="dragon-wrapper">
            <img src={dragonImg} alt="Dragón" className="dragon-image" />
            {showFire && <div className="dragon-fire"></div>}
          </div>

          <div className="dragon-text">¡Completa la oración con el verbo correcto!</div>

          <div className="sentence">
            <h2>{oraciones[currentIndex].texto}</h2>
          </div>

          <div className="timer-bar">
            <div
              className="timer-progress"
              style={{ width: `${(timeLeft / 15) * 100}%` }}
            ></div>
            <span>{timeLeft}s</span>
          </div>

          {feedback && (
            <div
              className={`feedback ${
                feedback.includes("Perfecto") ? "correct" : "wrong"
              }`}
            >
              {feedback}
            </div>
          )}

          <div className="options-grid">
            {shuffledOptions.map((opt) => (
              <button
                key={opt}
                className={`option-btn ${
                  selected === opt
                    ? opt === oraciones[currentIndex].correcta
                      ? "correct"
                      : "wrong"
                    : ""
                }`}
                onClick={() => handleAnswer(opt)}
                disabled={!!selected}
              >
                {opt.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}

      {win && (
        <div className="treasure-win">
          <div className="win-message">
            <div>¡LO LOGRASTE! 🎉</div>
            <div>Dominas los verbos 🐉</div>
            <div>Puntuación final: {score}</div>
          </div>
          <button className="restart-btn" onClick={resetGame}>Reintentar</button>
          <button className="exit-btn" onClick={() => cambiarPantalla("gramatica")}>Menú</button>
        </div>
      )}

      {gameOver && (
        <div className="game-over-overlay">
          <div className="game-over">
            <div>¡El dragón te quemó! 🔥</div>
            <div>Puntuación: {score}</div>
            <button className="restart-btn" onClick={resetGame}>Reintentar</button>
            <button className="exit-btn" onClick={() => cambiarPantalla("gramatica")}>Menú</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Verbos;
