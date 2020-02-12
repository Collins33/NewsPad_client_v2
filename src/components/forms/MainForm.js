import React, { Component } from "react";
import "./SignUp.scss";
class MainForm extends Component {
  state = {
    show: false
  };

  showPassword = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };
  render() {
    const {
      handlePasswordChange,
      handleEmailChange,
      password,
      email,
      handleSubmit,
      buttonText
    } = this.props;
    const { show } = this.state;
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
            type={show ? "text" : "password"}
            name="password"
          />
          <button className="search__button" type="submit">
            {buttonText}
          </button>
          <button onClick={this.showPassword} type="button">
            Show
          </button>
        </form>
      </div>
    );
  }
}

export default MainForm;
