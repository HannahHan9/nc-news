import { useState } from "react";

const ArticleSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <form htmlFor="search">
        <input type="text" />
        <button>Search</button>
      </form>
    </>
  );
};

export default ArticleSearch;
