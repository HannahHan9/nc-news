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
    return data.article;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return ncNews.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchArticleById = (article_id) => {
  if (votes === 0) {
    const patchVote = {
      inc_votes: 1,
    };
  } else {
    const patchVote = {
      inc_votes: -1,
    };
  }
  return ncNews.patch(`/articles/${article_id}`, patchVote).then(({ data }) => {
    return data.article;
  });
};
