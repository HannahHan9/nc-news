import { getUsers } from "../utils/api";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/User";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await getUsers();
            setUsers(res);
            setIsLoading(false);
        };
        fetchUsers();
    }, []);

    const handleClick = (event) => {
        const newUserName = event.target.innerText;
        const newUser = users.find((user) => user.username === newUserName);
        setUser(newUser);
        navigate(-1);
    };

    if (isLoading) return <p>is Loading...</p>;

    return (
        <main>
            <div>
                <ul>
                    {users.map((user_option) => {
                        return (
                            <li key={user_option.username}>
                                <button
                                    onClick={handleClick}
                                    disabled={
                                        user.username === user_option.username
                                    }
                                >
                                    {user_option.username}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </main>
    );
};

export default UserLogin;
