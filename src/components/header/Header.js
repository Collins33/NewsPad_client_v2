import React, { Component } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
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
    signup: "signup"
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  changeMode = e => {
    console.log(e.target.value);
    this.setState({
      signup: e.target.value
    });
  };
  render() {
    const { signup } = this.state;
    const email = localStorage.getItem("email");
    const navStyle = {
      color: "black"
    };
    return (
      <>
        <div className="topnav" id="myTopnav">
          <Link style={navStyle} to="/">
            {" "}
            <span className="header_text">NewsPad</span>
          </Link>
          <div className="header__generic__second">
            <button
              className="form_type_selector_button"
              onClick={this.openModal}
            >
              Get started
            </button>
            <div className="header_text">{email}</div>
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
                  value="signup"
                >
                  Sign Up
                </button>
                <button
                  className="form_type_selector_button"
                  onClick={this.changeMode}
                  value="login"
                >
                  Log In
                </button>
              </div>
              {signup === "signup" ? (
                <SignUp />
              ) : (
                <Login closeModal={this.closeModal} />
              )}
            </Modal>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
