import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Import images
import mcdo1 from "../assets/Carousel/McDo (1).jpg";
import mcdo2 from "../assets/Carousel/McDo (2).jpg";
import mcdo3 from "../assets/Carousel/McDo (3).jpg";
import mcdo4 from "../assets/Carousel/McDo (4).jpg";
import mcdo5 from "../assets/Carousel/McDo (5).jpg";
import Careers from "../assets/Cards/CAREERS.jpg";
import Charity from "../assets/Cards/CHARITY.jpeg";
import Family from "../assets/Cards/FAMILY.jpg";
import McDelivery from "../assets/Cards/McDelivery.jpeg";
import Nxtgen from "../assets/Cards/NXTGEN.jpeg";
import Phapp from "../assets/Cards/PHAPP.jpeg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselItems = [mcdo1, mcdo2, mcdo3, mcdo4, mcdo5];

  const cardItems = [
    {
      img: McDelivery,
      title: "McDelivery",
      description: "Get your favorites delivered right to your doorstep",
      buttonText: "Order Now",
    },
    {
      img: Nxtgen,
      title: "NXTGEN",
      description: "Experience our next generation restaurant design",
      buttonText: "Learn More",
    },
    {
      img: Careers,
      title: "Careers",
      description: "Join our team and grow with us",
      buttonText: "Apply Now",
    },
    {
      img: Family,
      title: "Family Activities",
      description: "Fun activities for the whole family",
      buttonText: "Explore",
    },
    {
      img: Phapp,
      title: "Download the App",
      description: "Get exclusive deals with our mobile app",
      buttonText: "Download",
    },
    {
      img: Charity,
      title: "Charity",
      description: "Our initiatives to give back to the community",
      buttonText: "Discover",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  return (
    <div className="bg-base-100">
      {/* Enhanced Carousel */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <motion.div
          className="flex h-full"
          animate={{ x: `-${currentSlide * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {carouselItems.map((item, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <img
                src={item}
                alt={`McDonald's ${index + 1}`}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          ))}
        </motion.div>

        {/* Carousel Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle glass"
          aria-label="Previous slide"
        >
          <FiChevronLeft className="text-white text-xl" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle glass"
          aria-label="Next slide"
        >
          <FiChevronRight className="text-white text-xl" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? "bg-primary w-6" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 md:px-16 lg:px-20 py-12 md:py-16">
        {cardItems.map((item, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer aspect-square" // Square aspect ratio
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)",
            }}
          >
            {/* Crisp square image */}
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover object-center" // Ensure proper focus
                loading="lazy"
                style={{
                  imageRendering: "-webkit-optimize-contrast", // Crisper rendering
                  transform: "translateZ(0)", // Force GPU rendering
                }}
              />
            </motion.div>

            {/* White text overlay at bottom */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
              <motion.h3
                className="text-2xl font-bold text-white mb-2 uppercase tracking-wider"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.3 }}
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  fontFamily: "'Helvetica Now', sans-serif", // Clean modern font
                }}
              >
                {item.title.split(" ").map((word, i) => (
                  <React.Fragment key={i}>
                    {word}
                    <br /> {/* Line breaks between words */}
                  </React.Fragment>
                ))}
              </motion.h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
