import React from "react";
import mcdo1 from "../assets/Carousel/McDo (1).jpg";
import mcdo2 from "../assets/Carousel/McDo (2).jpg";
import mcdo3 from "../assets/Carousel/McDo (3).jpg";
import mcdo4 from "../assets/Carousel/McDo (4).jpg";
import mcdo5 from "../assets/Carousel/McDo (5).jpg";

const Home = () => {

const cardItems = [
  {
    
  }
]

  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={mcdo1} className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={mcdo2} className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={mcdo3} className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={mcdo4} className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={mcdo5} className="w-full" />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>

    {/* CARDS SECTION */}
      <div>
        
      </div>
    </div>
  );
};

export default Home;
