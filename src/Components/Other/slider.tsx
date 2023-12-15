import React from "react";
import { artWorkModel } from "../../Interface";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

function Slide() {
  const data = [
    { name: "a", age: 8 },
    { name: "a", age: 8 },
    { name: "a", age: 8 },
    { name: "a", age: 8 },
  ];

  return (
    <Slider
      dots={true}
      infinite={true}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
    >
      {data.map((product) => (
        <div>
          <h3>{product.name}</h3>
          <p>{product.age}</p>
        </div>
      ))}
    </Slider>
  );
}

export default Slide;
