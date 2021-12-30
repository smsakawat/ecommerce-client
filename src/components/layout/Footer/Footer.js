import React from "react";
import appStore from "../../../images/Appstore.png";
import playStore from "../../../images/playstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Download Our App</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="" />
        <img src={appStore} alt="" />
      </div>
      <div className="midFooter">
        <div
          className="logo-title"
          style={{ font: "300 4vmax cursive", color: "#fff" }}
        >
          <span style={{ fontWeight: "600", color: "#eb4034" }}>E</span>
          COMMERCE
        </div>
        <p>Hight Quality is our First Priority</p>
        <p>Copyrights 2022 &copy; Sakawat</p>
      </div>
      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="#">Instagram</a>
        <a href="#">Youtube</a>
        <a href="#">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
