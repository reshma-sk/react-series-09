//import React, { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import { MdStarRate } from "react-icons/md";
import { Link } from "react-router-dom";

const RestaurantCard = ({
  id,
  name,
  cloudinaryImageId,
  avgRatingString,
  sla,
  cuisines,
}) => {
  return (
    <div
      data-testid="resCard"
      className="flex flex-col flex-wrap w-64 mx-2 my-4 h-96 p-4 shadow-xl rounded-lg hover:bg-gray-400"
    >
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className="w-64 h-48 shadow-sm rounded-md mx-auto"
      />
      <div>
        <h3 className="font-bold">{name}</h3>
        <span>
          <MdStarRate />
          {avgRatingString}
        </span>
        <p>{sla.deliveryTime}mins</p>
        <span>Cuisines: {cuisines.join(", ")}</span>
      </div>
    </div>
  );
};
export const withDiscountOffer = (RestaurantCard) => {
  return (props) => {
    const { aggregatedDiscountInfoV3 } = props;
    return (
      <div>
        {aggregatedDiscountInfoV3 && (
          <div className="text-black-500 bg-yellow-100 text-md text-center font-bold absolute">{`${aggregatedDiscountInfoV3.header} ${aggregatedDiscountInfoV3.subHeader}`}</div>
        )}
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
