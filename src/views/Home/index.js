import React, { Component } from "react";
import News from "../../components/news/index";
import Header from "../../components/header/Header";
class Home extends Component {
  render() {
    const search = true;
    return (
      <>
        <Header search={search} />
        <News />
      </>
    );
  }
}

export default Home;
