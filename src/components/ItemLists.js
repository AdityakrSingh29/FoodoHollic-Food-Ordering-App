import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemLists = ({ items }) => {

  const dispatch=useDispatch();

  const handleAddItems=(item)=>{
    dispatch(addItem(item));
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-semibold text-lg">{item.card.info.name}</span>
              <span className="ml-2 text-sm text-gray-600">
                - ₹{item.card.info.price / 100}
              </span>
            </div>
            <p className="text-xs text-gray-500">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4 flex flex-col items-center">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full rounded-md mb-2"
            />
            <button className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-green-600 shadow-md transition" onClick={()=>handleAddItems(item)}>
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemLists;
