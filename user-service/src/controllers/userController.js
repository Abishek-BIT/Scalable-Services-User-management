const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { kafkaProducer } = require('../kafka');

const JWT_SECRET = process.env.JWT_SECRET;

exports.registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        if (await User.findOne({ email })) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ username, email, passwordHash: hashedPassword });

        await kafkaProducer('user-registered', { userId: user._id, email });

        res.status(201).json({ message: "User registered successfully", userId: user._id });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

        res.json({ token, userId: user._id });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        res.json(user);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};
