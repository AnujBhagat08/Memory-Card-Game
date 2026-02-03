import { useState } from "react";
import { Card } from "./components/Card";
import { GameHeader } from "./components/GameHeader";
import { WinMessage } from "./components/WinMessage";
import { useGameLogic } from "./hooks/useGameLogic";

const CARD_SETS = [
  // Fruits
  [
    "🍎",
    "🍌",
    "🍇",
    "🍊",
    "🍓",
    "🥝",
    "🍑",
    "🍒",
    "🍎",
    "🍌",
    "🍇",
    "🍊",
    "🍓",
    "🥝",
    "🍑",
    "🍒",
  ],

  // Animals
  [
    "🐶",
    "🐱",
    "🐭",
    "🐹",
    "🐰",
    "🦊",
    "🐻",
    "🐼",
    "🐶",
    "🐱",
    "🐭",
    "🐹",
    "🐰",
    "🦊",
    "🐻",
    "🐼",
  ],

  // Emojis
  [
    "😀",
    "😂",
    "😍",
    "😎",
    "😭",
    "😡",
    "🤯",
    "🥶",
    "😀",
    "😂",
    "😍",
    "😎",
    "😭",
    "😡",
    "🤯",
    "🥶",
  ],

  // Sports
  [
    "⚽",
    "🏀",
    "🏈",
    "🎾",
    "🏐",
    "🏓",
    "🏸",
    "🥊",
    "⚽",
    "🏀",
    "🏈",
    "🎾",
    "🏐",
    "🏓",
    "🏸",
    "🥊",
  ],
];

const getRandomCardSet = () => {
  const randomIndex = Math.floor(Math.random() * CARD_SETS.length);
  return CARD_SETS[randomIndex];
};

function App() {
  // stable initial card set
  const [initialCards, setInitialCards] = useState(getRandomCardSet());

  const {
    cards,
    score,
    moves,
    handleCardClick,
    initializeGame,
    startGame,
    isGameStarted,
    isGameComplete,
    setNewCardValues,
  } = useGameLogic(initialCards); // <-- stable value

  const startNewGame = () => {
    const newCards = getRandomCardSet(); // new random set
    setNewCardValues(newCards);
    initializeGame();
  };

  return (
    <div className="app">
      <GameHeader
        score={score}
        moves={moves}
        onReset={startNewGame}
        onStart={startGame} // startGame handles preview + start
        isGameStarted={isGameStarted}
      />

      {isGameComplete && <WinMessage moves={moves} onNewGame={startNewGame} />}

      <div className="cards-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
