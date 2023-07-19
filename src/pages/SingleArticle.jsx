import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import { useState, useEffect } from "react";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getArticleById(article_id).then((singleArticleData) => {
      setSingleArticle(singleArticleData);
      setIsLoading(false);
    }).catch((err) => {
    })
  }, []);
  if (isLoading) return <p>is Loading...</p>;
  return (
    <section>
      <img id="articleImg" src={singleArticle.article_img_url} />
      <h1 id="articleTitle" className="header">
        {singleArticle.title}
      </h1>
      <article id="articleBody" key={singleArticle.article_id}>
        <p id="articleAuthor">By {singleArticle.author}</p>
        <p id="articleCreatedAt">{singleArticle.created_at}</p>
        <p id="articleBody">{singleArticle.body}</p>
        <p id="articleVotes">{singleArticle.votes}</p>
        <p id="articleCommentCount">{singleArticle.comment_count}</p>
      </article>
      {/* <Comments />
      comment.length  */}
    </section>
  );
};

export default SingleArticle;
