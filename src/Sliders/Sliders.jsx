import React from "react";
import './Sliders.css'

export const Sliders = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-image">
              <img
                src="/images/trabajo-comunitario1.jpg"
                className="d-block w-100"
                alt="imgComunitaria1"
              />
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-image">
              <img
                src="/images/trabajo-comunitario2.jpg"
                className="d-block w-100"
                alt="imgComunitaria2"
              />
            </div>{" "}
          </div>
          <div className="carousel-item">
            <div className="carousel-image">
              <img
                src="/images/trabajo-comunitario1.jpg"
                className="d-block w-100"
                alt="imgComunitaria3"
              />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
