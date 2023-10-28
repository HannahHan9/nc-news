import axios from "axios";

const ncNews = axios.create({
    baseURL: "https://nc-news-49cb.onrender.com/api",
});

export const getArticles = async (topic, sortby, order) => {
    const params = {
        sort_by: sortby,
        order: order,
    };
    if (topic) {
        params.topic = topic;
    }
    // if (author) {
    //     params.author = author;
    // }
    const res = await ncNews.get(`/articles`, {
        params: params,
    });
    return res.data.articles;
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

export const getUsers = async () => {
    const res = await ncNews.get(`/users`);
    return res.data.users;
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

export const postComment = async (article_id, username, comment) => {
    const res = await ncNews.post(`/articles/${article_id}/comments`, {
        username: username,
        body: comment,
    });
    return res.data.comment;
};
