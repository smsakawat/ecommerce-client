// import MouseIcon from "@mui/icons-material/Mouse";
import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <p>WELCOME TO Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href="#featuredSection">
          <button>
            Scroll <i className="fas fa-mouse"></i>
          </button>
        </a>
      </div>
    </>
  );
};

export default Banner;
