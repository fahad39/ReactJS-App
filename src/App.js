import { useEffect } from "react";
import "./App.css";
import { create } from "apisauce";

import SearchIcon from "./search.svg";

//  2671c405

const API_URL = "http://www.omdbapi.com/";

const api = create({
  baseURL: API_URL,
  headers: { Accept: "application/json" },
});

function App() {
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  const searchMovies = async (searchTerm) => {
    const response = await api.get("/", {
      apikey: "2671c405",
      s: searchTerm,
    });
    console.log(response.data.Search);
  };

  return (
    <div className="app">
      <h1>Movie Land</h1>
    </div>
  );
}

export default App;
