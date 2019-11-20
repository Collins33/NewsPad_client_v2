import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const RouteError = () => (
  <div>
    <h1 className="header__content">
      Oooops Seems the requested page does not exist
    </h1>
    <button className="back_button">
      <Link to="/">Return to homepage</Link>
    </button>
  </div>
);

export default RouteError;
