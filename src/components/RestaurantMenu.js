import useRestaurantMenu from "./../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu=()=>{

    // const[restroInfo,setrestroInfo]=useState(null);

    const {resId}=useParams();

    const restroInfo=useRestaurantMenu(resId); //CUSTOM HOOKS
    const [showIndex,setShowIndex]=useState(0);


    // useEffect(()=>{
    //     fetchMenu();
    // },[])

    // const fetchMenu=async()=>{
    //     const data=await fetch(
    //        MENU_URL +resId
    //     );
    //     const json=await data.json();
    //     // console.log(json.data.cards[2].card.card.info);
    //     setrestroInfo(json.data);
    // }

    if(restroInfo==null)
    {
        return <Shimmer/>
    }

    // const cards = restroInfo.cards;
    // const cardInfo = cards[2]?.card?.card?.info; 

    const {name,cuisines,costForTwoMessage,imageId}=restroInfo?.cards[2]?.card?.card?.info;
    const {itemCards}=restroInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    // console.log(restroInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR);
    //I WANT TO FILTER DATA
    const categories=restroInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);
    // console.log(itemCards);

    const handleToggle=(index)=>{
        setShowIndex(prevIndex => prevIndex === index ? null : index);
    }

    return(
        <div className="text-center ">
        <h1 className="font-bold my-5 text-xl">{name}</h1>
        <p className="font-semibold text-lg">{cuisines.join(",")}</p>
        {/* CATEGORY ACCORDIAN DROPDOWN */}
        {
            categories.map((category,index)=>(
                //CONTROLLED COMPONENT
                <RestaurantCategory key={category?.card?.card.title}  data={category?.card?.card} showItems={index ===showIndex ? true :false} setShowIndex={()=>handleToggle(index)}/>
            ))
        }

        </div>
    );
};

export default RestaurantMenu;