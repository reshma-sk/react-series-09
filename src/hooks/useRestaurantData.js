import { useState ,useEffect} from "react"
import { SWIGGY_API_URL } from "../utils/constants"

const useRestaurantData = ()=>{
    const[filteredRestaurants,setFilteredRestaurants] = useState([])
    const[restaurantList,setRestaurantList] = useState([])

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        try {
            const data = await fetch(SWIGGY_API_URL);
            const json = await data.json();
            console.log(json);
           // const restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setRestaurantList(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)  
            setFilteredRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        } catch (error) {
            console.log("Error fetching data :", error);    
        }    
    }

    
    return [restaurantList,filteredRestaurants,setFilteredRestaurants]

}
export default useRestaurantData;