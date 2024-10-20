import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const RItemList = ({items})=>{

    const dispatch = useDispatch();
    const handleAddCart = (item)=>{
        dispatch(addItem(item))

    }
    return(
        <div>
            {items.map((item)=>(
                <div key={item.card.info.id} className=" flex p-2 m-2 border-black border-b-2">
                    <div>
                        <span className="font-semibold text-lg">{item.card.info.name} :</span>
                        <span className="font-semibold"> ₹{item.card.info.price/100}</span>
                        <p className="m-4">{item.card.info.description}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img className="w-[150px] h-[100px] object-cover rounded-[8px]" 
                        src={CDN_URL + item.card.info.imageId}
                        alt={name}
                        />

                       <button className="w-[100px] text-green-600 bg-white font-semibold rounded-md text-[1.2rem] px-[30px] py-[5px] cursor-pointer border-none relative bottom-[15px] hover:bg-gray-300 hover:text-green-800 transition-all 0.3s"
                       onClick={()=>handleAddCart(item)}>ADD+
                       </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default RItemList;