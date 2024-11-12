import { useState, useEffect } from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selectedAlbums, setSelectedAlbums] = useState(new Map());

  const albumCovers = [
    "Ants from Up There, Black Country New Road",
    "For the first time, Black Country New Road",
    "Schlagenheim, Black Midi",
    "Hellfire, Black Midi",
  ];

  const addAlbum = (album) => {
    setSelectedAlbums((prevAlbums) => {
      const newAlbums = new Map(prevAlbums);
      if (newAlbums.has(album)) {
        setCurrentScore(0);
        return new Map();
      } else {
        newAlbums.set(album, album);
        setCurrentScore((prevScore) => {
          const newScore = prevScore + 1;
          if (newScore > highScore) {
            setHighScore(newScore)
          }
          return newScore
        });
        return newAlbums;
      }
    });
  };

  return (
    <div>
      <h1>Album Cover Memory Game</h1>
      <Scoreboard currentScore={currentScore} highScore={highScore} />
      {albumCovers.map((album) => (
        <Card key={album} query={album} onClick={() => addAlbum(album)} />
      ))}
    </div>
  );
}

export default App;
