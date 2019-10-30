import React from "react";
import "./Search.css";

export const Search = () => {
  return (
    <>
      <div className="search__container">
        <div className="search__generic__field">
          <div className="search__text">Search for a News Article</div>
          <form>
            <input
              placeholder="enter headline or news source"
              className="search__form"
            />
            <button className="search__button">Search >>></button>
          </form>
        </div>
      </div>
    </>
  );
};
