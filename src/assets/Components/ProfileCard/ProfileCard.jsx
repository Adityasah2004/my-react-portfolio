import React from "react";
import "./ProfileCard.css";
import profilePic from "../../img/profilePic.jpg";

const ProfileCard = ({ name, designation, instagram, linkedin, github }) => {
  return (
    <div className="profile-card">
      <img className="profile-pic" src={profilePic} alt="Profile" />
      <h1 className="name">{name}</h1>
      <p className="designation">{designation}</p>
      <div className="social-icons">
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
