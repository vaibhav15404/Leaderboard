import React from 'react';
import './LeaderList.css';

const LeaderList = ({ users, onUserClick }) => {
  return (
    <div className="leader-list">
      {users.map((user, index) => (
        <div
          key={user._id}
          className={`leader-list-item ${index % 2 === 0 ? 'even' : 'odd'}`}
        >
          <div
            className="leader-content"
            onClick={() => onUserClick(user)}
            style={{ cursor: 'pointer' }}
          >
            <div className="leader-rank">#{index + 4}</div>
            <div className="leader-name">{user.name}</div>
            <div className="leader-points">🔥 {user.totalPoints}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeaderList;
