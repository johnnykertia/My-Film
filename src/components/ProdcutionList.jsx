/* eslint-disable no-unused-vars */
import React from "react";
import disney from "./../assets/images/disney.png";
import marvel from "./../assets/Images/marvel.png";
import nationalG from "./../assets/Images/nationalG.png";
import pixar from "./../assets/Images/pixar.png";
import starwar from "./../assets/Images/starwar.png";
import starwarV from "./../assets/Videos/star-wars.mp4";
import disneyV from "./../assets/Videos/disney.mp4";
import marvelV from "./../assets/Videos/marvel.mp4";
import nationalGeographicV from "./../assets/Videos/national-geographic.mp4";
import pixarV from "./../assets/Videos/pixar.mp4";

function ProdcutionList() {
  const productionHouseList = [
    {
      id: 1,
      image: pixar,
      video: pixarV,
    },
    {
      id: 2,
      image: marvel,
      video: marvelV,
    },
    {
      id: 3,
      image: starwar,
      video: starwarV,
    },
    {
      id: 4,
      image: nationalG,
      video: nationalGeographicV,
    },
    {
      id: 5,
      image: starwar,
      video: starwarV,
    },
    {
      id: 6,
      image: marvel,
      video: marvelV,
    },
  ];
  return (
    <div className="grid grid-rows-2 grid-flow-col gap-4 justify-evenly mt-5 mx-8">
      {productionHouseList.map((item, index) => (
        <div key={index}>
          <img
            src={item.image}
            key={index}
            className="w-[15rem] border-[1px] md:border-none rounded-md hover:bg-sky-700"
          />
        </div>
      ))}
    </div>
  );
}

export default ProdcutionList;
