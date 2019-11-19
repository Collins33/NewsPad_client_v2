import React from "react";
import "./index.css";

export const SelectBar = ({ categories, handleSelectBarClick }) => {
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
      <span className="popular_news_categories_text">CLICK ON A CATEGORY</span>
      <div className="select_bar_container">{buttons}</div>
    </div>
  );
};
