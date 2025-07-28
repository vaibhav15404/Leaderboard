// import React from 'react';
// import './ClaimModal.css'; // Reuse same styling as ClaimModal

// export default function UserClaimHistoryModal({ user, history, onClose }) {
//   if (!user) return null;

//   return (
//     <div className="modal-backdrop">
//       <div className="modal">
//         <h2>{user.name}'s Claim History</h2>
//         {history.length > 0 ? (
//           <table style={{ width: '100%', marginTop: '1rem' }}>
//             <thead>
//               <tr>
//                 <th>Points</th>
//                 <th>Claimed At</th>
//               </tr>
//             </thead>
//             <tbody>
//               {history.map((h, i) => (
//                 <tr key={i}>
//                   <td>{h.points}</td>
//                   <td>{new Date(h.claimedAt).toLocaleString()}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No history found for this user.</p>
//         )}
//         <button className="close-btn" onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// }














