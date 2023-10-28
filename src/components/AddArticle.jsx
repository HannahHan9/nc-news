import { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/User";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { postArticle, getTopics } from "../utils/api";

const AddArticle = () => {
    const { user } = useContext(UserContext);
    console.log(user.user);
    const [input, setInput] = useState({
        author: null,
        title: "",
        body: "",
        topic: "",
        article_img_url: "",
    });
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const [article, setArticle] = useState();
    const [topics, setTopics] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInput((prevInput) => {
            return { ...prevInput, [name]: value };
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitDisabled(true);
        setArticle(() => {
            return input;
        });
        event.target.reset();
    };

    useEffect(() => {
        if (
            input.body.length >= 1 &&
            input.body.length <= 3000 &&
            input.title.length >= 1 &&
            input.title.length <= 85 &&
            input.topic !== ""
        ) {
            setSubmitDisabled(false);
        } else {
            setSubmitDisabled(true);
        }
    }, [input]);

    useEffect(() => {
        const addArticle = async (
            author,
            title,
            body,
            topic,
            article_img_url
        ) => {
            try {
                const res = await postArticle(
                    author,
                    title,
                    body,
                    topic,
                    article_img_url
                );
                toast.success("Article poasted!");
                setSubmitDisabled(false);
                setArticle(null);
                setInput({
                    author: null,
                    title: "",
                    body: "",
                    topic: "",
                    article_img_url: "",
                });
                navigate(`/${res.topic}/${res.article_id}`);
            } catch (err) {
                toast.error("Oops! Something went wrong...");
                setSubmitDisabled(false);
            }
        };
        if (article) {
            addArticle(
                user.user,
                article.title,
                article.body,
                article.topic,
                article.article_img_url
            );
        }
    }, [article, navigate, user]);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const res = await getTopics();
                setTopics(res);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
            }
        };
        fetchTopics();
    }, []);

    if (isLoading) {
        return "is loading";
    }

    if (!user.user)
        return (
            <div>
                <p>
                    Please <Link to="/users">login</Link> to post an article.
                </p>
            </div>
        );

    return (
        <main>
            <h1>Post an article</h1>
            <form onSubmit={handleSubmit} />
            <label htmlFor="article-title">Title:</label>
            <span>Max 85 Characters</span>
            <input
                type="text"
                id="article-title"
                name="title"
                required
                maxLength={85}
                minLength={1}
                spellCheck="true"
                placeholder="Title goes here"
                onChange={handleChange}
                value={input.title}
            />
            <label htmlFor="article-body">Article text:</label>
            <span>Max 3000 characters</span>
            <textarea
                id="article-body"
                name="body"
                required
                maxLength={3000}
                minLength={1}
                spellCheck="true"
                placeholder="What's on your  mind?"
                onChange={handleChange}
                value={input.body}
            ></textarea>
            <label htmlFor="article-image">Image URL:</label>
            <span>(Default will be used if none provided)</span>
            <input
                type="url"
                id="article-image"
                name="article_img_url"
                palceholder="Image URL"
                onChange={handleChange}
                value={input.article_img_url}
            />
            <label htmlFor="topic-select">Choose a topic:</label>
            <select
                name="topic"
                id="topic-select"
                value={input.topic}
                onChange={handleChange}
                required
            >
                <option key="" value="">
                    Choose a topic
                </option>
                {topics.map((topic) => {
                    return (
                        <option key={topic.slug} value={topic.slug}>
                            {topic.slug}
                        </option>
                    );
                })}
            </select>
            <button type="submit" disabled={submitDisabled}>
                Post Article
            </button>
        </main>
    );
};

export default AddArticle;
