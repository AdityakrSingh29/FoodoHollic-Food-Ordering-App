import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { cardData } = props;
  // console.log(cardData);
  const { name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId } = cardData?.info;

  return (
    <div
      className="m-4 p-4 w-[250px] rounded-lg bg-white hover:bg-gray-100 shadow-md hover:shadow-xl transform transition duration-500 hover:scale-105 border border-gray-200 hover:border-transparent
      hover:bg-gradient-to-r from-green-100 to-green-200"
    >
      <img
        className="w-full h-[150px] object-cover rounded-t-lg transition-transform duration-500 ease-in-out transform hover:scale-110"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="py-4">
        <h3 className="font-bold text-lg text-gray-800 truncate">{name}</h3>
        <h4 className="text-sm text-gray-600 truncate">{cuisines.join(', ')}</h4>
        <div className="flex justify-between items-center py-2 text-sm">
          <span className="bg-green-500 text-white px-2 py-1 rounded-md font-semibold transition duration-300 ease-in-out">
            {avgRating} ★
          </span>
          <span className="text-gray-700 font-semibold">{costForTwo}</span>
        </div>
        <h4 className="text-sm text-gray-600">{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

// HIGHER ORDER FUNCTION
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-black text-white m-2 p-1 rounded-md text-xs font-semibold">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
