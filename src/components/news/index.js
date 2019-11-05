import React, { Component } from "react";
import { connect } from "react-redux";
import { getNewsArticles } from "../../redux/actions/newsAction";
import { NewsArticle } from "./newsArticles";
import { SelectBar } from "../selectBar/index";
import "./news.css";

class News extends Component {
  componentDidMount() {
    const { getNewsArticles } = this.props;
    getNewsArticles();
  }

  render() {
    const { news, isLoading } = this.props;
    return (
      <div>
        {isLoading ? (
          <h1 className="loading_text">Fetching news articles ...</h1>
        ) : (
          <div>
            <SelectBar />
            <NewsArticle news={news} />
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
  getNewsArticles
};

export default connect(
  mapStateToProps,
  actionCreators
)(News);
