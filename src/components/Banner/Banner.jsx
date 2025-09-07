import React from "react";
import CountUp from "react-countup";

import { CiCalendarDate } from "react-icons/ci";
import { Link } from "react-router-dom";
import NewSlider from "./NewSlider";
const Banner = () => {
  const programs = [
    "Science",
    "Arts",
    "Commerce",
    "Graduate Programs",
    "Doctoral Degrees",
    "Alumni & Giving",
    "Undergraduate Programs",
    "International Hubs",
    "Global Students",
  ];
  const images = [
    {
      src: "https://images.pexels.com/photos/7713548/pexels-photo-7713548.jpeg",
      alt: "Slide 1",
    },
    {
      src: "https://images.pexels.com/photos/7972653/pexels-photo-7972653.jpeg",
      alt: "Slide 2",
    },
    {
      src: "https://images.pexels.com/photos/7972556/pexels-photo-7972556.jpeg",
      alt: "Slide 3",
    },
    {
      src: "https://images.pexels.com/photos/7972512/pexels-photo-7972512.jpeg",
      alt: "Slide 4",
    },
    {
      src: "https://images.pexels.com/photos/33755543/pexels-photo-33755543.jpeg",
      alt: "Slide 5",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-2 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center lg:flex-row-reverse">
          <div className="object-cover object-center lg:w-1/2 lg:mx-5 w-full h-96 rounded-lg lg:h-[30rem] py-0">
            <NewSlider images={images}></NewSlider>
          </div>

          {/* </div> */}
          <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0  border-red-600">
            <p className="text-5xl font-semibold text-red-500 ">“</p>

            <h1 className="text-2xl italic border-red-600 -mt-5 ml-4 font-bold text-green-800 dark:text-white lg:text-4xl">
              Find Your Dream College
            </h1>

            <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
              From science to arts, explore the right programs that match your
              passion and lead you to success.
            </p>

            {/* Programs List */}
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ul className="space-y-2 font-semibold">
                {programs
                  ?.slice(0, Math.ceil(programs.length / 2))
                  .map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-red-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
              </ul>

              <ul className="space-y-2 font-semibold">
                {programs
                  ?.slice(Math.ceil(programs.length / 2))
                  .map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-red-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
              </ul>
            </div>

            {/* Statistics */}
            <div className="px-0 -mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-gray-500">
              <div className="stat px-0 m-0 text-center">
                <div className="stat-value">
                  <CountUp
                    className="text-green-700 text-6xl"
                    end={30}
                    duration={10}
                  />
                  <span className="text-red-700 text-6xl">+</span>
                </div>
                <p className="px-0 m-0">Years Of Experience</p>
              </div>
              <div className="stat px-0 m-0 text-center">
                <div className="stat-value">
                  <CountUp
                    className="text-green-700 text-6xl"
                    end={30}
                    duration={10}
                  />
                  <span className="text-green-700 text-6xl">K</span>
                  <span className="text-red-700 text-6xl">+</span>
                </div>
                <p className="px-0 m-0">Global Students</p>
              </div>
              <div className="stat px-0 m-0 text-center">
                <div className="stat-value">
                  <CountUp
                    className="text-green-700 text-6xl"
                    end={20}
                    duration={10}
                  />
                  <span className="text-red-700 text-6xl">+</span>
                </div>
                <p className="px-0 m-0">Student Nationalities</p>
              </div>
            </div>

            {/* Admission Date */}
            <div className=" my-0 lg:flex justify-between items-center">
              <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 flex justify-center items-center">
                <span className="text-xl mr-2">
                  <CiCalendarDate />
                </span>
                Admission Date : 10-sep-2025
              </button>
              <Link
                to="/admission"
                className="px-6 py-2 mt-0 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 cursor-pointer inline-block"
              >
                Start your application
              </Link>
            </div>

            {/* Apply Button */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
