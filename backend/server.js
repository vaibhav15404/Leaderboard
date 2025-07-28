const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);

// mongoose.connect('mongodb://localhost:27017/leaderboardDB')
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error(err));


require('dotenv').config(); // at the top
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));


app.listen(5000, () => console.log('Server started on port 5000'));
