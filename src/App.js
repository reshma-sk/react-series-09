import React, { lazy, useEffect, useState,Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Footer from './components/Footer'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Login from './components/Login';
import Cart from './components/Cart';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Body from './components/Body';



const About = lazy(()=>import('./components/About'))

const App = ()=>{
    const[userName,setUserName] = useState()

    useEffect(()=>{
        const data = {
            name:'R',
        }
        setUserName(data.name)
    },[])
    return(
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
             <div className='app'>
               <Header/>
               <Outlet/>
               <Footer/>
             </div>
           </UserContext.Provider>
        </Provider>   
        
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Suspense fallback={<h1>Loading...</h1>}><Body/></Suspense>,
            },
            {
                path:"/about",
                element:<Suspense fallback={<h1>Loading......</h1>}><About/></Suspense>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path: "/cart",
                element: <Cart/>,
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            },
            {
                path: "/login",
                element: <Login />,
            },
            

        ],

        errorElement : <Error/>
    }

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)