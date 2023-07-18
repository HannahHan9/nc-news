import axios from "axios";

export const getArticles = () => {
  return axios
    .get("https://nc-news-49cb.onrender.com/api/articles")
    .then(({ data }) => {
      return data.articles;
    });
};
