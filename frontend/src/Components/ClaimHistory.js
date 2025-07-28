import React from 'react';

export default function ClaimHistory({ history }) {
  return (
    <div>
      <h3>Claim History</h3>
      <ul>
        {history.map((item, i) => (
          <li key={i}>{item.userId.name} claimed {item.points} points at {new Date(item.claimedAt).toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
}
