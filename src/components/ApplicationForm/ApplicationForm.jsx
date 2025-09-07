// import React, { useContext, useState } from "react";

// import { motion, AnimatePresence } from "framer-motion";
// import { AuthContext } from "../../providers/AuthProvider";
// import { RxCross2 } from "react-icons/rx";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

// import { format } from "date-fns";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
// import { useNavigate } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import LoadingSpinner from "../Loading/LoadingSpinner";
// const ApplicationForm = ({ value, sendData, newId }) => {
//   const axiosPublic = useAxiosPublic();
//   const [startDate, setStartDate] = useState(new Date());
//   const { user, notify } = useContext(AuthContext);
//   const [collegeData, setCollegeData] = useState(null);
//   const navigate = useNavigate();
//   // console.log(user?.displayName);
//   if (value) {
//     // const { id } = newId;
//     const { data: college = {}, isPending: isPending } = useQuery({
//       queryKey: ["college"],
//       queryFn: async () => {
//         const res = await axiosPublic.get(`/college/${newId}`);
//         return res.data;
//       },
//     });
//     if (isPending) {
//       return <LoadingSpinner></LoadingSpinner>;
//     }
//     setCollegeData(college);
//   }

//   console.log("college data", collegeData);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = user?.email;
//     const name = user?.displayName;
//     const date = format(startDate, "dd/MM/yyyy");
//     const subject = form.subject.value;
//     const phone = form.phoneNumber.value;
//     const address = form.address.value;
//     const data = { name, email, subject, phone, address, date };

//     axiosPublic.post("/college-registration", data).then((res) => {
//       notify("success", `Your registration successful`);
//       navigate("/my-college");
//     });
//     sendData(false);
//   };
//   return (
//     <div className="relative flex justify-center items-center min-h-screen">
//       {/* Open Button */}

//       {/* Modal */}
//       <AnimatePresence mode="wait">
//         {value && (
//           <motion.div
//             className=" fixed inset-0 z-[1000] flex items-center justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9, y: 40 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.9, y: 40 }}
//               transition={{ duration: 0.3, ease: "easeOut" }}
//               className="border-2 border-green-700 relative p-6 overflow-hidden text-left bg-white shadow-xl rounded-xl sm:max-w-sm sm:w-full dark:bg-gray-900"
//             >
//               {/* Image */}
//               {/* <div className="flex items-center justify-center mx-auto">
//                 <img
//                   className="h-48 w-full object-cover rounded-lg"
//                   src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1470&q=80"
//                   alt=""
//                 />
//               </div> */}

//               {/* Title and text */}
//               <div className="flex justify-end items-end relative mt-4 ">
//                 <button
//                   onClick={() => sendData(false)}
//                   className="absolute bottom-0 -right-9  px-4 sm:mx-2 py-2.5 text-xl  text-center  font-medium text-red-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 cursor-pointer hover:text-white"
//                 >
//                   <RxCross2 />
//                 </button>
//               </div>
//               <form onSubmit={handleSubmit}>
//                 <div className="text-center">
//                   <h1
//                     className="text-xl font-bold italic
//                 text-red-600
//                 "
//                   >
//                     Admission Registration Form
//                   </h1>
//                 </div>
//                 <div className="mt-5">
//                   <h3>
//                     <strong>Name : </strong> {user?.displayName}
//                   </h3>
//                   <h4>
//                     <strong>Email : </strong> {user?.email}
//                   </h4>
//                 </div>

//                 <div className="">
//                   <label className="block mt-0  dark:text-gray-200 ">
//                     <strong>Select Subject</strong>

//                     <span className="text-red-700 mt-2">*</span>
//                   </label>
//                   <select
//                     name="subject"
//                     defaultValue="subject"
//                     className="select select-bordered w-full border "
//                     required
//                   >
//                     <option disabled>Programs & Categories</option>
//                     <option value="Science">Science</option>
//                     <option value="Arts">Arts</option>
//                     <option value="Commerce">Commerce</option>
//                     <option value="Graduate Programs">Graduate Programs</option>
//                     <option value="Doctoral Degrees">Doctoral Degrees</option>
//                     <option value="Alumni & Giving">Alumni & Giving</option>
//                     <option value="Undergraduate Programs">
//                       Undergraduate Programs
//                     </option>
//                     <option value="International Hubs">
//                       International Hubs
//                     </option>
//                     <option value="Global Students">Global Students</option>
//                   </select>
//                 </div>

//                 {/* Input with button */}
//                 <div className="">
//                   <label
//                     htmlFor="phoneNumber"
//                     className="block dark:text-gray-200"
//                   >
//                     <strong>Phone number</strong>

//                     <span className="text-red-700 mt-2">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="phoneNumber"
//                     id="phoneNumber"
//                     placeholder="Enter your phone number"
//                     required
//                     className="w-full block h-10 px-4  bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none"
//                   />
//                 </div>
//                 <div className="">
//                   <label htmlFor="address" className="block dark:text-gray-200">
//                     <strong>Address</strong>

//                     <span className="text-red-700 mt-2">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="address"
//                     id="address"
//                     placeholder="Enter your address"
//                     required
//                     className="w-full block h-10 px-4  bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="appliedDate"
//                     className="block mt-1 text-sm font-semibold text-black"
//                   >
//                     Date of birth
//                     <span className="text-red-700 mt-2">*</span>
//                   </label>
//                   <DatePicker
//                     className="border p-2 rounded-md"
//                     selected={startDate}
//                     onChange={(date) => setStartDate(date)}
//                     dateFormat="dd-MM-yyyy"
//                   />
//                 </div>

//                 {/* Action buttons */}
//                 <div className="mt-4 sm:flex sm:items-center sm:justify-between sm:mt-6 sm:-mx-2">
//                   <button
//                     type="submit"
//                     className="px-4 sm:mx-2 w-full py-2.5 mt-3 sm:mt-0 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 cursor-pointer"
//                   >
//                     Confirm
//                   </button>
//                 </div>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default ApplicationForm;
import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../../providers/AuthProvider";
import { RxCross2 } from "react-icons/rx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../Loading/LoadingSpinner";

const ApplicationForm = ({ value, sendData, newId }) => {
  const axiosPublic = useAxiosPublic();
  const [startDate, setStartDate] = useState(new Date());
  const { user, notify } = useContext(AuthContext);
  const navigate = useNavigate();

  const { data: college = {}, isPending } = useQuery({
    queryKey: ["college", newId],
    queryFn: async () => {
      const res = await axiosPublic.get(`/college/${newId}`);
      return res.data;
    },
    enabled: value && !!newId,
  });

  if (isPending) {
    return <LoadingSpinner />;
  }
  console.log(college);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user?.email;
    const name = user?.displayName;
    const date = format(startDate, "dd/MM/yyyy");
    const subject = form.subject.value;
    const phone = form.phoneNumber.value;
    const address = form.address.value;

    const data = {
      name,
      email,
      subject,
      phone,
      address,
      date,
      collegeId: college?._id,
      collegeName: college?.name,
      collegeImage: college?.image,
    };

    axiosPublic.post("/college-registration", data).then(() => {
      notify("success", `Your registration successful`);
      navigate("/my-college");
    });
    sendData(false);
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen">
      <AnimatePresence mode="wait">
        {value && (
          <motion.div
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="border-2 border-green-700 relative p-6 bg-white shadow-xl rounded-xl sm:max-w-sm sm:w-full dark:bg-gray-900"
            >
              {/* Close Button */}
              <div className="flex justify-end -mt-5 -mr-5">
                <button
                  onClick={() => sendData(false)}
                  className="text-red-700 cursor-pointer hover:text-white hover:bg-red-500 border px-3 py-2 rounded-md"
                >
                  <RxCross2 />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="text-center mb-4">
                  <h1 className="text-xl font-bold italic text-red-600">
                    Admission Registration Form
                  </h1>
                </div>

                <div className="mb-3">
                  <p className="mt-2">
                    <strong> Applying for : </strong>
                    <span className="font-semibold ">{college?.name}</span>
                  </p>
                  <h3>
                    <strong>Name : </strong> {user?.displayName}
                  </h3>
                  <h4>
                    <strong>Email : </strong> {user?.email}
                  </h4>
                </div>

                {/* Subject */}
                <div className="mb-3">
                  <label className="block font-semibold">
                    Select Subject *
                  </label>
                  <select
                    name="subject"
                    defaultValue="subject"
                    className="select select-bordered w-full border"
                    required
                  >
                    <option disabled>Programs & Categories</option>
                    <option value="Science">Science</option>
                    <option value="Arts">Arts</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Graduate Programs">Graduate Programs</option>
                    <option value="Doctoral Degrees">Doctoral Degrees</option>
                    <option value="Alumni & Giving">Alumni & Giving</option>
                    <option value="Undergraduate Programs">
                      Undergraduate Programs
                    </option>
                    <option value="International Hubs">
                      International Hubs
                    </option>
                    <option value="Global Students">Global Students</option>
                  </select>
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="block font-semibold">
                    Phone number *
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                    required
                    className="w-full h-10 px-4 border rounded-md"
                  />
                </div>

                {/* Address */}
                <div className="mb-3">
                  <label htmlFor="address" className="block font-semibold">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter your address"
                    required
                    className="w-full h-10 px-4 border rounded-md"
                  />
                </div>

                {/* DOB */}
                <div className="mb-3">
                  <label htmlFor="appliedDate" className="block font-semibold">
                    Date of birth *
                  </label>
                  <DatePicker
                    className="border p-2 rounded-md w-full"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd-MM-yyyy"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-2 mt-3 text-sm font-medium cursor-pointer text-white bg-green-600 rounded-md hover:bg-green-500"
                >
                  Confirm
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ApplicationForm;
