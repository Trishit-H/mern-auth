const express = require('express');
const connectDB = require('./db.js');
const authRouter = require('./routes/auth.route.js');

const app = express();

const PORT = process.env.PORT || 5002;

// middleware to accept json response
app.use(express.json());

// connect to database
connectDB();

// set up api routes
app.use('/api/auth', authRouter)

// error displaying middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error'
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
});

// start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});