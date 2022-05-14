const express = require('express');
const router = express.Router();

const { loginClient, registerClient } = require('../controller/client.controller');

router.post('/signup', registerClient)
router.post('/login', loginClient)

module.exports = router