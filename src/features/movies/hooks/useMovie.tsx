import { useEffect, useState } from "react";
import { getAllMovies } from "../actions/get-all-movies";
import { getMoviesByGenre } from "../actions/get-movies-by-genre";
import type { Movie } from "../interfaces/movie.interface";

export const useMovie = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      const loadMovies = async () => {
        setMovies(await getAllMovies());
      };
      loadMovies();
    }, 1000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  const handleSearchByGenre = async (genre: string) => {
    genre = genre.toLowerCase().trim();

    if (genre === "") return;

    const movies = await getMoviesByGenre(genre);

    setMovies(movies);
  };

  return {
    movies,
    handleSearchByGenre,
  };
};
