import axios from "axios";
require("dotenv").config();

class GetNewsApi {
  static getNewsArticles() {
    return axios.get("https://newspadv2server.herokuapp.com/api/v1/news");
  }
}

export default GetNewsApi;
