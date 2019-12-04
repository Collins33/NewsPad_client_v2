import React, { Component } from "react";
import { connect } from "react-redux";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { getNewsArticles } from "../../redux/actions/newsAction";
import { searchNewsArticles } from "../../redux/actions/searchNewsActions";
import { NewsArticle } from "./newsArticles";
import { SelectBar } from "../selectBar/index";
import { NetworkError } from "../networkError/index";
import Paginator from "./paginator";
import "./news.scss";

class News extends Component {
  state = {
    currentPage: 1,
    newsPerPage: 4,
    categories: [
      { value: "business" },
      { value: "bitcoin" },
      { value: "politics" },
      { value: "sports" },
      { value: "cars" },
      { value: "technology" },
      { value: "entertainment" },
      { value: "education" },
      { value: "health" },
      { value: "science" },
      { value: "general" }
    ]
  };
  componentDidMount() {
    const { getNewsArticles } = this.props;
    getNewsArticles();
  }

  /**
   * Check if news
   * articles exist
   * return true
   * if array has data
   */
  checkNewsArticles(news) {
    const newsLength = news.length;
    return newsLength >= 1; // either evaluate to true or false
  }

  /**
   * handle click of paginator
   */
  handlePaginatorClick = event => {
    window.scrollTo(0, 0);
    this.setState({
      currentPage: Number(event.target.id)
    });
  };

  /**
   * handle click of select bar
   */
  handleSelectBarClick = event => {
    const { searchNewsArticles } = this.props;
    const selectBarValue = event.target.value;
    searchNewsArticles(selectBarValue);
  };

  addToArray = currentNews => {
    const { news } = this.props;
    if (news.length >= 1) {
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(news.length / currentNews); i++) {
        pageNumbers.push(i);
      }
      return pageNumbers;
    }
  };

  /**
   * Check if the image is null
   */
  checkNewsImage = imageUrl => {
    return imageUrl == null;
  };

  /**
   * Check for network issue
   */
  checkNetworkIssue = () => {
    const { error } = this.props;
    return error;
  };

  render() {
    const { news, isLoading } = this.props;
    const { currentPage, newsPerPage, categories } = this.state;
    // logic for displaying news
    const indexOfTheLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfTheLastNews - newsPerPage;
    const currentNews = news.slice(indexOfFirstNews, indexOfTheLastNews);
    const width = "50%";
    const height = "50%";
    return (
      <div>
        {isLoading ? (
          <div className="loader">
            <Loader type="Puff" color="#00BFFF" height={height} width={width} />
          </div>
        ) : (
          <div>
            {this.checkNetworkIssue() ? (
              <NetworkError />
            ) : (
              <div>
                <SelectBar
                  handleSelectBarClick={this.handleSelectBarClick}
                  categories={categories}
                />
                <div>
                  {this.checkNewsArticles(news) ? (
                    <>
                      <NewsArticle
                        news={currentNews}
                        checkNewsImage={this.checkNewsImage}
                      />
                      <Paginator
                        currentNews={currentNews}
                        news={news}
                        handlePaginatorClick={this.handlePaginatorClick}
                      />
                    </>
                  ) : (
                    <div>
                      <h1 className="loading_text">
                        No news matching your search
                      </h1>
                    </div>
                  )}
                </div>
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
  isLoading: news.isLoading,
  error: news.error
});
const actionCreators = {
  getNewsArticles,
  searchNewsArticles
};

export default connect(
  mapStateToProps,
  actionCreators
)(News);
