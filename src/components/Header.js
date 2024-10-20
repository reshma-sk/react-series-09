import React,{useState,useContext} from 'react'
import { LOGO_URL } from "../utils/constants";
import { Link,useNavigate } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import useOnline from '../hooks/useOnline';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = ()=>{
    const[isLoggedIn,setIsLoggedIn] = useState(false)
    const isOnline = useOnline();
    const navigate = useNavigate();
    const {loggedInUser} = useContext(UserContext);

    //subscribing to the store using a selector
    const cartItems = useSelector((store)=>store.cart.items)
    return(
        <div className = "flex justify-between items-center border border-black">
            <div>
                <Link to="/"><img className='p-4 w-20' src={LOGO_URL} alt="Logo_img" /></Link>   
            </div>
            <div>{isOnline ? "✅ Online" : "❌ Disconnected"}</div>
            <div className="p-4">
                <ul className='flex font-bold'>
                    <li className='m-3 hover:bg-orange-300'><Link to="/">Home</Link></li>
                    <li className='m-3 hover:bg-orange-300'><Link to="/About">About</Link></li>
                    <li className='m-3 hover:bg-orange-300'><Link to="/contact">Contact Us</Link></li>
                    <li>
                        <Link to="/cart" className='m-3 hover:bg-orange-300'><FaCartArrowDown/>{cartItems.length}</Link>
                        
                    </li>  
                    {isLoggedIn ? (
                        <button  className='m-3 hover:bg-orange-300' onClick={()=>setIsLoggedIn(false)}>Logout</button>
                    ):(
                        <button  className='m-3 hover:bg-orange-300' onClick={()=>navigate("/login")}>Login</button>
                    )} 
                    <li className='m-3 hover:bg-orange-300'>{loggedInUser}</li>

                </ul>
            </div>

        </div>
    )
}
export default Header;