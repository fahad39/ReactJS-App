import React from "react";

function MoviesCard({ year, moviePoster, movieTitle, movieId, movieType }) {
  return (
    <div className="movie">
      <div>{year}</div>
      <div>
        <img
          src={
            moviePoster !== "N/A"
              ? moviePoster
              : "https://via.placeholder.com/400"
          }
          alt={movieTitle}
        />
      </div>
      <div>
        <span>{movieType}</span>
        <h3>{movieTitle}</h3>
      </div>
    </div>
  );
}

export default MoviesCard;
