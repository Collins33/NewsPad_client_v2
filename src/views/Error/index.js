import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const RouteError = () => (
  <div className="error_page_container">
    <h1 className="header__content">
      Looks like the page you were looking for is no longer here.
    </h1>
    <button className="back_button">
      <Link to="/">Return to homepage</Link>
    </button>
  </div>
);

export default RouteError;
