import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";


const RItemList = ({items})=>{

    const dispatch = useDispatch();
    const handleAddCart = (item)=>{
        dispatch(addItem(item))

    }
    return(
        <div className="shadow-lg">
            {items.map((item)=>(
                <div key={item.card.info.id} className="md:w-full w-60  flex flex-col md:flex-row md:justify-between p-2 my-2 shadow-lg md:shadow-md border-black border-b-2">
                    <div className="w-[70%] mt-1">
                        <span className="font-semibold text-lg">{item.card.info.name} :</span>
                        <span className="font-semibold"> ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                        <p className="m-4">{item.card.info.description}</p>
                        
                    </div>
                    <div className="w-[15%] shadow-lg border "> 
                        <img className="w-[150px] h-[100px] object-cover rounded-[8px]" 
                        src={CDN_URL + item.card.info.imageId}
                        alt={item.card.info.name}
                        />
                        <button className="w-[50px] text-black-100 bg-gray-500 font-semibold rounded-md text-md px-3 py-1
                        cursor-pointer border-none relative ml-[20px] -top-[6.5rem] hover:bg-gray-300 hover:text-green-800 transition-all 0.3s"
                        onClick={()=>handleAddCart(item)}>Add 
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default RItemList;