import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">THE SPIRITUAL MANAGER</div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/immersion">Immersion</Link>
        <Link to="/assessment">Assessment</Link>
        <a href="#about">About</a>
      </div>
    </nav>
  );
}

export default Navbar;