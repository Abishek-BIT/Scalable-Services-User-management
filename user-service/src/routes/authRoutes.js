const express = require('express');
const { registerUser, loginUser } = require('../services/authService');

const router = express.Router();

// POST /api/users/register
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await registerUser(name, email, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// POST /api/users/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const { token } = await loginUser(email, password);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
