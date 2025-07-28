const express = require('express');
const router = express.Router();
const User = require('../models/User');
const ClaimHistory = require('../models/ClaimHistory');

// Create user
router.post('/users', async (req, res) => {
  const user = await User.create({ name: req.body.name });
  res.status(201).json(user);
});

// Get all users
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.get("/users/search", async (req, res) => {
    try {
      const query = req.query.query;
  
      const users = await User.find({
        name: { $regex: query, $options: "i" } // case-insensitive match
      });
  
      res.json(users);
    } catch (err) {
      console.error("Search error:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  

// Get a single user by ID
router.get('/users/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
      const user = await User.findById(userId);
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  

// Claim random points
router.post('/claim/:userId', async (req, res) => {
  const { userId } = req.params;
  const randomPoints = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  user.totalPoints += randomPoints;
  await user.save();

  await ClaimHistory.create({ userId, points: randomPoints });

  res.json({ user, randomPoints });
});

// Leaderboard
router.get('/leaderboard', async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  const leaderboard = users.map((user, index) => ({
    _id: user._id, 
    rank: index + 1,
    name: user.name,
    totalPoints: user.totalPoints,
  }));
  res.json(leaderboard);
});

// History
router.get('/claim-history', async (req, res) => {
  const history = await ClaimHistory.find().populate('userId', 'name').sort({ claimedAt: -1 });
  res.json(history);
});


// Get claim history for a specific user
router.get('/claim-history/user/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
      const history = await ClaimHistory.find({ userId }).sort({ claimedAt: -1 });
      res.json(history);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // GET /api/users/search?query=Vaibhav

  

  // Delete user and their claim history
router.delete('/users/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
      // Delete user
      await User.findByIdAndDelete(userId);
      // Delete related claim history
      await ClaimHistory.deleteMany({ userId });
  
      res.status(200).json({ message: 'User and claim history deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  
  


module.exports = router;


