import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { Shimmer } from './Shimmer';
import useRestaurantMenuData from "../hooks/useRestaurantMenuData";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  const restaurantInfo = useRestaurantMenuData(resId);
  console.log(restaurantInfo);
  const [showIndex, setShowIndex] = useState(null);
  if (restaurantInfo === null) {
    return <Shimmer />;
  }

  const { name } = restaurantInfo?.cards[2]?.card?.card?.info;
  //const {itemCards} = restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //console.log(itemCards);
  //console.log(restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categoriesData = restaurantInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
  restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
  restaurantInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  const categories =
    categoriesData.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="w-[60%] m-auto">
      <h3 className="text-center font-bold text-lg">{name} Menu</h3>
      {categories.map((category, index) => (
        <RestaurantMenuCategory
          key={category?.card?.card?.title}
          data={category.card?.card}
          showItems={index == showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
