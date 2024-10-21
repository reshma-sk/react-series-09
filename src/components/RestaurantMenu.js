import React, { useState } from 'react';
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { Shimmer } from './Shimmer';
import { MdStarRate } from "react-icons/md";
import useRestaurantMenuData from "../hooks/useRestaurantMenuData";
import RestaurantMenuCategory from "./RestaurantMenuCategory";


const RestaurantMenu = ()=>{
  const[showIndex,setShowIndex] = useState(0)
    const {resId} = useParams();
    console.log(resId);
    const restaurantInfo = useRestaurantMenuData(resId);
    console.log(restaurantInfo);
    
    if(restaurantInfo === null){
        return <Shimmer/>
    }

    const{name} = restaurantInfo?.data?.cards[2]?.card?.card?.info;  
    //const {itemCards} = restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    //console.log(itemCards);
    //console.log(restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories = restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter
    (c=>c.card?.["card"]?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(categories);
    
    return(
      <div className="w-[60%] m-auto">
        <h3 className="text-center font-bold">{name}  Menu</h3>
        {categories.map((category,index)=>
        (<RestaurantMenuCategory 
        key={category?.card?.card?.title} 
        data = {category.card?.card}
        showItems={index == showIndex ? true : false}
        setShowIndex={()=>setShowIndex(index)}
        />))}
        

      </div>

    )
        
          {/*{itemCards.length ? (
            itemCards.map((item) => {
            const {id,name,price,defaultPrice,ratings,imageId,description} = item.card.info;
            return (
              <div key={id} className="flex justify-between items-center gap-3 border border-black">
                <div className="flex flex-col gap-2">
                  <h2>{name}</h2>
                  <h4>₹{price / 100 || defaultPrice / 100}</h4>
                  <p>{description && description.slice(0, 60) || "Dummy"}</p>
                  <h4 className="rating">
                   <MdStarRate className="border-6" 
                   style={
                    ratings?.aggregatedRating?.rating > 4.0 ? {backgroundColor:'green'}:{backgroundColor:'red'}}/>
                  </h4>
                </div>

                <div className="w-[150px] h-[120px] object-cover border-r-2">
                  <img className = "w-14" src={CDN_URL + imageId} alt={name} />
                  <button className="text-green bg-white">ADD</button>
                </div>
              </div>
            );
          })*/}
   
}
export default RestaurantMenu;
