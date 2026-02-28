const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const todoRoutes = require('./routes/todos');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected Successfully!'))
  .catch((err) => console.log('Connection Error:', err));

// Routes
app.use('/api/todos', todoRoutes);

app.get('/', (req, res) => {
  res.send('Server is running!');
});

// ✅ IMPORTANT FIX FOR RENDER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});