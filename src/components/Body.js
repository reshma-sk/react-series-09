import React, {useState,useContext} from 'react';
import RestaurantCard,{ withDiscountOffer } from './RestaurantCard'
import { CiSearch } from "react-icons/ci";
import {Shimmer} from './Shimmer';
import useRestaurantData from '../hooks/useRestaurantData';
import useOnline from '../hooks/useOnline';
import UserOffline from './userOffline';
import { withDiscountOffer } from './RestaurantCard';
import UserContext from '../utils/UserContext';
const Body = ()=>{
    
    const[showButton,setShowButton] = useState(true)
    const[searchRestaurant,setSearchRestaurant] = useState('')
    const[restaurantName,setRestaurantName] = useState('')
    const[restaurantList,filteredRestaurants,setFilteredRestaurants] = useRestaurantData();
    const RestaurantCardWithDiscount = withDiscountOffer(RestaurantCard)
    const isOnline = useOnline();
    const{loggedInUser,setUserName} = useContext(UserContext)
    const topRatedRestaurants = ()=>{
        const topRated = restaurantList.filter((res)=>res.info.avgRating > 4)
        setFilteredRestaurants(topRated)
        setShowButton(false)
    }

    const searchByName = ()=>{
        const filtered = restaurantList.filter((res)=>
            res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase())
        )
        setFilteredRestaurants(filtered)
        setSearchRestaurant('')
        setRestaurantName(searchRestaurant)
    }
    if(!isOnline){
        return <UserOffline/>
    }

    return restaurantList.length == 0 ? (<Shimmer/>) : 
        (
            <div className='flex flex-col gap-8 justify-between items-center mt-3'>

                <div className='flex justify-between m-10'>

                    <div className='flex justify-between'>
                        <input type="text"  className='w-96 rounded-3xl border border-slate-400 mx-10 px-4 py-4 h-12' placeholder='searchfor a restaurant' 
                        value = {searchRestaurant} onChange={(e)=>{setSearchRestaurant(e.target.value)}}/> 
                        <button onClick={searchByName} className="bg-blue-300 rounded-full px-3 font-bold">Search</button>  
                          
                    </div>
                    
                    {showButton &&
                    <div className='ml-10'>
                        <button className='bg-purple-300 px-4 py-3 border rounded-full font-bold' 
                        onClick = {topRatedRestaurants}>Top Restaurants</button>
                    </div>
                    }   

                    {/*<div className='m-3'>
                        <label> UserName :</label>
                        <input type="text" className='border border-black' value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} />
                    </div> */}   
                </div>

             <div className='flex flex-wrap flex-row justify-center align-middle'>
                {filteredRestaurants.length !== 0 ? (
                    filteredRestaurants.map((restaurant)=>(
                        <div  key = {restaurant.info.id} className="flex justify-center items-center">
                            {
                                // If restaurant has discount offer then show discount offer
                                restaurant.info.aggregatedDiscountInfoV3 ? (
                                    <RestaurantCardWithDiscount {...restaurant?.info} />
                                ):(
                                    <RestaurantCard  {...restaurant?.info}/>
                                )
                            }
                        </div>
                    ))   
    ):(
        <h2>Sorry, we couldn't find any restaurant for "{restaurantName}"</h2>
      )}
     </div>
    </div>
)}
export default Body;