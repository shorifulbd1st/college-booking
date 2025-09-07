// import React, { useState } from "react";
// import HeadingDetails from "../CollegeDeatils/HeadingDetails";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
// import { useQuery } from "@tanstack/react-query";
// import LoadingSpinner from "../Loading/LoadingSpinner";
// import ApplicationForm from "../ApplicationForm/ApplicationForm";
// import { Link } from "react-router-dom";

// const Admission = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [newId, setNewId] = useState(null);
//   const [collegeData, setCollegeData] = useState(null);
//   const axiosPublic = useAxiosPublic();
//   const { data: colleges = [], isPending: isPending } = useQuery({
//     queryKey: ["colleges"],
//     queryFn: async () => {
//       const res = await axiosPublic.get("/colleges");
//       return res.data;
//     },
//   });

//   if (isPending) {
//     return <LoadingSpinner></LoadingSpinner>;
//   }
//   // console.log(colleges);
//   const modalFunction = (data) => {
//     setIsOpen(data);
//   };
//   const handleBtn = (value, id) => {
//     setIsOpen(value);
//     //  const { data: college = {}, isPending: isPending } = useQuery({
//     //    queryKey: ["college"],
//     //    queryFn: async () => {
//     //      const res = await axiosPublic.get(`/college/${id}`);
//     //      return res.data;
//     //    },
//     //  });
//     // console.log(id);
//     setNewId(id);
//   };
//   return (
//     <div className="w-11/12 mx-auto my-4">
//       <HeadingDetails
//         title="Choose Your Favorite College"
//         subtitle={`Your journey to success begins with the right choice of college. Explore institutions that offer top-notch education, vibrant campus life, and opportunities for growth in every field. Whether your passion is in science, arts, commerce, or beyond, find the perfect place to shape your future today.`}
//       ></HeadingDetails>

//       {/* <section className="flex flex-col gap-3 justify-center items-center">
//         {colleges.map((college) => (
//           <button
//             key={college._id}
//             // onClick={() => setIsOpen(true)}
//             class="px-10 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 cursor-pointer"
//           >
//             {college.name}
//           </button>
//         ))}
//       </section> */}
//       <section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center md:w-8/12 mx-auto">
//         {colleges?.map((college) => (
//           <div className="border border-red-500 h-12 overflow-hidden">
//             <button
//               key={college._id}
//               onClick={() => setIsOpen(true)}
//               className="w-96 h-12 px-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 cursor-pointer text-center"
//             >
//               {college.name}
//               {/* <span className="ml-5">{college._id}</span> */}
//             </button>
//             <ApplicationForm
//               value={isOpen}
//               sendData={modalFunction}
//               newId={college._id}
//             ></ApplicationForm>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Admission;
import React, { useState } from "react";
import HeadingDetails from "../CollegeDeatils/HeadingDetails";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../Loading/LoadingSpinner";
import ApplicationForm from "../ApplicationForm/ApplicationForm";

const Admission = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const axiosPublic = useAxiosPublic();
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
