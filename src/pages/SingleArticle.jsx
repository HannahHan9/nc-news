import { useParams } from "react-router-dom";
import { getArticleById, patchArticleById } from "../utils/api";
import { useState, useEffect } from "react";
import Comments from "../components/Comments";
import moment from "moment";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [vote, setVote] = useState(0);

  useEffect(() => {
    getArticleById(article_id)
      .then((singleArticleData) => {
        setSingleArticle(singleArticleData);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  const handleClick = () => {
    setVote((currVotes) => {
      if (currVotes === 0) {
        return currVotes +1
      } else {
      return currVotes - 1;
      }
    });
    patchArticleById(article_id).catch((err) => {
      setVote((currVotes) => {
        return currVotes - 1;
      });
    });
  };

  if (isLoading) return <p>is Loading...</p>;
  return (
    <section>
      <img id="articleImg" src={singleArticle.article_img_url} />
      <h1 id="articleTitle" className="header">
        {singleArticle.title}
      </h1>

      <article id="articleBody" key={singleArticle.article_id}>
        <p id="articleAuthor">By {singleArticle.author}</p>
        <p id="articleCreatedAt">
          {moment(singleArticle.created_at).format("LLL")}
        </p>
        <p id="articleVotes">Votes: {singleArticle.votes + vote}</p>
        <button onClick={handleClick}>{vote === 0 ? <p>Vote</p> : <p>Undo</p>}</button>
        <p id="articleBody">{singleArticle.body}</p>
        <p id="articleCommentCount">{singleArticle.comment_count}</p>
      </article>
      <Comments />
      {/* comment.length  */}
    </section>
  );
};

export default SingleArticle;
