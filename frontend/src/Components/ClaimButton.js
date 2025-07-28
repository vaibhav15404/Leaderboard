import React from 'react';
import axios from 'axios';

export default function ClaimButton({ selectedUser, onClaim }) {
  const handleClaim = async () => {
    const res = await axios.post(`https://leaderboard-0268.onrender.com/api/claim/${selectedUser}`);
    onClaim(res.data);
  };

  return <button onClick={handleClaim} disabled={!selectedUser}>Claim Points</button>;
}
