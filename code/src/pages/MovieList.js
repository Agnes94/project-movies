import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=b5cad1b08293d5f69add78a8d839f05b&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => {
        setMovies(json.results);
      });
  }, []);

  return (
    <div>
      {movies.map(movie => (
        <Link key={movie.id} to={`movies/${movie.id}`}>
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} />
          <h2>{movie.title}</h2>
        </Link>
      ))}
    </div>
  );
};