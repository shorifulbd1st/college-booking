import React, { useContext, useState } from "react";
import HeadingDetails from "../CollegeDeatils/HeadingDetails";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../Loading/LoadingSpinner";
import ApplicationForm from "../ApplicationForm/ApplicationForm";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Admission = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { data: colleges = [], isPending } = useQuery({
    queryKey: ["colleges"],
    queryFn: async () => {
      const res = await axiosPublic.get("/colleges");
      return res.data;
    },
  });

  if (isPending) {
    return <LoadingSpinner />;
  }

  const handleOpenModal = (id) => {
    console.log("user", user?.email);
    if (!user) {
      navigate("/login");
      return;
    }
    setSelectedId(id);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedId(null);
    setIsOpen(false);
  };

  return (
    <div className="w-11/12 mx-auto my-4">
      <HeadingDetails
        title="Choose Your Favorite College"
        subtitle={`Your journey to success begins with the right choice of college. Explore institutions that offer top-notch education, vibrant campus life, and opportunities for growth in every field. Whether your passion is in science, arts, commerce, or beyond, find the perfect place to shape your future today.`}
      />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center md:w-8/12 mx-auto">
        {colleges?.map((college) => (
          <div key={college._id} className="flex justify-center">
            <button
              onClick={() => handleOpenModal(college._id)}
              className="w-96 h-12 px-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 cursor-pointer text-center"
            >
              {college.name}
            </button>
          </div>
        ))}
      </section>

      {/* Modal */}
      {isOpen && (
        <ApplicationForm
          value={isOpen}
          sendData={handleCloseModal}
          newId={selectedId}
        />
      )}
    </div>
  );
};

export default Admission;
