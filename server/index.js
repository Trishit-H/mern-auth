const express = require('express');
const connectDB = require('./db.js');

const app = express();

const PORT = process.env.PORT || 5002;

// connect to database
connectDB();

// start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});