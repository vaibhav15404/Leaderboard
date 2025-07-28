import React from 'react';
import axios from 'axios';

export default function ClaimButton({ selectedUser, onClaim }) {
  const handleClaim = async () => {
    const res = await axios.post(`http://localhost:5000/api/claim/${selectedUser}`);
    onClaim(res.data);
  };

  return <button onClick={handleClaim} disabled={!selectedUser}>Claim Points</button>;
}
