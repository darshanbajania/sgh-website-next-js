"use client";
import React from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
const Caraousel = () => {
  return (
    <Flickity>
      <div style={{ marginLeft: 5, marginRight: 5, width: "100%" }}>
        <img
          style={{ width: "100%" }}
          src="https://t4.ftcdn.net/jpg/04/45/14/67/360_F_445146770_BBDoeRCg2l0gz09D7D63NqgUYmh1bE34.jpg"
        />
      </div>
      <div style={{ marginLeft: 5, marginRight: 5, width: "100%" }}>
        <img
          style={{ width: "100%" }}
          src="https://t4.ftcdn.net/jpg/04/45/14/67/360_F_445146770_BBDoeRCg2l0gz09D7D63NqgUYmh1bE34.jpg"
        />
      </div>
      <div style={{ marginLeft: 5, marginRight: 5, width: "100%" }}>
        <img
          style={{ width: "100%" }}
          src="https://t4.ftcdn.net/jpg/04/45/14/67/360_F_445146770_BBDoeRCg2l0gz09D7D63NqgUYmh1bE34.jpg"
        />
      </div>
    </Flickity>
  );
};

export default Caraousel;
