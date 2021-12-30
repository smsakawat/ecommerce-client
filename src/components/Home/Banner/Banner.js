// import MouseIcon from "@mui/icons-material/Mouse";
import React from "react";
import { BiMouse } from "react-icons/bi";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <p>WELCOME TO Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href="#featuredSection">
          <button>
            <span>Scroll</span>
            <span>
              <BiMouse style={{ fontSize: "1.2rem" }} />
            </span>
          </button>
        </a>
      </div>
    </>
  );
};

export default Banner;
{
  /* <i className="fas fa-mouse"></i> */
}
