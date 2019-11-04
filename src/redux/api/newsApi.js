import axios from "axios";
require("dotenv").config();

class NewsApi {
  static getNewsArticles() {
    const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;
    return axios.get(
      `https://newsapi.org/v2/everything?q=all&apiKey=${newsApiKey}`
    );
  }
}

export default NewsApi;
