import { Link, } from '@tanstack/react-router';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#a0d2eb' }} className="navbar navbar-expand-lg " >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4549/4549811.png"
            alt="Business logo"
            className="footer-icon me-2"
            style={{ width: '38px', height: '38px' }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/order" className="nav-link">
                Order
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar