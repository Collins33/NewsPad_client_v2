import React, { Component } from "react";
import News from "../../components/news/index";
import Header from "../../components/header/Header";
class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <News />
      </>
    );
  }
}

export default Home;
