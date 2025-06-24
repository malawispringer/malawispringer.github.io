import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav >
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/newsletter">Newsletter</Link>
        </li>
      </ul>
      {/* Add basic styling here or in a separate CSS file */}
      <style jsx>{`
        nav {
          background-color:rgb(214, 172, 223);
          padding: 15px;
          alignItems: right;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          gap: 20px;
        }
        li a {
          text-decoration: none;
          color: #333;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;