// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ClaimHistory from '../Components/ClaimHistory';

// export default function ClaimHistoryPage() {
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     const fetchHistory = async () => {
//       const res = await axios.get('http://localhost:5000/api/claim-history');
//       setHistory(res.data);
//     };
//     fetchHistory();
//   }, []);

//   return (
//     <div>
//       <h2>Claim History</h2>
//       <ClaimHistory history={history} />
//     </div>
//   );
// }
















import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserClaimHistoryModal from '../Components/UserClaimHistoryModal';

export default function ClaimHistoryPage() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userHistory, setUserHistory] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('http://localhost:5000/api/users');
      setUsers(res.data);
    };
    fetchUsers();
  }, []);

  const handleUserClick = async (user) => {
    const res = await axios.get(`http://localhost:5000/api/claim-history/user/${user._id}`);
    setUserHistory(res.data);
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setUserHistory([]);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Claim History</h2>
      <h4>Click a user to view their claim history</h4>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.map(user => (
          <li
            key={user._id}
            onClick={() => handleUserClick(user)}
            style={{ cursor: 'pointer', margin: '10px', fontWeight: 'bold' }}
          >
            {user.name}
          </li>
        ))}
      </ul>

      <UserClaimHistoryModal
        user={selectedUser}
        history={userHistory}
        onClose={closeModal}
      />
    </div>
  );
}
