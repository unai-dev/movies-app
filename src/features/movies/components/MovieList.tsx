import type { FC } from "react";
import type { Movie } from "../interfaces/movie.interface";
import { MovieCard } from "./MovieCard";

interface Props {
  movies: Movie[];
}

export const MovieList: FC<Props> = ({ movies }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 m-10">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};
