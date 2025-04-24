import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
import Mcdo from "../assets/McD-png.png";
const Navbar = () => {
  return (
    <div>
      <div className="text-center flex items-center justify-between">
        <img src={Mcdo} alt="" className="w-20" />
        <button>Home</button>
        <button>About Us</button>
        <button>Family Activities</button>
        <button>McDelivery</button>
        <button>Careers</button>
        <button>Opportunities</button>
        <RiMenu3Fill />
      </div>
    </div>
  );
};

export default Navbar;
