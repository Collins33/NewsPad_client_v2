import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <div className="header__generic">
        <div>
          <div className="header__content">
            <Link to="/">
              {" "}
              <span id="name">NewsPad</span>
            </Link>
          </div>
        </div>
        <div className="header__generic__first">
          <div className="header__content">
            <Link to="/">Home</Link>
          </div>
          <div className="header__content">
            <Link to="/myarticles">MyArticles</Link>
          </div>
          <div className="header__content">Saved-Articles</div>
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
