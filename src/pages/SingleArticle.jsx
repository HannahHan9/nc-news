import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import { useState, useContext, useEffect } from "react";
import Comments from "../components/Comments";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/User";


const SingleArticle = () => {
        const { article_id } = useParams();
        const [singleArticle, setSingleArticle] = useState({});
        const [isLoading, setIsLoading] = useState(true);
        const [error, setError] = useState(null);
        const [commentSubmit, setCommentSubmit] = useState(false);
        const [authorImg, setAuthorImg] = useState("");
        const [voteCount, setVoteCount] = useState(0);
        const [upVoteClicked, setUpVoteClicked] = useState(false);
        const [downVoteClicked, setDownVoteClicked] = useState(false);
        const { user } = useContext(UserContext);

        useEffect(() => {
                getArticleById(article_id)
                        .then((singleArticleData) => {
                                setSingleArticle(singleArticleData);
                                setIsLoading(false);
                        })
                        .catch((err) => {
                                setIsLoading(false);
                                setError(true);
                        });
        }, []);

        if (isLoading) return <p>Loading...</p>;
        if (error) return <p>Sorry, something went wrong...</p>;
        return (
                <section>
                        <img
                                className="article-img"
                                src={singleArticle.article_img_url}
                        />
                        <h1 id="articleTitle" className="header">
                                {singleArticle.title}
                        </h1>
                        <article
                                id="articleBody"
                                key={singleArticle.article_id}
                        >
                                <p id="articleAuthor">
                                        By {singleArticle.author}
                                </p>
                                <p id="articleCreatedAt">
                                        {singleArticle.created_at}
                                </p>
                                <p id="articleBody">{singleArticle.body}</p>
                                <p id="articleVotes">{singleArticle.votes}</p>
                                <p id="articleCommentCount">
                                        {singleArticle.comment_count}
                                </p>
                        </article>
                        <Comments />
                        {/* comment.length  */}
                </section>
        );
};

export default SingleArticle;
