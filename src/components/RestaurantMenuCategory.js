import { useState } from "react";
import RItemList from "./RItemList";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdKeyboardArrowUp } from "react-icons/md";

const RestaurantMenuCategory = ({data,showItems,setShowIndex})=>{
    //const{title,itemCards} = data;
    //console.log(data);
    const handleClick = ()=>{
        setShowIndex();
    }
  
     return (
    <div>
      <div className="w-full shadow-md px-[20px] bg-gray-50 rounded-md py-[10px] my-[30px]">
        {/* Category Header */}
        <div
          className="flex justify-between items-center text-xl font-extrabold cursor-pointer"
          onClick={handleClick}
        >
          <span>{`${data?.title.slice(0, 40)} (${
            data?.itemCards?.length
          })`}</span>
          <div className="text-[40px]">
            {showItems ? <MdKeyboardArrowUp /> : <RiArrowDownSLine />}
          </div>
        </div>

        {/* Category Body */}
        {showItems && <RItemList items={data?.itemCards} />}
      </div>
    </div>
  );
}
export default RestaurantMenuCategory;