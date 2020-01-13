import React, { Component } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import MobileMenu from "./mobileMenu";
import SignUp from "../forms/SignForm";
import Login from "../forms/LoginForm";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("#root");
class Header extends Component {
  state = {
    clicked: false,
    visible: false,
    modalIsOpen: false,
    signup: false
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  changeMode = () => {
    this.setState(prevState => ({
      signup: !prevState.signup
    }));
  };

  renderMobileContent = () => {
    this.setState(prevState => ({
      visible: !prevState.visible
    }));
  };
  render() {
    const { visible, signup } = this.state;
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
            <button className=" header__button" onClick={this.openModal}>
              Get started
            </button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <button onClick={this.closeModal} id="modal_close">
                X
              </button>
              <div className="form_type_selector">
                <button
                  className="form_type_selector_button"
                  onClick={this.changeMode}
                >
                  Sign Up
                </button>
                <button
                  className="form_type_selector_button"
                  onClick={this.changeMode}
                >
                  Log In
                </button>
              </div>
              {signup ? <SignUp /> : <Login />}
            </Modal>
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
