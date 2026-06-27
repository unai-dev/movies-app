import { useState } from "react";
import type { Movie } from "./features/movies/interfaces/movie.interface";
import { getAllMovies } from "./features/movies/actions/get-all-movies";
import { MovieList } from "./features/movies/components/MovieList";

export const MoviesApp = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleClicked = async () => {
    setMovies(await getAllMovies());
  };

  return (
    <>
      <button onClick={handleClicked}>Get All</button>
      <MovieList movies={movies} />
    </>
  );
};
