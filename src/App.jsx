import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';   // CORRECTED path
import HomePage from '.';     // CORRECTED path
import PostPage from './pages/PostPage';     // CORRECTED path
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