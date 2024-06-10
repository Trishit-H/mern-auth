const User = require('../models/user.model.js');
const bcryptjs = require('bcryptjs');
const customErrorHandler = require('../utils/customError.js');

async function handleSignup(req, res, next) {
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
        next(err)
    }
};



async function handleSignin() {
    const { email, password } = req.body;

    try {
        // check if an user exist with the email provided
        const validUser = await User.findOne({ email });

        // if not then return an error as response using the custoom error handler function and the error middleware
        if (!validUser) {
            return next(customErrorHandler(404, 'Invalid Credentials!'))
        }

        // if the email is valid then we check the password
        const isPasswordValid = await bcryptjs.compareSync(password, validUser.password);

        // if password is not correct we return an error
        if (!isPasswordValid) {
            return next(customErrorHandlder(401, 'Invalid Credentials!'))
        }


    } catch (err) {
        next(err)
    }
}


module.exports = {
    handleSignup,
    handleSignin
};