import React from "react";
import Posts from "../pages/Posts";
import About from "../pages/About";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/posts" element={<Posts />} />
      <Route path="/about" element={<About />} />
      <Route path="/posts/:id" element={<PostIdPage />} />
      <Route path="/*" element={<Navigate to="/posts" />} />
    </Routes>
  );
};

export default AppRouter;
