import React from "react";
import "./index.scss";

export const SelectBar = ({ categories, handleSelectBarClick }) => {
  const buttons = categories.map((category, index) => (
    <button
      className="select__button"
      value={category.value}
      onClick={handleSelectBarClick}
      key={index}
    >
      {category.value.toUpperCase()}
    </button>
  ));
  return (
    <div className="select_bar">
      <div className="select_bar_container">{buttons}</div>
    </div>
  );
};
