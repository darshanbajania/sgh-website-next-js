"use client";
import React from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
const Caraousel = ({ carouselData }) => {
  return (
    <Flickity>
      {carouselData?.map((item) => {
        return (
          <div
            key={item.id}
            style={{ marginLeft: 5, marginRight: 5, width: "100%" }}
          >
            <img style={{ width: "100%" }} src={item?.image} />
          </div>
        );
      })}
    </Flickity>
  );
};

export default Caraousel;
