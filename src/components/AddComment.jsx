import { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/User";
import { postComment } from "../api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const AddComment = ({ article_id, setCommentSubmit }) => {
    const [formDisplay, setFormDisplay] = useState(false);
    const { user } = useContext(UserContext);
    const [inputBox, setInputBox] = useState("");
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const [comment, setComment] = useState();

    const handleButtonClick = () => {
        setFormDisplay(true);
    };

    const handleChange = (event) => {
        setInputBox(event.target.value);
        if (
            event.target.value.length >= 1 &&
            event.target.value.length <= 500
        ) {
            setSubmitDisabled(false);
        } else {
            setSubmitDisabled(true);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitDisabled(true);
        setComment(() => {
            return inputBox;
        });
        setInputBox("");
        event.target.reset();
    };

    useEffect(() => {
        const addComment = async (article_id, user, comment) => {
            try {
                await postComment(article_id, user.username, comment);
                toast.success("Comment poasted!");
                setFormDisplay(false);
                setSubmitDisabled(false);
                setCommentSubmit(true);
                setComment(null);
            } catch (err) {
                toast.error("Oops! Something went wrong...");
                setSubmitDisabled(false);
            }
        };
        if (comment) {
            addComment(article_id, user, comment);
        }
    }, [comment, article_id, user, setCommentSubmit]);

    if (!formDisplay)
        return (
            <div>
                <button onClick={handleButtonClick}>Add Comment</button>
            </div>
        );

    if (formDisplay && !user.username)
        return (
            <div>
                Please <Link to="/users">login</Link> to write a comment.
            </div>
        );

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="addcomment">Comment as {user.username}:</label>
            <span>Max 500 characters</span>
            <textarea
                id="addcomment"
                name="comment"
                required
                maxLength={500}
                minLength={1}
                spellCheck="true"
                placeholder="What are your thoughts?"
                onChange={handleChange}
                value={inputBox}
            ></textarea>
            <button type="submit" disabled={submitDisabled}>
                Comment
            </button>
        </form>
    );
};

export default AddComment;
