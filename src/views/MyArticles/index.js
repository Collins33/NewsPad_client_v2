import React, { Component } from "react";
import "./index.scss";

class MyArticles extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="sidebar-container">Navigator</div>
        <div className="my-articles-container">My Articles</div>
      </div>
    );
  }
}

export default MyArticles;
