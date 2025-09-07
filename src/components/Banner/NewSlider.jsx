import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const NewSlider = ({ images }) => {
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
          {images.map((image, index) => (
            <div key={index}>
              <img
                className="w-full h-[28rem] object-cover object-fit object-center"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default NewSlider;
