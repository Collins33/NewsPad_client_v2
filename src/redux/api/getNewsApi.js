import axios from "axios";
require("dotenv").config();

class GetNewsApi {
  static getNewsArticles() {
    const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT;
    let url;
    if(ENVIRONMENT === 'Local')
    {
      url = "http://localhost:4000/api/v1/news"
    }else{
      url = "https://newspadv2server.herokuapp.com/api/v1/news"
    }
    return axios.get(url);
  }
}

export default GetNewsApi;
