import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Slide = ({ collegeImage, name, rating, date, comment, collegeName }) => {
  return (
    <div className="bg-white border border-red-500 rounded-2xl shadow-lg px-2 py-2 relative max-w-xl mx-auto">
      <div className="flex justify-center mb-4">
        <img
          className="object-cover w-full h-56 rounded-2xl"
          src={collegeImage}
          alt="avatar"
        />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-bold text-red-600 italic -mt-3 mb-3">
          {collegeName}
        </h2>
      </div>
      <div>
        <p className="text-md">
          <strong>Student Name : </strong> {name}
        </p>
      </div>
      <div className="mt-6 text-gray-600 relative">
        <FaQuoteLeft className="text-4xl text-gray-300 absolute left-0 -top-2" />
        <p className="pl-10">{comment}</p>
      </div>
      <div className="flex justify-center mt-4">
        {/* Stars */}
        <div className="flex space-x-1 text-yellow-400">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide;
