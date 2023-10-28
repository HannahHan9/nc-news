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
                <Link to={"/newarticle"}>Post an article</Link>
                <Link to={"/users"}>Login</Link>
            </nav>
        </>
    );
};

export default Nav;
