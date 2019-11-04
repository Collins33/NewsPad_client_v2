import React, { Component } from "react";
import { connect } from "react-redux";
import { getNewsArticles } from "../../redux/actions/newsAction";
import { NewsArticle } from "./newsArticles";
import "./news.css";

class News extends Component {
  componentDidMount() {
    const { getNewsArticles } = this.props;
    getNewsArticles();
  }

  render() {
    const { news, isLoading } = this.props;
    return (
      <div className="news_article_container">
        {isLoading ? <h1>Loading ...</h1> : <NewsArticle news={news} />}
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
