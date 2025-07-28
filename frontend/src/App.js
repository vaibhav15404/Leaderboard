// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import UserDropdown from './Components/UserDropdown';
// // import ClaimButton from './Components/ClaimButton';
// // import Leaderboard from './Components/Leaderboard';
// // import ClaimHistory from './Components/ClaimHistory';
// // import AddUserForm from './Components/AddUserForm';

// // function App() {
// //   const [users, setUsers] = useState([]);
// //   const [selectedUser, setSelectedUser] = useState('');
// //   const [leaderboard, setLeaderboard] = useState([]);
// //   const [history, setHistory] = useState([]);

// //   const fetchAll = async () => {
// //     const [u, l, h] = await Promise.all([
// //       axios.get('http://localhost:5000/api/users'),
// //       axios.get('http://localhost:5000/api/leaderboard'),
// //       axios.get('http://localhost:5000/api/claim-history'),
// //     ]);
// //     setUsers(u.data);
// //     setLeaderboard(l.data);
// //     setHistory(h.data);
// //   };

// //   useEffect(() => {
// //     fetchAll();
// //   }, []);

// //   return (
// //     <div className="App">
// //       <h1>🏆 Leaderboard</h1>
// //       <AddUserForm refreshUsers={fetchAll} />
// //       <UserDropdown users={users} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
// //       <ClaimButton selectedUser={selectedUser} onClaim={fetchAll} />
// //       <Leaderboard leaderboard={leaderboard} />
// //       <ClaimHistory history={history} />
// //     </div>
// //   );
// // }

// // export default App;































// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import UserDropdown from './Components/UserDropdown';
// import Leaderboard from './Components/Leaderboard';
// import ClaimHistory from './Components/ClaimHistory';
// import AddUserForm from './Components/AddUserForm';
// import ClaimModal from './Components/ClaimModal';

// function App() {
//   const [users, setUsers] = useState([]);
//   const [leaderboard, setLeaderboard] = useState([]);
//   const [history, setHistory] = useState([]);
//   const [modalUser, setModalUser] = useState(null);

//   const fetchAll = async () => {
//     const [u, l, h] = await Promise.all([
//       axios.get('http://localhost:5000/api/users'),
//       axios.get('http://localhost:5000/api/leaderboard'),
//       axios.get('http://localhost:5000/api/claim-history'),
//     ]);
//     setUsers(u.data);
//     setLeaderboard(l.data);
//     setHistory(h.data);
//   };

//   useEffect(() => {
//     fetchAll();
//   }, []);

//   const handleClaim = async (userId) => {
//     await axios.post(`http://localhost:5000/api/claim/${userId}`);
//     setModalUser(null);
//     fetchAll();
//   };

//   return (
//     <div className="App">
//       <h1>🏆 Leaderboard</h1>
//       <AddUserForm refreshUsers={fetchAll} />
//       <Leaderboard leaderboard={leaderboard} onUserClick={setModalUser} />
//       <ClaimHistory history={history} />
//       <ClaimModal user={modalUser} onClose={() => setModalUser(null)} onClaim={handleClaim} />
//     </div>
//   );
// }

// export default App;


























import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LeaderboardPage from './pages/LeaderboardPage';
import AddUserPage from './pages/AddUserPage';
import ClaimHistoryPage from './pages/ClaimHistoryPage';
import Navbar from './Components/Navbar';
import UserHistoryPage from './pages/UserHistoryPage';


function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/add-user" element={<AddUserPage />} />
        <Route path="/history/:userId" element={<UserHistoryPage />} />

      </Routes>
    </Router>
  );
}

export default App;
