import React, { Component } from "react";
import { Header } from "../../components/header/Header";
import Search from "../../components/search/Search";
import News from "../../components/news/index";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
        <News />
      </div>
    );
  }
}

export default Home;
