import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
import Mcdo from "../assets/McD-png.png";
const Navbar = () => {
  return (
    <div className="px-72 py-5">
      <div className="text-center flex items-center justify-between">
        <img src={Mcdo} alt="" className="w-20" />
        <button className="text-red-600 hover:text-black duration-200 text-lg font-bold cursor-pointer">
          Home
        </button>
        <button className="text-red-600 hover:text-black duration-200 text-lg font-bold cursor-pointer">
          About Us
        </button>
        <button className="text-red-600 hover:text-black duration-200 text-lg font-bold cursor-pointer">
          Family Activities
        </button>
        <button className="text-red-600 hover:text-black duration-200 text-lg font-bold cursor-pointer">
          McDelivery
        </button>
        <button className="text-red-600 hover:text-black duration-200 text-lg font-bold cursor-pointer">
          Careers
        </button>
        <button className="text-red-600 hover:text-black duration-200 text-lg font-bold cursor-pointer">
          Opportunities
        </button>
        <RiMenu3Fill className="text-red-600 hover:text-black duration-200 size-8 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
