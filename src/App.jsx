// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
// All paths must start with './' to look inside the src directory
import Header from './components/Header';   
import HomePage from './pages/HomePage';     
import PostPage from './pages/PostPage';     
import CreatePostPage from './pages/CreatePostPage'; 
import './App.css'; 

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePostPage />} />
          <Route path="/posts/:id" element={<PostPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;