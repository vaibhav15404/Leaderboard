// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function LandingPage() {
//   const navigate = useNavigate();

//   return (
//     <div style={{ textAlign: 'center', marginTop: '10%' }}>
//       <h1>🏁 Welcome to the Leaderboard App</h1>
//       <button onClick={() => navigate('/leaderboard')}>🏆 Leaderboard</button><br /><br />
//       <button onClick={() => navigate('/add-user')}>➕ Add New User</button><br /><br />
//       <button onClick={() => navigate('/claim-history')}>📜 Claim History</button>
//     </div>
//   );
// }





import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-box">
        <h1 className="landing-title">🏁 Welcome to the Leaderboard App</h1>
        <div className="landing-buttons">
          <button onClick={() => navigate('/leaderboard')}>🏆 View Leaderboard</button>
          <button onClick={() => navigate('/add-user')}>➕ Add New User</button>
        </div>
      </div>
    </div>
  );
}
