import axios from "axios";
require("dotenv").config();

class SaveNewsApi {
  static saveNewsArticles(newsData) {
    return axios.post(
      "https://newspadv2server.herokuapp.com/api/v1/news",
      newsData
    );
  }
}

export default SaveNewsApi;
