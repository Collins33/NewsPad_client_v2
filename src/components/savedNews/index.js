import React from "react";

export const SavedNewsArticles = ({ news }) => {
  const displaySavedNews = news.map((article, index) => (
    <div className="saved_news_card" key={index}>
      <div className="saved_news_title">
        <a href={article.url}>
          <h2>{article.title}</h2>
        </a>
      </div>
      <div>
        <img src={article.urlToImage} className="news-image" alt="images" />
      </div>
      <div>{article.source}</div>
    </div>
  ));
  return <div className="saved_news_grid_container">{displaySavedNews}</div>;
};
