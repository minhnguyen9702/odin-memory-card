import { useState, useEffect } from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  return (
    <>
      <Scoreboard score={score} highScore={highScore} />
      <Card/>
    </>
  );
}

export default App;
