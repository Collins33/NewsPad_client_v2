import React, { Component } from "react";

class Paginator extends Component {
  computePaginator = (currentNews, news) => {
    const pageNumbers = [];
    const number = Math.ceil(news.length / currentNews.length);
    for (let i = 1; i <= number; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };
  render() {
    const { currentNews, news, handlePaginatorClick } = this.props;
    const pageNumbers = this.computePaginator(currentNews, news);
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <button
          key={number}
          id={number}
          onClick={handlePaginatorClick}
          className="paginator_key"
        >
          {number}
        </button>
      );
    });

    return <div className="paginator_container">{renderPageNumbers}</div>;
  }
}

export default Paginator;
