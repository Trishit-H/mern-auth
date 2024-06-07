require('dotenv').config();
const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connection to database successful');
    } catch (err) {
        console.log(`Error connecting to database: ${err.message}`);
    }
};

module.exports = connectDB;