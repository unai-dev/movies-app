import { movieAPI } from "../api/movie-api";
import type { Movie } from "../interfaces/movie.interface";
import type { MovieResponse } from "../interfaces/movie.response";

export const getMoviesByGenre = async (genre: string): Promise<Movie[]> => {
  const response = await movieAPI.get<MovieResponse[]>(`/genre/${genre}`);

  return response.data.map((movie) => ({
    id: movie.id,
    title: movie.title,
    description: movie.description,
    image_url: movie.image_url,
    stars: movie.stars,
    year: movie.year,
  }));
};
