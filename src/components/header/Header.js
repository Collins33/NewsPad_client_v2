import React, { Component } from "react";
import "./Header.scss";
import Search from "../search/Search";
import { Link } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
require("dotenv").config();

const GOOGLE_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
class Header extends Component {
  state = {
    clicked: false,
    visible: false,
    modalIsOpen: false,
    signup: "signup",
    user: '',
    loading: false
  };

  // deals with the auth button
  // extract user information from auth object
  componentDidMount()
  {
    const email = localStorage.getItem("email");
    this.setState({user: email})
  }
  responseGoogle = async (response)=>
  {
    try{
    this.setState({loading: true})
    const ENV = process.env.REACT_APP_ENVIRONMENT;
    let url;
    if(ENV === 'Local'){
      url = 'http://localhost:4000/api/v1/users/auth/google'
    }else{
      url = "https://newspadv2server.herokuapp.com/api/v1/users/auth/google"
    }
    const access_token = JSON.stringify(response.accessToken)
    const options = {
      method: 'POST',
      body: JSON.stringify({access_token}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    const rawResponse = await fetch(url, options);
    const content = await rawResponse.json();
    const {token, email} = content
    if(token)
    {
      localStorage.setItem("email", email)
      localStorage.setItem("token", token)
      this.setState({user: email, token: token, loading:false})
    }
  }catch(error){
    console.log("ERROR", error)
  }
  }
  render() {
    const { search} = this.props;
    const {user, loading} = this.state;
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
            {email ? (
              <div>Welcome {email ? email: user}</div>
            ) : (
              <>
            {loading ? 
            <div>Loading....Please be patient</div>: 
            <GoogleLogin 
              clientId= {GOOGLE_CLIENT_ID}
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={'single_host_origin'}
            />}
            </>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
