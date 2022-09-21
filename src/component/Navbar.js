import React from "react";
import "../style/navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar_container">
        <div className="logo">
          <img src="/image/logo.png"  alt="hey_amit"/>
        </div>
        <div className="nav_links">
          <a href="aaay" className="link">Home</a>
          <a href="aaaggf"className="link"> About Us</a>
          <a href="aaag"className="link">Service</a>
          <a href="aara"className="link">Gallery</a>
          <a href="aar" className="blog_button">Latest Blog</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
