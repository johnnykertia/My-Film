/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import GlobalApi from "../Service/GlobalApi";
const Image_base = "https://image.tmdb.org/t/p/original/";
const screenWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    generateMovieDb();
  }, []);

  const generateMovieDb = () => {
    GlobalApi.getTrendingVideo.then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[250px] cursor-pointer left-14 "
        onClick={() => {
          sliderLeft(elementRef.current);
        }}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[250px] cursor-pointer right-10"
        onClick={() => {
          sliderRight(elementRef.current);
        }}
      />
      <div
        className="flex overflow-x-auto w-full px-3 md:px-16 py-4 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <img
            key={index}
            src={Image_base + item.backdrop_path}
            className="min-w-full md:h-[550px] object-cover
            object-left-top mr-4 rounded-md"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
