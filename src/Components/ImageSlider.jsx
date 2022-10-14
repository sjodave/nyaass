import React from "react";

import { Slide } from "react-slideshow-image";

export default function ImageSlider({ images }) {
  const slideProperties = {
    duration: 2000,
    transitionDuration: 1000,
    infinite: true,
    indicators: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    scale: 0.4,
    arrows: true,
  };
  return (
    <>
      <div className="slide-container">
        <Slide {...slideProperties}>
          {images.map((e, index) => (
            <div id="slide-container" key={index}>
              <div className="d-flex justify-content-center">
                <img
                  style={{
                    width: "90vh",
                    height: "90vh",
                    objectFit: "fill",
                    // borderRadius: "20px",
                  }}
                  alt="img"
                  src={e ? e : ""}
                />
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
}
