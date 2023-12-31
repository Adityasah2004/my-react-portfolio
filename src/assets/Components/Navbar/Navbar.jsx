import React from "react";
import logo from "../../img/logo.png";
import "./Navbar.css";
import "./Switch.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="logo-img" src={logo} alt="Logo" />
      </div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Blogs</li>
        </ul>
      </div>
      <div className="toggle-switch">
        <label className="switch">
          <input className="slider" type="checkbox" />
          <div className="switch">
            <div className="suns"></div>
            <div class="moons">
              <div class="star star-1"></div>
              <div class="star star-2"></div>
              <div class="star star-3"></div>
              <div class="star star-4"></div>
              <div class="star star-5"></div>
              <div class="first-moon"></div>
            </div>
            <div class="sand"></div>
            <div class="bb8">
              <div class="antennas">
                <div class="antenna short"></div>
                <div class="antenna long"></div>
              </div>
              <div class="head">
                <div class="stripe one"></div>
                <div class="stripe two"></div>
                <div class="eyes">
                  <div class="eye one"></div>
                  <div class="eye two"></div>
                </div>
                <div class="stripe detail">
                  <div class="detail zero"></div>
                  <div class="detail zero"></div>
                  <div class="detail one"></div>
                  <div class="detail two"></div>
                  <div class="detail three"></div>
                  <div class="detail four"></div>
                  <div class="detail five"></div>
                  <div class="detail five"></div>
                </div>
                <div class="stripe three"></div>
              </div>
              <div class="ball">
                <div class="lines one"></div>
                <div class="lines two"></div>
                <div class="ring one"></div>
                <div class="ring two"></div>
                <div class="ring three"></div>
              </div>
              <div class="shadow"></div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
