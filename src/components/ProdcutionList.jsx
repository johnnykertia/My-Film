/* eslint-disable no-unused-vars */
import React from "react";
import marvel from "./../assets/images/marvel.png";
import nationalG from "./../assets/images/nationalG.png";
import pixar from "./../assets/images/pixar.png";
import starwar from "./../assets/images/starwar.png";

function ProdcutionList() {
  const productionHouseList = [
    {
      id: 1,
      image: pixar,
    },
    {
      id: 2,
      image: marvel,
    },
    {
      id: 3,
      image: starwar,
    },
    {
      id: 4,
      image: nationalG,
    },
    {
      id: 5,
      image: starwar,
    },
    {
      id: 6,
      image: marvel,
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
