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
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
            <button className="text-white bg-black p-2 rounded-lg" onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length == 0 && <h1>Cart is empty, add items</h1>}
                <RItemList items={cartItems}/>
            </div>
            
        </div>
    )
}
export default Cart;