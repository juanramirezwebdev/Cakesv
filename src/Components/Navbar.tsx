import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import '../index.css'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-blue-200 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4549/4549811.png"
            alt="Business logo"
            className="footer-icon me-2"
            style={{ width: '38px', height: '38px' }}
          />
          <span className="text-xl font-bold text-gray-800">Vr Cakes</span>
        </Link>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden block text-gray-800 focus:outline-none"
          type="button"
          onClick={handleToggle}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`lg:flex items-center justify-center lg:w-auto ${isNavOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row list-none">
            <li className="nav-item">
              <Link to="/" className="nav-link"> {/* Removed inline styles */}
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/order" className="nav-link">
                Order
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
