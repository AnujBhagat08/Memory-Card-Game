export const GameHeader = ({
  score,
  moves,
  onReset,
  onStart,
  isGameStarted,
}) => {
  return (
    <div className="game-header">
      <h1>🎮 Memory Card Game</h1>

      <div className="stats">
        <span>Score: {score}</span>
        <span>Moves: {moves}</span>
      </div>

      {!isGameStarted ? (
        <button className="start-btn" onClick={onStart}>
          Start Game
        </button>
      ) : (
        <button className="reset-btn" onClick={onReset}>
          New Game
        </button>
      )}
    </div>
  );
};
