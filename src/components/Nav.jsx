import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <h2>Welcome to NC News. You are logged in as Hannah.</h2>>
    <nav id="navbar">
      <Link to={"/"}>Home</Link>
      <Link to={"/articles"}>Articles</Link>
    </nav>
  );
};

export default Nav;
