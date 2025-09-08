import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import LoadingSpinner from "../Loading/LoadingSpinner";
import TopTravelDestinations from "../copy/TopTravelDestinations";
import DetailsBanner from "./DetailsBanner";
import { PiStudentBold } from "react-icons/pi";
import { TbMessageCircleHeart } from "react-icons/tb";
import CountUp from "react-countup";
import HeadingDetails from "./HeadingDetails";

import { CiCalendarDate } from "react-icons/ci";
import StudentResearch from "./StudentResearch";
import HealthCare from "./HealthCare";
import CampusLife from "./CampusLife";
const CollegeDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [isOpen, setIsOpen] = useState(false);
  const axiosPublic = useAxiosPublic();

  const { data: college = {}, isPending: isPending } = useQuery({
    queryKey: ["college"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/college/${id}`);
      return res.data;
    },
  });
  if (isPending) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  console.log("college Details", college);
  const {
    _id,
    name,
    image,
    rating,
    admissionDate,
    researchCount,
    events,
    sports,

    title,
    subtitle,

    campusInformation: { image: campusImage, description, programs },

    freeCourses,
    campusLife,
    healthCare,
    eventsDetails,
    researchPapers,
  } = college || {};

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <section className="  border-red-500">
      <DetailsBanner
        title={title}
        image={image}
        text={subtitle}
      ></DetailsBanner>
      <div className="w-11/12 mx-auto my-5">
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto ">
            <div className="lg:-mx-6 lg:flex lg:items-center">
              <img
                className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
                src={campusImage}
                alt="testimonial"
              />

              <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0 ">
                <p className="text-5xl font-semibold text-green-500">“</p>

                <h1 className="text-2xl font-bold text-green-800 dark:text-white lg:text-3xl lg:w-96">
                  Campus Information
                </h1>

                <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                  {description}
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
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

                <div className="px-0 m-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-gray-500">
                  <div className="stat px-0 m-0">
                    <div className="stat-figure "></div>
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
                  <div className="stat px-0 m-0">
                    <div className="stat-figure "></div>
                    <div className="stat-value">
                      <CountUp
                        className="text-green-700 text-6xl"
                        end={30}
                        duration={10}
                      />
                      <span className="text-6xl text-green-700">K</span>
                      <span className="text-red-700 text-6xl">+</span>
                    </div>
                    <p className="px-0 m-0">Global Students</p>
                  </div>{" "}
                  <div className="stat px-0 m-0">
                    <div className="stat-figure "></div>
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
                <div className="my-4">
                  <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 flex justify-center items-center">
                    <span className="text-3xl mr-2">
                      <CiCalendarDate />
                    </span>
                    Admission Date : {admissionDate}
                  </button>
                </div>
                <Link
                  // onClick={() => setIsOpen(true)}
                  to="/admission"
                  className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 cursor-pointer"
                >
                  Start your application
                </Link>
              </div>
            </div>
          </div>
        </section>

        <HeadingDetails
          title="Free Courses"
          subtitle="Explore a variety of free courses to boost skills, expand knowledge, and achieve academic and professional success."
        ></HeadingDetails>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {freeCourses?.map((course, i) => (
            <div
              key={i}
              className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
            >
              <img
                className="object-cover w-full h-64"
                src={course.image}
                alt="Article"
              />

              <div className="p-2">
                <div>
                  <div className="block mt-0 text-xl font-bold text-green-800  transition-colors duration-300 transform dark:text-white hover:text-gray-600">
                    {course.courseName}
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"></p>
                </div>

                <div className="mt-4">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <img
                        className="object-cover h-10 rounded-full"
                        src={course.instructorImage}
                        alt="Avatar"
                      />
                      <a
                        href="#"
                        className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                      >
                        Jone Doe
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between px-2">
                  <div className="mt-4 text-xl flex justify-start items-center gap-2">
                    <PiStudentBold className="text-green-700" />
                    <span className="text-md text-gray-400">
                      {course.totalStudent}
                    </span>
                  </div>
                  <div>
                    <div className="mt-4 text-xl flex justify-start items-center gap-2">
                      <TbMessageCircleHeart className="text-green-700" />
                      <span className="text-md text-gray-400">
                        {course.message}k
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        <StudentResearch researchPapers={researchPapers}></StudentResearch>
        <HealthCare healthCare={healthCare}></HealthCare>
        <CampusLife campusLife={campusLife}></CampusLife>
      </div>
    </section>
  );
};

export default CollegeDetails;
