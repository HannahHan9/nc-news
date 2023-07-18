import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticleSearch from "./components/ArticleSearch"

function App() {
  return (
    <div>
      <Articles />
    </div>
  );
}

export default App;
