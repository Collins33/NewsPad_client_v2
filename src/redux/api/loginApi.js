import axios from "axios";
require("dotenv").config();

class LoginApi {
  static loginUser(userLoginData) {
    return axios.post(
      "https://newspadv2server.herokuapp.com/api/v1/users/login",
      userLoginData
    );
  }
}
export default LoginApi;
