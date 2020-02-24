import axios from "axios";
require("dotenv").config();

class SaveNewsApi {
  static saveNewsArticles(newsData) {
    const userToken = localStorage.getItem("token");
    const saveNewsEndpoint = `https://newspadv2server.herokuapp.com/api/v1/news`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: userToken
    };
    return axios.post(saveNewsEndpoint, newsData, {
      headers
    });
  }
}

export default SaveNewsApi;
