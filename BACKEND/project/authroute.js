const express = require('express');
const arouter = express.Router();

// Login Endpoint - Sets a cookie with the username
arouter.post('/login', (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).json({ message: 'Username is required' });
    }

    res.cookie('username', username, { httpOnly: true, secure: true, sameSite: 'Strict' });
    res.status(200).json({ message: 'Login successful' });
});

// Logout Endpoint - Clears the cookie
arouter.post('/logout', (req, res) => {
    res.clearCookie('username');
    res.status(200).json({ message: 'Logout successful' });
});

module.exports = arouter;
