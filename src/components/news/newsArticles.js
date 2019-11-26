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
      <div className="news_title_container">
        <h3 className="news_title">{story.title}</h3>
      </div>
      <a target="_blank" href={story.url} rel="noopener noreferrer">
        <button className="read__button">Read more >>></button>
      </a>
    </div>
  ));
  return <div className="news_article_container">{displayNews}</div>;
};
