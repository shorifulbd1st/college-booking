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
  // console.log(college);

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
                {/* <div className="mb-3">
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
                </div> */}
                <div className="mb-3">
                  <label className="block font-semibold">
                    Select Subject *
                  </label>
                  <select
                    name="subject"
                    defaultValue=""
                    className="select select-bordered w-full border"
                    required
                  >
                    <option value="" disabled>
                      Programs & Categories
                    </option>
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
