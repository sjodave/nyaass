import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function CommunityMsg({ info }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      className="mb-5 mt-4"
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["mobile"]}
      dotListClass="custom-dot-list-style"
    >
      {info.map((ev) => {
        return (
          <div className="" key={ev.name}>
            <Card className="dFlex m-2">
              <Card.Img
                variant="top"
                src={ev.img}
                style={{ width: "20vh" }}
                className="mt-2"
              />
              <Card.Body>
                <Card.Title>{ev.name}</Card.Title>
                <Card.Text>{ev.info}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </Carousel>
  );
}
