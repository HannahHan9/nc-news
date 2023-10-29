import { getTopics } from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TopicCard from "../components/TopicCard";
import "../App.css";

const Topics = () => {
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        getTopics()
            .then((topicData) => {
                setTopics(topicData);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                setIsError(true);
                console.log("something is not right", err);
            });
    }, []);
    if (isLoading) {
        return "Loading...";
    } else {
        return (
            <section id="topicsContainer">
                <ul>
                    {topics.map(({ slug, description }) => {
                        return (
                            <li key={slug} className="topic-card">
                                <TopicCard
                                    slug={slug}
                                    description={description}
                                />
                            </li>
                        );
                    })}
                </ul>
            </section>
        );
    }
};
export default Topics;
