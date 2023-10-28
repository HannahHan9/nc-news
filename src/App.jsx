import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Articles from "./pages/Articles";
import SingleArticle from "./pages/SingleArticle";
import Topics from "./pages/Topics";
import AddArticle from "./components/AddArticle";
import UserLogin from "./components/UserLogin";

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
                <Route path="newarticle" element={<AddArticle />} />
                <Route path="/users" element={<UserLogin />} />
                <Route path="/topics/:topic" element={<Articles />} />
            </Routes>
        </div>
    );
}

export default App;
