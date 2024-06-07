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

// start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});