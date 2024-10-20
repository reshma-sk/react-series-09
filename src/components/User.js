import React, { useEffect, useState } from 'react';
import { GITHUB_USER_API,GITHUB_USER_NAME } from '../utils/constants';
const Profile = ()=>{
    const[userInfo,setUserInfo] = useState({})
    const getUserInfo = async()=>{
        try {
            const data = await fetch(GITHUB_USER_API + GITHUB_USER_NAME)
            const json = await data.json();
            setUserInfo(json)    
        } catch (error) {
            console.error("Error while fetching user data: ",error);    
        }    
    }

    useEffect(()=>{
        getUserInfo();
    },[])

    return(
        <div className="profile-container">
            <div className="left-profile">
              <h1>About Me</h1>
              <h2>Name: {userInfo.name}</h2>
              <h2>Location: {userInfo.location}</h2>        
              <img className="profile-pic" src={userInfo.avatar_url} alt="User Avatar" />
            </div>

            <div className="right-profile">
              <h1>My Skills</h1>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Tailwind</li>
                
              </ul>
            </div>
        </div>


    )
}
export default Profile;