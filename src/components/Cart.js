import { useDispatch, useSelector } from "react-redux";
import RItemList from "./RItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();   
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }
    return (
      <div className="flex flex-col  items-center relative h-[80vh] w-full">
        <h1 className="text-2xl font-bold mt-3"> Cart</h1>
        <div>
          <button
            onClick={handleClearCart}
            className="text-black-100  mt-4  bg-gray-500 px-4 py-2 rounded-lg font-bold"
          >
            Clear
          </button>
            {cartItems.length == 0 && <h1>Cart is empty, add items</h1>}
        </div>

        <div className="relative mt-8">
          <RItemList items={cartItems} />
        </div>
      </div>
    );
}
export default Cart;