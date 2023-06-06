/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function HeaderItem({ name, Icon }) {
  return (
    <div className="text-white flex items-center 
    max-sm:text-[10px] md:text-[20px]:gap-7 font-semibold gap-2 cursor-pointer
    hover:underline underline-offset-8 mb-2">
      <Icon />
      <h2 className="">{name}</h2>
    </div>
  );
}

export default HeaderItem;
