/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ img }) {
  return (
    <>
      <img
        src={IMAGE_BASE_URL + img.poster_path}
        className="w-[110px] md:w-[200px] rounded-lg cursor-pointer
        hover:scale-110 transition-all duration-150 ease-in mt-5"
      />
    </>
  );
}

export default MovieCard;
