import React from "react";

const College = ({ college }) => {
  const {
    id,
    name,
    admissionDate,
    events,
    image,
    rating,
    researchCount,
    sports,
  } = college;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="w-full max-w-lg pb-5 overflow-hidden bg-white rounded-2xl shadow-lg dark:bg-gray-800 hover:scale-[1.02] transition-all duration-700 border-l border-r border-t  border-red-600 hover:border-green-700"
    >
      {/* Image */}
      <img
        className="object-cover object-center w-full h-56"
        src={image}
        alt={name}
      />

      {/* Card Content */}
      <div className=" px-2 mt-3 space-y-3">
        {/* College Name */}
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          {name}
        </h1>

        {/* Admission Date */}
        <p className="text-black dark:text-gray-300">
          <strong>Admission Date:</strong> {admissionDate}
        </p>

        {/* Events */}
        <p className="text-black dark:text-gray-300">
          <strong>Events:</strong> {events?.length ? events.join(", ") : "N/A"}
        </p>

        {/* Sports */}
        <p className="text-black dark:text-gray-300">
          <strong>Sports:</strong> {sports?.length ? sports.join(", ") : "N/A"}
        </p>

        {/* Research Count & Rating */}
        <div className="flex justify-between items-center">
          <p className="text-black dark:text-gray-400">
            <strong>Research Papers:</strong> {researchCount}
          </p>
          <p className="text-yellow-500 font-semibold">⭐ {rating}</p>
        </div>
        <div className="w-full  mt-3 -mb-4">
          <button className=" cursor-pointer x-6 w-full py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#C70039] rounded-lg focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default College;
