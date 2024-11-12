import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Card({ query, onClick }) {
  const [albumImage, setAlbumImage] = useState("");

  useEffect(() => {
    async function getAlbumImageURL() {
      const cachedImage = localStorage.getItem(`album-cover-${query}`);
      if (cachedImage) {
        setAlbumImage(cachedImage)
        return
      }
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
        const coverImage = data.results[0]?.cover_image
        localStorage.setItem(`album-cover-${query}`, coverImage)
        setAlbumImage(coverImage);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    if (query) {
      getAlbumImageURL(query);
    }
  }, [query]);
  return (
    <div onClick={onClick} className="aspect-w-1 aspect-h-1 max-w-96 p-3">
      {albumImage && (
        <img
          src={albumImage}
          alt={`${query} album cover`}
          className="object-cover w-full h-full"
        />
      )}
    </div>
  );
}

Card.propTypes = {
  query: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
