import axios from "axios";
require("dotenv").config();

class SaveNewsApi {
  static saveNewsArticles(newsData) {
    return axios.post(
      "http://newspadv2server.herokuapp.com/api/v1/news",
      newsData
    );
  }

  static setToken() {
    const userToken = localStorage.getItem("token");
    console.log(userToken, "TOKEN");
    axios.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
  }
}

export default SaveNewsApi;
