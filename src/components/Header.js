import React from 'react'
import { auth } from "../utils/firebase";
import { LOGO_URL } from "../utils/constants";
import { Link,useNavigate} from "react-router-dom";
import useOnline from '../hooks/useOnline';
import {useDispatch, useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = ()=>{
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isOnline = useOnline();

  const cartItems = useSelector((store)=>store.cart.items)
  const user = useSelector((store)=>store.user)  

  //subscribing to the store using a selector
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };
    
    return (
      <div className="flex h-[5rem] justify-between items-center border border-black">
        <div>
          <Link to="/">
            <img className="p-4 w-[7rem] h-[7rem]" src={LOGO_URL} alt="Logo_img" />
          </Link>
        </div>
        <div className="p-4">
          <ul className="flex font-bold items-center">
            <li className="m-3 px-3 py-1 rounded-md hover:bg-orange-300">
              <Link to="/">Home</Link>
            </li>
            <li className="m-3 px-3 py-1 rounded-md hover:bg-orange-300">
              <Link to="/About">About</Link>
            </li>
            <li className="m-3 px-3 py-1 rounded-md hover:bg-orange-300">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="m-3 px-3 py-1 rounded-md hover:bg-orange-300">
              <Link to="/cart">
                Cart<sup>({cartItems.length}) </sup>
              </Link>
            </li>

            {/*<li className='m-3 hover:bg-orange-300'>{loggedInUser}</li>*/}
            <li className="m-3">
              {user && (
                <div className='flex'>
                  <button
                    className="m-3 bg-gray-700 text-white px-3 py-1 rounded-md"
                    onClick={handleSignOut}
                  >
                    Logout
                  </button>
                  <div>
                    <p className="text-xl font-bold text-center bg-slate-600 rounded-full px-2 py-1  text-white"> 
                      {user && user.displayName ? user.displayName.slice(0, 1) : "N/A"}

                    </p>
                    {isOnline ? (
                      <span className="bg-green-500 h-3 w-3 rounded-full absolute top-3  right-7"></span>
                    ) : (
                      <span className="bg-red-500 h-3 w-3 rounded-full absolute top-0 right-0 "></span>
                    )}
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    );
}
export default Header;