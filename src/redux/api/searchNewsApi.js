import axios from "axios";
require("dotenv").config();

class SearchNewsApi {
  static searchNewsArticles(query) {
    const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"
    return axios.get(
      `${proxyUrl}https://gnews.io/api/v3/search?q=${query}&token=${newsApiKey}`
    );
  }
}

export default SearchNewsApi;
