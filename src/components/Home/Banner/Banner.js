import MouseIcon from "@mui/icons-material/Mouse";
import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <p>WELCOME TO Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href="#container">
          <button>
            Scroll{" "}
            <MouseIcon sx={{ fontSize: "1.15vmax", paddingTop: "0.1rem" }} />
          </button>
        </a>
      </div>
    </>
  );
};

export default Banner;
