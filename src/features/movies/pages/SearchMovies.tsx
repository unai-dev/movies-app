import { useEffect, useState } from "react";

import { getAllMovies } from "../actions/get-all-movies";
import { MovieList } from "../components/MovieList";
import type { Movie } from "../interfaces/movie.interface";
import { CustomHeader } from "../../../shared/components/CustomHeader";
import { SearchBar } from "../../../shared/components/SearchBar";

export const SearchMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const loadMovies = async () => {
      setMovies(await getAllMovies());
    };

    loadMovies();
  }, []);

  return (
    <>
      <CustomHeader
        header="Buscador de peliculas"
        description="Busca tus peliculas favoritas"
      />

      <SearchBar
        placeholder="Buscar peliculas"
        onHandleSearch={(event) => console.log({ event })}
      />

      <MovieList movies={movies} />
    </>
  );
};
