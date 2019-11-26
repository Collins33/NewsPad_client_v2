import React from "react";
import "./news.scss";

export const NewsArticle = ({ news, checkNewsImage }) => {
  const displayNews = news.map((story, index) => (
    <div key={index} className="news-card">
      {checkNewsImage(story.urlToImage) ? (
        <img
          src="https://images.unsplash.com/photo-1559526324-c1f275fbfa32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          className="news-image"
          alt="news-images"
        />
      ) : (
        <img src={story.urlToImage} className="news-image" alt="images" />
      )}
      <div>
        <p className="news_author">{story.source.name}</p>
      </div>
      <div className="news_title_container">
        <p className="news_title">{story.title}</p>
      </div>
      <a target="_blank" href={story.url} rel="noopener noreferrer">
        <button className="read__button">Read more >>></button>
      </a>
    </div>
  ));
  return <div className="news_article_container">{displayNews}</div>;
};
