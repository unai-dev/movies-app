import { movieAPI } from "../api/movie-api";
import type { Movie } from "../interfaces/movie.interface";
import type { MovieResponse } from "../interfaces/movie.response";

export const getAllMovies = async (): Promise<Movie[]> => {
  const response = await movieAPI.get<MovieResponse[]>("");

  console.log(response.data);

  return response.data.map((movie) => ({
    id: movie.id,
    title: movie.title,
    description: movie.description,
    image_url: movie.image_url,
    year: movie.year,
  }));
};
