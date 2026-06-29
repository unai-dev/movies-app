import { useEffect, useRef, useState } from "react";
import { getAllMovies } from "../actions/get-all-movies";
import { getMoviesByGenre } from "../actions/get-movies-by-genre";
import type { Movie } from "../interfaces/movie.interface";

export const useMovie = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const moviesCache = useRef<Record<string, Movie[]>>({});

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      const loadMovies = async () => {
        const movies = await getAllMovies();
        setMovies(movies);
      };
      loadMovies();
    }, 700);

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  const handleSearchByGenre = async (genre: string) => {
    genre = genre.toLowerCase().trim();

    if (moviesCache.current[genre]) {
      setMovies(moviesCache.current[genre]);
    }

    if (genre === "") {
      setMovies(await getAllMovies());
    }

    const movies = await getMoviesByGenre(genre);

    moviesCache.current[genre] = movies;
    console.log(moviesCache);

    setMovies(movies);
  };

  return {
    movies,
    handleSearchByGenre,
  };
};
