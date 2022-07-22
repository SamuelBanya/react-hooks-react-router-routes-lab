import React from "react";
import { movies } from "../data";

function Movies() {
  let movieDivs = movies.map((movie) => (
    <div key={movie.title}>
      <h3>Title: {movie.title}</h3>
      <h3>Time: {movie.time}</h3>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Movies Page</h1>
      {movieDivs}
    </div>
  );
}

export default Movies;
