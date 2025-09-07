import React from "react";
import Review from "../Review/Review";
import Banner from "../Banner/Banner";
import TopColleges from "../TopColleges/TopColleges";
import ImageGallery from "../ImageGallery/ImageGallery";
import StudentResearch from "../CollegeDeatils/StudentResearch";

const Home = () => {
  const researchPapers = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwG0mRdUgcJRxRyaBFzqd4PXrAeZ8UDDeQgg&s",
      title: "Sustainable Agriculture in Coastal Bangladesh",
      description:
        "Research on how modern agricultural methods can improve food security in coastal regions.",
    },
    {
      image:
        "https://www.orangemantra.com/blog/wp-content/uploads/2023/12/ai-in-education.png",
      title: "AI in Education",
      description:
        "Study on how Artificial Intelligence can improve personalized learning for students.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrRFdlWVM1TSEmJMxBAoq1bw7VMhdZB-4nFA&s",
      title: "Renewable Energy Solutions",
      description:
        "Exploring new energy technologies to reduce carbon footprint.",
    },
  ];
  return (
    <div className="overflow-hidden mx-auto">
      <Banner></Banner>
      <TopColleges></TopColleges>
      <ImageGallery></ImageGallery>
      <StudentResearch researchPapers={researchPapers}></StudentResearch>
      <Review></Review>
    </div>
  );
};

export default Home;
