import React, { Component } from "react";
import Search from "../../components/search/Search";
import News from "../../components/news/index";

class Home extends Component {
  render() {
    return (
      <div>
        <Search />
        <News />
      </div>
    );
  }
}

export default Home;
