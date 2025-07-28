// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import TopThree from '../Components/Leaderboard/TopThree';
// import LeaderList from '../Components/Leaderboard/LeaderList';
// import ClaimModal from '../Components/ClaimModal';
// import toast ,{Toaster} from 'react-hot-toast';
// import './LeaderboardPage.css'; // Assuming you have some styles for the leaderboard

// const LeaderboardPage = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [showClaimModal, setShowClaimModal] = useState(false);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     axios.get('http://localhost:5000/api/leaderboard')
//           .then(res => setUsers(res.data))
//           .catch(err => console.error(err));
//   };

//   const handleUserClick = (user) => {
//     setSelectedUser(user);
//     setShowClaimModal(true);
//   };

//   const handleClaimPoints = async (userId) => {
//     await axios.post(`http://localhost:5000/api/claim/${userId}`);
//     fetchUsers(); // Refresh leaderboard
//     setShowClaimModal(false);
//   };


//   const handleDelete = async (userId) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/users/${userId}`);
//       toast.success("User deleted successfully");
//       setSelectedUser(null);
      
//     fetchUsers();  // or reload leaderboard
//     } catch (error) {
//       toast.error("Failed to delete user");
//     }
//   };
  

//   const topThree = users.slice(0, 3);
//   const others = users.slice(3);

//   return (
//     <div className="p-4">
//        <Toaster position="top-right" reverseOrder={false} />
//       <h1 className="text-center text-2xl font-bold mb-6"></h1>
//       <TopThree users={topThree} onUserClick={handleUserClick} />
//       <LeaderList users={others} onUserClick={handleUserClick} />

//       {showClaimModal && (
//         <ClaimModal
//           user={selectedUser}
//           onClose={() => setShowClaimModal(false)}
//           onClaim={() => handleClaimPoints(selectedUser._id)}
//           onDelete={handleDelete} 
//         />
        

//       )}
//     </div>
//   );
// };

// export default LeaderboardPage;













import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TopThree from '../Components/Leaderboard/TopThree';
import LeaderList from '../Components/Leaderboard/LeaderList';
import ClaimModal from '../Components/ClaimModal';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from '../Components/SearchBar';
import './LeaderboardPage.css';

const LeaderboardPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTerm.trim() === '') {
        fetchUsers(); // Load full list
        setIsSearching(false);
      } else {
        fetchSearchResults(searchTerm); // Search
        setIsSearching(true);
      }
    }, 400); // debounce time

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/leaderboard');
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchSearchResults = async (query) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/users/search?query=${query}`);
      console.log("Search results:", res.data); // ← Check if API is hit
      setUsers(res.data);
    } catch (err) {
      console.error("Search error:", err);
    }
  };
  

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setShowClaimModal(true);
  };

  const handleClaimPoints = async (userId) => {
    await axios.post(`http://localhost:5000/api/claim/${userId}`);
    fetchUsers();
    setShowClaimModal(false);
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${userId}`);
      toast.success("User deleted successfully");
      setSelectedUser(null);
      fetchUsers();
    } catch (error) {
      toast.error("Failed to delete user");
    }
  };

  const topThree = isSearching ? [] : users.slice(0, 3); // Show TopThree only on default view
  const others = isSearching ? users : users.slice(3);

  return (
    <div className="p-4">
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className="text-center text-2xl font-bold mb-6">🏆 Leaderboard</h1>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      {!isSearching && <TopThree users={topThree} onUserClick={handleUserClick} />}
      <LeaderList users={others} onUserClick={handleUserClick} />

      {showClaimModal && (
        <ClaimModal
          user={selectedUser}
          onClose={() => setShowClaimModal(false)}
          onClaim={() => handleClaimPoints(selectedUser._id)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default LeaderboardPage;
