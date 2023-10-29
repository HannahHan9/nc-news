import { formatDate } from "../utils/formatDate";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { FaRegCommentDots } from "react-icons/fa6";
import { IconContext } from "react-icons";

const ArticleCard = ({
        article_img_url,
        title,
        author,
        comment_count,
        votes,
        created_at,
        topic,
        article_id,
}) => {
        return (
                <section className="article-card">
                        <div className="image-container">
                                <img
                                        src={article_img_url}
                                        alt={`relevant image for ${title}`}
                                        className="article-img"
                                />
                        </div>
                        <div className="card-header">
                                <h2>{title}</h2>
                                <p>by {author}</p>
                        </div>
                        <div className="card-footer">
                                <div>
                                        <FaRegCommentDots
                                                aria-hidden="true"
                                                focusable="false"
                                        />
                                        {comment_count} Comments
                                </div>
                                <div>
                                        <IconContext.Provider
                                                value={{
                                                        style: {
                                                                fontSize: "1.3em",
                                                        },
                                                }}
                                        >
                                                <HiOutlineArrowsUpDown
                                                        aria-hidden="true"
                                                        focusable="false"
                                                />{" "}
                                                {votes} Votes
                                        </IconContext.Provider>
                                </div>
                                <div>{formatDate(created_at)}</div>
                        </div>
                </section>
        );
};

export default ArticleCard;
