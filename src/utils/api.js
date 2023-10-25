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

export const getTopics = () => {
    return ncNews.get(`/topics`).then(({ data }) => {
        return data.topics;
    });
};
