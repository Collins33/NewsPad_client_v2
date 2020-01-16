import React, { Component } from "react";
import "./SignUp.scss";
class MainForm extends Component {
  render() {
    const {
      handlePasswordChange,
      handleEmailChange,
      password,
      email,
      handleSubmit,
      buttonText
    } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="enter your email"
            value={email}
            onChange={handleEmailChange}
            className="registration_form"
          />
          <input
            placeholder="enter your password"
            value={password}
            onChange={handlePasswordChange}
            className="registration_form"
            type="password"
            name="password"
          />
          <button className="search__button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    );
  }
}

export default MainForm;
