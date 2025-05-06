// src/app.js

// Load environment variables
const dotenv = require('dotenv');
dotenv.config(); // This MUST come before any use of process.env

// Debug Mongo URI
console.log("Mongo URI:", process.env.MONGO_URI);

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/authRoutes'); // Adjust path if necessary

// Create Express app
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/yourDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ MongoDB connected');
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

// Routes
app.use('/api/users', userRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
