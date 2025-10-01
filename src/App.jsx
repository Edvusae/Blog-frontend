import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';   // FIXED: Uses ./
import Header from './components/Header';       // FIXED: Uses ./
import PostPage from './pages/PostPage';     // FIXED: Uses ./
import './App.css'; 

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<PostPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;