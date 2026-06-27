import type { FC } from "react";
import type { Movie } from "../interfaces/movie.interface";

interface Props {
  movies: Movie[];
}

export const MovieList: FC<Props> = ({ movies }) => {
  return (
    <>
      <div>
        {movies.map((m) => (
          <div className="flex flex-row row-start-3 mb-3 bg-yellow-100 border shadow-lg w-md gap-2 items-center">
            <h2>{m.title}</h2>
            <img width={150} height={150} src={m.image_url} />
            <p>{m.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};
