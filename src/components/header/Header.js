import React, { Component } from "react";
import "./Header.scss";
import Search from "../search/Search";
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
      <nav className="navbar fixed-top">
        <ul className="navbar_container">
          <li>
            <Link style={navStyle} to="/">
              {" "}
              <span className="navbar_item">NewsPad</span>
            </Link>
          </li>
          {email ? (
            <li>
              <Link style={navStyle} to="/">
                {" "}
                <span className="navbar_item">My Articles</span>
              </Link>
            </li>
          ) : (
            <li>
              <Link style={navStyle} to="/">
                {" "}
                <span className="navbar_item"></span>
              </Link>
            </li>
          )}
          <li>
            <Search />
          </li>
          <li className="navbar_item">
            {email ? (
              <div>Welcome {email}</div>
            ) : (
              <button
                className="form_type_selector_button"
                onClick={this.openModal}
              >
                Get started
              </button>
            )}
          </li>
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
                className="modal_button"
                onClick={this.changeMode}
                value="signup"
              >
                Sign Up
              </button>
              <button
                className="modal_button"
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
        </ul>
      </nav>
    );
  }
}

export default Header;
