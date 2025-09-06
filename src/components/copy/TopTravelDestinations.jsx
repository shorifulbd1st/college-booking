import React from "react";

const TopTravelDestinations = () => {
  return (
    <div className="w-11/12 mx-auto my-4 -mt-4">
      {/* <h1 className='text-3xl font-semibold '>Top Travel Destinations</h1> */}
      <h1
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="text-3xl lg:text-4xl my-5 font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 drop-shadow-lg"
      >
        Top Travel Destinations
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 grid-rows-2 gap-4">
        <div className="col-span-6 row-span-2">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="h-full relative bg-white rounded-lg shadow-lg"
          >
            {/* Avatar Section */}
            <img
              className="object-cover object-center h-full w-full rounded-xl"
              src="https://images.pexels.com/photos/4346403/pexels-photo-4346403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
            />

            {/* Header Section */}
            <div className="w-full  px-6 py-3 fifty-off ">
              <h1 className="mx-3 text-center text-2xl font-bold">
                Saudi Arabia
              </h1>
            </div>
          </div>
        </div>
        <div className="row-span-2 col-span-6 grid grid-cols-1 md:grid-cols-6 gap-3 ">
          <div className="col-span-3">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              className="relative w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
            >
              {/* Avatar Section */}
              <img
                className="object-cover object-center w-full"
                src=" https://images.pexels.com/photos/17690078/pexels-photo-17690078/free-photo-of-view-of-the-dome-of-the-rock.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="avatar"
              />

              {/* Header Section */}

              <div className="w-full  px-6 py-3 fifty-off ">
                <h1 className="mx-3 text-center text-2xl font-bold">
                  Palestine
                </h1>
              </div>
            </div>
          </div>
          <div className="col-span-3 ">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              className=" relative w-full h-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
            >
              {/* Avatar Section */}
              <img
                className="object-cover object-center w-full h-full"
                src="https://images.pexels.com/photos/12251538/pexels-photo-12251538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="avatar"
              />

              {/* Header Section */}

              <div className="w-full  px-6 py-3 fifty-off ">
                <h1 className="mx-3 text-center text-2xl font-bold">
                  Bangladesh
                </h1>
              </div>
            </div>
          </div>

          <div className="row-span-1 col-span-3">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="relative h-full w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
            >
              {/* Avatar Section */}
              <img
                className="object-cover object-center w-full h-full"
                src="https://images.pexels.com/photos/6918512/pexels-photo-6918512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="avatar"
              />

              {/* Header Section */}

              <div className="w-full  px-6 py-3 fifty-off ">
                <h1 className="mx-3 text-center text-2xl font-bold">Syria</h1>
              </div>
            </div>
          </div>

          <div className="col-span-3">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="relative w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
            >
              {/* Avatar Section */}
              <img
                className="object-cover object-center w-full"
                src="https://images.pexels.com/photos/4092214/pexels-photo-4092214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="avatar"
              />

              {/* Header Section */}
              <div className="w-full  px-6 py-3 fifty-off ">
                <h1 className="mx-3 text-center text-2xl font-bold">Iraq</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTravelDestinations;
