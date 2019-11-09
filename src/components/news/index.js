import React, { Component } from "react";
import { connect } from "react-redux";
import { getNewsArticles } from "../../redux/actions/newsAction";
import { searchNewsArticles } from "../../redux/actions/searchNewsActions";
import { NewsArticle } from "./newsArticles";
import { SelectBar } from "../selectBar/index";
import "./news.css";

class News extends Component {
  componentDidMount() {
    const { getNewsArticles } = this.props;
    getNewsArticles();
  }

  /**
   * Check if news
   * articles exist
   * return true
   * if array has dataz
   */
  checkNewsArticles(news) {
    const newsLength = news.length;
    if (newsLength >= 1) {
      return true;
    }
    return false;
  }

  render() {
    const { news, isLoading } = this.props;
    return (
      <div>
        {isLoading ? (
          <h1 className="loading_text">Fetching News articles ...</h1>
        ) : (
          <div>
            <SelectBar />
            {this.checkNewsArticles(news) ? (
              <div>
                <NewsArticle news={news} />
              </div>
            ) : (
              <div>
                <h1 className="loading_text">No news matching your search</h1>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ news }) => ({
  news: news.news,
  isLoading: news.isLoading
});
const actionCreators = {
  getNewsArticles,
  searchNewsArticles
};

export default connect(
  mapStateToProps,
  actionCreators
)(News);
