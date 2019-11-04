import React, { Component } from "react";
import { connect } from "react-redux";
import { getNewsArticles } from "../../redux/actions/newsAction";

class News extends Component {
  componentDidMount() {
    const { getNewsArticles } = this.props;
    getNewsArticles();
  }

  render() {
    const { news, isLoading } = this.props;
    return <div>{isLoading ? <h1>Loading ...</h1> : <h1>Data found</h1>}</div>;
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
