import React, { useEffect, useState } from "react";
import "./ArticuloShooter.css";
import naveImg from "../../assets/Nave.png";

const ARTICULOS = ["el", "la", "los", "las", "un", "una", "unos", "unas"];

export default function Articulos({ cambiarPantalla }) {
  const [shipX, setShipX] = useState(50);
  const [shots, setShots] = useState([]);
  const [enemies, setEnemies] = useState([]);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [objetivo, setObjetivo] = useState("el");
  const [showLevel, setShowLevel] = useState(false);

  /* ---------------- MOVIMIENTO DE NAVE ---------------- */
  useEffect(() => {
    const mover = (e) => {
      if (e.key === "ArrowLeft") {
        setShipX((x) => Math.max(x - 5, 0));
      } else if (e.key === "ArrowRight") {
        setShipX((x) => Math.min(x + 5, 100));
      } else if (e.code === "Space") {
        disparar();
      }
    };
    window.addEventListener("keydown", mover);
    return () => window.removeEventListener("keydown", mover);
  }, []);

  /* ---------------- CREAR ENEMIGOS ---------------- */
  useEffect(() => {
    const intervalo = setInterval(() => {
      const palabra = ARTICULOS[Math.floor(Math.random() * ARTICULOS.length)];
      setEnemies((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          text: palabra,
          x: Math.random() * 90,
          y: 0,
        },
      ]);
    }, 1500 - level * 100);
    return () => clearInterval(intervalo);
  }, [level]);

  /* ---------------- MOVER ENEMIGOS ---------------- */
  useEffect(() => {
    const intervalo = setInterval(() => {
      setEnemies((prev) =>
        prev.map((e) => ({
          ...e,
          y: e.y + 1 + level,
        }))
      );
    }, 40);
    return () => clearInterval(intervalo);
  }, [level]);

  /* ---------------- DISPARAR ---------------- */
  const disparar = () => {
    setShots((prev) => [
      ...prev,
      {
        id: Date.now(),
        x: shipX + 3,
        y: 85,
      },
    ]);
  };

  /* ---------------- MOVER DISPAROS ---------------- */
  useEffect(() => {
    const intervalo = setInterval(() => {
      setShots((prev) => prev.map((s) => ({ ...s, y: s.y - 2 })));
    }, 30);
    return () => clearInterval(intervalo);
  }, []);

  /* ---------------- COLISIONES ---------------- */
  useEffect(() => {
    shots.forEach((shot) => {
      enemies.forEach((enemy) => {
        if (
          shot.y < enemy.y + 5 &&
          shot.y > enemy.y - 5 &&
          shot.x > enemy.x - 5 &&
          shot.x < enemy.x + 10
        ) {
          // Eliminar disparo y enemigo
          setShots((prev) => prev.filter((s) => s.id !== shot.id));
          setEnemies((prev) => prev.filter((e) => e.id !== enemy.id));

          // Puntaje
          if (enemy.text === objetivo) {
            setScore((s) => s + 10);
          } else {
            setScore((s) => Math.max(0, s - 5));
          }

          // Subir nivel
          if (score > 0 && score % 50 === 0) {
            setLevel((l) => l + 1);
            setShowLevel(true);
            setTimeout(() => setShowLevel(false), 1500);
          }
        }
      });
    });
  }, [shots, enemies, objetivo, score]);

  /* ---------------- OBJETIVO CAMBIA POR NIVEL ---------------- */
  useEffect(() => {
    setObjetivo(ARTICULOS[Math.floor(Math.random() * ARTICULOS.length)]);
  }, [level]);

  return (
    <div className="shooter-container">
      {/* Barra superior */}
      <div className="info-bar">
        <span>🎯 Artículo objetivo: {objetivo}</span>
        <span>⭐ Puntos: {score} | Nivel: {level}</span>
      </div>

      {/* Botón salir */}
      <button className="exit-btn" onClick={() => cambiarPantalla("gramatica")}>
        🚪 Salir
      </button>

      {/* Área del juego */}
      <div className="game-area">
        {/* Nave */}
        <img
          src={naveImg}
          className="player-ship"
          style={{ left: `${shipX}%` }}
          alt="Nave"
        />

        {/* Disparos */}
        {shots.map((shot) => (
          <div
            key={shot.id}
            className="shot"
            style={{ left: `${shot.x}%`, top: `${shot.y}%` }}
          ></div>
        ))}

        {/* Enemigos */}
        {enemies.map((enemy) => (
          <div
            key={enemy.id}
            className="enemy"
            style={{ left: `${enemy.x}%`, top: `${enemy.y}%` }}
          >
            {enemy.text}
          </div>
        ))}

        {/* Mensaje de nivel */}
        {showLevel && (
          <div className="level-complete">🚀 ¡Nivel {level}! 🚀</div>
        )}
      </div>
    </div>
  );
}
