import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Caraousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true, // Adjusts the height of the carousel based on the current slide
    prevArrow: (
      <button className="carousel-prev absolute top-1/2 left-4 transform -translate-y-1/2">
        {"<"}
      </button>
    ),
    nextArrow: (
      <button className="carousel-next absolute top-1/2 right-4 transform -translate-y-1/2">
        {">"}
      </button>
    ),
  };
  return (
    <Slider {...settings} className="relative overflow-hidden ">
      {/* Carousel Items */}
      <div className="carousel-item h-64 md:h-96 lg:h-128 ">
        {/* Your content for the first item */}
        <img
          // src="https://via.placeholder.com/800x400"
          src="https://t4.ftcdn.net/jpg/04/45/14/67/360_F_445146770_BBDoeRCg2l0gz09D7D63NqgUYmh1bE34.jpg"
          alt="Carousel Item 1"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="carousel-item h-64 md:h-96 lg:h-128 ">
        {/* Your content for the second item */}
        <img
          src="https://via.placeholder.com/800x400"
          alt="Carousel Item 2"
          className="w-full h-full object-contain "
        />
      </div>

      <div className="carousel-item h-64 md:h-96 lg:h-128">
        {/* Your content for the third item */}
        <img
          src="https://via.placeholder.com/800x400"
          alt="Carousel Item 3"
          className="w-full h-full object-contain "
        />
      </div>

      {/* Add more items as needed */}
    </Slider>
  );
};

export default Caraousel;
