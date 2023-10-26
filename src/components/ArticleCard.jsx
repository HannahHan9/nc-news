const ArticleCard = ({
    article_img_url,
    title,
    author,
    comment_count,
    votes,
    created_at,
}) => {
    return (
        <section className="article-card">
            <img src={article_img_url} alt={`relevant image for ${title}`} />
            <h2>{title}</h2>
            <p>by {author}</p>
            <p>{comment_count} Comments </p>
            <p>{votes} Votes</p>
            <p>{created_at}</p>
        </section>
    );
};

export default ArticleCard;
