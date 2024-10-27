import React from "react";
import UserClass from "./UserClass"; // Component fetching founder info
import chefImage from "../../assets/chief.avif";
import foodImage from "../../assets/images.jpg";

class NewAbout extends React.Component {
  render() {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 flex flex-col items-center justify-center px-4 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-4xl w-full transform hover:scale-105 transition-transform duration-300 ease-in-out mb-8">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 mb-6 text-center">
            Welcome to Foodoholic!
          </h1>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300 text-center">
            Delicious food, delivered with love
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-center leading-relaxed">
            At Foodoholic, we believe in serving the finest meals straight to your door. With our carefully curated menu, top chefs, and fresh ingredients, we guarantee an unforgettable dining experience!
          </p>

          {/* Images and Descriptions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            <div className="relative">
              <img
                src={chefImage}
                alt="Our Chef"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
              <p className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-lg">
                Meet our expert chefs, the hearts behind our delicious dishes.
              </p>
            </div>
            <div className="relative">
              <img
                src={foodImage}
                alt="Delicious Food"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
              <p className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-lg">
                Freshly made meals with a perfect blend of flavors and aromas.
              </p>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-xs w-full transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <h3 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-4">
            Meet the Founder
          </h3>
          <UserClass />
        </div>
      </div>
    );
  }
}

export default NewAbout;
