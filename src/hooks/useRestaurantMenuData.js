import { useState,useEffect } from "react"
import { MENU_URL } from "../utils/constants"

const useRestaurantMenuData = (resId)=>{
    const[restaurantInfo,setRestaurantInfo] = useState(null)

    useEffect(()=>{
        fetchMenusData();
    },[]);

    const fetchMenusData = async()=>{
        try {
            const data = await fetch(MENU_URL + resId)
            const json = await data.json();
            console.log(json);
            setRestaurantInfo(json.data)     
        } catch (error) {
            console.log("can not get menu",error);    
        }
    }
    return restaurantInfo;
}
export default useRestaurantMenuData;   