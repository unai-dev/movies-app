import axios from "axios";

export const movieAPI = axios.create({
  baseURL: import.meta.env.VITE_MOVIE_BASE_URL,
});
