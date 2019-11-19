import React from "react";
import Home from "./views/Home/index";
import { Route } from "react-router-dom";
require("dotenv").config();

function App() {
  return (
    <switch>
      <div>
        <Route path="/" component={Home} exact />
      </div>
    </switch>
  );
}

export default App;
