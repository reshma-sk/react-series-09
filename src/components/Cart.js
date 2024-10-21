import { useDispatch, useSelector } from "react-redux";
import RItemList from "./RItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    
    const handleClearCart = ()=>{
        dispatch(clearCart())

    }
    return(
        <div className="w-8/12 flex flex-col justify-center items-center m-auto">
            <h1 className="text-2xl font-bold">Cart</h1>
            {cartItems.length == 0 && <h1>Cart is empty, add items</h1>}
                <RItemList items={cartItems}/>
            
            
        </div>
    )
}
export default Cart;