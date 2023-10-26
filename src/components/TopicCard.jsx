import { Link } from "react-router-dom";


const TopicCard = ({ slug, description }) => {
    return (
        <Link to={`/topics/${slug}`}>
            <h2>#{slug}</h2>
            <p>{description}</p>
        </Link>
    );
};

export default TopicCard;
