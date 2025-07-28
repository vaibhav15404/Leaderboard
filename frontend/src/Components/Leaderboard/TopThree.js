import React from 'react';
import './TopThree.css';

const TopThree = ({ users, onUserClick }) => {
    if (users.length < 3) return null;
  const [first, second, third] = users;

  return (
    <div className="top-three-container">
      <div
        className="top-three-card second"
        onClick={() => onUserClick(second)}
        style={{ cursor: 'pointer' }}
      >
        {/* <img src={second.image} alt="second" /> */}
        <p>#2</p>
        <p>{second.name}</p>
        <span>🔥 {second.totalPoints}</span>
      </div>

      <div
        className="top-three-card first"
        onClick={() => onUserClick(first)}
        style={{ cursor: 'pointer' }}
      >
        {/* <img src={first.image} alt="first" /> */}
        <p>#1</p>
        <p>{first.name}</p>
        <span>🔥 {first.totalPoints}</span>
      </div>

      <div
        className="top-three-card third"
        onClick={() => onUserClick(third)}
        style={{ cursor: 'pointer' }}
      >
        {/* <img src={third.image} alt="third" /> */}
        <p>#3</p>
        <p>{third.name}</p>
        <span>🔥 {third.totalPoints}</span>
      </div>
    </div>
  );
};

export default TopThree;





// import React from 'react';
// import './TopThree.css';
// import leaderboardBG from '../../assets/Leaderboard.png'; // adjust path if needed

// const TopThree = ({ users, onUserClick }) => {
//     if (users.length < 3) return null;
//   const [first, second, third] = users;

//   return (
//     <div className="top-three-wrapper">
//       {/* <img src={leaderboardBG} alt="Top Three Background" className="bg-img" /> */}

//       <div className="user second" onClick={() => onUserClick(second)}>
//         {/* <img src={second.image} alt="second" /> */}
//         <p>{second.name}</p>
//         <span>🔥 {second.totalPoints}</span>
//       </div>

//       <div className="user first" onClick={() => onUserClick(first)}>
//         {/* <img src={first.image} alt="first" /> */}
//         <p>{first.name}</p>
//         <span>🔥 {first.totalPoints}</span>
//       </div>

//       <div className="user third" onClick={() => onUserClick(third)}>
//         {/* <img src={third.image} alt="third" /> */}
//         <p>{third.name}</p>
//         <span>🔥 {third.totalPoints}</span>
//       </div>
//     </div>
//   );
// };

// export default TopThree;
