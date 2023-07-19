import { useState, useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import { getArticles } from "../utils/api";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getArticles()
      .then((articleData) => {
        setArticles(articleData);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        console.log("something is not right", err);
      });
  }, []);
  if (isLoading) {
    return "is loading";
  } else {
    return (
      <section id="articlesContainer">
        <ul>
          {articles.map(
            ({
              article_id,
              article_img_url,
              title,
              author,
              topic,
              created_at,
              votes,
              comment_count,
            }) => {
              return (
                <li key={article_id}>
                  <Link to={`/articles/${article_id}`}>
                    <ArticleCard
                      title={title}
                      author={author}
                      topic={topic}
                      created_at={created_at}
                      votes={votes}
                      article_img_url={article_img_url}
                      comment_count={comment_count}
                    />
                  </Link>
                </li>
              );
            }
          )}
        </ul>
      </section>
    );
  }
};

export default Articles;
