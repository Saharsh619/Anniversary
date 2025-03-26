import { useState, useEffect } from "react";
import "./games.css";

export default function GameScreen() {
    const [lives, setLives] = useState(3);
    const [revealed, setRevealed] = useState(Array(12).fill(false));
    const [gameOver, setGameOver] = useState(false);
    const [win, setWin] = useState(false);
    const [items, setItems] = useState([]);

    // Initialize game items only once
    useEffect(() => {
        const newItems = Array(12).fill("💣");
        const heartPositions = new Set();
        while (heartPositions.size < 2) {
            heartPositions.add(Math.floor(Math.random() * 12));
        }
        heartPositions.forEach(pos => newItems[pos] = "❤️");
        setItems(newItems);
    }, []); // Empty dependency array ensures this runs only once

    const handleClick = (index) => {
        if (revealed[index] || gameOver || win) return;

        const newRevealed = [...revealed];
        newRevealed[index] = true;
        setRevealed(newRevealed);

        if (items[index] === "💣") {
            setLives(prevLives => {
                const newLives = prevLives - 1;
                if (newLives === 0) {
                    setGameOver(true);
                }
                return newLives;
            });
        } else {
            setTimeout(() => setWin(true), 1000); // Show win screen after 2 seconds
        }
    };

    if (win) {
        return (
            <div className="win-screen">
                🎉 You Found a Heart! 🎉
            </div>
        );
    }

    if (gameOver) {
        return (
            <div className="game-over">
                😢 Game Over
            </div>
        );
    }

    return (
        <div className="game-container">
            <h2>Find a ❤️ Before Losing All Lives</h2>
            <div className="lives">{"❤️".repeat(lives)}</div>
            <div className="grid">
                {items.map((item, index) => (
                    <div 
                        key={index} 
                        className={`block ${revealed[index] ? "revealed" : ""}`} 
                        onClick={() => handleClick(index)}
                    >
                        {revealed[index] ? item : "❓"}
                    </div>
                ))}
            </div>
        </div>
    );
}
