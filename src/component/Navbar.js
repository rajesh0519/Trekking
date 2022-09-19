import React from "react";
import "../style/navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar_container">
        <div className="logo">
          <img src="/image/logo.png"></img>
        </div>
        <div className="nav_links">
          <a>Home</a>
          <a>About Us</a>
          <a>Service</a>
          <a>Gallery</a>
          <a>Latest Blog</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
