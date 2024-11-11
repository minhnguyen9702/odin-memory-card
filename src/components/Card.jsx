import { useEffect, useState } from "react";

function Card() {
  const [albumImage, setAlbumImage] = useState("");

  useEffect(() => {
    async function getAlbumImageURL() {
      const query = "Nevermind Nirvana";
      const token = "lsPaKjHxamCQZkmaEpuCrTlScjhJGlbOgHteVoLb";
      const url = `https://api.discogs.com/database/search?q=${encodeURIComponent(
        query
      )}&type=release&token=${token}`;

      try {
        const response = await fetch(url, { mode: "cors" });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setAlbumImage(data.results[0].cover_image);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    getAlbumImageURL();
  }, []);
  return (
    <div>
      {albumImage && <img src={albumImage} alt="Nevermind album cover" />}
    </div>
  );
}

export default Card;
