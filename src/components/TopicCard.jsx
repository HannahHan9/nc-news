import { Link } from "react-router-dom";

const TopicCard = ({ slug, description }) => {
    return (
        <Link to={`/topics/${slug}`}>
            <div>
                <h2>#{slug}</h2>
                <div>{description}</div>
            </div>
        </Link>
    );
};

export default TopicCard;
