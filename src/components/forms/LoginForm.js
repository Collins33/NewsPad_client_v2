import React, { Component } from "react";
import { connect } from "react-redux";
import { signUpUser } from "../../redux/actions/signUpUserAction";
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
    const { isLoading } = this.props;
    return (
      <div>
        {isLoading ? <div>Loading.........</div> : <div>Process done</div>}
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
          <button className="search__button">Login</button>
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
)(Login);
