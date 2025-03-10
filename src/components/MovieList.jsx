import React from "react";

const MovieList = ({ movies, error }) => {
  if (error) {
    return <p>Error al obtener las películas. Intenta nuevamente más tarde.</p>;
  }

  if (movies.length === 0) {
    return <p>No se encontraron resultados.</p>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>Año: {movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
