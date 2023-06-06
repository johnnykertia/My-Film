/* eslint-disable no-unused-vars */
import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "2ec17053245e1be5018174dd837c9d95";
const movieGenreList =
  "https://api.themoviedb.org/3/discover/movie?api_key=2ec17053245e1be5018174dd837c9d95";
//https://api.themoviedb.org/3/trending/all/day?api_key=2ec17053245e1be5018174dd837c9d95
//https://api.themoviedb.org/3/discover/movie?api_key=2ec17053245e1be5018174dd837c9d95
const getTrendingVideo = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieGenreList + "&with_genres=" + id);

export default { getTrendingVideo, getMovieByGenreId };
