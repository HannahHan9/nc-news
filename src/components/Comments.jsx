import { useParams } from "react-router-dom";
import { getArticleById, getCommentsByArticleId } from "../utils/api";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";

const Comments = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then((commentsData) => {
        setComments(commentsData);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);
  if (isLoading) {
    return "is loading";
  } else {
    return (
      <section>
        <ul>
          {comments.map(({ body, votes, author, article_id, created_at }) => {
            return (
              <li key={comments.article_id}>
                <CommentCard
                  body={body}
                  votes={votes}
                  author={author}
                  article_id={article_id}
                  created_at={created_at}
                />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
};

export default Comments;
