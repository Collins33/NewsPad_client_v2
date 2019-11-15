import React from "react";
import { Header } from "./components/header/Header";
import Search from "./components/search/Search";
import News from "./components/news/index";
require("dotenv").config();

function App() {
  return (
    <div className="">
      <Header />
      <Search />
      <News />
    </div>
  );
}

export default App;
