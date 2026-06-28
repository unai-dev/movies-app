import type { FC } from "react";
import type { Movie } from "../interfaces/movie.interface";
import { MovieCard } from "./MovieCard";

interface Props {
  movies: Movie[];
}

export const MovieList: FC<Props> = ({ movies }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-10">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-3"
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
};
