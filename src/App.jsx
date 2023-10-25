import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Articles from "./pages/Articles";
import SingleArticle from "./pages/SingleArticle";
import Topics from "./pages/Topics";

function App() {
    return (
        <div className="App">
            <Nav />
            <Routes>
                <Route path="/" element={<Articles />} />
                <Route path="/topics" element={<Topics />} />
                <Route
                    path="/articles/:article_id"
                    element={<SingleArticle />}
                />
            </Routes>
        </div>
    );
}

export default App;
