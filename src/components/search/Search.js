import React from "react";
import "./Search.css";

export const Search = () => {
  return (
    <>
      <div className="search__container">
        <div className="search__generic__field">
          <div className="search__text">Search for a Bike</div>
          <form>
            <input
              placeholder="enter price or type of bike"
              className="search__form"
            />
            <button className="search__button">Search >>></button>
          </form>
        </div>
      </div>
    </>
  );
};
