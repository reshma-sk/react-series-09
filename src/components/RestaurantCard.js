//import React, { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import { MdStarRate } from "react-icons/md";
import { Link } from "react-router-dom";
//import UserContext from "../utils/UserContext";

const RestaurantCard = ({id,name,costForTwo,cloudinaryImageId,avgRating})=>{
     
    //const {loggedInUser} = useContext(UserContext)
    return(
        <div className='flex flex-col m-3 border border-yellow-400 w-44'>
            <Link to = {"/restaurants/" + id}> 
            <img src={CDN_URL +cloudinaryImageId } alt="" />
            <h5>{name.slice(0,13)}
                {name.length > 13 ? '...' : ''}
            </h5>
            <h4>{costForTwo}</h4>
            <h4 className='flex'>
                <MdStarRate className="border-6" style={avgRating > 4 ? {backgroundColor:'green'}:{backgroundColor:'red'}}/>
                <span className='ml-1'>{avgRating}</span>
            </h4>
            {/*{loggedInUser}*/}
            </Link> 
        </div>
         
    )
}
export const withDiscountOffer = (RestaurantCard)=>{
    return (props)=>{
        const { aggregatedDiscountInfoV3 } = props;
        return(
            <div className="w-[250px] h-[300px] bg-white rounded-[8px] shadow-md cursor-pointer overflow-hidden hover:scale-[0.98] relative">
                {aggregatedDiscountInfoV3 && (
                   <div className="text-black-500 text-lg text-center font-bold absolute top-[55%] left-[2px]">{`${aggregatedDiscountInfoV3.header} ${aggregatedDiscountInfoV3.subHeader}`}</div>)}
               <RestaurantCard {...props} />
            </div>
        )
            
    }
}
export default RestaurantCard;