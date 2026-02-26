import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h2>Karnataka TPO Association</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/members">Members</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;