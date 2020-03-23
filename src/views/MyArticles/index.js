import React, { Component } from "react";
import "./index.scss";
import { connect } from "react-redux";
import { getSavedNewsArticle } from "../../redux/actions/getNewsAction";
import { SavedNewsArticles } from "../../components/savedNews/index";
import Header from "../../components/header/Header";
import checkNewsArticles from "../../utils/news";

class MyArticles extends Component {
  componentDidMount() {
    const { getSavedNewsArticle } = this.props;
    getSavedNewsArticle();
  }

  render() {
    const { news, isLoading } = this.props;
    return (
      <>
        <Header />
        <div className="dashboard-container">
          <div className="sidebar-container">Navigator</div>
          <div className="my-articles-container">
            {isLoading ? (
              <h1>Fetching your saved articles</h1>
            ) : (
              <>
                {checkNewsArticles(news) ? (
                  <>
                    <h1>Saved Articles</h1>
                    <SavedNewsArticles news={news} />
                  </>
                ) : (
                  <div>
                    <h1 className="loading_text">
                      You do not have any news saved
                    </h1>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </>
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
