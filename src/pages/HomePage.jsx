import posts from './data/posts.js';
import PostCard from './components/PostCard.jsx';


function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;