import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://nc-news-49cb.onrender.com/api",
});

export const getArticles = () => {
  return ncNews.get(`/articles`).then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (article_id) => {
  return ncNews.get(`/articles/${article_id}`).then(({ data }) => {
    console.log(data);
    return data.article;
  });
};
