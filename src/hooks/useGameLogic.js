import { useEffect, useState } from "react";

export const useGameLogic = (initialCardValues) => {
  const [cardValues, setCardValues] = useState(initialCardValues);

  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(true);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isPreviewPhase, setIsPreviewPhase] = useState(false);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const initializeGame = () => {
    const shuffled = shuffleArray(cardValues);

    const finalCards = shuffled.map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatched: false,
    }));

    setCards(finalCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setScore(0);
    setMoves(0);
    setIsLocked(true);
    setIsGameStarted(false);
    setIsPreviewPhase(false);
  };

  useEffect(() => {
    initializeGame();
  }, [cardValues]);

  const startGame = () => {
    setIsGameStarted(true);
    setIsPreviewPhase(true);
    setIsLocked(true);

    setCards((prev) =>
      prev.map((card) => ({ ...card, isFlipped: true }))
    );

    setTimeout(() => {
      setCards((prev) =>
        prev.map((card) => ({ ...card, isFlipped: false }))
      );
      setIsPreviewPhase(false);
      setIsLocked(false);
    }, 3000);
  };

  const handleCardClick = (card) => {
    if (
      !isGameStarted ||
      isPreviewPhase ||
      card.isFlipped ||
      card.isMatched ||
      isLocked ||
      flippedCards.length === 2
    ) {
      return;
    }

    setCards((prev) =>
      prev.map((c) =>
        c.id === card.id ? { ...c, isFlipped: true } : c
      )
    );

    const newFlippedCards = [...flippedCards, card.id];
    setFlippedCards(newFlippedCards);

    if (flippedCards.length === 1) {
      setIsLocked(true);
      setMoves((prev) => prev + 1);

      const firstCard = cards[flippedCards[0]];

      if (firstCard.value === card.value) {
        setTimeout(() => {
          setMatchedCards((prev) => [...prev, firstCard.id, card.id]);
          setScore((prev) => prev + 1);

          setCards((prev) =>
            prev.map((c) =>
              c.id === firstCard.id || c.id === card.id
                ? { ...c, isMatched: true }
                : c
            )
          );

          setFlippedCards([]);
          setIsLocked(false);
        }, 500);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              newFlippedCards.includes(c.id)
                ? { ...c, isFlipped: false }
                : c
            )
          );
          setFlippedCards([]);
          setIsLocked(false);
        }, 1000);
      }
    }
  };

  const isGameComplete = matchedCards.length === cardValues.length;

  return {
    cards,
    score,
    moves,
    isGameComplete,
    initializeGame,
    startGame,
    isGameStarted,
    handleCardClick,

    // every time the card values change (IMPORTANT)
    setNewCardValues: setCardValues,
  };
};
