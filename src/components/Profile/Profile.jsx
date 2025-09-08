import React, { useContext } from "react";
import HeadingDetails from "../CollegeDeatils/HeadingDetails";

import { CiCalendarDate } from "react-icons/ci";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../providers/AuthProvider";
import LoadingSpinner from "../Loading/LoadingSpinner";
import MyApplyColleges from "../MyApplyColleges/MyApplyColleges";
import ApplyCollege from "./ApplyCollege";
const Profile = () => {
  const { user, notify } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const {
    data: Data = [],
    isPending: isPending,
    refetch,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/profile/${user?.email}`);
      return res.data;
    },
  });

  if (isPending) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  console.log(Data);
  return (
    <div className="w-11/12 mx-auto my-8">
      <HeadingDetails
        title={"Edit Your Profile"}
        subtitle={
          "Update your personal information including name, email, university, and address with ease, and keep your profile always up to date."
        }
      ></HeadingDetails>
      <section className="bg-white dark:bg-gray-900 ">
        <div className="lg:flex gap-5 my-8 p-2 ">
          <div className=" border-green-500">
            <img
              className="object-cover object-center rounded-xl  h-68 w-full "
              src={Data.profile.photo}
              alt="testimonial"
            />
            <p className="text-center text-xl font-semibold italic">
              Profile photo
            </p>
          </div>

          <div className="  border-red-700">
            <p>
              <strong>Name : </strong> {Data.profile.name}
            </p>
            <p>
              <strong>Email : </strong> {Data.profile.email}
            </p>

            <div>
              {Data.colleges.length > 0 && (
                <div>
                  <p>
                    <strong>Phone : </strong> {Data?.colleges[0].phone}
                  </p>
                  <p>
                    <strong>Address : </strong> {Data?.colleges[0].address}
                  </p>
                  <div>
                    <strong>Applied Colleges </strong>
                    {Data.colleges.map((college, i) => (
                      <ul key={i} className="lg:ml-10 mb-5">
                        <li>
                          <strong>College Name:</strong> {college.collegeName}
                        </li>
                        <li>
                          <strong>Subject : </strong>
                          {college.subject}
                        </li>
                        <li>
                          <strong>Apply Date: </strong>
                          {college.date}
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {Data?.colleges?.length >= 0 && (
        <section>
          <ApplyCollege
            colleges={Data.colleges}
            refetch={refetch}
          ></ApplyCollege>
        </section>
      )}
    </div>
  );
};

export default Profile;
