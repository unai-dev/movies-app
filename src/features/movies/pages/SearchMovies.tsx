import { MovieList } from "../components/MovieList";
import { CustomHeader } from "../../../shared/components/CustomHeader";
import { SearchBar } from "../../../shared/components/SearchBar";
import { useMovie } from "../hooks/useMovie";

export const SearchMovies = () => {
  const { movies, handleSearchByGenre } = useMovie();

  return (
    <>
      {/* HEADER */}
      <CustomHeader
        header="Buscador de peliculas"
        description="Busca tus peliculas favoritas"
      />

      {/* SEARCH BAR */}
      <SearchBar
        placeholder="Buscar peliculas"
        onHandleSearch={(genre: string) => handleSearchByGenre(genre)}
      />

      {/* LIST */}
      {movies && <MovieList movies={movies} />}
    </>
  );
};
