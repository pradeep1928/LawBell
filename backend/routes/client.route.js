const express = require('express');
const router = express.Router();

const { loginClient, registerClient, getClients, updateClient, verifyOtp } = require('../controller/client.controller');
const { authClient } = require("../middleware/authentication")

router.post('/signup', registerClient)
router.post('/verify', verifyOtp)
router.post('/login', loginClient)
router.get('/', authClient, getClients)
router.post('/update/:id', authClient, updateClient)

module.exports = router