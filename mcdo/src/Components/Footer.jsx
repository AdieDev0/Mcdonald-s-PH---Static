import React from "react";
import appStore from "../assets/Footer/app-store.png";
import googlePlay from "../assets/Footer/google-play.png";
import McDelivery from "../assets/Footer/McDelivery-Logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-yellow-500 px-4 md:px-20 lg:px-80 py-14 flex gap-5 items-center justify-between">
      <div>
        <img src={McDelivery} alt="" className="cursor-pointer" />
      </div>
      <div>
        <img src={appStore} alt="" className="w-32 mb-2 cursor-pointer" />
        <img src={googlePlay} alt="" className="w-32 cursor-pointer" />
      </div>
      <div className="flex flex-col">
        <button className="text-left text-sm cursor-pointer hover:text-stone-600 duration-200">
          Privacy Policy
        </button>
        <button className="text-left text-sm cursor-pointer hover:text-stone-600 duration-200">
          Our Food
        </button>
        <button className="text-left text-sm cursor-pointer hover:text-stone-600 duration-200">
          Terms and Conditions
        </button>
        <button className="text-left text-sm cursor-pointer hover:text-stone-600 duration-200">
          Opportunities
        </button>
      </div>
      <div className="flex flex-col">
        <button className="text-left text-sm cursor-pointer hover:text-stone-600 duration-200">
          About Us
        </button>
        <button className="text-left text-sm cursor-pointer hover:text-stone-600 duration-200">
          Careers
        </button>
        <button className="text-left text-sm cursor-pointer hover:text-stone-600 duration-200">
          Menu
        </button>
        <button className="text-left text-sm cursor-pointer hover:text-stone-600 duration-200">
          Family Activities
        </button>
      </div>
      <div>
        <h5>Follow us on</h5>
        <div className="flex gap-3 mt-2">
          <FaFacebookSquare className="size-8 cursor-pointer" />
          <FaSquareXTwitter className="size-8 cursor-pointer" />
          <FaInstagram className="size-8 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
