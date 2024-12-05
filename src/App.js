import React, { lazy, Suspense, useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate
} from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
//import Body from "./components/Body";
import appStore from "./utils/appStore";
import { Provider, useDispatch, useSelector } from "react-redux";
import Login from './components/Login';
import {onAuthStateChanged} from 'firebase/auth';
import { auth } from "./utils/firebase";
import { addUser,removeUser } from "./utils/userSlice"


const About = lazy(() => import("./components/About"));
const Body = lazy(()=> import("./components/Body"));

const AppLayout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email,displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,  
          })  
        );
        navigate("/"); 
        
      } 
      else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    return ()=>unsubscribe();
  }, [dispatch]);

  return (
    <div className="h-screen">
      <Header/>
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <Body/>
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      
      
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path:"/login",
        element:<Login/>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      
    ],

    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter}/>
  </Provider>
)

