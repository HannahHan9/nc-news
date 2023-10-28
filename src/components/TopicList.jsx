import { useState, useEffect } from "react";
import { getTopics } from "../utils/api";
import TopicCard from "./TopicCard";

const TopicList = () => {
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTopics = async () => {
            const res = await getTopics();
            setTopics(res);
            setIsLoading(false);
        };
        fetchTopics();
    }, []);

    if (isLoading) return "is loading";

    return (
        <main>
            <h1>Topics</h1>
            <ul>
                {topics.map((topic) => {
                    return (
                        <li key={topic.slug}>
                            <TopicCard topic={topic} />
                        </li>
                    );
                })}
            </ul>
        </main>
    );
};

export default TopicList;
