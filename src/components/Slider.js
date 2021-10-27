import { useEffect } from "react";
import Carousel from "bootstrap/js/src/carousel";
import GoToMenuButton from "./GoToMenuButton";
import burgerImg from "../img/burger.jpg";
import pastaImg from "../img/pasta.jpg";
import pizzaImg from "../img/pizza.jpg";

import "../sass/slider.scss";

const Slider = () => {
  useEffect(() => {
    const myCarousel = document.querySelector("#homePageSlider");
    const carousel = new Carousel(myCarousel, {
      interval: 5000,
      wrap: true,
    });
    carousel.cycle();
  }, []);

  return (
    <div
      id="homePageSlider"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="false"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#homePageSlider"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#homePageSlider"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#homePageSlider"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={burgerImg}
            className="d-block w-100 sliderImg"
            alt="Burger"
          />
          <div className="carousel-caption">
            <h5 className="titleFontFamyli">Burgery</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              at ullam ipsum id sed, explicabo, recusandae rerum harum minus
              iste nesciunt animi alias excepturi voluptatem enim labore
              doloribus. Nam, iure!
            </p>
            <GoToMenuButton type="burgers" />
          </div>
        </div>
        <div className="carousel-item">
          <img src={pizzaImg} className="d-block w-100 sliderImg" alt="Pizza" />
          <div className="carousel-caption">
            <h5 className="titleFontFamyli">Pizza</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta,
              quis. Rem dolor id architecto sapiente maxime nobis perferendis
              totam amet excepturi dolorem voluptate, omnis aliquam numquam
              delectus quis. Sit, ratione.
            </p>
            <GoToMenuButton type="pizza" />
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={pastaImg}
            className="d-block w-100 sliderImg"
            alt="Makaron"
          />
          <div className="carousel-caption">
            <h5 className="titleFontFamyli">Makarony</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae mollitia dolorum, deserunt, officiis culpa nobis error
              earum non, accusantium labore excepturi nulla in consectetur
              voluptatibus commodi cum. Illum, perferendis optio.
            </p>
            <GoToMenuButton type="pastas" />
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#homePageSlider"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#homePageSlider"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
