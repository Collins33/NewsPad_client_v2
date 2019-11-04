import React from "react";

export const NewsArticle = ({ news }) => {
  const displayNews = news.map((story, index) => (
    <div key={index} className="news-card">
      <h1>{story.author}</h1>
      <img src={story.urlToImage} className="news-image" alt="images" />
    </div>
  ));
  return <div className="news-container">{displayNews}</div>;
};
