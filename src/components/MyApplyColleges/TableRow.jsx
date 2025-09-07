import React, { useContext, useState } from "react";
import { MdRateReview } from "react-icons/md";
import { AuthContext } from "../../providers/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const TableRow = ({ college }) => {
  const { user, notify } = useContext(AuthContext);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const {
    _id,
    name,
    email,
    subject,
    phone,
    address,
    date,
    collegeId,
    collegeName,
    collegeImage,
  } = college;

  // Review Modal handler
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const reviewData = {
      email,
      name,
      collegeId,
      collegeImage,
      rating: form.rating.value,
      comment: form.comment.value,
      date: format(startDate, "dd/MM/yyyy"),
    };
    // console.log("Review Submitted:", reviewData);

    axiosPublic.post("/review", reviewData).then(() => {
      notify("success", `Your review successful`);
      // navigate("/my-college");
    });
    setIsReviewOpen(false);
  };

  return (
    <tr>
      {/* College Info */}
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="flex items-center gap-x-3">
          <img
            src={collegeImage}
            alt={collegeName}
            className="w-20 h-16 object-cover rounded-md"
          />
          <div>
            <h2 className="font-semibold text-gray-800 dark:text-white">
              {collegeName}
            </h2>
            {/* <p className="text-gray-500">{subject}</p> */}
          </div>
        </div>
      </td>

      {/* Phone */}
      <td className="px-4 py-4 text-sm">{subject}</td>
      <td className="px-4 py-4 text-sm">{phone}</td>

      {/* Date */}
      <td className="px-4 py-4 text-sm">{date}</td>

      {/* Actions */}
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-4">
          {/* Review Button */}
          <button
            onClick={() => setIsReviewOpen(true)}
            className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
          >
            <MdRateReview />
            Review
          </button>

          {/* Details Button */}
          <Link
            to={`/college-details/${collegeId}`}
            className="cursor-pointer px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500"
          >
            Details
          </Link>
        </div>
        {/* Review Modal */}
        {isReviewOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
            {/* Modal Box */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md shadow-lg">
              <h3 className="text-md italic text-red-600 font-semibold dark:text-white mb-3 ">
                Write a Review for {collegeName}
              </h3>

              <form onSubmit={handleReviewSubmit}>
                {/* Email */}
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  value={user?.email || ""}
                  readOnly
                  className="w-full p-2 border rounded-md mb-3 bg-gray-100 text-gray-600"
                />

                {/* Name */}
                <label className="block text-sm mb-1">Name</label>
                <input
                  type="text"
                  value={user?.displayName || ""}
                  readOnly
                  className="w-full p-2 border rounded-md mb-3 bg-gray-100 text-gray-600"
                />

                {/* Date */}
                <label className="block text-sm mb-1">Review Date</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  readOnly
                  className="w-full p-2 border rounded-md mb-3"
                />

                {/* Rating */}
                <label className="block text-sm mb-1">Rating</label>
                <select
                  name="rating"
                  required
                  defaultValue=""
                  className="w-full p-2 border rounded-md mb-3 cursor-pointer"
                >
                  <option value="" disabled>
                    Select Rating
                  </option>
                  <option value="1">⭐ 1</option>
                  <option value="2">⭐ 2</option>
                  <option value="3">⭐ 3</option>
                  <option value="4">⭐ 4</option>
                  <option value="5">⭐ 5</option>
                </select>

                {/* Comment */}
                <label className="block text-sm mb-1">Comment</label>
                <textarea
                  name="comment"
                  placeholder="Write your review..."
                  className="w-full p-2 border rounded-md mb-4"
                  required
                />

                {/* Buttons */}
                <div className="flex justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setIsReviewOpen(false)}
                    className="cursor-pointer w-1/2 px-4 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="cursor-pointer w-1/2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
