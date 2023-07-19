const CommentCard = ({ body, votes, author, created_at }) => {
  return (
    <section>
      <p>{author}</p>
      <p>{created_at}</p>
      <p>{body}</p>
      <p>{votes}</p>
    </section>
  );
};

export default CommentCard;
