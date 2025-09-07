import React from "react";

import { useQuery } from "@tanstack/react-query";
import College from "../college/college";
import Heading from "../Heading/Heading";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import LoadingSpinner from "../Loading/LoadingSpinner";
import SearchOption from "../SearchOption/SearchOption";
const Colleges = () => {
  // const { colleges } = useLoaderData();
  // console.log(colleges);
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
  // console.log(colleges);
  return (
    <section className="w-11/12 mx-auto my-8">
      <Heading></Heading>
      <div className="my-8">
        {/* <SearchOption colleges={colleges}></SearchOption> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {colleges &&
          colleges?.map((college) => (
            <College key={college._id} college={college}></College>
          ))}
      </div>
    </section>
  );
};

export default Colleges;
