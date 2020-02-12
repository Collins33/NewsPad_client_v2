import React, { Component } from "react";
import Search from "../../components/search/Search";
import News from "../../components/news/index";
import Header from "../../components/header/Header";
class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Search />
        <News />
      </>
    );
  }
}

export default Home;
