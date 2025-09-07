import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Slide from "./Slide";
import HeadingDetails from "../CollegeDeatils/HeadingDetails";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../Loading/LoadingSpinner";

const Review = () => {
  // Dummy data array
  const axiosPublic = useAxiosPublic();
  const { data: reviews = [], isPending } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/reviews`);
      return res.data;
    },
    // enabled: user?.email,
  });

  if (isPending) {
    return <LoadingSpinner />;
  }
  // console.log(reviews1);

  // const reviews = [
  //   {
  //     img: "https://randomuser.me/api/portraits/men/32.jpg",
  //     name: "Mc Berry Walter",
  //     title: "Food Analyst",
  //     desc: "This place never disappoints! The variety on the menu is great, and each dish is cooked to perfection. Highly recommend the grilled chicken—so juicy and tender. I’ll definitely return soon!",
  //   },
  //   {
  //     img: "https://randomuser.me/api/portraits/women/44.jpg",
  //     name: "Emma Watson",
  //     title: "Nutritionist",
  //     desc: "I had an amazing dining experience. The staff was friendly, and the food came out hot and flavorful. The spices were just right, and the dessert was the highlight of my meal!",
  //   },
  //   {
  //     img: "https://randomuser.me/api/portraits/men/45.jpg",
  //     name: "John Doe",
  //     title: "Chef Specialist",
  //     desc: "The food was absolutely delicious! The flavors were well-balanced, and everything tasted fresh. The presentation was beautiful, and the portion size was perfect. I can’t wait to come back!",
  //   },
  // ];

  return (
    <div className="w-11/12 mx-auto rounded-xl px-5 lg:px-16 relative bg-center bg-cover bg-no-repeat ">
      <div className="space-y-3">
        <HeadingDetails
          title="Student Reviews & Experiences"
          subtitle="Read genuine student reviews highlighting academics, campus life, and opportunities that make our college a truly special place"
        ></HeadingDetails>
        <div className="lg:w-8/12 mx-auto  py-5 lg:mb-20 ">
          <Swiper
            spaceBetween={30}
            // centeredSlides={true}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper "
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <Slide {...review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;
