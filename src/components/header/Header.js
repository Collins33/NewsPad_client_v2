import React, { Component } from "react";
import "./Header.scss";
import Search from "../search/Search";
import { Link } from "react-router-dom";
import SignUp from "../forms/SignForm";
import Login from "../forms/LoginForm";
import Modal from "react-modal";
import { GoogleLogin } from 'react-google-login';
require("dotenv").config();

const GOOGLE_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("#root");
class Header extends Component {
  state = {
    clicked: false,
    visible: false,
    modalIsOpen: false,
    signup: "signup",
    isAuthenticated: false,
    user: null,
    token: ''
  };

  // deals with the auth button
  // extract user information from auth object

  responseGoogle = (response)=>
  {
    const googleAuth = JSON.stringify(response.accessToken)
    const options = {
      method: 'POST',
      body: googleAuth,
      mode: 'cors',
      cache: 'default'
    }
    fetch('http://localhost:4000/api/v1/auth/facebook', options)
    .then(response => {
      const userToken = response.headers.get('x-auth-token')
      // get user from the reponse
      response.json().then(user=>{
        if(userToken){
          this.setState({isAuthenticated: true, user, token: userToken})
        }
      })
    })
  }

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
    const { signup, isAuthenticated } = this.state;
    const { search } = this.props;
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
              <Link style={navStyle} to="/profile">
                {" "}
                <span className="navbar_item">Dashboard</span>
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
          {search ? (
            <li>
              <Search />
            </li>
          ) : (
            ""
          )}
          <li className="navbar_item">
            {isAuthenticated ? (
              <div>Welcome {email}</div>
            ) : (
              // <button
              //   className="form_type_selector_button"
              //   onClick={this.openModal}
              // >
              //   Login/Signup
              // </button>
            <GoogleLogin 
              clientId= {GOOGLE_CLIENT_ID}
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
            )}
          </li>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div onClick={this.closeModal}>X</div>
            <div className="form_type_selector">
              {signup === "signup" ? (
                <div className="authentication_container">
                  <div className="auth_text">SIGN UP</div>
                  <div
                    onClick={this.changeMode}
                    className="auth_text_secondary"
                  >
                    Have an account? Log In
                  </div>
                </div>
              ) : (
                <div className="authentication_container">
                  <div className="auth_text">LOG IN</div>
                  <div
                    onClick={this.changeMode}
                    className="auth_text_secondary"
                  >
                    New user? Create Account
                  </div>
                </div>
              )}
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
