import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

const Menu = ({ open, setOpen }) => {
    const { user, setUser } = useContext(UserContext);

    const handleLogoutClick = () => {
        setUser({});
        setOpen(false);
    };

    return (
        <nav open={open}>
            <ul open={open}>
                <Link to="/newarticle">
                    <li>Post an article</li>
                </Link>
                <Link to="/topics">
                    <li>Topics</li>
                </Link>
                {user.username ? (
                    <div>
                        <Link to={`/authors/${user.username}`}>
                            <li>View your articles</li>
                        </Link>
                        <li onClick={handleLogoutClick}>
                            <div>Logout</div>
                        </li>
                    </div>
                ) : (
                    <div>
                        <li>
                            <Link to="/users">Login</Link>
                        </li>
                    </div>
                )}
            </ul>
        </nav>
    );
};

export default Menu;
