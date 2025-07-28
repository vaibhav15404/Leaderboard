// pages/UserHistoryPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserHistoryPage.css';
import { useParams, Link } from 'react-router-dom';

const UserHistoryPage = () => {
  const { userId } = useParams();
  const [history, setHistory] = useState([]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    fetchHistory();
  }, []);

//   const fetchHistory = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/claim-history/user/${userId}`);
//       setHistory(res.data);
//       if (res.data.length > 0) {
//         const userInfo = await axios.get(`http://localhost:5000/api/users/${userId}`);
//         setUserName(userInfo.data.name);
//       }
//     } catch (err) {
//       console.error('Error fetching history:', err);
//     }
//   };

const fetchHistory = async () => {
    try {
      // Fetch history regardless
      const historyRes = await axios.get(`https://leaderboard-0268.onrender.com/api/claim-history/user/${userId}`);
      setHistory(historyRes.data);
  
      // Always fetch user info separately
      const userRes = await axios.get(`https://leaderboard-0268.onrender.com/api/users/${userId}`);
      setUserName(userRes.data.name);
      
    } catch (err) {
      console.error('Error fetching history or user:', err);
    }
  };
  


  return (
    <div className="history-container">
      <h2>{userName ? `${userName}'s Claim History` : 'Claim History'}</h2>
      <Link to="/leaderboard" className="back-btn">← Back to Leaderboard</Link>
      <table className="history-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Points</th>
            <th>Claimed At</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry, index) => (
            <tr key={entry._id}>
              <td>{index + 1}</td>
              <td>🔥 {entry.points}</td>
              <td>{new Date(entry.claimedAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {history.length === 0 && <p className="no-history">No claim history available.</p>}
    </div>
  );
};

export default UserHistoryPage;
