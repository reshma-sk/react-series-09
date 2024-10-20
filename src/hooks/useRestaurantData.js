import { useState ,useEffect} from "react"
import { SWIGGY_API_URL } from "../utils/constants"

const useRestaurantData = ()=>{
    const[filteredRestaurants,setFilteredRestaurants] = useState([])
    const[restaurantList,setRestaurantList] = useState([])
    const fetchData = async ()=>{
        try {
            const data = await fetch(SWIGGY_API_URL);
            const json = await data.json();
            console.log(json);
            console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
            const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setRestaurantList(restaurants)  
            setFilteredRestaurants(restaurants)
        } catch (error) {
            console.log("Error fetching data :", error);    
        }    
    }

    useEffect(()=>{
        fetchData();
    },[])
    return [restaurantList,filteredRestaurants,setFilteredRestaurants]

}
export default useRestaurantData;