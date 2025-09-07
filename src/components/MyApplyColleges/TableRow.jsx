import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const TableRow = ({ room, setBookingRooms, allBookingRoom }) => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    image,
    price,
    roomCharacteristics,
    roomId,
    roomType,
    startDate: date,
    maximumGuests,
  } = room;
  // console.log(room)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
  const loggedInEmail = user?.email;
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal1 = () => {
    setIsModalOpen1(true);
  };

  const closeModal1 = () => {
    setIsModalOpen1(false);
  };
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = { startDate };
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/update-booking-room/${_id}`,
        data
      );
      let timerInterval;
      Swal.fire({
        title: "Updating Data!",
        html: "Please wait, updating data will complete in <b></b> milliseconds.",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          // console.log("Data update process completed successfully!");
        }
      });
      // navigate("/my-booking")
    } catch (err) {
      // console.log(err)
      toast.error(err.message);
    }
    allBookingRoom();
    closeModal();
  };

  const handleDelete = (id, id1) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // console.log(id)
        await axios.post(
          `${import.meta.env.VITE_API_URL}/booking-delete/${id}`,
          { id1 }
        );
        allBookingRoom();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  const handleReview = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user?.email;
    const name = form.name.value;
    const date = startDate1;
    const rating = parseInt(form.rating.value);
    const comment = form.comment.value;
    const data = { email, roomId, name, date, rating, comment };
    // console.log(data)
    try {
      // await mutateAsync(formData)
      await axios.post(
        `${import.meta.env.VITE_API_URL}/add-review/${roomId}`,
        data
      );
      toast.success("Your review Successful!!!");
      // navigate("/my-booking")
    } catch (err) {
      // console.log(err)
      toast.error(err.message);
    }
    closeModal1();
  };
  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <div className="flex items-center gap-x-2">
            <img
              className="object-cover w-28 h-20 rounded-lg"
              src={image}
              alt=""
            />
          </div>
        </div>
      </td>
      <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div>
          <h2 className="font-medium text-gray-800 dark:text-white">
            {roomType}
          </h2>
          <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
            {roomCharacteristics}
          </p>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        <p>
          <span className="font-medium text-gray-500">
            Media and Technology
          </span>
        </p>
        <p>
          <span className="font-medium text-gray-500">Food and Drink</span>
        </p>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {" "}
        <strong>${price}</strong>{" "}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        <strong> {format(new Date(date), "P")}</strong>{" "}
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-6">
          <button
            onClick={openModal1}
            className="flex items-center px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            // className="px-6 py-2 text-sm font-medium text-white transition-colors duration-300 transform focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
          >
            <span className="mr-2">Review</span>
            <MdRateReview />
          </button>
          <button
            onClick={openModal}
            className="flex items-center px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80"
          >
            <span className="mr-2">Update</span>
            <GrUpdate />
          </button>

          {/* Delete Button */}
          <button
            onClick={() => handleDelete(room._id, roomId)}
            className="flex items-center px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80"
          >
            <span className="mr-2">Cancel</span>
            <MdDelete />
          </button>
        </div>

        <div className="relative flex justify-center">
          {isModalOpen && (
            <div
              className="fixed inset-0 z-[1020] overflow-y-auto bg-black bg-opacity-50"
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div className="border-2 hover:border-blue-400  duration-300  relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                  <h3
                    className="mb-3 text-center text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                    id="modal-title"
                  >
                    Update Booking Date
                  </h3>

                  <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg dark:bg-gray-800">
                    <img
                      className="object-cover object-center w-full h-56    overflow-hidden rounded-lg"
                      src={image}
                      alt={`${roomType} Room`}
                    />

                    <div className="py-1">
                      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
                        {roomType} - {roomCharacteristics}
                      </h1>
                      <div className="flex justify-between p-2">
                        <div className=" text-gray-700 dark:text-gray-400">
                          <p>
                            <span className="font-medium text-black">
                              Maximum Guests:
                            </span>{" "}
                            {maximumGuests}
                          </p>
                          {/* <p><span className="font-medium text-black">Room:</span> {booking ? <span className='text-red-600'>Unavailable</span> : <span className=''>Available</span>}</p> */}
                          <p>
                            <span className="font-medium text-black">
                              Price:
                            </span>{" "}
                            ${price}
                          </p>
                        </div>

                        <div className="">
                          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                            Facilities:
                          </h3>
                          <div>
                            <p>
                              <span className="font-medium text-gray-500">
                                Media and Technology
                              </span>
                            </p>
                          </div>
                          <div className="mt-1">
                            <p>
                              <span className="font-medium text-gray-500">
                                Food and Drink
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleUpdate} className="mt-4">
                    {/* Applied Date */}
                    <label
                      htmlFor="appliedDate"
                      className="block mt-1 text-sm font-semibold text-black"
                    >
                      Booking Date
                    </label>
                    <DatePicker
                      className="border p-2 rounded-md"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />

                    {/* Buttons */}
                    <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                      <button
                        type="button"
                        onClick={closeModal}
                        className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        // onClick={closeModal}
                        className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                      >
                        Confirm
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="relative flex justify-center">
          {isModalOpen1 && (
            <div
              className="fixed inset-0 z-[1020] overflow-y-auto bg-black bg-opacity-50"
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div className="border-2 hover:border-blue-400  duration-300  relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                  <h3
                    className="text-xl font-medium leading-6 text-gray-800 capitalize dark:text-white text-center "
                    id="modal-title"
                  >
                    Review
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    You can review based on how you liked this room
                  </p>

                  <form onSubmit={handleReview} className="mt-4">
                    {/* Email */}
                    <label
                      htmlFor="email"
                      className="block text-sm text-gray-700 dark:text-gray-200"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      // name='email'
                      id="email"
                      value={loggedInEmail}
                      readOnly
                      className="block w-full px-4 py-2 mt-1 text-sm text-gray-700 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"
                    />

                    {/* First Name */}
                    <label
                      htmlFor="firstName"
                      className="block mt-3 text-sm text-gray-700 dark:text-gray-200"
                    >
                      Your Name
                    </label>
                    <input
                      value={user?.displayName}
                      readOnly
                      type="text"
                      name="name"
                      id="firstName"
                      placeholder="Enter your  name"
                      className="block w-full px-4 py-2 mt-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
                      required
                    />

                    <div className="flex gap-4">
                      <div>
                        <label
                          htmlFor="appliedDate"
                          className="block mt-3 text-sm text-gray-700 dark:text-gray-200"
                        >
                          Review Date
                        </label>

                        <DatePicker
                          className="cursor-not-allowed border p-3 rounded-md"
                          readOnly
                          selected={startDate1}
                          onChange={(date) => setStartDate1(date)}
                        />
                      </div>
                      <div className="w-1/2">
                        <label className="block mt-3 text-sm text-gray-700 dark:text-gray-200 ">
                          Select Rating
                        </label>
                        <select
                          name="rating"
                          defaultValue="Rating"
                          className="select select-bordered w-full border "
                        >
                          <option disabled>Rating</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                    </div>

                    <label
                      htmlFor="Description"
                      className="block text-sm text-gray-500 dark:text-gray-300"
                    >
                      Enter Your Comment
                    </label>

                    <textarea
                      name="comment"
                      placeholder="Enter Your Comment..."
                      className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    />

                    {/* Buttons */}
                    <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                      <button
                        type="button"
                        onClick={closeModal1}
                        className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        // onClick={closeModal}
                        className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                      >
                        Apply
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
