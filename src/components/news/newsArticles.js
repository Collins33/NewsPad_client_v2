import React from "react";
import "./news.scss";

export const NewsArticle = ({ news, checkNewsImage }) => {
  const displayNews = news.map((story, index) => (
    <div key={index} className="news-card">
      {checkNewsImage(story.urlToImage) ? (
        <img
          src="https://images.unsplash.com/photo-1559526324-c1f275fbfa32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          className="news-image"
          alt="images"
        />
      ) : (
        <img src={story.urlToImage} className="news-image" alt="images" />
      )}

      <div>
        <h4 className="news_author">{story.source.name}</h4>
      </div>
      <div>
        <h1>{story.title}</h1>
      </div>
      <button className="search__button">Read more >>></button>
    </div>
  ));
  return <div className="news_article_container">{displayNews}</div>;
};
