import React, { Component } from "react";
import { connect } from "react-redux";
import { getNewsArticles } from "../../redux/actions/newsAction";

class News extends Component {
  componentDidMount() {
    const { getNewsArticles } = this.props;
    getNewsArticles();
  }

  render() {
    const { news } = this.props;
    console.log(news, "<><><><><><><>");
    return <div>NEWS</div>;
  }
}

const mapStateToProps = ({ news }) => ({
  news: news.news
});
const actionCreators = {
  getNewsArticles
};

export default connect(
  mapStateToProps,
  actionCreators
)(News);
