import React, { Component } from "react";
import { connect } from "react-redux";
import { searchNewsArticles } from "../../redux/actions/searchNewsActions";
import "./Search.scss";
class Search extends Component {
  state = {
    searchQuery: ""
  };

  handleSubmit = event => {
    const { searchQuery } = this.state;
    event.preventDefault();
    const { searchNewsArticles } = this.props;
    searchNewsArticles(searchQuery);
  };

  handleChange = event => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <>
        <div className="search__container">
          <div className="search__generic__field">
            <form onSubmit={this.handleSubmit}>
              <input
                placeholder="search headline or news category"
                value={searchQuery}
                onChange={this.handleChange}
                className="search__form"
              />
            </form>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ news }) => ({
  news: news.news,
  isLoading: news.isLoading
});
const actionCreators = {
  searchNewsArticles
};

export default connect(
  mapStateToProps,
  actionCreators
)(Search);
