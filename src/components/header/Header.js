import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
export const Header = () => {
  const navStyle = {
    color: "black"
  };
  return (
    <>
      <div className="header__generic">
        <div>
          <div className="header__content" id="name">
            <Link style={navStyle} to="/">
              {" "}
              <span>NewsPad</span>
            </Link>
          </div>
        </div>
        <div className="header__generic__first">
          <div className="header__content">
            <Link style={navStyle} to="/">
              Home
            </Link>
          </div>
          <div className="header__content">
            <Link style={navStyle} to="/myarticles">
              MyArticles
            </Link>
          </div>
        </div>
        <div className="header__generic__second">
          <button className="header__content header__button">Sign Up</button>
          <button className="header__content header__button">Login</button>
        </div>
      </div>
      <hr />
    </>
  );
};
