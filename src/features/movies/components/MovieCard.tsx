import type { FC } from "react";
import type { Movie } from "../interfaces/movie.interface";

interface Props {
  movie: Movie;
}

export const MovieCard: FC<Props> = ({ movie }) => {
  return (
    <>
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden  hover:shadow-lg transition-shadow duration-300">
        <div className="p-5">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {movie.title}
          </h2>
          <p className="text-gray-600 text-sm">{movie.description}</p>
        </div>

        <div className="w-full h-80 overflow-hidden">
          <img
            src={movie.image_url}
            alt={movie.title}
            className="w-full h-full  hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="shadow-lg bg-transparent rounded-2xl p-2 text-center m-5">
          <p>{Array.from({ length: movie.stars }).map(() => "⭐")}</p>
        </div>
      </div>
    </>
  );
};
