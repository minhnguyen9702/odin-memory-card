function Scoreboard({ currentScore, highScore }) {
  return (
    <div className="text-center text-xl font-semibold">
      <h2>Current Score: {currentScore}</h2>
      <h2>High Score: {highScore}</h2>
    </div>
  );
}

export default Scoreboard;
