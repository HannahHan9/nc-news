

const ArticleCard = ({article_img_url, title, author}) => {
    return (
        <section className="article-card">
            <img src={article_img_url} alt={`relevant image for ${title}`} />
            <h2>{title}</h2>
            <p>{author}</p>
            
        </section>

    )
}

export default ArticleCard;