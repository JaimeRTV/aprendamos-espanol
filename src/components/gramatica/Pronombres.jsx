import React, { useEffect, useState } from "react";
import dragonImg from "../../assets/images/dragonGuardian.png";
import "../../styles/gramatica/articulo.css"


// Pronombres que aparecerán
const pronombres = ["yo", "tú", "él", "ella", "nosotros", "ellos"];

// Oraciones con pronombre correcto
const oraciones = [
  { texto: "___ voy a la escuela.", correcto: "yo" },
  { texto: "___ comes muchas frutas.", correcto: "tú" },
  { texto: "___ juega fútbol.", correcto: "él" },
  { texto: "___ canta muy bonito.", correcto: "ella" },
  { texto: "___ vamos al parque.", correcto: "nosotros" },
  { texto: "___ viven en una casa grande.", correcto: "ellos" }
];

const Pronombres = () => {
  const [dragonX, setDragonX] = useState(50);
  const [balas, setBalas] = useState([]);
  const [objetivos, setObjetivos] = useState([]);
  const [indice, setIndice] = useState(0);
  const [vidas, setVidas] = useState(3);
  const [tiempo, setTiempo] = useState(15);
  const [gameOver, setGameOver] = useState(false);

  const oracionActual = oraciones[indice];

  // Movimiento del dragón
  useEffect(() => {
    const mover = (e) => {
      if (gameOver) return;

      if (e.key === "ArrowLeft" && dragonX > 0) {
        setDragonX((prev) => prev - 5);
      }
      if (e.key === "ArrowRight" && dragonX < 90) {
        setDragonX((prev) => prev + 5);
      }
      if (e.key === " ") {
        disparar();
      }
    };

    window.addEventListener("keydown", mover);
    return () => window.removeEventListener("keydown", mover);
  }, [dragonX, gameOver]);

  // Temporizador
  useEffect(() => {
    if (gameOver) return;

    if (tiempo === 0) {
      perderVida();
      return;
    }

    const timer = setTimeout(() => {
      setTiempo((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [tiempo, gameOver]);

  // Generar objetivos
  useEffect(() => {
    if (gameOver) return;

    const nuevos = pronombres.map((p) => ({
      texto: p,
      x: Math.random() * 90,
      y: 0
    }));

    setObjetivos(nuevos);
  }, [indice, gameOver]);

  // Movimiento de los pronombres
  useEffect(() => {
    if (gameOver) return;

    const intervalo = setInterval(() => {
      setObjetivos((prev) =>
        prev.map((obj) => ({
          ...obj,
          y: obj.y + 2
        }))
      );
    }, 80);

    return () => clearInterval(intervalo);
  }, [gameOver]);

  const disparar = () => {
    const nuevaBala = {
      x: dragonX,
      y: 85
    };

    setBalas((prev) => [...prev, nuevaBala]);
  };

  // Movimiento de las balas
  useEffect(() => {
    if (gameOver) return;

    const intervalo = setInterval(() => {
      setBalas((prev) =>
        prev
          .map((b) => ({ ...b, y: b.y - 3 }))
          .filter((b) => b.y > 0)
      );
    }, 40);

    return () => clearInterval(intervalo);
  }, [gameOver]);

  // Detección de colisiones
  useEffect(() => {
    balas.forEach((bala) => {
      objetivos.forEach((obj) => {
        const colX = Math.abs(bala.x - obj.x) < 5;
        const colY = Math.abs(bala.y - obj.y) < 5;

        if (colX && colY) {
          if (obj.texto === oracionActual.correcto) {
            siguienteRonda();
          } else {
            perderVida();
          }
        }
      });
    });
  }, [balas]);

  const siguienteRonda = () => {
    setIndice((prev) => (prev + 1) % oraciones.length);
    setTiempo(15);
    setBalas([]);
  };

  const perderVida = () => {
    if (vidas - 1 <= 0) {
      setGameOver(true);
    } else {
      setVidas((prev) => prev - 1);
      setTiempo(15);
    }
  };

  const reiniciar = () => {
    setDragonX(50);
    setBalas([]);
    setObjetivos([]);
    setIndice(0);
    setVidas(3);
    setTiempo(15);
    setGameOver(false);
  };

  return (
    <div className="game-container">
      <h1 className="game-title">🚀 Juego de Pronombres</h1>

      {!gameOver && (
        <>
          <div className="hud">
            <span>❤️ {vidas}</span>
            <span>⏱️ {tiempo}s</span>
          </div>

          <div className="oracion">
            {oracionActual.texto}
          </div>

          <div className="game-area">
            {/* Dragón */}
            <img
              src={dragonImg}
              alt="dragon"
              className="dragon"
              style={{ left: `${dragonX}%` }}
            />

            {/* Balas tipo láser */}
            {balas.map((bala, i) => (
              <div
                key={i}
                className="laser"
                style={{
                  left: `${bala.x}%`,
                  top: `${bala.y}%`
                }}
              />
            ))}

            {/* Pronombres flotando */}
            {objetivos.map((obj, i) => (
              <div
                key={i}
                className="target"
                style={{
                  left: `${obj.x}%`,
                  top: `${obj.y}%`
                }}
              >
                {obj.texto}
              </div>
            ))}
          </div>
        </>
      )}

      {gameOver && (
        <div className="game-over">
          <h2>💥 GAME OVER 💥</h2>
          <button onClick={reiniciar}>Reiniciar</button>
        </div>
      )}
    </div>
  );
};

export default Pronombres;
