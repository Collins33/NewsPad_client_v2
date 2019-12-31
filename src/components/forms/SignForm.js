import React, { Component } from "react";

class SignUp extends Component {
  state = {
    email: "",
    password: ""
  };
  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    const { email, password } = this.state;
    event.preventDefault();
    console.log({
      email,
      password
    });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="enter your email"
            value={email}
            onChange={this.handleEmailChange}
            className="search__form"
          />
          <input
            placeholder="enter your password"
            value={password}
            onChange={this.handlePasswordChange}
            className="search__form"
          />
          <button className="search__button">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
