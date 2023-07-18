import { useState, useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import { getArticles } from "../utils/api";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articleData) => {
      console.log(articleData);
      setArticles(articleData)
    });
  }, []);
  return (
    <section>
      <h1 className="header">
        Welcome to NC News. You are logged in as Hannah.
      </h1>
      <nav>Home Articles</nav>
      {articles.map(({ article_id, article_img_url, title, author }) => {
        return (
          <ArticleCard
            key={article_id}
            title={title}
            author={author}
            article_img_url={article_img_url}
          />
        );
      })}
    </section>
  );
};

export default Articles;
