import React from "react";
import Review from "../Review/Review";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="overflow-hidden mx-auto">
      <Banner></Banner>
      <Review></Review>
    </div>
  );
};

export default Home;
