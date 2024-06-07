const express = require('express');
const connectDB = require('./db.js');

const app = express();

const PORT = process.env.PORT || 5002;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        })
    }).catch(err => {
        console.log(`Failed to start server due to database connection error: ${err}`)
    });