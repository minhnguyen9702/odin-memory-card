import { useState, useEffect } from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selectedAlbums, setSelectedAlbums] = useState(new Map());

  const [albumCovers, setAlbumCovers] = useState([
    "Ants from Up There, Black Country New Road",
    "For the first time, Black Country New Road",
    "Schlagenheim, Black Midi",
    "Hellfire, Black Midi",
    "If You're Feeling Sinister, Belle and Sebastian",
    "Album. Girls",
    "In the Aeroplane Over the Sea, Neutral Milk Hotel",
    "In Rainbows, Radiohead",
    "By the Time I Get to Phoenix, Injury Reserve",
    "The Glow Pt. 2, The Microphones",
    "Illinois, Sufjan Stevens",
    "Slanted and Enchanted, Pavement",
  ]);

  const shuffleAlbumCovers = () => {
    const shuffledAlbumCovers = [...albumCovers].sort(
      () => Math.random() - 0.5
    );
    setAlbumCovers(shuffledAlbumCovers)
  };

  const addAlbum = (album) => {
    shuffleAlbumCovers()
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
            setHighScore(newScore);
          }
          return newScore;
        });
        return newAlbums;
      }
    });
  };

  return (
    <div>
      <h1>Album Cover Memory Game</h1>
      <p>Get points by clicking on an image but don&apos;t click on any more than once!</p>
      <Scoreboard currentScore={currentScore} highScore={highScore} />
      <div className="flex flex-wrap">
        {albumCovers.map((album) => (
          <Card key={album} query={album} onClick={() => addAlbum(album)} />
        ))}
      </div>
    </div>
  );
}

export default App;
