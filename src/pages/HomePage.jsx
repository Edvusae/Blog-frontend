import posts from './data/posts';
import PostCard from './components/PostCard';

function HomePage() {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Map through the posts array and render a PostCard for each one */}
        {posts.map(post => (
          <div className="col-md-6 col-lg-4" key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;