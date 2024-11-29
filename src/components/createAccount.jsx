import React from 'react';
import laptop from "../assets/images/laptop.jpg";

const CreateAccount = () => {
  return (
    <div
      className="min-h-screen py-6 flex flex-col justify-center sm:py-12"
      style={{
        backgroundImage: `url(${laptop})`,
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <div className="relative py-6 sm:max-w-4xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-gray-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-8 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h2 className="text-3xl text-center font-extrabold text-gray-800 mb-8">
            Create Account
          </h2>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="First Name*"
                />
                <input
                  className="mt-4 shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Last Name*"
                />
                <input
                  className="mt-4 shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email*"
                />
                <input
                  className="mt-4 shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="number"
                  placeholder="Phone Number*"
                />
                <input
                  className="mt-4 shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="gender"
                  type="text"
                  placeholder="Gender"
                />
              </div>

              <div>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="address1"
                  type="text"
                  placeholder="Address"
                />
                <input
                  className="mt-4 shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="address2"
                  type="text"
                  placeholder="Address 2"
                />
                <input
                  className="mt-4 shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="city"
                  type="text"
                  placeholder="City"
                />
                <input
                  className="mt-4 shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="region"
                  type="text"
                  placeholder="State / Region"
                />
                <input
                  className="mt-4 shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="pin"
                  type="text"
                  placeholder="GPS-Address"
                />
              </div>
            </div>

            <button
              className="mt-8 w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
