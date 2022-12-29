import React from "react";
import { Slide } from "react-slideshow-image";

export default function ImageSlider({ images }) {
  const slideProperties = {
    duration: 2000,
    transitionDuration: 1,
    infinite: true,
    indicators: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    scale: 0.4,
    arrows: true,
  };
  return (
    <>
      <Slide {...slideProperties}>
        {images.map((e) => (
          <div key={e}>
            <div className="d-flex justify-content-center ">
              <img className="slideImg" alt="img" src={e ? e : ""} />
            </div>
          </div>
        ))}
      </Slide>
    </>
  );
}
