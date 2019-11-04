import React from "react";
import "./news.css";

export const NewsArticle = ({ news }) => {
  const displayNews = news.map((story, index) => (
    <div key={index} className="news-card">
      <div>
        <img src={story.urlToImage} className="news-image" alt="images" />
      </div>

      <div>
        <h1 className="news_author">{story.source.name}</h1>
      </div>
      <button className="search__button">Read more >>></button>
    </div>
  ));
  return <div className="news_article_container">{displayNews}</div>;
};
