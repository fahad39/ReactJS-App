import { useEffect, useState } from "react";
import "./App.css";
import { create } from "apisauce";

import SearchIcon from "./search.svg";
import MoviesCard from "./MoviesCard";

//  2671c405

const API_URL = "http://www.omdbapi.com/";

const api = create({
  baseURL: API_URL,
  headers: { Accept: "application/json" },
});

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  const searchMovies = async (searchTerm) => {
    console.log("searching for", searchTerm);
    const response = await api.get("/", {
      apikey: "2671c405",
      s: searchTerm,
    });
    console.log(response.data.Search);
    setMovies(response.data.Search);
  };

  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for a movie"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt={"search icon"}
          onClick={() => searchMovies(search)}
        />
      </div>
      <div className="container">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MoviesCard
              key={movie.imdbID}
              year={movie.Year}
              moviePoster={movie.Poster}
              movieTitle={movie.Title}
              movieType={movie.Type}
            />
          ))
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
