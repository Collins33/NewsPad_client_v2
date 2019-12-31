import axios from "axios";
require("dotenv").config();

class SignUpApi {
  static signUpUser(userRegistrationData) {
    return axios.post(
      "https://newspadv2server.herokuapp.com/api/v1/users/registration",
      userRegistrationData
    );
  }
}
export default SignUpApi;
