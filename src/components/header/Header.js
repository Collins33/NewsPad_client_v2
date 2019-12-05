import React, { Component } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import MobileMenu from "./mobileMenu";
class Header extends Component {
  state = {
    clicked: false,
    visible: false
  };

  renderMobileContent = () => {
    this.setState(prevState => ({
      visible: !prevState.visible
    }));
  };
  render() {
    const { visible } = this.state;
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
        {/* mobile style */}
        <div className="header_phone_generic">
          <div className="header__content" id="name">
            <Link style={navStyle} to="/">
              {" "}
              <span>NewsPad</span>
            </Link>
          </div>
          <div
            className="header__content hamburger"
            onClick={this.renderMobileContent}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        {visible ? (
          <div className="header_phone_contents">
            <MobileMenu />
          </div>
        ) : (
          ""
        )}
        <div className="header_bar"></div>
      </>
    );
  }
}

export default Header;
