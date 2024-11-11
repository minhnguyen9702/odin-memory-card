import { useEffect, useState } from "react";
import PropTypes from 'prop-types';


function Card({ query }) {
  const [albumImage, setAlbumImage] = useState("");

  useEffect(() => {
    async function getAlbumImageURL() {
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
        setAlbumImage(data.results[0]?.cover_image);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    if (query) {
      getAlbumImageURL(query);
    }
  }, [query]);
  return (
    <div>
      {albumImage && <img src={albumImage} alt="Nevermind album cover" />}
    </div>
  );
}

Card.propTypes = {
  query: PropTypes.string
}

export default Card;
