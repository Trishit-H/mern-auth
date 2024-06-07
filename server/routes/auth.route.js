const express = require('express');
const {
    handleSignup
} = require('../controllers/auth.controller.js');

const router = express.Router();

router.post('/signup', handleSignup);

module.exports = router;