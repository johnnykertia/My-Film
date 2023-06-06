/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Service/GlobalApi";
import MovieCard from "./MovieCard";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
const screenWidth = window.innerWidth;

function MovieList({ listId, index_ }) {
  const [moviesList, setMoviesList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(listId).then((resp) => {
      //     console.log(resp.data.results);
      setMoviesList(resp.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <div className="relative">
      <HiOutlineChevronLeft
        onClick={() => sliderLeft(elementRef.current)}
        className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"} `}
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-4 md:gap-10 scrollbar-none scroll-smooth "
      >
        {moviesList.map((item, index) => (
          <MovieCard key={index} img={item} />
        ))}
      </div>
      <HiOutlineChevronRight
        onClick={() => sliderRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"}`}
      />
    </div>
  );
}

export default MovieList;
//HiOutlineChevronLeft
//HiOutlineChevronRight
