import React from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div>
      <div className="side_bar_element">
        <Link to="/">
          {" "}
          <span>Home</span>
        </Link>
      </div>
      <div className="side_bar_element">Profile</div>
      <div className="side_bar_element">Trending</div>
    </div>
  );
};
