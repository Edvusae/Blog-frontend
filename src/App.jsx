import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/pages/HomePage';
import PostPage from './components/pages/PostPage';
import './App.css';

const App = () => (
  <div>
    <Header />
    <main className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<PostPage />} />
      </Routes>
    </main>
  </div>
);

export default App;
