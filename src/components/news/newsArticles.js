import React from "react";
import "./news.scss";

export const NewsArticle = ({
  news,
  checkNewsImage,
  email,
  getSingleNewsArticle,
  userLoginEmail
}) => {
  const displayNews = news.map((story, index) => (
    <div className="news-card" key={index}>
      <div className="image_container">
        {checkNewsImage(story.urlToImage) ? (
          <img
            src="https://images.unsplash.com/photo-1559526324-c1f275fbfa32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            className="news-image"
            alt="news-images"
          />
        ) : (
          <img src={story.urlToImage} className="news-image" alt="images" />
        )}
      </div>
      <div className="news_source_container">{story.source.name}</div>
      <div className="news_article_description_container">
        <a href={story.url}>{story.title}</a>
      </div>
      {userLoginEmail || email ? (
        <div className="tooltip">
          <h2>...</h2>
          <span
            className="tooltiptext"
            onClick={() => getSingleNewsArticle(story)}
          >
            save article
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  ));
  return <div className="news_article_container">{displayNews}</div>;
};
