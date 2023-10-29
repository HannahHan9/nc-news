import { useState, useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import { getArticles } from "../utils/api";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const { topic } = useParams();

    const [dateToggle, setDateToggle] = useState(true);
    const [commentsToggle, setCommentsToggle] = useState(false);
    const [votesToggle, setVotesToggle] = useState(false);
    const navigate = useNavigate();

    const location = useLocation();
    const { pathname } = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const sortBy = searchParams.get("sort_by") || "created_at";
    const order = searchParams.get("order") || "desc";

    useEffect(() => {
        getArticles(topic, sortBy, order)
            .then((articleData) => {
                setArticles(articleData);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                setIsError(true);
                console.log("something is not right", err);
            });
    }, [topic, sortBy, order]);

    const handleClick = (sort) => {
        setDateToggle(sort === "created_at");
        setCommentsToggle(sort === "comment_count");
        setVotesToggle(sort === "votes");
        const newOrder = sortBy === sort && order === "desc" ? "asc" : "desc";
        searchParams.set("sort_by", sort);
        searchParams.set("order", newOrder);
        navigate(`?${searchParams.toString()}`);
    };

    const SortingIcon = ({ toggle, order }) => {
        if (toggle) {
            return order === "desc" ? <FaSortAmountDown /> : <FaSortAmountUp />;
        }
        return null;
    };
    //   CSS

    if (isLoading) {
        return "Loading...";
    } else {
        return (
            <>
                <div>
                    <button onClick={() => handleClick("created_at")}>
                        Date <SortingIcon toggle={dateToggle} order={order} />
                    </button>
                    <button onClick={() => handleClick("comment_count")}>
                        Comments{" "}
                        <SortingIcon toggle={commentsToggle} order={order} />
                    </button>
                    <button onClick={() => handleClick("votes")}>
                        Votes <SortingIcon toggle={votesToggle} order={order} />
                    </button>
                </div>
                <section id="articlesContainer">
                    <ul className="article-grid">
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
                                                article_img_url={
                                                    article_img_url
                                                }
                                                comment_count={comment_count}
                                            />
                                        </Link>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </section>
            </>
        );
    }
};

export default Articles;
