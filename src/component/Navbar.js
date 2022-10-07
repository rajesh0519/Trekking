import React, { useState } from "react";
import "../style/navbar.css";


const Navbar = () => {

  const [ nav , setNav ] = useState(false)

  function toggleNav(){
    setNav(!nav)
  }

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
          {
            nav && <div className="responsive_nav">
            <a href="aaay" >Home</a>
              <a href="aaaggf"> About Us</a>
              <a href="aaag">Service</a>
              <a href="aara">Gallery</a>
              <a href="aar" className="blog_button">Latest Blog</a>
    
            </div>
          }
        
        <button className="nav_btn_responsive"
        onClick={toggleNav}
        >
          {
            nav ? "X" : "Open"
          }
          
          </button>

      </div>
      
    </>
  );
};

export default Navbar;
