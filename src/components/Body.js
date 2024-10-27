import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";

const Body = () => {
  // STATE VARIABLES
  const [listofRestro, setListOfRestro] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestroCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(userContext);

  if (!onlineStatus) {
    return <h1 className="text-center text-red-500 text-2xl">You are Offline. Please check your internet connection!</h1>;
  }

  return listofRestro.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-4">
      <div className="filter flex flex-col md:flex-row justify-between items-center mb-6">
        {/* Search Container */}
        <div className="search-container flex items-center space-x-4 mb-4 md:mb-0">
          <input
            type="text"
            className="border border-solid border-gray-400 rounded-lg p-2 w-64"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredRestro = listofRestro.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestro(filteredRestro);
            }}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
          >
            Search
          </button>
        </div>

        {/* Top Rated Button */}
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
          onClick={() => {
            const filteredList = listofRestro.filter((res) => res.info.avgRating > 4);
            setFilteredRestro(filteredList);
          }}
        >
          Top Rated Restaurants!
        </button>

        {/* User Input */}
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <label className="font-semibold">Username:</label>
          <input
            className="border border-gray-400 rounded-lg p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        {filteredRestro.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            {restaurant.info.promoted ? (
              <RestroCardPromoted cardData={restaurant} />
            ) : (
              <RestaurantCard cardData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
