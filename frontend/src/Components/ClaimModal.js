// import React from 'react';
// import './ClaimModal.css';

// export default function ClaimModal({ user, onClose, onClaim, onDelete }) {
//   if (!user) return null;

//   return (
//     <div className="modal-backdrop" onClick={onClose}>
//       <div className="modal" onClick={e => e.stopPropagation()}>
//         <h2 className="modal-name">{user.name}</h2>
//         <p className="modal-text">Click below to claim random points or delete user.</p>
//         <div className="modal-actions">
//           <button className="claim-btn" onClick={() => onClaim(user._id)}>🔥 Claim Points</button>
//           <button className="delete-btn" onClick={() => onDelete(user._id)}>🗑️ Delete</button>
//           <button className="close-btn" onClick={onClose}>✖ Close</button>
//         </div>
//       </div>
//     </div>
//   );
// }













// ClaimModal.jsx
import React from 'react';
import './ClaimModal.css';
import { useNavigate } from 'react-router-dom';

export default function ClaimModal({ user, onClose, onClaim, onDelete }) {
  const navigate = useNavigate();

  if (!user) return null;

  const handleViewHistory = () => {
    navigate(`/history/${user._id}`);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2 className="modal-name">{user.name}</h2>
        <p className="modal-text">Click below to claim points, view history, or delete user.</p>
        <div className="modal-actions">
          <button className="claim-btn" onClick={() => onClaim(user._id)}>🔥 Claim Points</button>
          <button className="history-btn" onClick={handleViewHistory}>📜 View History</button>
          <button className="delete-btn" onClick={() => onDelete(user._id)}>🗑️ Delete</button>
          <button className="close-btn" onClick={onClose}>✖ Close</button>
        </div>
      </div>
    </div>
  );
}
