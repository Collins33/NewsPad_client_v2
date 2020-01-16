import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/loginUserActions";
import MainForm from "./MainForm";

class Login extends Component {
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
    const { loginUser } = this.props;
    event.preventDefault();
    const data = { email, password };
    loginUser(data);
  };

  saveToken = token => {
    localStorage.setItem("token", token);
  };
  render() {
    const { email, password } = this.state;
    const { isLoading, error, message, token } = this.props;
    return (
      <div>
        {isLoading ? (
          <h1>Loading....</h1>
        ) : (
          <div>
            {error
              ? message
              : error === false
              ? this.saveToken(token)
              : error === ""
              ? ""
              : ""}
          </div>
        )}
        <MainForm
          handlePasswordChange={this.handlePasswordChange}
          handleEmailChange={this.handleEmailChange}
          password={password}
          email={email}
          handleSubmit={this.handleSubmit}
          buttonText="Login"
        />
      </div>
    );
  }
}

const mapStateToProps = ({ userLogin }) => ({
  error: userLogin.error,
  isLoading: userLogin.isLoading,
  message: userLogin.message,
  token: userLogin.token,
  email: userLogin.email
});

const actionCreators = {
  loginUser
};

export default connect(
  mapStateToProps,
  actionCreators
)(Login);
