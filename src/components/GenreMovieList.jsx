/* eslint-disable no-unused-vars */
import React from "react";
import GenresList from "../Constant/GenresList";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <div>
      {GenresList.genere.map(
        (item, index) =>
          index <= 4 && (
            <div className="pt-7 px-8 md:px-16" key={index}>
              <h2 className="text-[10px] md:text-[25px] text-white font-bold uppercase">
                {item.name}
              </h2>
              <MovieList listId={item.id} />
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
