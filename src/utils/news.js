/**
 * Check if news
 * articles exist
 * return true
 * if array has data
 */
const checkNewsArticles = news => {
  const newsLength = news.length;
  return newsLength >= 1; // either evaluate to true or false
};

export default checkNewsArticles;
