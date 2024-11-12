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
    setAlbumCovers(shuffledAlbumCovers);
  };

  useEffect(() => {
    shuffleAlbumCovers()
  }, [])

  const addAlbum = (album) => {
    shuffleAlbumCovers();
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
    <div className="bg-zinc-900 p-4">
      <div className="mx-auto text-gray-100">
        <h1 className="text-3xl text-center font-bold">Album Cover Memory Game</h1>
        <p className="text-center">
          Get points by clicking on an image but don&apos;t click on any more
          than once!
        </p>
        <Scoreboard currentScore={currentScore} highScore={highScore} />
      </div>
      <div className="flex flex-wrap justify-center">
        {albumCovers.map((album) => (
          <Card key={album} query={album} onClick={() => addAlbum(album)} />
        ))}
      </div>
    </div>
  );
}

export default App;
