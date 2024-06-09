const User = require('../models/user.model.js');
const bcryptjs = require('bcryptjs');

async function handleSignup(req, res) {
    const { username, email, password } = req.body;

    try {
        // hash the password
        const hashedPassword = await bcryptjs.hashSync(password, 10);

        // create a new user using the hashed password
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        // save the user to database
        await newUser.save();

        // send response if user is created successfully
        res.status(201).json({
            success: true,
            msg: 'User created successfully',
            data: newUser
        });
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
};

module.exports = {
    handleSignup
};