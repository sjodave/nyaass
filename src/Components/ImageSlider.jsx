import React from "react";

import { Slide } from "react-slideshow-image";

export default function ImageSlider({ images }) {
  const slideProperties = {
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    scale: 0.4,
    arrows: true,
  };
  return (
    <>
      <div>
        <div className="slide-container">
          <Slide {...slideProperties}>
            {images.map((e, index) => (
              <div id="slide-container" key={index}>
                <div className="dFlex">
                  <img
                    style={{
                      width: "40vw",
                      height: "40vw",
                      objectFit: "fill ",
                      borderRadius: "20px",
                      // margin: "50px",
                      padding: "10px",
                    }}
                    alt="img"
                    src={e ? e : ""}
                  />
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </>
  );
}
