const express = require('express');
const router = express.Router();

const { loginClient, registerClient, getClients, updateClient, verifyOtp } = require('../controller/client.controller');

router.post('/signup', registerClient)
router.post('/verify', verifyOtp)
router.post('/login', loginClient)
router.get('/', getClients)
router.post('/update/:id', updateClient)

module.exports = router