// import React, { useState } from 'react';
// import axios from 'axios';

// export default function AddUserPage() {
//   const [name, setName] = useState('');

//   const handleAdd = async () => {
//     if (!name) return alert('Please enter a name');
//     await axios.post('http://localhost:5000/api/users', { name });
//     alert('User added!');
//     setName('');
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '5%' }}>
//       <h2>Add New User</h2>
//       <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter name" />
//       <button onClick={handleAdd}>Add</button>
//     </div>
//   );
// }









import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './AddUserPage.css';

export default function AddUserPage({ refreshUsers }) {
  const [name, setName] = useState('');
  const navigate = useNavigate();

//   const handleAdd = async () => {
//     if (!name.trim()) {
//       toast.error("Name can't be empty");
//       return;
//     }

//     try {
//       await axios.post('http://localhost:5000/api/users', { name });
//       toast.success('User added successfully!');
//       setName('');
//       refreshUsers();
//       setTimeout(() => navigate('/leaderboard'), 1000); // delay to allow toast to show
//     } catch (error) {
//       toast.error('Failed to add user');
//     }
//   };


const handleAdd = async () => {
    if (!name.trim()) {
      toast.error("Name can't be empty");
      return;
    }
  
    try {
      await axios.post('https://leaderboard-0268.onrender.com/api/users', { name });
      toast.success('User added successfully!');
      setName('');
      
      try {
        refreshUsers();
      } catch (e) {
        console.warn("Refresh failed", e);
      }
  
      setTimeout(() => navigate('/leaderboard'), 1000);
    } catch (error) {
      toast.error('Failed to add user');
    }
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="add-user-container">
      <Toaster position="top-right" />
      <input
        type="text"
        placeholder="Enter user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
        className="user-input"
      />
      <button onClick={handleAdd} className="add-user-btn">Add User</button>
    </div>
  );
}
