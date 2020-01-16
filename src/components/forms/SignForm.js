import React, { Component } from "react";
import { connect } from "react-redux";
import { signUpUser } from "../../redux/actions/signUpUserAction";
import "./SignUp.scss";
import MainForm from "./MainForm";
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
    const { signUpUser } = this.props;
    event.preventDefault();
    const data = { email, password };
    signUpUser(data);
  };

  render() {
    const { email, password } = this.state;
    const { isLoading, error, response } = this.props;
    return (
      <div>
        {isLoading ? (
          <h1>Loading....</h1>
        ) : (
          <div>
            {error
              ? response
              : error === false
              ? "Registration was successful. Log in to your account"
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
          buttonText="Sign Up"
        />
      </div>
    );
  }
}

const mapStateToProps = ({ userSignUp }) => ({
  error: userSignUp.error,
  isLoading: userSignUp.isLoading,
  response: userSignUp.response
});

const actionCreators = {
  signUpUser
};

export default connect(
  mapStateToProps,
  actionCreators
)(SignUp);
