import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");

  const handleClick = () => {};
  return (
    <div className="home">
      <h1>Welcome to NC News. You are logged in as Hannah.</h1>
      <nav></nav>
      <form>
        <label htmlFor="articleInput"></label>
        <input id="usernameInput"></input>
        <button>Search</button>
      </form>
    </div>
  );
};

export default Home;
