import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './src/components/pages/HomePage';
import PostPage from './pages/PostPage';
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