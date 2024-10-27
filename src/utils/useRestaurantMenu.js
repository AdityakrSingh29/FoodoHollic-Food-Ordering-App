import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";


const useRestaurantMenu=(resId)=>{

    const [restroInfo,setRestroInfo]=useState(null);

    //fetchData
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        const data=await fetch(MENU_URL+resId);
        const json=await data.json();
        setRestroInfo(json.data);
    }
    return restroInfo;
} 

export default useRestaurantMenu;