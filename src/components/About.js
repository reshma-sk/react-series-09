import React, { useState } from "react";
//import "../styles/About.css";
import ProfileClass from "./ProfileClass";
import { BURGER_IMG, LOGO_URL } from "../utils/constants";
import { LOGO_URL } from "../utils/constants";

const About = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="about-container">
      {/*<div className="show-profile">
        {
          <button className="user-btn" onClick={() => setShowProfile(!showProfile)}>
            {showProfile ? "Hide My Profile" : "Show My Profile"}
          </button>
        }
        {showProfile && <Profile name={"Reshma Shaik"} location={"Ireland"} />}
      </div>*/}

      <div className="about">
        <div className="about-left">
          <h1>
            Welcome to  The world of <br />{" "}
            <span>Spoons & Forks </span>
          </h1>
          <h4>
            "Better you will feel if you eat at  <span>Spoons & Forks</span>,a healthy
            meal"
          </h4>
        </div>
        <div className="about-right">
          <img src={LOGO_URL} alt="Food Image" />
        </div>
      </div>
    </div>
  );
};

export default About;