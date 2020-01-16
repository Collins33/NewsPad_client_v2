import React, { Component } from "react";
import { connect } from "react-redux";
import { signUpUser } from "../../redux/actions/signUpUserAction";
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
    const { signUpUser } = this.props;
    event.preventDefault();
    console.log({
      email,
      password
    });
    const data = { email, password };
    signUpUser(data);
  };
  render() {
    const { email, password } = this.state;
    // const { isLoading } = this.props;
    return (
      <div>
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
)(Login);
