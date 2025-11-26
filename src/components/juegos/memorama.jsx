import React, { useState, useEffect } from "react";
import "./memorama.css";

/**
 * Memorama funcional y estable:
 * - Cada carta es { id, value, matched }
 * - deck se crea y baraja una sola vez al montar
 * - flipped guarda índices de cartas volteadas (máx 2)
 * - locked evita que el usuario haga clic mientras comprobamos
 */

const BASE_VALUES = ["🐶", "🐱", "🐰", "🐸"]; // puedes cambiar/agregar

// Fisher-Yates shuffle (no muta el array original si pasas copia)
function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// Crea el deck: duplica los valores, crea objetos con id y los baraja
function createDeck(values) {
    const doubled = values.concat(values).map((v, i) => ({
        id: i,       // id único por posición inicial antes del shuffle
        value: v,
        matched: false,
    }));
    const shuffled = shuffleArray(doubled).map((card, idx) => ({
        ...card,
        id: idx, // reasignamos id por posición en el deck barajado (útil como key)
    }));
    return shuffled;
}

export default function Memorama({ onBack }) {
    const [deck, setDeck] = useState(() => createDeck(BASE_VALUES));
    const [flipped, setFlipped] = useState([]); // indices (posiciones) de cartas volteadas ahora
    const [locked, setLocked] = useState(false);
    const [pairsFound, setPairsFound] = useState(0);

    // Reiniciar juego helper (si quieres botón reiniciar)
    const resetGame = () => {
        setDeck(createDeck(BASE_VALUES));
        setFlipped([]);
        setLocked(false);
        setPairsFound(0);
    };

    const handleClick = (index) => {
        if (locked) return;
        if (flipped.includes(index)) return;
        if (deck[index].matched) return;

        const newFlipped = [...flipped, index];
        setFlipped(newFlipped);

        if (newFlipped.length === 2) {
            setLocked(true);
            const [a, b] = newFlipped;
            if (deck[a].value === deck[b].value) {
                // acierto: marcar matched en deck
                setTimeout(() => {
                    setDeck(prevDeck => {
                        const copy = prevDeck.slice();
                        copy[a] = { ...copy[a], matched: true };
                        copy[b] = { ...copy[b], matched: true };
                        return copy;
                    });
                    setFlipped([]);
                    setLocked(false);
                    setPairsFound(prev => prev + 1);
                }, 700);
            } else {
                // error: voltearlas después de un tiempo
                setTimeout(() => {
                    setFlipped([]);
                    setLocked(false);
                }, 700);
            }
        }
    };

    useEffect(() => {
        if (pairsFound === BASE_VALUES.length) {
            // Opcional: mensaje cuando termine
            // alert("¡Felicidades! Encontraste todas las parejas.");
            // podrías show modal, animación, etc.
        }
    }, [pairsFound]);

    return (
        <div className="memorama-container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 720, margin: "0 auto" }}>
                <button className="btn-volver" onClick={onBack}>⬅ Regresar</button>
                <div style={{ textAlign: "center" }}>
                    <h2 className="titulo">🎮 Memorama</h2>
                    <div style={{ fontSize: 14, color: "#555" }}>{pairsFound} / {BASE_VALUES.length} parejas encontradas</div>
                </div>
                <div>
                    <button className="btn-reiniciar" onClick={resetGame}>Reiniciar ↺</button>
                </div>
            </div>

            <div className="grid">
                {deck.map((card, i) => {
                    const isOpen = flipped.includes(i) || card.matched;
                    return (
                        <div
                            key={card.id}
                            className={`carta ${isOpen ? "abierta" : ""}`}
                            onClick={() => handleClick(i)}
                        >
                            {isOpen ? card.value : "❓"}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
