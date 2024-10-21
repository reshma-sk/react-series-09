import React, { useState } from "react";
import ProfileClass from "./ProfileClass";
import { BURGER_IMG, LOGO_URL } from "../utils/constants";
import { LOGO_URL } from "../utils/constants";

const About = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
      <div className="flex justify-around items-center">
        <div className="flex flex-col">
          <h1 className="font-bold text-3xl text-gray-500 m-1">
            Welcome to  The world of <br />{" "}
            <span className="bg-orange-400 rounded-md text-black m-4">Spoons & Forks </span>
          </h1>
          <h4 className="text-lg m-1">
            "Better you will feel if you eat at  <span>Spoons & Forks</span>,a healthy
            meal"
          </h4>
        </div>
        <div className="about-right">
          <img src={LOGO_URL} alt="Food Image" />
        </div>
      </div>
  
  );
};

export default About;