import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/shopping">Shopping Assistant</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
