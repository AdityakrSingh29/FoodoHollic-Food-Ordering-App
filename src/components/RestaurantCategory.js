import { FaArrowCircleDown } from "react-icons/fa";
import ItemLists from "./ItemLists";
// import { useState } from "react";
const RestaurantCategory=({data,showItems,setShowIndex})=>{

    // const [showItems,setShowItems]=useState(false);
    // console.log(data);
    const handleClick=()=>{
        // setShowItems(!showItems);
        setShowIndex();
    }
    return <div>
        {/* HEADER  */}
        <div className="w-6/12 mx-auto my-3 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer"  onClick={handleClick}>
        <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
        <span><FaArrowCircleDown /></span>
        </div>

        {showItems && <ItemLists items={data.itemCards}/>}
        </div>

        
    </div>
}

export default RestaurantCategory;