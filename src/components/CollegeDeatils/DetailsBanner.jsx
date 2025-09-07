import React from "react";

const DetailsBanner = ({ title, image, text }) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[48rem] overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hidden lg:block mt-10">
        <div className=" flex items-center justify-center w-full h-full ">
          <div className="text-center w-3/5 bg-gray-700/70 py-8 px-3 rounded-xl">
            <h2 className=" mb-8  font-semibold text-white lg:text-4xl">
              "{title}"
            </h2>
            <h1 className="text-lg  text-gray-200 lg:text-xl">{text}</h1>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBanner;
