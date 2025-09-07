import React from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../Loading/LoadingSpinner";
import HeadingDetails from "../CollegeDeatils/HeadingDetails";
import College from "../college/college";

const TopColleges = () => {
  const axiosPublic = useAxiosPublic();
  const { data: colleges = [], isPending: isPending } = useQuery({
    queryKey: ["colleges"],
    queryFn: async () => {
      const res = await axiosPublic.get("/colleges");
      return res.data;
    },
  });

  if (isPending) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="w-11/12 mx-auto my-10">
      <HeadingDetails
        title="Explore Top Colleges at a Glance"
        subtitle="Get a quick glimpse of each college’s admission dates, events, research history, and sports to choose your future."
      ></HeadingDetails>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {colleges &&
          colleges
            ?.slice(0, 3)
            .map((college) => (
              <College key={college._id} college={college}></College>
            ))}
      </div>
    </div>
  );
};

export default TopColleges;
