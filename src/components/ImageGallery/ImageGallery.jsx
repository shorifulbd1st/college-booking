import React from "react";
import HeadingDetails from "../CollegeDeatils/HeadingDetails";
import NewSlider from "../Banner/NewSlider";

const ImageGallery = () => {
  const images = [
    {
      src: "https://images.pexels.com/photos/7944238/pexels-photo-7944238.jpeg",
      alt: "Slide 1",
    },
    {
      src: "https://images.pexels.com/photos/7944130/pexels-photo-7944130.jpeg",
      alt: "Slide 2",
    },
    {
      src: "https://images.pexels.com/photos/8106629/pexels-photo-8106629.jpeg",
      alt: "Slide 3",
    },
    {
      src: "https://images.pexels.com/photos/8106675/pexels-photo-8106675.jpeg",
      alt: "Slide 4",
    },
    {
      src: "https://images.pexels.com/photos/7944002/pexels-photo-7944002.jpeg",
      alt: "Slide 5",
    },
    {
      src: "https://images.pexels.com/photos/7944231/pexels-photo-7944231.jpeg",
      alt: "Slide 6",
    },
    {
      src: "https://images.pexels.com/photos/7942481/pexels-photo-7942481.jpeg",
      alt: "Slide 7",
    },
  ];
  return (
    <div className="w-11/12 mx-auto my-8">
      <HeadingDetails
        title={"Celebrating the Spirit of College Life"}
        subtitle={
          "Explore vibrant moments through group photos of graduates, capturing friendship, achievements, and unforgettable memories that shape the journey of every student."
        }
      ></HeadingDetails>
      <NewSlider images={images}></NewSlider>
    </div>
  );
};

export default ImageGallery;
