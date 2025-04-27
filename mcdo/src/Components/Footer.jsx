import React from "react";
import { motion } from "framer-motion";
import appStore from "../assets/Footer/app-store.png";
import googlePlay from "../assets/Footer/google-play.png";
import McDelivery from "../assets/Footer/McDelivery-Logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <motion.div
      className="bg-yellow-500 px-6 md:px-20 lg:px-40 py-14 flex flex-col md:flex-row gap-10 md:gap-5 items-center justify-between"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* McDelivery Logo */}
      <motion.div whileHover={{ scale: 1.1 }}>
        <img
          src={McDelivery}
          alt="McDelivery"
          className="cursor-pointer w-32 md:w-40"
        />
      </motion.div>

      {/* App Store & Google Play */}
      <motion.div
        className="flex flex-col items-center md:items-start"
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={appStore}
          alt="App Store"
          className="w-32 mb-2 cursor-pointer"
        />
        <img
          src={googlePlay}
          alt="Google Play"
          className="w-32 cursor-pointer"
        />
      </motion.div>

      {/* Links Column 1 */}
      <motion.div
        className="flex flex-col items-center md:items-start"
        whileHover={{ scale: 1.05 }}
      >
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
      </motion.div>

      {/* Links Column 2 */}
      <motion.div
        className="flex flex-col items-center md:items-start"
        whileHover={{ scale: 1.05 }}
      >
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
      </motion.div>

      {/* Socials */}
      <motion.div
        className="flex flex-col items-center md:items-start"
        whileHover={{ scale: 1.05 }}
      >
        <h5 className="font-semibold">Follow us on</h5>
        <div className="flex gap-3 mt-2">
          <FaFacebookSquare className="size-8 cursor-pointer hover:text-stone-600 duration-200" />
          <FaSquareXTwitter className="size-8 cursor-pointer hover:text-stone-600 duration-200" />
          <FaInstagram className="size-8 cursor-pointer hover:text-stone-600 duration-200" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
