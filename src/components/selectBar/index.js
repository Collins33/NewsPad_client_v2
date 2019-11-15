import React, { Component } from "react";
import "./index.css";
class SelectBar extends Component {
  render() {
    const { handleSelectBarClick } = this.props;
    return (
      <div className="select_bar">
        <span className="popular_news_categories_text">
          POPULAR NEWS CATEGORIES
        </span>
        <div className="select_bar_container">
          <button
            className="select__button"
            value="business"
            onClick={handleSelectBarClick}
          >
            Business
          </button>

          <button
            className="select__button"
            value="bitcoin"
            onClick={handleSelectBarClick}
          >
            Bitcoin{" "}
          </button>

          <button
            className="select__button"
            value="politics"
            onClick={handleSelectBarClick}
          >
            Politics
          </button>
          <button
            className="select__button"
            value="sports"
            onClick={handleSelectBarClick}
          >
            Sports{" "}
          </button>
          <button
            className="select__button"
            value="cars"
            onClick={handleSelectBarClick}
          >
            Cars
          </button>
          <button
            className="select__button"
            value="technology"
            onClick={handleSelectBarClick}
          >
            Technology{" "}
          </button>
          <button
            className="select__button"
            value="entertainment"
            onClick={handleSelectBarClick}
          >
            Entertainment
          </button>
          <button
            className="select__button"
            value="education"
            onClick={handleSelectBarClick}
          >
            Education{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default SelectBar;
