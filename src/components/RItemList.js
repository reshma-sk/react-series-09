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
                <div key={item.card.info.id} className="w-50 flex justify-between p-2 my-2 shadow-md border-black border-b-2">
                    <div>
                        <span className="font-semibold text-lg">{item.card.info.name} :</span>
                        <span className="font-semibold"> ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                        <p className="m-4">{item.card.info.description}</p>
                        <button className="w-50% text-black-100 bg-gray-500 font-semibold rounded-md text-[1rem] px-[10px] py-[5px] 
                        cursor-pointer border-none relative ml-[300px] bottom-[15px] hover:bg-gray-300 hover:text-green-800 transition-all 0.3s"
                        onClick={()=>handleAddCart(item)}>Add to cart
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img className="w-[150px] h-[100px] object-cover rounded-[8px]" 
                        src={CDN_URL + item.card.info.imageId}
                        alt={item.card.info.name}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}
export default RItemList;