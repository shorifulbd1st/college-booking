import React from "react";
import HeadingDetails from "./HeadingDetails";

const StudentResearch = ({ researchPapers }) => {
  return (
    <div className="">
      <HeadingDetails
        title={" Research & Innovations"}
        subtitle={
          "Discover groundbreaking research papers authored by our talented students, showcasing innovation, knowledge, and contributions that inspire academic excellence and future discoveries."
        }
      ></HeadingDetails>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {researchPapers?.map((paper, i) => (
          <div
            key={i}
            className="max-w-2xl border border-red-600 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
          >
            <img
              className="object-cover w-full h-64"
              src={paper.image}
              alt="Article"
            />

            <div className="p-2">
              <div>
                <div className="block mt-0 text-lg font-bold text-green-800  transition-colors duration-300 transform dark:text-white hover:text-gray-600">
                  {paper.title}
                </div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"></p>
              </div>
              <div>
                <div className="block mt-0 text-sm font-bold text-gray-400  transition-colors duration-300 transform dark:text-white hover:text-gray-600">
                  {paper.description}
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

export default StudentResearch;
