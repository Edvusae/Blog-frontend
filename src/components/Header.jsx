import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Link component for the Home/Blog Title */}
        <Link className="navbar-brand" to="/">
          My Awesome Frontend Blog
        </Link>
        
        {/* You can add navigation links here if needed */}
        {/* <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
}

export default Header;