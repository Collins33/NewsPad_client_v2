import React, { Component } from "react";
import "./index.css";
class SelectBar extends Component {
  state = {
    categories: [
      { value: "business" },
      { value: "bitcoin" },
      { value: "politics" },
      { value: "sports" },
      { value: "cars" },
      { value: "technology" },
      { value: "entertainment" },
      { value: "education" }
    ]
  };
  render() {
    const { handleSelectBarClick } = this.props;
    const { categories } = this.state;
    const buttons = categories.map((category, index) => (
      <button
        className="select__button"
        value={category.value}
        onClick={handleSelectBarClick}
      >
        {category.value.toUpperCase()}
      </button>
    ));
    return (
      <div className="select_bar">
        <span className="popular_news_categories_text">
          POPULAR NEWS CATEGORIES
        </span>
        <div className="select_bar_container">{buttons}</div>
      </div>
    );
  }
}

export default SelectBar;
