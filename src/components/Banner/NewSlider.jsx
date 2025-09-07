import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const NewSlider = () => {
  return (
    <div className="rounded-lg">
      <div className="carousel-container lg:col-span-1 rounded-lg overflow-hidden">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          interval={1500}
        >
          <div>
            <img
              className="w-full h-[28rem] object-cover"
              src="https://images.pexels.com/photos/7713548/pexels-photo-7713548.jpeg"
              alt="Slide 1"
            />
          </div>
          <div className="h-full">
            <img
              className="w-full h-[28rem] object-cover"
              src="https://images.pexels.com/photos/7972653/pexels-photo-7972653.jpeg"
              alt="Slide 2"
            />
          </div>
          <div>
            <img
              className="w-full h-[28rem] object-cover"
              src="https://images.pexels.com/photos/7972556/pexels-photo-7972556.jpeg"
              alt="Slide 3"
            />
          </div>
          <div>
            <img
              className="w-full h-[28rem] object-cover"
              src="https://images.pexels.com/photos/7972512/pexels-photo-7972512.jpeg"
              alt="Slide 4"
            />
          </div>
          <div>
            <img
              className="w-full h-[28rem] object-cover"
              src="https://images.pexels.com/photos/33755543/pexels-photo-33755543.jpeg"
              alt="Slide 5"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default NewSlider;
