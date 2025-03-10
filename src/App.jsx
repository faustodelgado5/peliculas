import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList.jsx";
import SearchHistory from "./components/SearchHistory";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) return;

    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?s=${searchQuery}&apikey=9bb8ce7c`
        );
        const data = await response.json();
        if (data.Response === "True") {
          setMovies(data.Search);
          setError(null);

          // Actualizar historial de búsquedas
          setHistory((prevHistory) => {
            const updatedHistory = [...new Set([searchQuery, ...prevHistory])]; // Evitar duplicados
            return updatedHistory.slice(0, 5); // Mantener solo los últimos 5
          });
        } else {
          setMovies([]);
          setError("No se encontraron resultados");
        }
      } catch (error) {
        setError("Hubo un error al contactar con la API");
        setMovies([]);
        console.log(error);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  return (
    <div>
      <h1>Buscador de Películas</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <MovieList movies={movies} error={error} />
      <SearchHistory history={history} />
    </div>
  );
};

export default App;
