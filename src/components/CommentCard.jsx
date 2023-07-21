import moment from "moment";
const CommentCard = ({ body, votes, author, created_at }) => {
  const formattedDate = moment(created_at).format("LLL");
  return (
    <section>
      <p>{author}</p>
      <p>{formattedDate}</p>
      <p>{body}</p>
      <p>{votes}</p>
    </section>
  );
};

export default CommentCard;
