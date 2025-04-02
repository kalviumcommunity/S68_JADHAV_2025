const express = require('express');
const cookieParser = require('cookie-parser');
const { generateToken, authenticateUser } = require('../Middleware/authmiddleware');

const arouter = express.Router();

arouter.use(cookieParser());

arouter.post('/login', (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).json({ message: 'Username is required' });
    }

   
    const token = generateToken(username);

   
    res.cookie('token', token, {
        httpOnly: true,   
        secure: true,   
        sameSite: 'Strict',
        maxAge: 24 * 60 * 60 * 1000 
    });

    res.status(200).json({ message: 'Login successful', token });
});

// ✅ Logout Endpoint - Clears Token Cookie
arouter.post('/logout', (req, res) => {
    res.clearCookie('token'); // Clear JWT token
    res.status(200).json({ message: 'Logout successful' });
});

// ✅ Protected Route Example
arouter.get('/profile', authenticateUser, (req, res) => {
    res.json({ message: 'Access granted', user: req.user });
});

module.exports = arouter;
