import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const navStyle = {
    color: "black"
  };
  return (
    <div className="container_mobile_menu">
      <div className="mobile_menu_content">
        <Link style={navStyle} to="/myarticles">
          MyArticles
        </Link>
      </div>
      <div className="mobile_menu_content">
        <Link style={navStyle} to="/myarticles">
          MyArticles
        </Link>
      </div>
      <div className="mobile_menu_content">
        <button className=" header__button">Sign Up</button>
      </div>
      <div className="mobile_menu_content">
        <button className=" header__button">Login</button>
      </div>
    </div>
  );
};

export default MobileMenu;
