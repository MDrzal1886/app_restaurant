import { useEffect } from "react";
import Carousel from "bootstrap/js/src/carousel";

import Opinion from "./Opinion";

import { opinions } from "../data";

import "../sass/opinions.scss";

const Opinions = () => {
  const opinionElements = opinions.map((opinion) => (
    <Opinion key={opinion.id} {...opinion} />
  ));

  useEffect(() => {
    const myCarousel = document.querySelector("#opinionsSlider");
    const carousel = new Carousel(myCarousel, {
      interval: 5000,
      wrap: true,
    });
    carousel.cycle();
  }, []);

  return (
    <div
      id="opinionsSlider"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="false"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#opinionsSlider"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#opinionsSlider"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#opinionsSlider"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#opinionsSlider"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner opinionsSlider">{opinionElements}</div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#opinionsSlider"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#opinionsSlider"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Opinions;
