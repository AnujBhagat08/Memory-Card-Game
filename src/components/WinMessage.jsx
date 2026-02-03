export const WinMessage = ({ moves, onNewGame }) => {
  return (
    <div className="win-overlay">
      <div className="win-message">
        <h2>🎉 Congratulations!</h2>
        <p>You completed the game in {moves} moves!</p>

        <button className="win-btn" onClick={onNewGame || (() => {})}>
           New Game
        </button>
      </div>
    </div>
  );
};
