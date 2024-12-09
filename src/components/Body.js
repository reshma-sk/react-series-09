import React, { useState } from "react";
import RestaurantCard, { withDiscountOffer } from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import useRestaurantData from "../hooks/useRestaurantData";
import useOnline from "../hooks/useOnline";
import UserOffline from "./userOffline";
import { Link, useNavigate } from "react-router-dom";

const Body = () => {
  const [showButton, setShowButton] = useState(true);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantList, filteredRestaurants, setFilteredRestaurants] =
    useRestaurantData();
  const RestaurantCardWithDiscount = withDiscountOffer(RestaurantCard);
  const isOnline = useOnline();
  
  const topRatedRestaurants = () => {
    const topRated = restaurantList.filter((res) => res.info.avgRating > 4);
    setFilteredRestaurants(topRated);
    setShowButton(false);
  };
  
  const searchByName = () => {
    const filtered = restaurantList.filter((res) =>
      res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase())
    );
    setFilteredRestaurants(filtered);
    setSearchRestaurant("");
    setRestaurantName(searchRestaurant);

  };
  if (!isOnline) {
    return <UserOffline />;
  }

  return restaurantList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="w-full flex flex-col gap-8 justify-between items-center mt-3">
      <div className="flex flex-col  md:flex-row md:justify-between  md:m-10">
        <div className="flex flex-col items-center justify-between mx-auto  md:flex-row  md:justify-between">
          <input
            type="text"
            data-testid="searchInput"
            className="w-60  md:w-96 rounded-3xl border border-slate-400 -ml-3 md:mx-10 px-4 py-4 h-12"
            placeholder="search for a restaurant"
            value={searchRestaurant}
            onChange={(e) => {
              setSearchRestaurant(e.target.value);
            }}
          />
          <button
            onClick={searchByName}
            className="bg-blue-300 w-[5rem] md:ml-[6rem] mt-4 md:m-1 rounded-full  py-3 md:px-3 font-bold"
          >
            Search
          </button>
        </div>

        {showButton && (
          <div className="ml-10 mt-3">
            <button
              className="bg-purple-300 px-4 py-3 md:m-1 -ml-1 md:ml-[2rem] border rounded-full font-bold"
              onClick={topRatedRestaurants}
            >
              Top Restaurants
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-wrap flex-row justify-center align-middle">
        {filteredRestaurants.length !== 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <div className="flex justify-center items-center">
                {
                  // If restaurant has discount offer then show discount offer
                  restaurant.info.aggregatedDiscountInfoV3 ? (
                    <RestaurantCardWithDiscount {...restaurant?.info} />
                  ) : (
                    <RestaurantCard {...restaurant?.info} />
                  )
                }
              </div>
            </Link>
          ))
        ) : (
          <div>
            <h2>Sorry, we couldn't find any restaurant for "{restaurantName}"</h2>
          </div>
          
        )}
      </div>
    </div>
  );
};

export default Body;
