import React, { Component } from "react";
import "./index.scss";
import { connect } from "react-redux";
import { getSavedNewsArticle } from "../../redux/actions/getNewsAction";

class MyArticles extends Component {
  componentDidMount() {
    const { getSavedNewsArticle } = this.props;
    getSavedNewsArticle();
  }
  render() {
    const { savedNews, isLoading } = this.props;
    console.log(savedNews);
    return (
      <div className="dashboard-container">
        <div className="sidebar-container">Navigator</div>
        <div className="my-articles-container">
          {isLoading ? (
            <h1>Fetching your saved articles</h1>
          ) : (
            <h1>Myarticles</h1>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ getNews }) => ({
  savedNews: getNews.savedNews,
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
