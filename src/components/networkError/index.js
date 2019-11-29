import React from "react";
import "./index.scss";

export const NetworkError = () => {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="container_network_error">
      <span className="connection_text">Looks like you lost connection</span>
      <button className="button_refresh" onClick={refreshPage}>
        Try again
      </button>
    </div>
  );
};
