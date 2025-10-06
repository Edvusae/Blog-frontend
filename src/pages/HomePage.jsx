import posts from './data/posts';
import PostCard from './components/PostCard';

function HomePage() {
  {/* This component renders a list of PostCard components based on the posts data */}
  return (
    <div className="container mt-4">
      <div className="row">
        {/* This Will Map through the posts array and render a PostCard for each one */}
        {posts.map(post => (
          <div className="col-md-6 col-lg-4" key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}

{/* Exporting the HomePage component as the default export of this module */}
export default HomePage;