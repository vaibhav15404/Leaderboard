// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <h2 className="logo">🏁 Leaderboard</h2>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/leaderboard">Leaderboard</Link></li>
//         <li><Link to="/add-user">Add User</Link></li>
//         <li><Link to="/claim-history">Claim History</Link></li>
//       </ul>
//     </nav>
//   );
// }











import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">🏁 Leaderboard</div>

        <ul className="navbar-links">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/leaderboard" onClick={closeMenu}>Leaderboard</Link></li>
          <li><Link to="/add-user" onClick={closeMenu}>Add User</Link></li>
        </ul>

        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </nav>

      {/* Slide-in mobile menu */}
      
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeMenu}>×</button>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/leaderboard" onClick={closeMenu}>Leaderboard</Link>
        <Link to="/add-user" onClick={closeMenu}>Add User</Link>
        <Link to="/claim-history" onClick={closeMenu}>Claim History</Link>
      </div>
    </>
  );
}
