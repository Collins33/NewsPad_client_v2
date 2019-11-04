import React from "react";
import { Header } from "./components/header/Header";
import { Search } from "./components/search/Search";
import News from "./components/news/index";
function App() {
  return (
    <div>
      <Header />
      <Search />
      <News />
    </div>
  );
}

export default App;
