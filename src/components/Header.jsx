import { Link } from 'react-router-dom';

function Header() {
  {/* This component renders the navigation bar with a link to the home page */}
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Link component for the Home/Blog Title */}
        <Link className="navbar-brand" to="/">
          My Awesome Frontend Blog
        </Link>
        {/* You can adding navigation links here if needed */}
        { <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {/* Link component for the About page */}
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div> }
      </div>
    </nav>
  );
}

{/* Exporting the Header component as the default export of this module */}
export default Header;