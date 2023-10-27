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

export const postArticle = async (
    author,
    title,
    body,
    topic,
    article_img_url
) => {
    const res = await ncNews.post(`/articles/`, {
        author: author,
        title: title,
        body: body,
        topic: topic,
        article_img_url: article_img_url,
    });
    return res.data.article;
};
