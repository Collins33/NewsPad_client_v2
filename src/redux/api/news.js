import axios from "axios";

class GetNews {
  static getNewsArticles() {
    return axios.get("http://newspadv2.herokuapp.com/api/v1/news");
  }
}

export default GetNews;
