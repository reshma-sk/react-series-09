import React, { useRef, useState } from 'react'
//import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';


const Login = () => {
  const dispatch = useDispatch();
  const[isSignInForm,setIsSignInForm] = useState(true)
  const[errorMessage,setErrorMessage] = useState(null)
  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate()
  
  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm)
  }

  const handleButtonClick = ()=>{
    //Form validation
    const message = checkValidData(email.current.value,password.current.value) 
    setErrorMessage(message)
    if(message) return;

    if(!isSignInForm){
      // Signed up logic
      createUserWithEmailAndPassword(
        auth, 
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
         // Signed up 
         const user = userCredential.user;
         updateProfile(user, {
          displayName: name.current.value,
          }).then(() => {
            // Profile updated and store will be set again!
            const {uid,email,displayName} = auth.currentUser;
            dispatch(
              addUser(
                {
                  uid:uid,
                  email:email,
                  displayName:displayName
                }
              )
            )
            
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message)
          })
          .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           setErrorMessage(errorCode +" - " + errorMessage)
         
          });
        })

     
    }
    else{
      //sign in logic 
      signInWithEmailAndPassword(auth,
        email.current.value,
        password.current.value
      )
      .then((userCredential) => {
        const user = userCredential.user;  
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage)
      });
    }
  }
  
  return (
    <div>
        <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 mx-auto my-36 
         bg-black rounded-lg p-12 right-0 left-0
          text-white bg-opacity-80'>
          <h1 className='font-bold text-3xl'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
          {!isSignInForm && 
          <input 
           type="text" ref={name}
           placeholder='Full Name' 
           className='p-2 my-4 w-full bg-gray-700'
          />
          }
          <input type="text" ref={email}
           placeholder='Email Address' 
           className='p-2 my-4 w-full bg-gray-700' 
          />
          <input type="text" ref={password} 
           placeholder='Password'  
           className='p-2 my-4 w-full bg-gray-700'
          />
          <p className='text-red-500 font-bold text-lg py-1'>{errorMessage}</p>
          
          <button 
           className='p-2 my-4 bg-red-950 w-full rounded-lg'
           onClick={handleButtonClick}
           >{isSignInForm ? 'Sign In' : 'Sign Up'}
          </button>

          <p className='py-4 cursor-pointer' 
           onClick={toggleSignInForm}>
           {isSignInForm ? 'New To This? Sign up now' : 'Already Registered? Sign in now'}
          </p>
        </form>
    </div>
  )
}

export default Login;






































