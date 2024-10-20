import { useState } from "react";
import RItemList from "./RItemList";
import { RiArrowDownSLine } from "react-icons/ri";

const RestaurantMenuCategory = ({data,showItems,setShowIndex})=>{
   
    const{title,itemCards} = data;
    console.log(data);
    const handleClick = ()=>{
        setShowIndex();
    }
    
       
    return(
        <div>
            <div className="w-8/12 mx-auto my-4 font-bold text-lg bg-gray-50 flex justify-between shadow-lg p-4">
                <div className="w-7/12 flex justify-between" onClick={handleClick}>    
                 <span>{title} ({itemCards.length})</span>
                 <span><RiArrowDownSLine className="bg-gray-200"/></span> 
                </div>
                {showItems && <RItemList items = {data.itemCards} className="mt-6"/>}
                 
            </div>
               
        </div>
    )
}
export default RestaurantMenuCategory;