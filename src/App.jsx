import "./App.css"
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './features/auth/Login';
import Profile from './features/auth/Profile'; // Your profile component
import RequireAuth from "./features/auth/RequireAuth";
import { useGetCurrentUserQuery } from "./features/auth/authApiSlice";
import RedirectIfLoggedIn from "./features/auth/RedirectIfLoggedIn";
import Feed from "./features/feeds/Feed";
import BlogDetailPage from "./features/blogs/BlogDetailPage";
import LikedBlog from "./features/liked/LikedBlog";
import Comment from "./features/comment/Comment";
import UserProfile from "./features/profile/UserProfile";

function App () {

  useGetCurrentUserQuery();

  // console.log("In app");

  return (
    <Routes>
      {/* Public routes */}
      <Route element={<RedirectIfLoggedIn />}>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Link to="/login" >Login</Link>} />
      </Route>

      {/* Protected routes */}
      <Route element={<RequireAuth />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/liked" element={<LikedBlog />} />
        <Route path="/blogs/:id" element={<BlogDetailPage />} />
        <Route path="/users/:username" element={<UserProfile />} />
        <Route path="/comments/:id" element={<Comment />} />

      </Route>

      {/* Other public or protected routes */}
    </Routes>

  );
}

export default App;
