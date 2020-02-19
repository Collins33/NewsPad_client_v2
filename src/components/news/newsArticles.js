import React from "react";
import "./news.scss";

export const NewsArticle = ({
  news,
  checkNewsImage,
  email,
  getSingleNewsArticle
}) => {
  const displayNews = news.map((story, index) => (
    <div className="news-card" key={index}>
      <a target="_blank" href={story.url} rel="noopener noreferrer">
        <div key={index} className="card_parent">
          {checkNewsImage(story.urlToImage) ? (
            <img
              src="https://images.unsplash.com/photo-1559526324-c1f275fbfa32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              className="news-image"
              alt="news-images"
            />
          ) : (
            <img src={story.urlToImage} className="news-image" alt="images" />
          )}

          <div className="content_container">
            <p className="news_author">{story.source.name}</p>
            <div className="news_title_container">
              <p className="news_title">{story.title}</p>
            </div>
          </div>
        </div>
      </a>
      <div
        className="save_news_container"
        onClick={() => getSingleNewsArticle(story)}
      >
        {email ? (
          <button className="save_news_button">Save the Article</button>
        ) : (
          ""
        )}
      </div>
    </div>
  ));
  return <div className="news_article_container">{displayNews}</div>;
};
