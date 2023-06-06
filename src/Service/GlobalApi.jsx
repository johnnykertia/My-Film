/* eslint-disable no-unused-vars */
import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";

const movieGenreList = `https://api.themoviedb.org/3/discover/movie?api_key=${
  import.meta.env.VITE_SOME_KEY
}`;

const getTrendingVideo = axios.get(
  movieBaseUrl + `/trending/all/day?api_key=${import.meta.env.VITE_SOME_KEY}`
);

const getMovieByGenreId = (id) =>
  axios.get(movieGenreList + "&with_genres=" + id);

export default { getTrendingVideo, getMovieByGenreId };
