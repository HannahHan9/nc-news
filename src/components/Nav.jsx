import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const Nav = () => {
    return (
        <>
            <nav className="navbar">
                <Link to={"/"}>
                    <AiOutlineHome className="home-image" />
                </Link>
                <Link to={"/topics"}>Topics</Link>
            </nav>
            <h2 className="welcome-message">
                Welcome to NC News. You are logged in as Hannah.
            </h2>
        </>
    );
};

export default Nav;
