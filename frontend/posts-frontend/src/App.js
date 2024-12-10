import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import DeletePost from "./components/DeletePost";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
        <Route path="/posts/create" element={<CreatePost />} />
        <Route path="/posts/:postId/edit" element={<EditPost />} />
        <Route path="/posts/:postId/delete" element={<DeletePost />} />
      </Routes>
    </Router>
  );
};

export default App;

