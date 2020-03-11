import React, { Component } from "react";
import "./index.scss";
import { connect } from "react-redux";
import { getSavedNewsArticle } from "../../redux/actions/getNewsAction";
import { SavedNewsArticles } from "../../components/savedNews/index";
class MyArticles extends Component {
  componentDidMount() {
    const { getSavedNewsArticle } = this.props;
    getSavedNewsArticle();
  }
  render() {
    const { news, isLoading } = this.props;
    console.log(news);
    return (
      <div className="dashboard-container">
        <div className="sidebar-container">Navigator</div>
        <div className="my-articles-container">
          {isLoading ? (
            <h1>Fetching your saved articles</h1>
          ) : (
            <>
              <h1>Saved Articles</h1>
              <SavedNewsArticles news={news} />
            </>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ getNews }) => ({
  news: getNews.savedNews,
  isLoading: getNews.isLoading,
  error: getNews.error
});

const actionCreators = {
  getSavedNewsArticle
};

export default connect(
  mapStateToProps,
  actionCreators
)(MyArticles);
