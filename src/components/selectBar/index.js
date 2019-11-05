import React from "react";
import "./index.css";

export const SelectBar = () => {
  return (
    <div>
      <span className="popular_news_categories_text">
        POPULAR NEWS CATEGORIES
      </span>
      <div className="select_bar_container">
        <button className="select__button">Business</button>
        <button className="select__button">Bitcoin </button>
        <button className="select__button">Politics</button>
        <button className="select__button">Sports </button>
        <button className="select__button">Cars</button>
        <button className="select__button">Technology </button>
        <button className="select__button">Entertainment</button>
        <button className="select__button">Education </button>
      </div>
    </div>
  );
};
