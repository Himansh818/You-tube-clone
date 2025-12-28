import axios from "axios";

const API_KEY = "YOUR_API_KEY";
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrendingMovies = () => {
  return axios.get(`${BASE_URL}/trending/movie/week`, {
    params: { api_key: API_KEY },
  });
};
