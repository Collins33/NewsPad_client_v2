import axios from "axios";
require("dotenv").config();

class SearchNewsApi {
  static searchNewsArticles(query) {
    const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;
    return axios.get(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${newsApiKey}`
    );
  }
}

export default SearchNewsApi;
