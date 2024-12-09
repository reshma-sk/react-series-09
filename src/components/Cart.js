import { useDispatch, useSelector } from "react-redux";
import RItemList from "./RItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="flex flex-col  items-center relative w-full">
      <h1 className="text-2xl font-bold mt-3"> Cart</h1>
      <div>
        {cartItems.length == 0 ? (
          <h1>Cart is empty, add items</h1>
        ) : (
          <div className="mt-2">
            <h1>You have items in your cart</h1>
            <button className="bg-gray-500 font-semibold rounded-md ml-12 px-3 py-2 mt-2" onClick={handleClearCart}>Clear Cart</button>
          </div>
        )}
      </div>

      <div className="shadow-lg relative mt-8 w-[70%]">
        <RItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;