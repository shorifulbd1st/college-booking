import React from "react";
import HeadingDetails from "./HeadingDetails";

const HealthCare = ({ healthCare }) => {
  return (
    <div className="">
      <HeadingDetails
        title={"Campus Healthcare & Wellness"}
        subtitle={
          "Our healthcare services ensure students’ well-being with medical support, wellness programs, and guidance to promote a healthy, balanced, and successful campus life"
        }
      ></HeadingDetails>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {healthCare?.map((item, i) => (
          <div
            key={i}
            className="max-w-2xl border border-red-600 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
          >
            <img
              className="object-cover w-full h-64"
              src={item.image}
              alt="Article"
            />

            <div className="p-2">
              <div>
                <div className="block mt-0 text-lg font-bold text-green-800  transition-colors duration-300 transform dark:text-white hover:text-gray-600">
                  {item.title}
                </div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"></p>
              </div>
              <div>
                <div className="block mt-0 text-sm font-bold text-gray-400  transition-colors duration-300 transform dark:text-white hover:text-gray-600">
                  {item.description}
                </div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"></p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HealthCare;
