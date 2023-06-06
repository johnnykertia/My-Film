/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "../assets/images/Logoku.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center gap-3 md:gap-8">
        <img src={logo} className="w-[80px] md:w-[115px] object-cover" />
        <div className="hidden md:flex gap-7">
          {/* <h1 className="HiTv">Menu</h1> */}
          {menu.map((items) => (
            <HeaderItem name={items.name} Icon={items.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-4">
          {menu.map(
            (items, index) =>
              index < 2 && <HeaderItem name={items.name} Icon={items.icon} />
          )}
          <div className="mt-1" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute mt-3 bg-[#121212] p-2 md:p-4 rounded-md">
                {menu.map(
                  (items, index) =>
                    index > 1 && (
                      <HeaderItem name={items.name} Icon={items.icon} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src="http://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png"
        className="w-[40px] rounded-full"
      />
    </div>
  );
}

export default Header;
