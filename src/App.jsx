import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header.jsx';
import HomePage from '../pages/HomePage.jsx';
import PostPage from '../pages/PostPage.jsx';
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