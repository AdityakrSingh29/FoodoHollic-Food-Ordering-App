import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FaUtensils } from "react-icons/fa"; // New icon for logo
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);
  //SUBSCRIBING TO THE STORE USING SELECTOR
  const cartItems=useSelector((store)=>store.cart.items);

  return (
    <header className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 p-4 shadow-lg ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <FaUtensils className="text-4xl text-red-600" /> 
           <h1 className="ml-3 text-4xl font-extrabold text-gray-800 shadow-lg bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text leading-tight">Foodoholic</h1>
        </div>

        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-6 text-lg text-gray-800 font-medium">
            <li className="flex items-center">
              Online Status: {onlineStatus ? "✅" : "🔴"}
            </li>
            <li className="hover:text-yellow-600 transition duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-yellow-600 transition duration-300">
              <Link to="/About">About Us</Link>
            </li>
            <li className="hover:text-yellow-600 transition duration-300">
              <Link to="/contactUs">Contact Us</Link>
            </li>
            <li className="hover:text-yellow-600 transition duration-300 font-bold">
              <Link to="/Cart">Cart -({cartItems.length} items in cart)</Link>
            </li> 
          </ul>

          <button
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-transform duration-300 transform hover:scale-105"
            onClick={() => {
              setbtnNameReact((prev) => (prev === "Login" ? "Logout" : "Login"));
            }}
          >
            {btnNameReact}
          </button>
          <span className="p-4 font-medium text-gray-700">{loggedInUser}</span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
