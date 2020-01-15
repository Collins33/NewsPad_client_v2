import React, { Component } from "react";
import { connect } from "react-redux";
import { signUpUser } from "../../redux/actions/signUpUserAction";
import "./SignUp.scss";
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
              : "Registration was successful. Log in to your account"}
          </div>
        )}
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="enter your email"
            value={email}
            onChange={this.handleEmailChange}
            className="registration_form "
          />
          <input
            placeholder="enter your password"
            value={password}
            onChange={this.handlePasswordChange}
            className="registration_form "
            type="password"
            name="password"
          />
          <button className="search__button">Sign Up</button>
        </form>
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
