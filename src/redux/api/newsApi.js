import axios from "axios";
require("dotenv").config();

class NewsApi {
  static getNewsArticles() {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"
    const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;
    return axios.get(
      `${proxyUrl}https://gnews.io/api/v3/top-news?token=${newsApiKey}`
    );
  }
}

export default NewsApi;
