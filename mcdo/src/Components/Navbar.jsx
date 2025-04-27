import React, { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import Mcdo from "../assets/McD-png.png";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "#" },
    {
      name: "About Us",
      subLinks: [
        { name: "Our Story", href: "#" },
        { name: "Our Food", href: "#" },
        { name: "Our Stores", href: "#" },
      ],
    },
    { name: "Family Activities", href: "#" },
    { name: "McDelivery", href: "#" },
    { name: "Careers", href: "#" },
    {
      name: "Opportunities",
      subLinks: [
        { name: "Franchising", href: "#" },
        { name: "Property Leasing", href: "#" },
      ],
    },
  ];

  const linkVariants = {
    hover: {
      color: "#000000",
      transition: { duration: 0.2 },
    },
    initial: {
      color: "#dc2626",
    },
  };

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="px-4 md:px-20 lg:px-72 py-5">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.img
          src={Mcdo}
          alt="McDonald's Logo"
          className="w-16 md:w-20"
          whileHover={{ scale: 1.05 }}
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link, index) => (
            <React.Fragment key={index}>
              {link.subLinks ? (
                <div className="dropdown dropdown-hover">
                  <motion.div
                    tabIndex={0}
                    role="button"
                    className="text-lg font-bold cursor-pointer"
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    {link.name}
                  </motion.div>
                  <motion.ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm pt-5"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.subLinks.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        <motion.a
                          className="text-lg font-bold"
                          variants={linkVariants}
                          initial="initial"
                          whileHover="hover"
                        >
                          {subLink.name}
                        </motion.a>
                      </li>
                    ))}
                  </motion.ul>
                </div>
              ) : (
                <motion.button
                  className="text-lg font-bold cursor-pointer"
                  variants={linkVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  {link.name}
                </motion.button>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden"
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? (
            <RiCloseFill className="text-red-600 size-8" />
          ) : (
            <RiMenu3Fill className="text-red-600 size-8" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <React.Fragment key={index}>
                  {link.subLinks ? (
                    <li className="dropdown dropdown-bottom">
                      <motion.div
                        tabIndex={0}
                        role="button"
                        className="text-lg font-bold"
                        variants={linkVariants}
                        initial="initial"
                        whileHover="hover"
                      >
                        {link.name}
                      </motion.div>
                      <ul className="dropdown-content menu bg-base-100 rounded-box z-10 w-full p-2 shadow-sm mt-2 space-y-2">
                        {link.subLinks.map((subLink, subIndex) => (
                          <li key={subIndex}>
                            <motion.a
                              className="text-lg font-bold pl-4"
                              variants={linkVariants}
                              initial="initial"
                              whileHover="hover"
                            >
                              {subLink.name}
                            </motion.a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li>
                      <motion.button
                        className="text-lg font-bold w-full text-left"
                        variants={linkVariants}
                        initial="initial"
                        whileHover="hover"
                      >
                        {link.name}
                      </motion.button>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;